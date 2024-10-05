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
    <div class="drawer flex-grow">
        <input id="nav-menu" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            @include('layouts/navbar')
            <!-- Page content here -->
            @yield('contents')
        </div>
        @include('layouts/sidebar')
    </div>
    @yield('scripts')
</body>

</html>
