import "./App.css";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MainNav from "./components/MainNav";
import { Outlet, Link, useLocation } from "react-router-dom";
import EventModal from "./components/EventModal";
import NewsModal from "./components/NewsModal";
import { useAppSelector } from "./hooks/reduxHooks";

//! Navbar Component

type NavbarProps = {
  userId?: string;
  isUserLoggedIn: boolean;
  isAdmin: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ userId, isUserLoggedIn, isAdmin }) => (
  <nav className="px-10 py-4 border-b-[1px] border-b-neutral-200">
    <ul className="flex justify-end items-center gap-8">
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to="/events">Latest Events</Link>
      </li>
      <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
        <Link to="/news">News</Link>
      </li>
      {!isAdmin &&
        (isUserLoggedIn ? (
          <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
            <Link to={`/user/${userId}`}>Your Candidate Profile</Link>
          </li>
        ) : (
          <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
            <Link to="/auth">Register / Login</Link>
          </li>
        ))}
      {isAdmin && (
        <>
          <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
            <Link to="/auth">Register / Login</Link>
          </li>

          <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
            <Link to={`/user/${userId}`}>Admin Panel</Link>
          </li>
        </>
      )}
    </ul>
  </nav>
);

//! Main App Component

function App() {
  // Location Hook
  const showContent = useLocation().pathname === "/" ? false : true;

  // User is their or not
  const { _id, isAdmin } = useAppSelector((state) =>
    state.profile.currentUser
      ? state.profile.currentUser
      : { _id: "", isAdmin: false }
  );
  const isUserLoggedIn = _id ? true : false;

  return (
    <>
      <EventModal />
      <NewsModal />
      <main className="bg-background font-display">
        <HeaderNav />
        <MainNav />
        {showContent ? (
          <>
            <div className="max-w-[1240px] mx-auto my-10 p-4 bg-[#fff]">
              <header className="">
                <Navbar
                  userId={_id}
                  isUserLoggedIn={isUserLoggedIn}
                  isAdmin={isAdmin}
                />
              </header>
              <Outlet />
            </div>
            <Footer />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default App;
