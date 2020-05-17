<?php
namespace Deployer;

require 'recipe/common.php';
require 'deployer/sentry.php';

// Project name
set('application', 'mattbanner.co.uk');

// Project repository
set('repository', 'git@github.com:mattsbanner/mattbanner.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false);

// Laravel shared dirs
set('shared_dirs', [
    'storage',
]);

// Laravel shared file
set('shared_files', [
    '.env',
]);

// Writable dirs by web server
set('writable_dirs', [
    'bootstrap/cache',
    'storage',
    'storage/app',
    'storage/app/public',
    'storage/framework',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
]);

set('laravel_version', function () {
    $result = run('cd {{release_path}} && {{bin/php}} artisan --version');

    preg_match_all('/(\d+\.?)+/', $result, $matches);

    $version = $matches[0][0] ?? 5.5;

    return $version;
});

set('sentry', [
    'organization' => 'matt-banner',
    'projects' => ['mattbannercouk'],
    'token' => 'f47d63b4de7e4eb28873d9d5963d2d62ad9ab492e2dc469ab2dd726673e598e8',
]);

/////////////////////////////////////////////////
/// Helper Tasks
/////////////////////////////////////////////////

desc('Disable maintenance mode');
task('artisan:up', function () {
    $output = run('if [ -f {{deploy_path}}/current/artisan ]; then {{bin/php}} {{deploy_path}}/current/artisan up; fi');
    writeln('<info>' . $output . '</info>');
});

desc('Enable maintenance mode');
task('artisan:down', function () {
    $output = run('if [ -f {{deploy_path}}/current/artisan ]; then {{bin/php}} {{deploy_path}}/current/artisan down; fi');
    writeln('<info>' . $output . '</info>');
});

desc('Execute artisan migrate');
task('artisan:migrate', function () {
    run('{{bin/php}} {{release_path}}/artisan migrate --force');
})->once();

desc('Execute artisan migrate:fresh');
task('artisan:migrate:fresh', function () {
    run('{{bin/php}} {{release_path}}/artisan migrate:fresh --force');
});

desc('Execute artisan migrate:rollback');
task('artisan:migrate:rollback', function () {
    $output = run('{{bin/php}} {{release_path}}/artisan migrate:rollback --force');
    writeln('<info>' . $output . '</info>');
});

desc('Execute artisan cache:clear');
task('artisan:cache:clear', function () {
    run('{{bin/php}} {{release_path}}/artisan cache:clear');
});

desc('Execute artisan config:cache');
task('artisan:config:cache', function () {
    run('{{bin/php}} {{release_path}}/artisan config:cache');
});

desc('Execute artisan route:cache');
task('artisan:route:cache', function () {
    run('{{bin/php}} {{release_path}}/artisan route:cache');
});

desc('Execute artisan optimize');
task('artisan:optimize', function () {
    run('{{bin/php}} {{release_path}}/artisan optimize');
});

desc('Execute artisan queue:restart');
task('artisan:queue:restart', function () {
    run('{{bin/php}} {{release_path}}/artisan queue:restart');
});

desc('Execute artisan storage:link');
task('artisan:storage:link', function () {
    $needsVersion = 5.3;
    $currentVersion = get('laravel_version');

    if (version_compare($currentVersion, $needsVersion, '>=')) {
        run('{{bin/php}} {{release_path}}/artisan storage:link');
    }
});

desc('Make symlink for public disk');
task('deploy:public_disk', function () {
    // Remove from source.
    run('if [ -d $(echo {{release_path}}/public/storage) ]; then rm -rf {{release_path}}/public/storage; fi');

    // Create shared dir if it does not exist.
    run('mkdir -p {{deploy_path}}/shared/storage/app/public');

    // Symlink shared dir to release dir
    run('{{bin/symlink}} {{deploy_path}}/shared/storage/app/public {{release_path}}/public/storage');
});

task('deploy:upload', function () {
    upload(__DIR__ . "/public/dist/", '{{release_path}}/public/dist/');
    upload(__DIR__ . "/public/mix-manifest.json", '{{release_path}}/public/mix-manifest.json');
});

/////////////////////////////////////////////////
/// Hosts Declaration
/////////////////////////////////////////////////

// Production Server(s)
host('mattbanner.co.uk')
    ->set('deploy_path', '/sites/{{application}}')
    ->set('branch', 'master')
    ->stage('production')
    ->user('ubuntu');

// Staging Server
host('svr06.local.banner.wtf')
    ->set('deploy_path', '/sites/{{application}}')
    ->set('branch', 'develop')
    ->stage('staging')
    ->user('ubuntu');

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'deploy:upload',
    'artisan:optimize',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);

/////////////////////////////////////////////////
/// After & Before Jobs
/////////////////////////////////////////////////

// If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.
before('deploy:symlink', 'artisan:migrate');

after('deploy', 'success');

// Send sentry message on Deploy
after('deploy', 'deploy:sentry');
