@if (isset($title))
    <a @if (isset($url)) href="{{ $url }}" @endif class="block py-4 md:w-32 md:inline-block md:mt-0 text-white hover:bg-blue-800 px-8 transition ease-in-out duration-500">
        {{ $title }}
    </a>
@endif
