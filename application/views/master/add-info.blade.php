<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200 h-full">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Control No. Prefix <span class="text-error">*</span></span>
        </div>
        <input type="text" class="input input-bordered w-full uppercase req" name="doc_no" maxlength="5" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Document Title<span class="text-error">*</span></span>
        </div>
        <input type="text" class="input input-bordered w-full req" name="doc_name" maxlength="50" />
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Documnet Type<span class="text-error">*</span></span>
        </div>
        <select class="select select-bordered w-full req" name="doc_type" id="doc_type">
            <option disabled selected value=""></option>
        </select>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Control term<span class="text-error">*</span></span>
        </div>
        <div class="flex gap-3">
            <div class="flex-1 w-2/3">
                <input type="number" placeholder="Number" class="input input-bordered w-full req" name="doc_term" />
            </div>
            <div class="flex-none">
                <select class="select select-bordered w-full" name="doc_termunit">
                    <option value="Day" selected>Day</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
        </div>
    </label>
    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Early alert day (Day)<span class="text-error">*</span></span>
            <span class="label-text-alt text-gray-400">Specify the unit as days</span>
        </div>
        <input type="number" placeholder="Number" class="input input-bordered w-full req" name="doc_alert" />
    </label>
</div>
