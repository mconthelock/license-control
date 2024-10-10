@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">Contract</h1>
    <p class="text-gray-400 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor</p>
    <div class="divider"></div>
    <div class="overflow-x-auto">
        <table class="table bg-base-100" id="licenses-table">

        </table>
    </div>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}licenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
