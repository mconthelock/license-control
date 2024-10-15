<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Document Prefix</span>
        </div>
        <input type="text" placeholder="DOC-" class="input input-bordered w-full uppercase" name="doc_prefix"
            maxlength="5" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Document Name</span>
        </div>
        <input type="text" placeholder="Important Document" class="input input-bordered w-full" name="doc_name"
            maxlength="50" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Documnet Type</span>
        </div>
        <select class="select select-bordered w-full" name="doc_type" id="doc_type">
            <option disabled selected>Category</option>
        </select>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Service Life</span>
        </div>
        <div class="flex gap-3">
            <div class="flex-1 w-2/3"><input type="text" placeholder="Number"
                    class="input input-bordered w-full"name="doc_life" />
            </div>
            <div class="flex-none">
                <select class="select select-bordered w-full" name="doc_life_unit">
                    <option disabled selected>Select</option>
                    <option value="Day">Day</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Alert Before Expire</span>
        </div>
        <input type="text" placeholder="Number" class="input input-bordered w-full" name="doc_alert" />
        <div class="label">
            <span class="label-text-alt">Specify the unit as days.</span>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="flex gap-3">
            <input type="checkbox" checked="checked" class="checkbox" name="doc_extended" />
            <div class="flex">
                <span class="label-text font-bold">Renew immediately upon expiration</span>
            </div>
        </div>
    </label>
</div>
