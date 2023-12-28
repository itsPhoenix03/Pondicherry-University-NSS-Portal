import { Link } from "react-router-dom";
import { NewsType } from "../types";

//! Latest News Component

export const LatestNewsComponent: React.FC<NewsType> = ({
  article_abstract,
  image,
  title,
  createdAt = "",
  _id,
}) => {
  const articleDate = new Date(createdAt).toDateString();

  return (
    <Link
      to={`/article/${_id}`}
      className="border border-neutral-300 col-span-1 md:col-span-2 lg:col-span-3 group flex flex-col justify-center items-center gap-6 cursor-pointer p-4"
    >
      <div className="w-full md:w-[85%] h-full">
        <img
          src={image}
          alt={`NSS event picture for ${title}`}
          className="md:max-h-[40vh] w-full object-cover"
        />
      </div>

      <h6 className="w-full text-lg md:text-2xl lg:text-4xl text-center font-semibold group-hover:text-primary transition-all duration-200 ease-in">
        {title}
      </h6>

      <div className="w-full flex justify-between items-center gap-4">
        <span className="text-accent text-[8px] md:text-[12px] lg:text-sm bg-accent/10 px-4 py-1 rounded-full border border-accent">
          Recent Event
        </span>
        <p className="text-end text-[12px] lg:text-sm italic">{articleDate}</p>
      </div>

      <p className="w-full text-xs md:text-sm text-neutral-500">
        {article_abstract}
      </p>
    </Link>
  );
};

//! Other News Component

export const NewsComponent: React.FC<NewsType> = ({
  article_abstract,
  image,
  title,
  createdAt = "",
  _id,
}) => {
  const articleDate = new Date(createdAt).toDateString();

  return (
    <Link
      to={`/article/${_id}`}
      className="border border-neutral-300 col-span-1 group flex flex-col justify-center items-start gap-4 cursor-pointer p-4 "
    >
      <div className="w-full max-h-[35vh]">
        <img
          src={image}
          alt={`NSS event picture for ${title}`}
          className="max-h-[35vh] w-full object-cover"
        />
      </div>

      <h6 className="w-full text-lg lg:text-2xl text-center font-semibold group-hover:text-primary transition-all duration-200 ease-in">
        {title}
      </h6>

      <p className="w-full text-end text-[10px] lg:text-sm italic">
        {articleDate}
      </p>

      <p className="text-[12px] lg:text-xs text-neutral-500 ">
        {article_abstract}
      </p>
    </Link>
  );
};
