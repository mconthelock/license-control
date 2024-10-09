<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AMEC Webflow</title>
    <link rel="stylesheet" href="{{ base_url() }}assets/dist/css/tailwind.css">
    @yield('styles')
</head>

<body class="flex flex-col min-h-screen">
    <div class="flex-none z-[100]">
        @include('layouts.navbar')
    </div>
    <div class="drawer lg:drawer-open flex-1">
        <input id="nav-master" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->

            <!-- Page content here -->
            Content
        </div>
        @include('layouts.sidebar')
    </div>
    @include('layouts.footer')
</body>

</html>
