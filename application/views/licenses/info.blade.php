<div class="border shadow-md rounded-lg p-5 bg-base-200" id="docinfo">
    <h1 class="text-xl font-extrabold">Document Information</h1>
    <div class="divider"></div>

    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Control No.</span>
        </div>
        <input type="text" placeholder="DOC" class="input input-bordered w-full uppercase docno" name="docno"
            required />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Title</span>
        </div>
        <input type="text" placeholder="DOC" class="input input-bordered w-full docname" name="doc_name" required />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Provider</span>
        </div>
        <select class="!input !input-bordered !w-full flex items-center select2" id="provider">
            <option disabled selected value="">Select vendor who issue License?</option>
            <option value="v1">Vendor1</option>
            <option value="v2">Vendor2</option>
            <option value="v3">Vendor3</option>
        </select>
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Start Date</span>
        </div>
        <input type="text" placeholder="{{ date('Y-m-d') }}"
            class="input input-bordered w-full docstart fdate calcdate" name="doc_start" required />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Service Life</span>
        </div>
        <div class="flex gap-3">
            <div class="flex-1 w-2/3">
                <input type="number" placeholder="Number"
                    class="input input-bordered w-full doclife calcdate"name="doc_life" required />
            </div>
            <div class="flex-none">
                <select class="select select-bordered w-full docunit calcdate" name="doc_life_unit" required>
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
            <span class="label-text font-bold">Expire Date</span>
            <span class="label-text-alt">*Updated by "Service Life"</span>
        </div>
        <input type="text" placeholder="" class="input input-bordered w-full docexpired" name="doc_expired" required
            readonly />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Early alert day (Day)</span>
        </div>
        <input type="number" placeholder="" class="input input-bordered w-full docearly calcdate isnumber"
            name="doc_early" required />
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Early alert date</span>
            <span class="label-text-alt">**Updated by "Early alert day"</span>
        </div>
        <input type="text" placeholder="" class="input input-bordered w-full docalert " name="doc_alert" required
            readonly />
    </label>
</div>
