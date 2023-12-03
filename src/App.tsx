import "./App.css";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MainNav from "./components/MainNav";
import { Outlet, Link } from "react-router-dom";
import EventModal from "./components/EventModal";
import NewsModal from "./components/NewsModal";
import { useState } from "react";
import SlideShow from "./components/SlideShow";

//! Navbar Component

type NavbarProps = {
  userId: string;
};

const Navbar: React.FC<NavbarProps> = ({ userId }) => (
  <nav className="px-10 py-4 border-b-[1px] border-b-neutral-200">
    <ul className="flex justify-end items-center gap-8">
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to="/events">Latest Events</Link>
      </li>
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to="/news">News</Link>
      </li>
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to={`/user/${userId}`}>User Profile</Link>
      </li>
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to="/">Register / Login</Link>
      </li>
    </ul>
  </nav>
);

//! Main App Component

function App() {
  // State to swap between between the picture slideshow and home section
  const [showContent, setShowContent] = useState(false);

  // TODO Create a function to fetch the user
  // Dummy user id
  const userId = "1223";

  // Handle showContent function
  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <>
      <EventModal />
      <NewsModal />
      <main className="bg-background font-display">
        <HeaderNav />
        <MainNav />
        {!showContent ? (
          <>
            <SlideShow />
            <button
              onClick={handleShowContent}
              className="px-6 py-4 bg-accent text-white font-semibold text-lg cursor-pointer absolute bottom-[5rem] right-0 hover:bg-primary
              transition-all duration-300 ease-in-out"
            >
              Go to Pondicherry University NSS Portal
            </button>
          </>
        ) : (
          <div className="max-w-[1240px] mx-auto my-10 p-4 bg-[#fff]">
            <header className="">
              <Navbar userId={userId} />
            </header>
            <Outlet />
          </div>
        )}
        {showContent && <Footer />}
      </main>
    </>
  );
}

export default App;
