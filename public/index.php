<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Matt Banner - Developer</title>
        <meta name="description" content="Matt Banner is a Backend Web Developer based in Essex, using Laravel and Craft CMS.">
        <meta name="keywords" content="">
        <meta name="author" content="Matt Banner">

        <link rel="icon" href="image/favicon.png">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.0.5/tailwind.min.css">
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/modal.css">
        <link rel="stylesheet" href="css/theme.css">

        <?php include "../include/environment.php" ?>

        <?php
            if($site_environment == "production")
            {
                include "../include/tag-manager-head.php";
            }
            elseif($site_environment == "staging"  or $site_environment == "development")
            {
                echo "<!-- TAG MANAGER RUNS HERE IN PRODUCTION -->";
            }
            else
            {
                echo "<!-- ENVIRONMENT NOT SET -->";
            }
        ?>


    </head>

    <body class="antialiased text-gray-900 leading-normal tracking-wider bg-cover background">

        <?php
        if($site_environment == "production")
        {
            include "../include/tag-manager-body.php";
        }
        elseif($site_environment == "staging"  or $site_environment == "development")
        {
            echo "<!-- TAG MANAGER RUNS HERE IN PRODUCTION -->";
        }
        else
        {
            echo "<!-- ENVIRONMENT NOT SET -->";
        }
        ?>


        <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-8 lg:my-0">
            <div id="profile" class="w-full lg:w-3/5 rounded-lg shadow-2xl bg-white opacity-100 mx-2 lg:mx-auto">
                <div class="p-5 md:p-10 text-center lg:text-left">

                    <?php
                        $gravatar_url = "https://www.gravatar.com/avatar/" . md5(strtolower(trim( "matt@banner.wtf"))) . "?d=mp&s=500";
                    ?>

                    <img src="<?php echo $gravatar_url ?>" class="block rounded-full mx-auto sm:mt-6 mt-4 h-48 w-48 bg-cover bg-center" alt="Matt Banner Emojis">

                    <h1 class="text-3xl font-bold pt-8 lg:pt-4">Matt Banner</h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 theme-item opacity-75"></div>

                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><i class="fas fa-briefcase theme-item"></i> &nbsp; Web Developer</p>
                    <p class="pt-2 text-gray-800 flex items-center justify-center lg:justify-start"><i class="fas fa-globe-europe theme-item"></i> &nbsp; Essex, United Kingdom</p>

                    <p class="pt-8 text-sm">Hi, I'm a Web Developer based in Essex. Working on the backend for <a href="https://enovate.co.uk" target="_blank" rel="noreferrer">Enovate</a>.</p>
                    <p class="pt-8 text-gray-800 text-sm">Building with Laravel, Craft CMS, Sass, Twig, Docker, Vue.js, MySQL &amp; Git.</p>

                    <div class="pt-12 pb-8">
                        <a class="theme-button text-white font-bold py-2 px-4 rounded-full" href="mailto:matt@banner.wtf">Get In Touch</a>
                    </div>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                        <a href="https://github.com/mattsbanner" target="_blank" aria-label="GitHub" rel="noreferrer"><i class="fab fa-github fa-lg"></i></a>
                        <a href="https://codepen.io/mattsbanner" target="_blank" aria-label="Codepen" rel="noreferrer"><i class="fab fa-codepen fa-lg"></i></a>
                        <a href="https://hub.docker.com/u/mattbanner" target="_blank" aria-label="DockerHub" rel="noreferrer"><i class="fab fa-docker fa-lg"></i></a>
                        <a href="https://linkedin.com/in/mattbanner" target="_blank" aria-label="LinkedIn" rel="noreferrer"><i class="fab fa-linkedin fa-lg"></i></a>
                    </div>
                    
                </div>
                <div>
                    <p class="text-gray-800 text-xs text-center">
                        <a class="privacy-modal-open" href="">Privacy</a>
                    </p>
                    <br>
                </div>
            </div>
        </div>
        <?php include "../include/privacy-modal.php" ?>
        <script src="js/privacy-modal.js"></script>
    </body>
</html>
