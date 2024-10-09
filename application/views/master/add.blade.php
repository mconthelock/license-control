@extends('layouts/template')
@section('content')
    <h1 class="text-2xl font-bold mb-1">New Template</h1>
    <p class="text-gray-400 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor</p>
    <div class="divider"></div>
    <div class="flex gap-5">
        <div class="flex-1 border border-gray-200 shadow-md rounded-md p-5">
            <h1 class="text-xl font-extrabold">Information</h1>
            <div class="divider"></div>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text font-bold">What is your name?</span>
                    <span class="label-text-alt">Top Right label</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </label>

            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text font-bold">What is your name?</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text font-bold">What is your name?</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </label>
        </div>
        <div class="flex-1">
            <h1>Detail</h1>
        </div>
        <div class="flex-1">
            <h1>Alert</h1>
        </div>
        <div class="flex-1">
            <h1>Access</h1>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ $GLOBALS['script'] }}master.bundle.js"></script>
@endsection
