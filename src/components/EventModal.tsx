import { useState } from "react";
import useEventModal from "../hooks/useEventModal";
import Modal from "./Modal";
import { EventType } from "../types";
import { addEvent } from "../redux/API Calls/eventsAPICalls";
import { useAppDispatch } from "../hooks/reduxHooks";

// DEFAULT OBJECT FOR STATE
const DEFAULT_EVENT_OBJ: EventType = {
  event_name: "",
  description: "",
  tags: [],
  event_date: "",
  event_location: "",
  event_time: "",
};

//! Event Modal Component

const EventModal = () => {
  // Dispatch
  const dispatch = useAppDispatch();

  const eventModal = useEventModal();

  // State to maintain the event object
  const [newEvent, setNewEvent] = useState<EventType>(DEFAULT_EVENT_OBJ);

  // Submit function for New Event Addition

  const handleSubmit = () => {
    // Check for the object that any input is not empty string or empty array
    if (
      !Object.values(newEvent).every((value) =>
        // Checking if the value is an Array
        Array.isArray(value)
          ? // If true then checking for the length is not 0
            value.length !== 0
            ? // If true then check for not an empty string
              value[0] !== ""
            : // otherwise directly return false
              false
          : //For not been an array simply check for empty string
            value !== ""
      )
    )
      return;

    // submit functionality
    addEvent(dispatch, newEvent);
    setNewEvent(DEFAULT_EVENT_OBJ);

    eventModal.onClose();
  };

  // Handle Change Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check for tags and then changing them to the array of tags
    if (e.target.name === "tags") {
      const tagsArr = e.target.value.split(",").map((t) => t.trim());

      setNewEvent({
        ...newEvent,
        [e.target.name]: tagsArr,
      });
    } else {
      setNewEvent({
        ...newEvent,
        [e.target.name]: e.target.value,
      });
    }
  };

  const bodyContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="event_name"
        className="w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Name"
      />
      <input
        type="text"
        name="tags"
        className="w-full lg:col-span-2 text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Type of Tags for this event (Separate with commas Example: Environment, Community)"
      />
      <input
        type="text"
        name="description"
        className="w-full lg:col-span-2 text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Description (Short and Precise Max Limit: 50)"
      />
      <input
        type="text"
        name="event_date"
        className="w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Event Date (Example Format: 01 January 2023)"
      />
      <input
        type="text"
        name="event_location"
        className="w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Location"
      />
      <input
        type="text"
        name="event_time"
        className="w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Timing of the Event (Example: 10:00 AM)"
      />
    </div>
  );

  return (
    <Modal
      isOpen={eventModal.isOpen}
      actionLabel="Add NSS Event"
      title="Create a New NSS Event Announcement"
      onClose={eventModal.onClose}
      onSubmit={handleSubmit}
      bodyContent={bodyContent}
    />
  );
};

export default EventModal;
