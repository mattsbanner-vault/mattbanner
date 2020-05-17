<nav class="slide slide-top-200 flex items-center justify-between flex-wrap bg-blue-900">
    <div class="flex md:hidden w-full justify-end py-2">
        <button onclick="toggleMenu()" aria-label="Expand menu" class="flex items-center px-3 py-2 text-white border-white hover:text-gray-300 transition-fade mr-2">
            <i class="fas fa-bars text-xl"></i>
        </button>
    </div>
    <div id="menu" class="hidden w-full block flex-grow md:flex md:items-center md:w-auto">
        <div class="md:flex-grow text-center">

            @include('components.navigation.item', ['url' => route('home'), 'title' => 'Home'])

            @include('components.navigation.item', ['url' => route('contact'), 'title' => 'Contact'])

        </div>
    </div>
</nav>
