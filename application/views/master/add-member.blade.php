<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200">
    <div class="flex items-center">
        <h1 class="flex-1 text-xl font-extrabold">Alert Member</h1>
        <label class="input input-bordered input-sm flex items-center gap-2">
            <input type="text" class="grow" placeholder="Add User" id="add-member" />
            <span class="load-member loading loading-dots loading-md hidden"></span>
            <span class="search-member icofont-ui-search text-gray-300"></span>
        </label>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col gap-3" id="member">
        <div id="memder-loader" class="flex flex-col gap-5">
            <div class="flex items-center gap-4">
                <div class="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-100"></div>
                <div class="flex flex-col gap-4 w-full">
                    <div class="skeleton h-6 w-full bg-gray-100"></div>
                    <div class="skeleton h-4 w-28 bg-gray-100"></div>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <div class="skeleton h-16 w-16 shrink-0 rounded-full bg-gray-100"></div>
                <div class="flex flex-col gap-4 w-full">
                    <div class="skeleton h-6 w-96 bg-gray-100"></div>
                    <div class="skeleton h-4 w-28 bg-gray-100"></div>
                </div>
            </div>

        </div>
    </div>
</div>
