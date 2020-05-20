<form id="contact-form" action="{{ route('contact.submit') }}" method="post" class="form contact-form">

    @csrf

    <div class="flex flex-wrap">

        <div class="w-full md:w-1/2 md:pr-2">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Joe Bloggs" value="{{ old('name') ?? '' }}">

            @error('name')
                <div class="text-xs pt-2 text-red-700">{{ $message }}</div>
            @enderror
        </div>

        <div class="w-full md:w-1/2 md:pl-2 mt-6 md:mt-0">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="joe.bloggs@example.com" value="{{ old('email') ?? '' }}">

            @error('email')
                <div class="text-xs pt-2 text-red-700">{{ $message }}</div>
            @enderror
        </div>

        <div class="w-full mt-6">
            <label for="message">Message</label>
            <textarea id="message" name="message">{{ old('message') ?? '' }}</textarea>

            @error('message')
                <div class="text-xs pt-2 text-red-700">{{ $message }}</div>
            @enderror
        </div>

        <input type="hidden" name="recaptcha_response" id="recaptchaResponse">

        @error('recaptcha_response')
        <div class="text-xs pt-4 text-red-700">
            <strong>{{ $message }}</strong>
            This is in place to prevent spam submissions. Please try launching an incognito / private browser window and re-submitting the form there.
        </div>
        @enderror

        @if (!$errors->has('recaptcha_response'))
            <div class="w-full mt-6 text-sm text-gray-600">
                This site is protected by reCAPTCHA and the Google
                <a class="hover:text-blue-700 transition-fade" href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a class="hover:text-blue-700 transition-fade" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>

            <div class="w-full mt-6">
                <input type="submit" value="Send">
            </div>
        @endif

    </div>

</form>
