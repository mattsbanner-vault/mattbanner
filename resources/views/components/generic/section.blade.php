<div id="{{ Illuminate\Support\Str::slug($title,'-') ?? '' }}" class="max-w-screen-sm lg:max-w-screen-md mx-auto pt-6 px-4">

    <h2>{{ $title ?? '' }}</h2>

    <div>
        {{ $content ?? '' }}
    </div>

</div>
