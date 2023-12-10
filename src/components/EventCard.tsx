import { deleteEvent } from "../redux/API Calls/eventsAPICalls";
import { AppDispatch } from "../redux/store";
import { EventType } from "../types";
import { IoCloseCircleOutline } from "react-icons/io5";

//! Event Card Component

type EventCardProps = {
  dispatch: AppDispatch;
  isAdmin?: boolean;
};

const EventCard: React.FC<EventType & EventCardProps> = ({
  _id,
  description,
  event_date,
  event_location,
  event_name,
  event_time,
  tags,
  dispatch,
  isAdmin,
}) => {
  // Modifying the date according to needs
  const e_date = event_date.split(" ");

  if (_id)
    return (
      <div className="relative p-[1px] cursor-default group">
        <div className="absolute bg-accent/50 top-0 left-0 w-full h-full skew-y-0 -z-[0] group-hover:skew-y-3 transition-all duration-500 ease-in-out" />

        <div className="relative p-4 col-span-1 flex flex-col justify-center items-start gap-6 bg-white min-h-[18rem]">
          {isAdmin && (
            <IoCloseCircleOutline
              color={"#ec3c3cc3"}
              size={"25"}
              className="absolute cursor-pointer top-2 left-2"
              onClick={() => deleteEvent(dispatch, _id)}
            />
          )}
          {/* Name and Event Date Section */}
          <div className="flex justify-between items-center gap-6 w-full">
            <h6 className="font-semibold text-xl underline underline-offset-8">
              {event_name}
            </h6>

            {/* Date Sticker */}
            <div className="absolute top-1 -right-2 flex justify-center items-center gap-1 bg-accent text-white px-4 py-2">
              <span className="text-sm font-semibold">{e_date[0]}</span>
              <span className="text-sm font-semibold">
                {e_date[1].slice(0, 3)}
              </span>
              <span className="text-sm font-semibold">{e_date[2]}</span>
            </div>
          </div>

          {/* Tag Section */}
          {tags && (
            <div className="w-full flex justify-start items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tags.findIndex((t) => tag === t)}
                  className="bg-primary/10 border border-primary px-4 py-1 rounded-full text-primary text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Describing the event section */}
          <p className="font-light text-xs">{description}</p>

          {/* Location and Timing section */}
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="font-semibold text-xs">
              <span className="underline underline-offset-4">Location:</span>
              &nbsp; {event_location}
            </p>
            <p className="font-semibold text-xs">
              <span className="underline underline-offset-4">
                Event Timing:
              </span>
              &nbsp; {event_time}
            </p>
          </div>
        </div>
      </div>
    );
};

export default EventCard;
