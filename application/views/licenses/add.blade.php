@extends('layouts/template')

@section('content')
    <h1 class="text-2xl font-bold mb-1">New Licenses</h1>
    <p class="text-gray-400 mb-5">Create new license document, Don't forget to re-check list of people that you need to alert
        when this document is expired.</p>
    <div class="divider"></div>

    <form action="#" method="POST" id="">
        <div class="flex flex-col flex-wrap gap-5 lg:!flex-row mb-5">
            <div class="flex-1 min-w-80">
                @include('licenses/info')
            </div>

            <div class="flex-1 min-w-80">
                @include('licenses/period')
            </div>

            <div class="flex-1 min-w-80">
                @include('licenses/additional')
            </div>
        </div>
        <div class="flex flex-col flex-wrap gap-5 lg:!flex-row mb-5">
            <div class="flex-1 min-w-80">
                @include('licenses/reminder')
            </div>

            <div class="flex-1 min-w-80">
                {{-- @include('licenses/attachment') --}}
            </div>
        </div>
        <div class="flex gap-3 mt-5">
            <button class="btn btn-primary text-base-300" type="submit">
                <span class="loading loading-spinner hidden"></span>
                <span>Save Licenses</span>
            </button>

            <button class="btn btn-error text-base-300">
                <span class="loading loading-spinner hidden"></span>
                <span>Cancel</span>
            </button>
        </div>
    </form>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}newlicenses.bundle.js?ver{{ date('Ymdhis') }}"></script>
@endsection
