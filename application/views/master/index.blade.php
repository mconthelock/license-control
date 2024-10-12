@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">Document Template</h1>
    <p class="text-gray-400 mb-5">This page is designed to allow you to create custom document templates on a website. It
        provides a flexible interface where you can define and structure of your document templates.</p>
    <div class="divider"></div>
    <table class="table" id="master-table"></table>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}masters.bundle.js"></script>
@endsection
