//TODO: option to update the sign up form link, excel sheet change

import { useRef } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { updateSignUpFormLink } from "../../redux/slices/adminActionsSlice";

const ControlPanel = () => {
  // Ref for link input
  const linkRef = useRef<HTMLInputElement>(null);

  // Current Sign up URL
  const currentSignUpURL = useAppSelector(
    (state) => state.adminAction.signUpFormLink
  );

  // Handle Link Update
  const handleUpdateLink = () => {
    if (!linkRef.current) return;

    // Updating the sign up link
    updateSignUpFormLink(linkRef.current.value);
  };

  return (
    <div className="">
      <h3 className="text-primary font-bold lg:text-[1.5rem]">
        <span className="text-accent font-bold">#</span>&nbsp;Control Panel
      </h3>

      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4 my-4">
        <div className="w-full lg:w-[75%] flex flex-col md:flex-row justify-start items-start lg:items-center gap-2 text-xs lg:text-base">
          <label htmlFor="formLink" className="w-fit">
            Give the new link for Sign Up form:&nbsp;
          </label>
          <input
            type="text"
            name="formLink"
            id="formLink"
            className="bg-transparent placeholder:text-primary/50 w-full md:w-[65%] px-4 py-2 outline-none border-b border-b-neutral-200 focus:border-b-accent/50 transition-all duration-300 ease-in-out"
            placeholder={`${currentSignUpURL}`}
            ref={linkRef}
          />
        </div>
        <button
          onClick={handleUpdateLink}
          className="w-full md:w-fit text-xs lg:text-base text-accent border border-accent rounded-full py-2 px-6 transition-all duration-300 ease-in-out hover:bg-accent/5"
        >
          Update Sign Up Form Link
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
