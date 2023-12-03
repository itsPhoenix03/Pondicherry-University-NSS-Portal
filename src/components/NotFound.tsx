const NotFound = () => {
  return (
    <div className="text-center h-[45vh] flex flex-col gap-8 justify-center items-center">
      <span className="font-semibold text-primary">
        The Page you are looking doesn't seems to exist!
      </span>
      <span className="text-sm">Go back to the home page</span>
    </div>
  );
};

export default NotFound;
