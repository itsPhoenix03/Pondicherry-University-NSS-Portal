//! Event Card Component

const EventCard = () => {
  return (
    <div className="relative p-[1px] cursor-default group">
      <div className="absolute bg-accent/50 top-0 left-0 w-full h-full skew-y-0 -z-[0] group-hover:skew-y-3 transition-all duration-500 ease-in-out" />

      <div className="relative p-4 col-span-1 flex flex-col justify-center items-start gap-6 bg-white">
        {/* Name and Event Date Section */}
        <div className="flex justify-between items-center gap-6 w-full">
          <h6 className="font-semibold text-xl underline underline-offset-8">
            Event Name
          </h6>

          {/* Date Sticker */}
          <div className="flex justify-center items-center gap-1 bg-accent/75 text-white px-4 py-2">
            <span className="text-sm font-semibold">12th</span>
            <span className="text-sm font-semibold">Mar</span>
          </div>
        </div>

        {/* Tag Section */}
        <div className="w-full flex justify-start items-center gap-2">
          <span className="bg-primary/10 border border-primary px-4 py-1 rounded-full text-primary text-xs">
            Tag
          </span>
          <span className="bg-primary/10 border border-primary px-4 py-1 rounded-full text-primary text-xs">
            Tag
          </span>
          <span className="bg-primary/10 border border-primary px-4 py-1 rounded-full text-primary text-xs">
            Tag
          </span>
        </div>

        {/* Describing the event section */}
        <p className="font-light text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          eligendi totam quod ullam iure ex cumque, distinctio alias dolorum
          dolorem ab dicta deserunt rem libero laboriosam quam, facilis hic
          labore?
        </p>

        {/* Location and Timing section */}
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="font-semibold text-xs">
            <span className="underline underline-offset-4">Location:</span>
            &nbsp; Event Location
          </p>
          <p className="font-semibold text-xs">
            <span className="underline underline-offset-4">Event Timing:</span>
            &nbsp; 16:00 PM IST
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
