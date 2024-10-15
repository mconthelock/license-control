@extends('layouts/template')
@section('content')
    <div class="badge !badge-secondary">4</div>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}licenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
