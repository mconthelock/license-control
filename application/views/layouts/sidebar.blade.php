<div class="drawer-side z-[99] h-full border-r baorder-base-200">
    <label for="nav-master" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu w-72 p-4 pt-[calc(68px+1rem)] h-full flex gap-1" id="nav-sidebar">
        <li><a class="text-md home" href="{{ base_url() }}audits">Home</a></li>
        <li><a class="text-md license" href="{{ base_url() }}licenses">License</a></li>
        <li><a class="text-md contract" href="{{ base_url() }}contract">Contract & Agreement</a></li>
        <li><a class="text-md audit" href="{{ base_url() }}audits">Audits Schedule</a></li>
        {{-- Department admin --}}
        <li><a class="text-md" href="{{ base_url() }}master">Manage Template</a></li>
    </ul>
</div>
