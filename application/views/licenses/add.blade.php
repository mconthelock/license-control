@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">New Licenses</h1>
    <p class="text-gray-400 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor</p>
    <div class="divider"></div>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}newlicenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
