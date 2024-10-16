@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">Licenses</h1>
    <p class="text-gray-400 mb-5">Manage "License" Document, You able to Add/Update/Delete document information and when
        document was expired, System will notified you to focus on it.</p>
    <div class="divider"></div>
    {{-- <div class="overflow-x-auto"> --}}
    <table class="table" id="licenses-table"></table>
    {{-- </div> --}}
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}licenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
