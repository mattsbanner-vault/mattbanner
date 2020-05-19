@extends('layouts.app')

@section('content')

    {{-- About --}}
    @component('components.generic.section')

        @slot('title')
            About
        @endslot

        @slot('content')
            <p>Hi I'm Matt &#128075; a Web Developer based in Essex. Building with HTML, CSS, PHP, Laravel, Craft CMS, Sass, Twig, Docker, Vue.js, MySQL, & Git. Maintaining and hosting at AWS.</p>

            <p>Currently working on the backend for <a class="hover:text-blue-800 transition-fade" rel="noopener" target="_blank" href="https://enovate.co.uk">Enovate</a>, a web design and development agency in Chelmsford, Essex.</p>

            <ul class="pt-6 text-2xl">

                <li class="inline pr-4 transition-fade hover:text-blue-800">
                    <a target="_blank" href="{{ App\Enums\SocialsEnum::GITHUB }}" aria-label="GitHub" rel="noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                </li>

                <li class="inline pr-4 transition-fade hover:text-blue-800">
                    <a target="_blank" href="{{ App\Enums\SocialsEnum::GITLAB }}" aria-label="GitLab" rel="noreferrer">
                        <i class="fab fa-gitlab"></i>
                    </a>
                </li>

                <li class="inline pr-4 transition-fade hover:text-blue-800">
                    <a target="_blank" href="{{ App\Enums\SocialsEnum::DOCKER_HUB }}" aria-label="DockerHub" rel="noreferrer">
                        <i class="fab fa-docker"></i>
                    </a>
                </li>

                <li class="inline pr-4 transition-fade hover:text-blue-800">
                    <a target="_blank" href="{{ App\Enums\SocialsEnum::CODEPEN }}" aria-label="CodePen" rel="noreferrer">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>

                <li class="inline pr-4 transition-fade hover:text-blue-800">
                    <a target="_blank" href="{{ App\Enums\SocialsEnum::LINKED_IN }}" aria-label="LinkedIn" rel="noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>

            </ul>

        @endslot

    @endcomponent

@endsection
