<div class="flex-1 border shadow-md rounded-lg p-5 bg-base-200">
    <div class="flex items-center">
        <h1 class="flex-1 text-xl font-extrabold">Document Owner</h1>
        {{-- <button class="flex-none btn btn-outline btn-primary btn-sm" type="button" id="addprop">Add</button> --}}
    </div>
    <div class="divider"></div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Division</span>
        </div>
        <select class="!input !input-bordered !w-full flex items-center select2" id="ownerdiv">
        </select>
    </label>

    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Department</span>
        </div>
        <select class="!input !input-bordered !w-full flex items-center select2" id="ownerdept">
            <option value="00">ALL</option>
        </select>
    </label>

    <label class="form-control w-full">
        <div class="label">
            <span class="label-text font-bold">Section</span>
        </div>
        <select class="!input !input-bordered !w-full flex items-center select2" id="ownersec">
            <option value="00">ALL</option>
        </select>
    </label>
</div>
