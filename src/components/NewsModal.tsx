import { useState } from "react";
import useNewsModal from "../hooks/useNewsModal";
import Modal from "./Modal";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addNews } from "../redux/API Calls/newsAPICalls";
import toast from "react-hot-toast";

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

  // Handling the disable state
  const [disable, setDisable] = useState(false);

  // Dispatch
  const dispatch = useAppDispatch();

  // Submit function for New News Article Addition

  const handleSubmit = () => {
    // Check for the object that any input is not empty string
    if (!Object.values(newNewsArticle).every((value) => value !== "")) return;

    // submit functionality
    addNews(dispatch, newNewsArticle);

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

  // Handle image upload
  const handleImageUpload = async (file: File) => {
    // ||||||||||||||||||||||||||||||||||||||||||||||||||

    // Changing the disable state
    setDisable(true);
    try {
      if (file) {
        const fileName = new Date().getTime() + file.name;

        const storage = getStorage(app);
        const storageRef = ref(storage, `news/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        const toastId = toast.loading("Uploading article image...");

        await uploadTask.on(
          "state_changed",
          (snapshot) => {
            // const progressPercentage = Math.round(
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // );
            // setProgress(`Upload is ${progressPercentage}% done`);
            // console.log("Upload is " + progress + "% done");

            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                console.log("default");
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error.message);
            toast.error("Oops! Article image can't be uploaded", {
              id: toastId,
            });
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                setNewNewsArticle((p) => ({
                  ...p,
                  image: downloadURL,
                }));

                toast.success("Article image uploaded", {
                  id: toastId,
                });

                // Changing the disable state
                setDisable(false);
              }
            );
          }
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong :/");
    }

    // ||||||||||||||||||||||||||||||||||||||||||||||||||
  };

  const bodyContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="title"
        className="w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the Article Title"
      />

      <input
        type="file"
        accept="image/*"
        name="image"
        className="inp w-full text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={(e) => {
          if (e.target.files) handleImageUpload(e.target.files[0]);
        }}
        placeholder=""
      />

      <input
        type="text"
        name="article_abstract"
        className="w-full md:col-span-2 text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
        onChange={handleChange}
        placeholder="Enter the abstract for the article (max 40)"
      />

      <textarea
        name="article"
        className="w-full md:col-span-2 text-[8px] lg:text-sm px-1 lg:px-4 py-2 outline-none border-b border-b-neutral-500 focus:border-b-primaryDark focus:text-primary focus:placeholder:text-primary/50"
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
      disable={disable}
      bodyContent={bodyContent}
    />
  );
};

export default NewsModal;
