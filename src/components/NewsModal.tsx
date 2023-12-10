import { useState } from "react";
import useNewsModal from "../hooks/useNewsModal";
import Modal from "./Modal";

//Type for News Article Object
type newNewsArticleObj = {
  title: string;
  article: string;
  article_abstract: string;
  image: string;
};

// DEFAULT OBJECT FOR STATE
const DEFAULT_ARTICLE_OBJ: newNewsArticleObj = {
  title: "",
  article: "",
  article_abstract: "",
  image: "",
};

//! Event Modal Component

const NewsModal = () => {
  const newsModal = useNewsModal();

  // State to maintain the news article object
  const [newNewsArticle, setNewNewsArticle] = useState<newNewsArticleObj>({
    ...DEFAULT_ARTICLE_OBJ,
  });

  //TODO Submit function for New News Article Addition

  const handleSubmit = () => {
    // Check for the object that any input is not empty string
    if (!Object.values(newNewsArticle).every((value) => value !== "")) return;

    //TODO submit functionality

    console.log(newNewsArticle);
    setNewNewsArticle(DEFAULT_ARTICLE_OBJ);

    newsModal.onClose();
  };

  // Handle Change Function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Storing the data in the state object
    setNewNewsArticle({
      ...newNewsArticle,
      [e.target.name]: e.target.value,
    });
  };

  const bodyContent = (
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="title"
        className="w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Article Title"
      />

      <input
        type="file"
        accept="image/*"
        name="image"
        className="inp w-full text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder=""
      />

      <input
        type="text"
        name="article_abstract"
        className="w-full col-span-2 text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the abstract for the article (max 40)"
      />

      <textarea
        name="article"
        className="w-full col-span-2 text-sm px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Content of the Article"
        rows={15}
      ></textarea>
    </div>
  );

  return (
    <Modal
      isOpen={newsModal.isOpen}
      actionLabel="Add NSS Event"
      title="Create a New NSS Event Announcement"
      onClose={newsModal.onClose}
      onSubmit={handleSubmit}
      bodyContent={bodyContent}
    />
  );
};

export default NewsModal;
