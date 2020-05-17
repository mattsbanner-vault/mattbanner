@extends('emails.layouts.main')

@section('content')

    <p>Hi {{ $contact->name ?? '' }}</p>

    <p>Thank you for getting in touch. I have received your email and will get back to you shortly.</p>

    <p>Matt Banner</p>

@endsection
