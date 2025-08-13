import React from "react";
import CustomInput from "../reusable/CustomInput";
import CustomButton from "../reusable/CustomButton";

type EditInterestProps = {
  onUpdate: () => void;
  cancel: () => void;
};

const EditInterest = ({ onUpdate, cancel }: EditInterestProps) => {
  return (
    <>
      <div className="bg-white rounded-2xl w-[300px] md:w-[400px] lg:w-[457px]">
        <form className="p-3 md:p-4 lg:p-5 flex flex-col gap-5 lg:gap-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold textPrimary">
            Edit Interest Rate
          </h2>

          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <CustomInput
              type="number"
              label="Old Rate"
              placeholder="example: 5"
            />
            <CustomInput
              type="number"
              label="New Rate"
              placeholder="example: 6"
            />
          </div>
          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <button
              onClick={cancel}
              className="bg-white textPrimary cursor-pointer"
            >
              Cancel
            </button>
            <CustomButton
              onClick={onUpdate}
              title="Update"
              className="w-fit px-5"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditInterest;
