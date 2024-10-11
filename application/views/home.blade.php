@extends('layouts/template')
@section('content')
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}licenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
