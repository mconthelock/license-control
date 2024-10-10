@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">Audit Activity</h1>
    <p class="text-gray-400 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor</p>
    <div class="divider"></div>
    <div class="flex gap-5">
        <div class="flex-1">
            <div class="overflow-x-auto">
                <table class="table bg-base-100" id="licenses-table">
                </table>
            </div>
        </div>
        <div class="flex-none">
            <div class="w-96 h-96 p-5 border border-gray-300 bg-base-100 rounded-md shadow-md">
                <h1>Calendar</h1>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}licenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
