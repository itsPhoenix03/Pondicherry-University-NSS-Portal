import { MdClose, MdMenuOpen } from "react-icons/md";
import "./App.css";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import MainNav from "./components/MainNav";
import { Outlet, Link, useLocation } from "react-router-dom";
import EventModal from "./components/EventModal";
import NewsModal from "./components/NewsModal";
import { useAppSelector } from "./hooks/reduxHooks";
import { Disclosure, Transition } from "@headlessui/react";

//! Navbar Component

type NavbarProps = {
  userId?: string;
  isUserLoggedIn: boolean;
  isAdmin: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ userId, isUserLoggedIn, isAdmin }) => (
  <>
    {/* Desktop and Tab Nav */}
    <nav className="hidden md:block px-10 py-4 border-b-[1px] border-b-neutral-200 text-[14px] lg:text-[17px]">
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

    {/* Mobile Nav */}
    <Disclosure>
      {({ open }) => (
        <nav className="block md:hidden px-1 py-2 border-b-[1px] border-b-neutral-200 text-[12px]">
          <Disclosure.Button
            className={`transition-all duration-300 ease-in-out ${
              open ? "-rotate-90" : "rotate-0"
            }`}
          >
            {!open ? (
              <MdMenuOpen color={"#FABC2A"} size={"2rem"} />
            ) : (
              <MdClose color={"#f17f7f"} size={"2rem"} />
            )}
          </Disclosure.Button>

          <Transition
            enter="transition duration-300 ease-in delay-50"
            enterFrom="transform -translate-y-50 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-300 ease-out delay-50"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-50 opacity-0"
          >
            <Disclosure.Panel className={``}>
              <ul className="flex flex-col justify-end items-end gap-8">
                <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                  <Link to="/events">Latest Events</Link>
                </li>
                <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                  <Link to="/news">News</Link>
                </li>
                {!isAdmin &&
                  (isUserLoggedIn ? (
                    <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                      <Link to={`/user/${userId}`}>Your Candidate Profile</Link>
                    </li>
                  ) : (
                    <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                      <Link to="/auth">Register / Login</Link>
                    </li>
                  ))}
                {isAdmin && (
                  <>
                    <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                      <Link to="/auth">Register / Login</Link>
                    </li>

                    <li className="cursor-pointer relative before:absolute before:bg-primary before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[1px] hover:before:w-full hover:text-primary transition-all before:transition-[width] before:duration-300 before:ease-in-out">
                      <Link to={`/user/${userId}`}>Admin Panel</Link>
                    </li>
                  </>
                )}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </nav>
      )}
    </Disclosure>
  </>
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
      <main className="bg-background font-display ">
        <HeaderNav />
        <MainNav />
        {showContent ? (
          <>
            <div className="max-w-[1240px]  lg:mx-auto my-10 p-4 bg-[#fff]">
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
