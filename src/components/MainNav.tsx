import logo from "../assets/PU_Logo_Full.png";
import nssLogo from "../assets/nss-logo-1.png";

//! Main Navigation

const MainNav = () => {
  return (
    <section className="bg-primaryDark">
      <div className="flex justify-evenly items-center gap-8 md:gap-20 py-4 md:py-2 lg:py-1 text-white md:ml-auto md:mr-auto md:max-w-[1240px]">
        <img
          src={logo}
          alt="pondicherry university logo"
          width={300}
          className="object-cover h-auto"
        />

        <div className="hidden lg:flex flex-row-reverse justify-between items-center gap-4">
          <img
            src={nssLogo}
            alt="nss logo"
            width={75}
            className="object-cover h-auto"
          />

          <span className="text-special text-white font-semibold">
            Pondicherry University National Service Scheme Portal
          </span>
        </div>

        {/* <div className="flex justify-start items-center gap-10 font-semibold text-[14px]">
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            About
          </button>
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            Administration
          </button>
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            Academics
          </button>
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            Research
          </button>
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            Campus Life
          </button>
          <button className="p-[5px] transition-[color] duration-300 ease-in-out hover:text-accent">
            Discover PU
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default MainNav;
