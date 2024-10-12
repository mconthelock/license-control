<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Document Prefix</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Document Name</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Documnet Type</span>
        </div>
        <select class="select select-bordered w-full">
            <option disabled selected>Category</option>
            <option>License</option>
            <option>Certificate</option>
            <option>Contract</option>
            <option>Agreement</option>
            <option>Other</option>
        </select>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Service Life</span>
        </div>
        <div class="flex gap-3">
            <div class="flex-1 w-2/3"><input type="text" placeholder="Number" class="input input-bordered w-full" />
            </div>
            <div class="flex-none">
                <select class="select select-bordered w-full">
                    <option disabled selected>Select</option>
                    <option>Day</option>
                    <option>Month</option>
                    <option>Year</option>
                </select>
            </div>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Alert Before Expire</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
        <div class="label">
            <span class="label-text-alt">Specify the unit as days.</span>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="flex gap-3">
            <input type="checkbox" checked="checked" class="checkbox" />
            <div class="flex">
                <span class="label-text font-bold">Renew immediately upon expiration</span>
            </div>
        </div>
    </label>
</div>
