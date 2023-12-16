import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const UserCertificates = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex justify-between items-center gap-4 w-full`}
          >
            <div className="">
              <h3 className="text-primary font-bold text-[1.5rem]">
                <span className="text-accent">#</span>&nbsp;Your
                Certificate&apos;s Information
              </h3>
              <p className="text-accent/75 text-[1rem] text-start">
                See your certificate&apos;s
              </p>
            </div>

            <IoChevronDownCircleOutline
              color={"#FABC2A"}
              size={"2rem"}
              className={`transition-all duration-300 ease-in-out ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
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
              <div className="p-8">
                <h3 className="text-center text-neutral-600">Coming Soon...</h3>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default UserCertificates;
