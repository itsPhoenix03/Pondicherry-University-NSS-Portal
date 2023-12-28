import { Disclosure, Transition } from "@headlessui/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import app from "../../firebase";
import CustomInputField from "../CustomInputField";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { adminCandidateUpdate } from "../../redux/API Calls/adminActionsAPICalls";

const UpdateAUser = () => {
  const currentUserIsAdmin = useAppSelector(
    (state) => state.profile.currentUser?.isAdmin
  );
  // Dispatch
  const dispatch = useAppDispatch();

  // Maintaining a state for edit fields
  const [updateUser, setUpdateUser] = useState<object>({});
  const [candidateEmail, setCandidateEmail] = useState("");

  // Handling the disable state
  const [disable, setDisable] = useState(false);

  // Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Storing the data in the state object
    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Candidate Email Change
  const handleCandidateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidateEmail(e.target.value);
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
        const storageRef = ref(storage, `user/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

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
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                setUpdateUser((p) => ({
                  ...p,
                  image: downloadURL,
                }));

                // Changing the disable state
                setDisable(false);
              }
            );
          }
        );
      }
    } catch (error) {
      console.log(error);
    }

    // ||||||||||||||||||||||||||||||||||||||||||||||||||
  };

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    close: () => void
  ) => {
    e.preventDefault();
    // Check for the object that any input is not empty string
    if (!Object.values(updateUser).every((value) => value !== "")) return;

    const finalUserUpdateObj = { candidateEmail, ...updateUser };

    if (Object.keys(updateUser).length !== 0) {
      if (currentUserIsAdmin)
        adminCandidateUpdate(dispatch, finalUserUpdateObj);

      setUpdateUser({});
      close();
    }
  };

  return (
    <Disclosure>
      {({ open, close }) => (
        <>
          <Disclosure.Button
            className={`flex justify-between items-start lg:items-center gap-4 w-full`}
          >
            <div className="">
              <h3 className="text-primary font-bold text-base lg:text-[1.5rem] lg:leading-[3rem] text-start">
                <span className="text-accent">#</span>&nbsp;Update Information
                of a Candidate
              </h3>
              <p className="text-accent/75 text-xs lg:text-[1rem] text-start">
                Fill only the fields wanted to be updated
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
              <form
                onSubmit={(e) => handleFormSubmit(e, close)}
                className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <input
                  type="file"
                  name="image"
                  className="inp text-xs lg:text-base md:col-span-2 lg:col-span-3"
                  onChange={(e) => {
                    if (e.target.files) handleImageUpload(e.target.files[0]);
                  }}
                />

                <CustomInputField
                  fieldName="candidateEmail"
                  handleChange={handleCandidateEmail}
                  label="*Candidate Registered Email Id"
                  placeholder={"Enter candidates email here"}
                  required={true}
                />
                <CustomInputField
                  fieldName="name"
                  handleChange={handleChange}
                  label="Update Name"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="email"
                  handleChange={handleChange}
                  label="Update Email Id"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="dateOfBirth"
                  handleChange={handleChange}
                  label="Update Date of Birth (Format:- yyyy-mm-dd)"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="fatherName"
                  handleChange={handleChange}
                  label="Update Father Name"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="motherName"
                  handleChange={handleChange}
                  label="Update Mother Name"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="department"
                  handleChange={handleChange}
                  label="Update Department Name"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="gender"
                  handleChange={handleChange}
                  label="Change Gender"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="castCategory"
                  handleChange={handleChange}
                  label="Change Cast Category"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="religion"
                  handleChange={handleChange}
                  label="Change Religion"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="courseSession"
                  handleChange={handleChange}
                  label="Change Course Session"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="bloodGroup"
                  handleChange={handleChange}
                  label="Update Blood Group"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="mobileNumber"
                  handleChange={handleChange}
                  label="Update Mobile Number"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="nativeState"
                  handleChange={handleChange}
                  label="Update Native State"
                  placeholder={"Put the new value"}
                />
                <CustomInputField
                  fieldName="presentAddress"
                  handleChange={handleChange}
                  label="Update Present Address"
                  placeholder={"Put the new value"}
                  className="md:col-span-2 lg:col-span-3"
                />
                <CustomInputField
                  fieldName="permanentAddress"
                  handleChange={handleChange}
                  label="Update Permanent Address"
                  placeholder={"Put the new value"}
                  className="md:col-span-2 lg:col-span-3"
                />
                <CustomInputField
                  fieldName="password"
                  handleChange={handleChange}
                  label="Change password"
                  placeholder={"Enter new password here"}
                />

                <div className="mt-4 md:col-span-2 lg:col-span-3 text-center md:text-end">
                  <button
                    className="w-full md:w-fit px-6 py-2 mb-4 md:mb-0 ml-0 md:ml-4 rounded-full border border-primary/75 text-primary bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300 ease-in-out text-xs lg:text-base"
                    onClick={() => setUpdateUser({})}
                    disabled={disable}
                    type="reset"
                  >
                    Clear Fields
                  </button>
                  <button
                    type="submit"
                    className="w-full md:w-fit px-6 py-2 md:mx-4 rounded-full font-semibold border border-accent text-accent bg-transparent hover:bg-accent/10 hover:text-accent transition-all duration-300 ease-in-out text-xs lg:text-base"
                    disabled={disable}
                  >
                    Update Information
                  </button>
                </div>
              </form>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default UpdateAUser;
