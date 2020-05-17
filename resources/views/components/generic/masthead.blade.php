<div class="flex pt-6 md:pt-16 max-w-screen-sm lg:max-w-screen-md mx-auto px-4 h-32 md:h-40">
    <div class="w-2/3 md:w-5/6">
        <h1 class="pr-4 md:pr-0">{{ $title ?? '' }}</h1>
    </div>
    <div class="w-1/3 md:w-1/6 h-full">
        <img src="{{ App\Enums\AssetsEnum::PROFILE_IMAGE ?? '' }}" alt="Matt Banner's profile image" class="h-full float-right rounded mr-2">
    </div>
</div>
