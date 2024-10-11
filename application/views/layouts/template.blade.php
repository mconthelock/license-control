<!DOCTYPE html>
<html lang="en" data-theme="">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="base_url" content="{{ base_url() }}">
    <meta name="base_uri" content="{{ 'https://' . $_SERVER['HTTP_HOST'] }}">

    <title>AMEC License Control</title>
    <link rel="stylesheet" href="{{ $GLOBALS['cdn'] }}icofont/icofont.min.css">
    <link rel="stylesheet" href="{{ base_url() }}assets/dist/css/tailwind.css?ver={{ date('Ymdhis') }}">
    @yield('styles')
    <script>
        (function() {
            const savedTheme = localStorage.getItem('theme') || 'light'; // ค่าเริ่มต้นเป็น 'light'
            document.documentElement.setAttribute("data-theme", savedTheme);
            localStorage.setItem("theme", savedTheme);
            document.addEventListener("DOMContentLoaded", function() {
                if (savedTheme === 'dark') {
                    document.getElementById('theme').checked = true;
                }
                // const fullurl = window.location.href.indexOf('mitsubishielevatorasia.co.th');
                // const protocol = window.location.protocol;
                // if (fullurl == -1 || protocol != 'https:') {
                //     window.location.href = 'https://amecwebtest.mitsubishielevatorasia.co.th/form/';
                // }
            });
        })();
    </script>
</head>

<body class="flex flex-col min-h-screen">
    <div class="flex-none z-[100]">
        @include('layouts.navbar')
    </div>
    <div class="flex-1 drawer lg:drawer-open">
        <input id="nav-master" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col p-5 pt-[calc(68px+1rem)]">
            <div class="flex-1 z-10">
                @yield('content')
            </div>
        </div>
        @include('layouts.sidebar')
    </div>
    @include('layouts.footer')

    {{-- Pattern --}}
    <div class="w-[750px] h-[750px] overflow-hidden absolute bottom-0 right-0 z-0">
        <div
            class="w-full h-full pattern-dots pattern-gray-500 pattern-bg-transparent pattern-size-2 opacity-50 rotate-45 translate-y-56 translate-x-40">
        </div>
    </div>
    {{-- Loading Page --}}
    <input type="checkbox" id="loading-box" class="modal-toggle" checked />
    <div class="modal" role="dialog">
        <div class="loader"></div>
    </div>

    {{-- JS Script --}}
    <script src="{{ base_url() }}assets/dist/js/apps.bundle.js"></script>
    @yield('scripts')
</body>

</html>
