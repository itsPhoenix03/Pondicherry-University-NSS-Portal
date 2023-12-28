import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NewsType } from "../types";
import { publicRequest } from "../requestMethods";
import { FaTrash } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { deleteNews } from "../redux/API Calls/newsAPICalls";

const NewsArticle = () => {
  // Dispatch
  const dispatch = useAppDispatch();

  // Fetching if the user an Admin or not
  const isAdmin = useAppSelector((state) => state.profile.currentUser?.isAdmin);

  const { newsId: articleId } = useParams();
  const [articleData, setArticleData] = useState<NewsType | null>(null);

  // Handle Delete
  const handleDelete = (_id: string) => {
    deleteNews(dispatch, _id);
    window.location.replace("/news");
  };

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    const fetchArticle = async (_id: string) => {
      // use the axios to fetch the content from backend
      const res = await publicRequest.get(`news/${_id}`);

      setArticleData(res.data);
    };

    if (articleId) fetchArticle(articleId);
  }, [articleId]);

  if (articleData && articleData.createdAt)
    return (
      <div className="relative p-8 my-6 border border-neutral-200/75">
        {isAdmin && articleId && (
          <button
            className="absolute top-2 md:top-4 right-2 md:right-4"
            onClick={() => handleDelete(articleId)}
          >
            <FaTrash size={"1.5rem"} color={"#ec3c3cc3"} />
          </button>
        )}
        <img
          src={articleData.image}
          alt=""
          className="object-cover md:object-contain h-[25rem] w-auto mx-auto"
        />

        <h3 className="font-semibold text-2xl md:text-[2.5rem] md:leading-[3rem] my-4 w-full text-center text-primaryDark">
          {articleData.title}
        </h3>

        <p className="w-full text-right italic font-medium my-4 text-[12px] lg:text-sm">
          {new Date(articleData.createdAt).toDateString()}
        </p>

        <div className="font-special font-light text-[13px] md:text-sm lg:text-md text-neutral-700 my-4">
          <p>{articleData.article}</p>
        </div>
      </div>
    );
};

export default NewsArticle;
