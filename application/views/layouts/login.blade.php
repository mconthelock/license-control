@extends('layouts/template')
@section('contents')
    @include('layouts/carousel')

    <div class="relative z-10 flex flex-grow items-center justify-center lg:justify-end px-5 w-full h-full">
        <div class="w-96 bg-base-100 p-8 rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form action="{{ base_url() }}login" method="POST" class="mt-4">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Username</span>
                    </label>
                    <input type="text" name="username" placeholder="Username" class="input input-bordered" required>
                </div>
                <div class="form-control mt-4">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" class="input input-bordered" required>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary w-full">Login</button>
                    <a href="#">Forgot Password</a>
                </div>
            </form>
        </div>
    </div>
    <script src="{{ base_url() }}assets/dist/js/login.bundle.js?ver={{ date('Ymdhis') }}"></script>
@endsection
