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
  });

  // Modal Hook
  const eventModal = useEventModal();

  // Handle Open Modal function
  const handleOpen = () => {
    eventModal.onOpen();
  };

  return (
    <section className="px-2 py-4 mt-4">
      <div className="flex justify-between items-center gap-4">
        {/* Heading and Subtitle */}
        <div className="">
          <h5 className="text-primary text-2xl font-semibold">
            Upcoming Events
          </h5>
          <p className="text-sm text-neutral-500 mt-2">
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
        <div className="text-center py-12 text-neutral-800/75 font-semibold my-8">
          <p>Look&apos;s like no events are currently happing!</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-10">
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
