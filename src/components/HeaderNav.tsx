// Types

export type navType = {
  name: string;
  link: string;
};

//! Top Most Header Navbar Component

const HeaderNav = () => {
  const navArr: navType[] = [
    {
      name: "Mail",
      link: "#",
    },
    {
      name: "Alumni",
      link: "#",
    },
    {
      name: "Library",
      link: "#",
    },
    {
      name: "Distance Education",
      link: "#",
    },
    {
      name: "Examination Wing",
      link: "#",
    },
    {
      name: "International Relations",
      link: "#",
    },
    {
      name: "Contact Directory",
      link: "#",
    },
  ];

  return (
    <section className="justify-end flex">
      <div className="h-[25px] md:h-auto lg:w-[45%] md:mr-[3rem] lg:mr-[13rem] flex justify-between items-center py-2">
        {navArr.map((nav) => (
          <span
            key={nav.name}
            className="hidden md:block md:text-[9px] lg:text-[12px] py-[3px] px-[5px] cursor-pointer relative before:absolute before:bg-[#656eAF] before:content-[''] before:-bottom-[1px] before:left-0 before:w-0 before:h-[3px] hover:before:w-full hover:text-[#656EAF] transition-all before:transition-[width] before:duration-300 before:ease-in-out"
          >
            {nav.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeaderNav;
