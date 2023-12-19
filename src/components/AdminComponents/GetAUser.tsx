import { Disclosure, Transition } from "@headlessui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import CustomInputField from "../CustomInputField";
import DetailsDisplayComponent from "../UserComponents/DetailsDisplayComponent";
import { useState } from "react";
import { UserType } from "../../types";
import { publicRequest } from "../../requestMethods";

const GetAUser = () => {
  // State for the fetched candidate info
  const [fetchedCandidate, setFetchedCandidate] = useState<UserType | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);

  // Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Get Candidate Information
  const handleFetch = async () => {
    setDisable(true);
    try {
      const res = await publicRequest.get(
        `candidate/admin/fetch-candidate/${email}`
      );

      if (res.data.error) {
        setError(res.data.error);
        setFetchedCandidate(null);
        return;
      }

      // Set the fetchedCandidate state
      setFetchedCandidate(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setDisable(false);
    }
  };

  // Candidate Information Container
  const CandidateInformation = ({
    image,
    name,
    email,
    mobileNumber,
    department,
    fatherName,
    motherName,
    gender,
    bloodGroup,
    courseSession,
    dateOfBirth,
    nativeState,
    permanentAddress,
    presentAddress,
    castCategory,
    religion,
  }: UserType) => (
    <div className="flex justify-evenly items-center gap-4 w-full mx-auto mt-8">
      <div className="h-full p-2 relative">
        <div className="h-[100%] w-[100%] skew-y-6 bg-accent/75 absolute -top-0 left-0" />
        <img
          src={image}
          alt={`${name}'s Image`}
          className="w-[150px] h-[150px] object-contain z-10 relative overflow-hidden"
        />
      </div>
      <div className="p-6 flex-auto grid grid-cols-3 gap-4">
        <div className="font-bold text-[2rem] mb-2 text-primary col-span-3">
          <span className="text-accent">#</span>
          {name}
        </div>
        <DetailsDisplayComponent label="Email" value={email} />
        <DetailsDisplayComponent label="Mobile Number" value={mobileNumber} />
        <DetailsDisplayComponent label="Department" value={department} />
        <DetailsDisplayComponent label="Father Name" value={fatherName} />
        <DetailsDisplayComponent label="Mother Name" value={motherName} />
        <DetailsDisplayComponent label="Date of Birth" value={dateOfBirth} />
        <DetailsDisplayComponent label="Gender" value={gender} />
        <DetailsDisplayComponent label="Blood Group" value={bloodGroup} />
        <DetailsDisplayComponent label="Religion" value={religion} />
        <DetailsDisplayComponent label="Cast Category" value={castCategory} />
        <DetailsDisplayComponent label="Native State" value={nativeState} />
        <DetailsDisplayComponent label="Course Session" value={courseSession} />
        <DetailsDisplayComponent
          label="Present Address"
          value={presentAddress}
          className="col-span-2"
        />
        <DetailsDisplayComponent
          label="Permanent Address"
          value={permanentAddress}
          className="col-span-3"
        />
      </div>
    </div>
  );

  // Placeholder Content
  const Placeholder = () => (
    <div className="w-full py-6 text-neutral-700/50 text-md font-semibold text-center">
      {error === "" ? (
        <p>
          Look&apos;s like you haven&apos;t fetched any candidate information
          yet!
        </p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex justify-between items-center gap-4 w-full`}
          >
            <div className="">
              <h3 className="text-primary font-bold text-[1.5rem]">
                <span className="text-accent">#</span>&nbsp;See a Candidate
                Information
              </h3>
              <p className="text-accent/75 text-[1rem] text-start">
                Fetch all the details for a candidate
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
              <div className="mt-2 flex justify-start items-center gap-2">
                <CustomInputField
                  fieldName="email"
                  handleChange={handleChange}
                  label="Registered Email of Candidate"
                  placeholder={"Enter email"}
                  className=""
                />

                <div className="mt-4 w-full">
                  <button
                    onClick={handleFetch}
                    className="px-6 py-2 mx-4 rounded-full border border-accent text-accent bg-transparent hover:bg-accent/10 hover:text-accent transition-all duration-300 ease-in-out"
                    disabled={disable}
                  >
                    Get Candidate Information
                  </button>
                </div>
              </div>

              <p className="relative my-6 font-semibold text-md text-primary after:absolute after:content-[''] after:w-[75%] after:h-[1px] after:bg-accent/30 after:top-3 after:ml-2">
                <span className="text-accent">#</span>&nbsp;Candidate Details
              </p>

              {fetchedCandidate ? (
                <CandidateInformation {...fetchedCandidate} />
              ) : (
                <Placeholder />
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default GetAUser;
