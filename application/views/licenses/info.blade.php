<div class="border shadow-md rounded-lg bg-base-200 h-full p-5" id="docinfo">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>

    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Control No.</span>
        </div>
        <input type="text" class="input input-bordered w-full uppercase docno" name="docno" />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Title</span>
        </div>
        <input type="text" class="input input-bordered w-full docname" name="doc_name" />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Provider</span>
        </div>
        <select class="!input !input-bordered flex items-center select2" id="provider">
            <option disabled selected value="">Select vendor who issue License?</option>
        </select>
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Person In-Charge</span>
        </div>

        <label class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Change In-charge" id="person-incharge" tabindex="-1" />
            <i class="icofont-user-male opacity-30"></i>
        </label>

        <div class="flex mt-5" id="person-incharge-avatar">
            <div class="avatar flex-none">
                <div class="w-12 rounded-full">
                    <img src="{{ $_SESSION['profile-img'] }}" />
                </div>
            </div>
            <div class="flex-grow ml-3">
                <h1 class="text-lg font-bold">{{ $_SESSION['user']->SNAME }}</h1>
                <p class="text-gray-400">{{ $_SESSION['user']->SEMPNO }}</p>
                <input type="hidden" name="licensepic" value="{{ $_SESSION['user']->SEMPNO }}">
            </div>
        </div>
    </label>
</div>
