import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import footerLogo from "../assets/PU_Logo-BG-White.png";
import { navType } from "./HeaderNav";

//! Footer Component

const Footer = () => {
  const quickLinkArr: navType[] = [
    {
      name: "RTI",
      link: "#",
    },
    {
      name: "National Cyber Crime Portal",
      link: "#",
    },
    {
      name: "Anti - Ragging",
      link: "#",
    },
    {
      name: "Anti - Discrimination",
      link: "#",
    },
    {
      name: "Hindi Word for this day",
      link: "#",
    },
    {
      name: "How to reach?",
      link: "#",
    },
    {
      name: "Feedback",
      link: "#",
    },
    {
      name: "Disclaimer",
      link: "#",
    },
  ];

  const importantLinkArr: navType[] = [
    {
      name: "Women's Cell",
      link: "#",
    },
    {
      name: "SHPC",
      link: "#",
    },
    {
      name: "SRC",
      link: "#",
    },
    {
      name: "Grievances",
      link: "#",
    },
    {
      name: "HEPSN Cell",
      link: "#",
    },
    {
      name: "IPR Cell",
      link: "#",
    },
    {
      name: "Research and Development Cell",
      link: "#",
    },
    {
      name: "Incubation Facility",
      link: "#",
    },
    {
      name: "ASPIRE (LBI) - PU",
      link: "#",
    },
    {
      name: "Recruitment Portal",
      link: "#",
    },
  ];

  const constituentUnitsArr: navType[] = [
    {
      name: "UGC - MMTTC",
      link: "#",
    },
    {
      name: "DACE - PU",
      link: "#",
    },
    {
      name: "Community College - Puducherry",
      link: "#",
    },
    {
      name: "Community College - Mahe",
      link: "#",
    },
    {
      name: "DDE",
      link: "#",
    },
    {
      name: "Karaikal Campus",
      link: "#",
    },
    {
      name: "Port Blair Campus",
      link: "#",
    },
  ];

  return (
    <>
      <section className="bg-primaryDark py-[30px] text-white font-special">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 w-fit ml-auto mr-auto">
          <div className="flex flex-col justify-center items-center lg:items-start gap-4">
            <img
              src={footerLogo}
              alt="Pondicherry UNiversity Logo"
              width={102}
              // height={340}
            />
            <h5 className=" text-[15px] font-extralight">
              Pondicherry University
            </h5>

            <div className="flex justify-start items-center gap-4">
              <div className="border-[2px] border-white/50 rounded-full p-[0.5rem] text-[15px] hover:bg-accent transition-all ease-linear duration-300 hover:border-accent cursor-pointer">
                <AiOutlineInstagram />
              </div>
              <div className="border-[2px] border-white/50 rounded-full p-[0.5rem] text-[12px] hover:bg-accent transition-all ease-linear duration-300 hover:border-accent cursor-pointer">
                <RiTwitterXFill />
              </div>
              <div className="border-[2px] border-white/50 rounded-full p-[0.5rem] text-[12px] hover:bg-accent transition-all ease-linear duration-300 hover:border-accent cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="border-[2px] border-white/50 rounded-full p-[0.5rem] text-[12px] hover:bg-accent transition-all ease-linear duration-300 hover:border-accent cursor-pointer">
                <FaFacebookF />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center lg:items-start gap-4">
            <h5 className="mb-[15px] text-[13px] lg:text-[15px]">
              Get in Touch with Us for world class Education.
            </h5>

            <p className="text-white/75 text-[13px] lg:text-[15px] font-light leading-8">
              The Registrar,
              <br />
              R Venkat Raman Nagar, Kalapet
              <br />
              Pondicherry - 605 014, India
              <br />
              registrar@pondiuni.edu.in
              <br />
              Tel : 0413 - 2655179 Fax : 0413 - 2655734
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-start gap-12">
            <div className="flex flex-col justify-center items-center lg:items-start gap-4">
              <h5 className="text-[15px] font-extralight">Quick Links</h5>

              <ul className="list-none text-[13px] text-white/75 font-extralight">
                {quickLinkArr.map((link) => (
                  <li
                    key={link.name}
                    className="my-2 hover:text-white cursor-pointer text-center lg:text-inherit"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-4">
              <h5 className="text-[15px] font-extralight">Important Links</h5>

              <ul className="list-none text-[13px] text-white/75 font-extralight">
                {importantLinkArr.map((link) => (
                  <li
                    key={link.name}
                    className="my-2 hover:text-white cursor-pointer text-center lg:text-inherit"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-4">
              <h5 className="text-[15px] font-extralight">Constituent Units</h5>

              <ul className="list-none text-[13px] text-white/75 font-extralight">
                {constituentUnitsArr.map((link) => (
                  <li
                    key={link.name}
                    className="my-2 hover:text-white cursor-pointer text-center lg:text-inherit"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryDark font-special text-white border border-t-[1px] border-[#797979]">
        <div className="ml-auto mr-auto w-[75%] flex justify-between items-center gap-4 py-2">
          <span className="text-[10px] md:text-[13px]">
            Copyright 2023 &copy; Pondicherry University
          </span>

          <div className="text-[10px] md:text-[15px] font-light flex justify-between items-center gap-4">
            <a href="#">ICT Policy</a>
            <span>Developed By Sheryas</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
