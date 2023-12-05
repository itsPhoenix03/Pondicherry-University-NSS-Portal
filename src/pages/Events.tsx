import EventCard from "../components/EventCard";
import { useAppSelector } from "../hooks/reduxHooks";
import useEventModal from "../hooks/useEventModal";

//! Events Page Component
const Events = () => {
  const isAdmin = useAppSelector((state) => state.profile.currentUser?.isAdmin);

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
            className="border border-accent px-4 py-2 cursor-pointer text-accent hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleOpen}
          >
            Add New Event
          </button>
        )}
      </div>

      {/* Events List Component */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default Events;
