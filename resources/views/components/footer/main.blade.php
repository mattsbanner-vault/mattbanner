<footer>
    <div class="w-full h-20 md:h-12 bg-blue-900 text-white">
        <div class="flex flex-wrap h-full text-center">

            <div class="w-full md:w-1/2 social-icons mt-2 md:my-2 md:text-left">

                    <ul class="text-center md:text-left">
                        <li class="inline pr-2">
                            <a target="_blank" href="{{ App\Enums\SocialsEnum::GITHUB }}" aria-label="GitHub" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>

                        <li class="inline pr-2">
                            <a target="_blank" href="{{ App\Enums\SocialsEnum::GITLAB }}" aria-label="GitLab" rel="noreferrer">
                                <i class="fab fa-gitlab"></i>
                            </a>
                        </li>

                        <li class="inline pr-2">
                            <a target="_blank" href="{{ App\Enums\SocialsEnum::DOCKER_HUB }}" aria-label="DockerHub" rel="noreferrer">
                                <i class="fab fa-docker"></i>
                            </a>
                        </li>

                        <li class="inline pr-2">
                            <a target="_blank" href="{{ App\Enums\SocialsEnum::CODEPEN }}" aria-label="CodePen" rel="noreferrer">
                                <i class="fab fa-codepen"></i>
                            </a>
                        </li>

                        <li class="inline pr-2">
                            <a target="_blank" href="{{ App\Enums\SocialsEnum::LINKED_IN }}" aria-label="LinkedIn" rel="noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>

            </div>

            <div class="w-full md:w-1/2 text-xs md:my-2 px-4">
                <p class="md:text-right">Site by <a href="https://mattbanner.co.uk" rel="noopener" class="transition ease-in-out duration-700 hover:text-gray-500">Matt Banner</a><span class="italic text-gray-500 hidden md:inline"> (obviously)</span></p>
            </div>

        </div>
    </div>
</footer>
