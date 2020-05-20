const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Copy over Font Awesome fonts
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/dist/fonts/font-awesome');

mix.js('resources/js/app.js', 'public/dist/js')
    .sass('resources/sass/app.scss', 'public/dist/css')
    .sass('resources/sass/fonts.scss', 'public/dist/css')
        .options({
            processCssUrls: false,
            postCss: [ tailwindcss('./tailwind.config.js') ],
          })
    .purgeCss({
        whitelist: [
            'grecaptcha-badge',
        ]
    });

if (mix.inProduction()) {
    mix.version();
}
