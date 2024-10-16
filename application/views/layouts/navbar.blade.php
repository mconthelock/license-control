<div class="navbar w-full z-[100] fixed shadow-md bg-base-100/[0.9]">
    <div class="flex-none lg:hidden">
        <label for="nav-master" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block h-5 w-5 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </label>
    </div>
    <div class="flex-1">
        <a class="flex gap-2 justify-start items-center transition-transform" href="{{ base_url() }}">
            <div class="w-12 h-12 bg-primary flex justify-center items-center btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" id="logo" data-name="logo 1" viewBox="0 0 24 24"
                    class="w-6 h-6 fill-base-300">
                    <path
                        d="m21,17h-1v-4c0-.552-.447-1-1-1s-1,.448-1,1v4h-5c-1.654,0-3,1.346-3,3v.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5V3.5c0-.539-.133-1.044-.351-1.5h5.351c.553,0,1-.448,1-1s-.447-1-1-1H3.5C1.57,0,0,1.57,0,3.5v.5c0,1.654,1.346,3,3,3h2v13.5c0,1.929,1.569,3.499,3.498,3.5h12.002c1.93,0,3.5-1.57,3.5-3.5v-.5c0-1.654-1.346-3-3-3ZM5,5h-2c-.552,0-1-.449-1-1v-.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v1.5Zm17,15.5c0,.827-.673,1.5-1.5,1.5h-8.838c.217-.455.338-.963.338-1.5v-.5c0-.551.448-1,1-1h8c.552,0,1,.449,1,1v.5Zm-12.086-7.706c-.169.607.293,1.206.923,1.206h0c.429,0,.805-.286.918-.7.144-.525.311-1.051.512-1.576,2.744-.389,5.01-1.319,6.906-2.851,1.996-1.613,3.878-4.059,4.682-6.086.268-.675.162-1.421-.282-1.997-.443-.574-1.143-.864-1.854-.776-.995.122-4.438.675-6.946,2.701-2.804,2.264-3.816,6.13-4.134,7.785-.248.629-.555,1.68-.726,2.293Zm6.116-8.522c1.666-1.344,4.156-2.055,5.967-2.22-.554,1.396-2.067,3.641-4.079,5.267-.979.79-2.091,1.385-3.341,1.813,1.102-1.22,2.392-2.652,3.364-3.749.169-.191-.056-.475-.279-.352-1.617.888-2.997,1.891-4.158,2.85.537-1.287,1.335-2.647,2.526-3.609Z" />
                </svg>
            </div>
            {{-- <div class="flex-none text-xl font-extrabold">
                </div> --}}
            <div class="flex-1 flex flex-col items-start">
                <div class="text-md font-bold text-primary">Document</div>
                <div class="text-md font-bold text-primary">Control</div>
            </div>
        </a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <ul class="menu menu-horizontal">
                <!-- Navbar menu content here -->
                <li><a href="https://{{ $_SERVER['HTTP_HOST'] }}/form">Webflow</a></li>
                {{-- <li><a href="http://webflow/form/sharepoint/sharepoint.asp">SharePoint</a></li> --}}
                {{-- <li><a href="https://amecoutlook.mitsubishielevatorasia.co.th/owa/">Outlook(OWA)</a></li> --}}
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <i class="icofont-notification text-3xl"></i>
                    <span class="badge badge-md indicator-item bg-red-400 top-[10px] text-secondary">8</span>
                </div>
            </div>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full !shadow-sm">
                    <img alt="" src="{{ isset($_SESSION['profile-img']) ? $_SESSION['profile-img'] : '' }}" />
                </div>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a href="{{ base_url() }}welcome/logout/">Logout</a></li>
            </ul>

            <input type="hidden" id="login_empno" value="{{ $_SESSION['user']->SEMPNO }}" />
            <input type="hidden" id="login_empname" value="{{ $_SESSION['user']->SNAME }}" />
            <input type="hidden" id="login_empdiv" value="{{ $_SESSION['user']->SDIVCODE }}" />
            <input type="hidden" id="login_empdept" value="{{ $_SESSION['user']->SDEPCODE }}" />
            <input type="hidden" id="login_empsec" value="{{ $_SESSION['user']->SSECCODE }}" />
        </div>
    </div>
</div>
