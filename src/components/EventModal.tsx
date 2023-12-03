import { useState } from "react";
import useEventModal from "../hooks/useEventModal";
import Modal from "./Modal";

//Type for Event Object
type newEventObj = {
  title: string;
  tags: string[];
  description: string;
  date: string;
  location: string;
  timing: string;
};

// DEFAULT OBJECT FOR STATE
const DEFAULT_EVENT_OBJ: newEventObj = {
  title: "",
  tags: [],
  description: "",
  date: "",
  location: "",
  timing: "",
};

//! Event Modal Component

const EventModal = () => {
  const eventModal = useEventModal();

  // State to maintain the event object
  const [newEvent, setNewEvent] = useState<newEventObj>(DEFAULT_EVENT_OBJ);

  //TODO Submit function for New Event Addition

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

    //TODO submit functionality

    console.log(newEvent);
    setNewEvent(DEFAULT_EVENT_OBJ);

    eventModal.onClose();
  };

  // Handle Change Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check for tags and then changing them to the array of tags
    if (e.target.name === "tags") {
      const tagsArr = e.target.value.split(",");

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
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="title"
        className="w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Title"
      />
      <input
        type="text"
        name="tags"
        className="w-full col-span-2 text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Type of Tags for this event (Separate with commas [,])"
      />
      <input
        type="text"
        name="description"
        className="w-full col-span-2 text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Description (Short and Precise)"
      />
      <input
        type="text"
        name="date"
        className="w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Date when Event is going to happen"
      />
      <input
        type="text"
        name="location"
        className="w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the NSS Event Location"
      />
      <input
        type="text"
        name="timing"
        className="w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Timing of the Event"
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
