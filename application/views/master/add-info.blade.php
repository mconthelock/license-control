<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Control No. Prefix</span>
        </div>
        <input type="text" placeholder="DOC No." class="input input-bordered w-full uppercase" name="doc_prefix"
            maxlength="5" required />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Document Title</span>
        </div>
        <input type="text" placeholder="Important Document" class="input input-bordered w-full" name="doc_name"
            maxlength="50" required />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Documnet Type</span>
        </div>
        <select class="select select-bordered w-full" name="doc_type" id="doc_type" required>
            <option disabled selected value="">Select category</option>
        </select>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Control term</span>
        </div>
        <div class="flex gap-3">
            <div class="flex-1 w-2/3">
                <input type="number" placeholder="Number" class="input input-bordered w-full"name="doc_life"
                    required />
            </div>
            <div class="flex-none">
                <select class="select select-bordered w-full" name="doc_life_unit" required>
                    <option value="Day" selected>Day</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Early alert day (Day)</span>
        </div>
        <input type="number" placeholder="Number" class="input input-bordered w-full" name="doc_alert" required />
        <div class="label">
            <span class="label-text-alt">Specify the unit as days.</span>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="flex gap-3">
            <input type="checkbox" checked="checked" class="checkbox" name="doc_extended" value="1" />
            <div class="flex">
                <span class="label-text font-bold">Renew immediately upon expiration</span>
            </div>
        </div>
    </label>
</div>
