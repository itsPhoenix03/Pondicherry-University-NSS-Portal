import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dummyImg from "../assets/ss-3.png";

type NewsArticle = {
  img: string;
  title: string;
  content: string;
  articleDate: string;
};

const NewsArticle = () => {
  const { newsId: articleId } = useParams();
  const [articleData, setArticleData] = useState<NewsArticle | null>(null);

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    if (articleId) fetchArticle(articleId);
  }, [articleId]);

  const fetchArticle = async (articleId: string) => {
    //TODO: use the axios to fetch the content from backend
    console.log(articleId);
    const data: NewsArticle = {
      img: "",
      title: "",
      content: "",
      articleDate: "",
    };

    setArticleData(data);
  };

  console.log(articleData);

  return (
    <div className="p-8 my-6 border border-neutral-200/75">
      <img
        src={dummyImg}
        alt=""
        className="object-contain h-[25rem] w-auto mx-auto"
      />

      <h3 className="font-semibold text-[2.5rem] my-4 w-full text-center text-primaryDark">
        Title for the news article
      </h3>

      <p className="w-full text-right italic font-medium my-4 text-sm">
        Published on Date
      </p>

      <div className="font-special font-light text-md text-neutral-700 my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptas voluptate assumenda corporis, vero rem in architecto
          perferendis esse dolorum repellat quod quisquam blanditiis fugit nihil
          quaerat eius vel a tenetur itaque est mollitia tempore id. Adipisci,
          voluptatem quo? Itaque labore dignissimos deserunt non doloremque.
          Laboriosam error ratione, atque a voluptatum non facere soluta neque
          illo. Soluta, nostrum cumque error, ad nobis maiores dignissimos
        </p>
      </div>
    </div>
  );
};

export default NewsArticle;
