<div class="drawer-side z-[99] h-full border-r">
    <label for="nav-master" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu w-72 p-4 pt-[calc(68px+1rem)] h-full">
        <li><a class="text-md bg-primary font-semibold text-white" href="{{ base_url() }}audits">Home</a></li>
        <li><a class="text-md" href="{{ base_url() }}licenses">License</a></li>
        <li><a class="text-md" href="{{ base_url() }}contract">Contract & Agreement</a></li>
        <li><a class="text-md" href="{{ base_url() }}audits">Audits Schedule</a></li>

        {{-- Department admin --}}
        <li><a class="text-md" href="{{ base_url() }}master">Manage Template</a></li>
    </ul>
</div>
