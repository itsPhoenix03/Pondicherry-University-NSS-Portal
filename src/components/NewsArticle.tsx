import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NewsType } from "../types";
import { publicRequest } from "../requestMethods";

const NewsArticle = () => {
  const { newsId: articleId } = useParams();
  const [articleData, setArticleData] = useState<NewsType | null>(null);

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

  if (articleData)
    return (
      <div className="p-8 my-6 border border-neutral-200/75">
        <img
          src={articleData.image}
          alt=""
          className="object-contain h-[25rem] w-auto mx-auto"
        />

        <h3 className="font-semibold text-[2.5rem] my-4 w-full text-center text-primaryDark">
          {articleData.title}
        </h3>

        <p className="w-full text-right italic font-medium my-4 text-sm">
          {new Date(articleData.createdAt).toDateString()}
        </p>

        <div className="font-special font-light text-md text-neutral-700 my-4">
          <p>{articleData.article}</p>
        </div>
      </div>
    );
};

export default NewsArticle;
