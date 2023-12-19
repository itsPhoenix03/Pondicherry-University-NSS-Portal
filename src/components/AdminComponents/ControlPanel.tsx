//TODO: option to update the sign up form link, excel sheet change

const ControlPanel = () => {
  return (
    <div className="">
      <h3 className="text-primary font-bold text-[1.5rem]">
        <span className="text-accent font-bold">#</span>&nbsp;Control Panel
      </h3>

      <div className="flex justify-evenly items-center gap-4 my-4">
        <div className="w-[75%] flex justify-start items-center gap-2">
          <label htmlFor="formLink" className="w-fit">
            Give the new link for Sign Up form:&nbsp;
          </label>
          <input
            type="text"
            name="formLink"
            id="formLink"
            className="bg-transparent placeholder:text-primary/50 w-[65%] px-4 py-2 outline-none border-b border-b-neutral-200 focus:border-b-accent/50 transition-all duration-300 ease-in-out"
            placeholder="Enter the URL for new sign up form"
          />
        </div>
        <button className="w-fit text-accent border border-accent rounded-full py-2 px-6 transition-all duration-300 ease-in-out hover:bg-accent/5">
          Update Sign Up Form Link
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
