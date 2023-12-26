import { useEffect } from "react";
import { LatestNewsComponent, NewsComponent } from "../components/NewsCard";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useNewsModal from "../hooks/useNewsModal";
import { fetchAllNews } from "../redux/API Calls/newsAPICalls";

//! News Page Component

const News = () => {
  // Dispatch
  const dispatch = useAppDispatch();

  // Finding curren user is Admin or not
  const isAdmin = useAppSelector((state) => state.profile.currentUser?.isAdmin);

  // All the news article
  const allNews = useAppSelector((state) => state.news.allNews);

  const latestNews = allNews.slice(0, 1)[0];
  const restAllNews = allNews.slice(1, allNews.length);

  // Fetch all news articles
  useEffect(() => {
    fetchAllNews(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Modal Hook
  const newsModal = useNewsModal();

  // Handle Open Modal function
  const handleOpen = () => {
    newsModal.onOpen();
  };

  return (
    <section className="px-2 py-4 mt-4">
      <div className="flex justify-between items-center gap-4">
        {/* Heading and Subtitle */}
        <div className="">
          <h5 className="text-primary text-2xl font-semibold flex justify-start items-center gap-2">
            Latest News
          </h5>
          <p className="text-sm text-neutral-500 my-2">
            Information about latest NSS events that occurred recently
          </p>
        </div>

        {/* Button */}
        {isAdmin && (
          <button
            className="border border-accent px-6 py-2 rounded-full cursor-pointer text-accent hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleOpen}
          >
            Add New News Article
          </button>
        )}
      </div>

      {/* If No News Article */}
      {/* Card Component */}
      {allNews.length === 0 ? (
        <div className="text-center py-12 text-neutral-800/75 font-semibold my-8">
          <p>Look&apos;s like no news is been posted till now!</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-3 gap-4">
          <LatestNewsComponent {...latestNews} />

          {restAllNews.map((news) => (
            <NewsComponent key={news._id} {...news} />
          ))}
        </div>
      )}
    </section>
  );
};

export default News;
