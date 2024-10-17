<div class="border shadow-md rounded-lg p-5 bg-base-200 h-full" id="docinfo">
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
        </select>
    </label>

    <label class="form-control w-full mt-3">
        <div class="label">
            <span class="label-text font-bold">Person In-Charge</span>
        </div>
        <input type="text" class="input input-bordered w-full" name="" required />
    </label>
</div>
