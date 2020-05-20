<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Matt Banner | Web Developer</title>
        <meta name="description" content="Matt Banner is a Web Developer based in Essex. Working with HTML, CSS, PHP, Laravel, Craft CMS, Vue.js, Docker & AWS.">
        <meta name="keywords" content="web developer,laravel developer,essex developer,london developer,php developer,docker,craft developer,craft cms developer,aws engineer">
        <meta name="author" content="Matt Banner">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="{{ asset('dist/css/fonts.css') }}" rel="prefetch" as="style">
        <link href="{{ asset('dist/css/app.css') }}" rel="stylesheet">

        <script src="{{ asset('dist/js/app.js') }}" ></script>

        @if (config('recaptcha.site_key') !== null && config('recaptcha.secret_key') !== null)
            <script src="https://www.google.com/recaptcha/api.js?render={{ config('recaptcha.site_key') }}"></script>
            <script>
                grecaptcha.ready(function () {
                    grecaptcha.execute('{{ config('recaptcha.site_key') }}', { action: 'contact' }).then(function (token) {
                        var recaptchaResponse = document.getElementById('recaptchaResponse');
                        recaptchaResponse.value = token;
                    });
                });
            </script>
        @endif

        <link rel="dns-prefetch" href="https://www.google-analytics.com" >
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" >

        <script> {{-- TODO: Get this in the Laravel Mix build --}}
            function toggleMenu() {
                var element = document.getElementById("menu");
                element.classList.toggle("hidden");
            }
        </script>

        @if(config('app.env') == 'production')
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PFZ3Z83');
            </script>
        @endif

    </head>

    <body class="min-h-screen flex flex-col">

        @if(config('app.env') == 'production')
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PFZ3Z83"
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden">
                </iframe>
            </noscript>
        @endif

        <div id="app" class="flex-grow">

            {{-- Navigation --}}
            @include('components.navigation.main')

            <main>
                {{-- "Masthead" --}}
                @component('components.generic.masthead')

                    @slot('title')
                        {{ config('app.name' ?? '') }}
                    @endslot

                @endcomponent

                @yield('content')
            </main>

        </div>

        @include('components.footer.main')

    </body>
</html>
