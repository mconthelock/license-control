@extends('layouts/template')
@section('content')
    <h1 class="text-2xl font-bold mb-1">New Template</h1>
    <p class="text-gray-400 mb-5">Defind your document propoties, This document template will be used when you add new
        document.</p>
    <div class="divider"></div>

    <form action="#" method="POST" id="addtemplate">
        <div class="flex flex-col flex-wrap gap-5 lg:flex-row">
            <div class="flex-1 min-w-80">
                @include('master/add-info')
            </div>
            <div class="flex-1 min-w-80">
                @include('master/add-prop')
            </div>
            <div class="flex-1 min-w-80">
                @include('master/add-member')
            </div>
        </div>
        <div class="flex gap-3 mt-5">
            <button class="btn btn-primary text-base-300" type="submit">
                <span class="loading loading-spinner hidden"></span>
                <span>Save Template</span>
            </button>

            <button class="btn btn-error text-base-300">
                <span class="loading loading-spinner hidden"></span>
                <span>Cancel</span>
            </button>
        </div>
    </form>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}newmasters.bundle.js?ver={{ date('Ymdhis') }}"></script>
@endsection
