<div class="drawer-side z-[99] md:w-72">
    <label for="nav-master" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-100 p-4 pt-[calc(68px+1rem)] flex gap-2 fixed w-full md:!w-72 h-screen border-r baorder-base-200"
        id="nav-sidebar">
        <li>
            <a class="text-md home" href="{{ base_url() }}">
                <div class="flex-none"><i class="icofont-ui-home text-lg"></i></div>
                <div class="flex-1">Home</div>
            </a>
        </li>
        <li>
            <a class="text-md home" href="{{ base_url() }}licenses">
                <div class="flex-none"><i class="icofont-certificate text-xl"></i></div>
                <div class="flex-1">License</div>
            </a>
        </li>
        <li>
            <a class="text-md home" href="{{ base_url() }}audits">
                <div class="flex-none"><i class="icofont-pen-nib text-xl"></i></div>
                <div class="flex-1">Contract & Agreement</div>
            </a>
        </li>
        <li>
            <a class="text-md home" href="{{ base_url() }}audits">
                <div class="flex-none"><i class="icofont-police-cap text-xl"></i></div>
                <div class="flex-1">Audits Schedule</div>
                <div class="badge !badge-secondary">35</div>
            </a>
        </li>
        <li>
            <a class="text-md master" href="{{ base_url() }}master">
                <div class="flex-none"><i class="icofont-rulers-alt text-xl"></i></div>
                <div class="flex-1">Document Template</div>
            </a>
        </li>
    </ul>
</div>
