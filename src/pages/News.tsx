import { LatestNewsComponent, NewsComponent } from "../components/NewsCard";
import { useAppSelector } from "../hooks/reduxHooks";
import useNewsModal from "../hooks/useNewsModal";

//! News Page Component

const News = () => {
  const isAdmin = useAppSelector((state) => state.profile.currentUser?.isAdmin);
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
            className="border border-accent px-4 py-2 cursor-pointer text-accent hover:bg-accent hover:text-white transition-all duration-300 ease-in-out"
            onClick={handleOpen}
          >
            Add New News Article
          </button>
        )}
      </div>

      {/* Card Component */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        <LatestNewsComponent />

        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
      </div>
    </section>
  );
};

export default News;
