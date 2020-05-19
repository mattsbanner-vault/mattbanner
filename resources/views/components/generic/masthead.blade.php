<div class="hidden md:flex pt-8 max-w-screen-sm lg:max-w-screen-md mx-auto px-4 h-32">

    <div class="w-2/3 md:w-5/6">
        <a href="{{ route('home') }}">
            <h1 class="pr-4 md:pr-0">{{ $title ?? '' }}</h1>
        </a>
    </div>
    <div class="w-1/3 md:w-1/6 h-full">
        <a href="{{ route('home') }}">
            <img src="{{ App\Enums\AssetsEnum::PROFILE_IMAGE ?? '' }}" alt="Matt Banner's profile image" class="h-full float-right rounded mr-2">
        </a>
    </div>

</div>
