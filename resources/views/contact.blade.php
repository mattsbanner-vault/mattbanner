@extends('layouts.app')

@section('content')

    {{-- "Masthead" --}}
    @component('components.generic.masthead')

        @slot('title')
            {{ config('app.name' ?? '') }}
        @endslot

    @endcomponent

    {{-- Contact --}}
    @component('components.generic.section')

        @slot('title')
            Contact
        @endslot

        @slot('content')

            <div class="pb-4">

                @if(session()->has('formStatus') && session()->get('formStatus') == 'success')

                    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4" role="alert">
                        <div class="flex">
                            <div class="py-2"><i class="fas fa-check"></i></div>
                            <div class="ml-2">
                                <p class="font-bold">Message Sent Successfully</p>
                                <p class="text-sm pt-0">Thanks, your message has been sent. Feeling keen? <a href="{{ route('contact') }}" class="underline hover:text-teal-700 transition-fade">Send another message</a></p>
                            </div>
                        </div>
                    </div>

                @else

                    <div class="pb-6">
                        <p>If you would like to get in touch, please use the following form to send me an email. I'll get back to you as soon as possible.</p>
                    </div>

                    @include('forms.contact')

                @endif

            </div>

        @endslot

    @endcomponent

@endsection
