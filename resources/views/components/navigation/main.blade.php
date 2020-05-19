<nav class="slide slide-top-200 flex items-center justify-between flex-wrap bg-blue-900">

    <div class="w-full py-4 bg-blue-900 flex md:hidden">
        <div class="w-10/12 relative">
            <a href="{{ route('home') }}">
                <div class="ml-2 w-8 h-8 inline-block align-middle">
                    <img src="{{ App\Enums\AssetsEnum::PROFILE_IMAGE ?? '' }}" alt="Matt Banner's profile image" class="h-full rounded align-middle">
                </div>
                <h1 class="text-white text-xl inline-block align-middle">Matt Banner</h1>
            </a>
        </div>

        <div class="w-2/12 mr-4 relative">
            <button onclick="toggleMenu()" aria-label="Expand menu" class="float-right flex text-white border-white hover:text-gray-300 transition-fade h-full">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </div>

    <div id="menu" class="hidden w-full block flex-grow md:flex md:items-center md:w-auto">
        <div class="md:flex-grow text-center">

            @include('components.navigation.item', ['url' => route('home'), 'title' => 'Home'])

            @include('components.navigation.item', ['url' => route('contact'), 'title' => 'Contact'])

        </div>
    </div>
</nav>
