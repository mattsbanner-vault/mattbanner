@extends('emails.layouts.main')

@section('content')

    <p>A new contact form submission has been received from {{ $contact->name ?? 'Unknown' }} ({{ $contact->email ?? 'Email Unknown' }})</p>

    <p>
        <strong>Message:</strong>
        {{ $contact->message ?? 'No message content.' }}
    </p>

@endsection
