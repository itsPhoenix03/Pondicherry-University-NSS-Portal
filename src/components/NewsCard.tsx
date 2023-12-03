// Dummy import pic for card component
import { Link } from "react-router-dom";
import img from "../assets/bg-pic.jpg";

//! Latest News Component

export const LatestNewsComponent = () => {
  return (
    <Link
      to={`/article/133`}
      className="border border-neutral-300 col-span-3 row-span-2 group flex flex-col justify-center items-center gap-6 cursor-pointer p-4"
    >
      <div className="w-full max-h-[70vh]">
        <img
          src={img}
          alt="dummy pic"
          className="max-h-[70vh] w-full object-cover"
        />
      </div>

      <h6 className="w-full text-4xl text-center font-semibold group-hover:text-primary transition-all duration-200 ease-in">
        Title of the Latest Featuring News
      </h6>

      <div className="w-full flex justify-between items-center gap-4">
        <span className="text-accent text-sm bg-accent/10 px-4 py-1 rounded-full border border-accent">
          Recent Event
        </span>
        <p className="text-end text-sm italic">Date of event</p>
      </div>

      <p className="w-full text-sm text-neutral-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nesciunt itaque consequuntur numquam nostrum voluptas tenetur amet error
        voluptatem veniam facere enim aliquam ducimus sed praesentium similique
        dolore, quia blanditiis. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem nesciunt itaque consequuntur numquam
        nostrum voluptas tenetur amet error voluptatem veniam facere enim
        aliquam ducimus sed praesentium similique dolore, quia blanditiis.
      </p>
    </Link>
  );
};

//! Other News Component

export const NewsComponent = () => {
  return (
    <Link
      to={`/article/1335`}
      className="border border-neutral-300 col-span-1 group flex flex-col justify-center items-start gap-4 cursor-pointer p-4 "
    >
      <div className="w-full max-h-[35vh]">
        <img
          src={img}
          alt="dummy pic"
          className="max-h-[35vh] w-full object-cover"
        />
      </div>

      <h6 className="w-full text-2xl text-center font-semibold group-hover:text-primary transition-all duration-200 ease-in">
        Title of the News
      </h6>

      <p className="w-full text-end text-sm italic">Date of event</p>

      <p className="text-xs text-neutral-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum
        obcaecati nisi vel voluptatibus libero?
      </p>
    </Link>
  );
};
