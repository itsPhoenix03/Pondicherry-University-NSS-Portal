import { useEffect } from "react";
import EventCard from "../components/EventCard";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useEventModal from "../hooks/useEventModal";
import { fetchAllEvents } from "../redux/API Calls/eventsAPICalls";

//! Events Page Component
const Events = () => {
  // Dispatch
  const dispatch = useAppDispatch();

  // Finding current user is admin or not
  const isAdmin = useAppSelector((state) => state.profile.currentUser?.isAdmin);

  // All the events
  const events = useAppSelector((state) => state.events.events);

  //Fetch all events
  useEffect(() => {
    fetchAllEvents(dispatch);
    console.log("render");
  }, [dispatch]);

  // Modal Hook
  const eventModal = useEventModal();

  // Handle Open Modal function
  const handleOpen = () => {
    eventModal.onOpen();
  };

  return (
    <section className="px-2 py-4 mt-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-sm">
        {/* Heading and Subtitle */}
        <div className="">
          <h5 className="text-primary text-xl md:text-2xl font-semibold">
            Upcoming Events
          </h5>
          <p className="text-[10px] md:text-sm text-neutral-500 mt-2">
            Information about the upcoming events for the NSS
          </p>
        </div>

        {/* Button */}
        {isAdmin && (
          <button
            className="border border-accent px-6 py-2 cursor-pointer text-accent hover:bg-accent hover:text-white transition-all duration-300 ease-in-out rounded-full"
            onClick={handleOpen}
          >
            Add New Event
          </button>
        )}
      </div>

      {/* Events List Component */}
      {events.length === 0 ? (
        <div className="text-center py-12 text-neutral-800/75 font-semibold my-8 text-[10px] md:text-base">
          <p>Look&apos;s like no events are currently happing!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-10">
          {events.map((event) => (
            <EventCard
              key={event._id}
              dispatch={dispatch}
              isAdmin={isAdmin}
              {...event}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Events;
