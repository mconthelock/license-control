@extends('layouts/template')
@section('content')
    <h1>Template Master</h1>
    <a class="btn" href="{{ base_url() }}master/add/">Add</a>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}master.bundle.js"></script>
@endsection
