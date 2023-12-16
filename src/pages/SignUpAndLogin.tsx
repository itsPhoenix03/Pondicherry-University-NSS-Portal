import { useState } from "react";
import loginSvg from "../assets/svgs/login.svg";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { login } from "../redux/API Calls/userAPICalls";
import { Navigate } from "react-router-dom";
// Type

type loginObjType = {
  email: "";
  password: "";
};

//! Login Component

const LoginComponent: React.FC = () => {
  // Current User Not Null
  const currentUser = useAppSelector((state) => state.profile.currentUser);
  const isCurrentUserAvailable = currentUser ? true : false;

  // Dispatch
  const dispatch = useAppDispatch();

  // State for managing the form object
  const [loginObj, setLoginObj] = useState<loginObjType>({
    email: "",
    password: "",
  });

  // Handle Change Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Changing the login object as of form values
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit function for form
  const onSubmit = (e: React.FormEvent) => {
    // Prevent the refreshing of the page
    e.preventDefault();

    // Check so that admin don't fire the login but can see the changes on login page
    if (!isCurrentUserAvailable) {
      // Fire the login api call
      login(dispatch, { ...loginObj });
    }
  };

  if (isCurrentUserAvailable)
    return <Navigate to={`/user/${currentUser?._id}`} replace />;

  return (
    <form
      className="w-full border-b border-b-neutral-200 flex flex-col justify-center items-center gap-6 py-8 px-4"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="Enter your Registered Email Id"
        className="w-full py-2 px-4 outline-none border-b-[1px] border-b-neutral-200 focus:border-b-primary transition-[border-bottom] duration-300 ease-in-out text-sm"
      />

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter your Password"
        className="w-full py-2 px-4 outline-none border-b-[1px] border-b-neutral-200 focus:border-b-primary transition-[border-bottom] duration-300 ease-in-out text-sm"
      />

      <button
        type="submit"
        className="w-full border border-primary text-primary rounded-full py-2 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out mt-4"
      >
        Login
      </button>
    </form>
  );
};

//! Sign and Login Wrapper Component

const SignUpAndLogin = () => {
  const registrationLinkStatus = useAppSelector(
    (state) => state.registrationLink.isOpened
  );

  const Icon = registrationLinkStatus
    ? AiOutlineExclamationCircle
    : IoWarningOutline;

  return (
    <section className="flex justify-center items-center gap-4 px-4 py-2 mt-4">
      <div className="w-1/2 ">
        <img src={loginSvg} alt="NSS Logo" className="" />
      </div>

      <div className="w-1/3 flex flex-col justify-center items-start gap-4">
        <h5 className="text-2xl font-semibold text-primary">
          Login for Pondicherry University{" "}
          <span className="text-accent">NSS Candidate</span>
        </h5>

        <LoginComponent />

        <div
          className={`w-full relative text-start px-8 py-4 mt-4 ${
            registrationLinkStatus
              ? "border border-accent bg-accent/5"
              : " border border-rose-400 bg-rose-400/5"
          } rounded-xl`}
        >
          <Icon
            color={registrationLinkStatus ? "#fabc2a" : "#fb7185"}
            fontSize={"2rem"}
            className="absolute top-4 left-2"
          />
          {registrationLinkStatus ? (
            <p className="text-black/75 text-center text-sm">
              New Registration are currently opened, so Register yourself
              through this{" "}
              <a
                href="https://forms.gle/htY1EpPMbJzgxdGV8"
                target="_blank"
                className="text-accent hover:underline underline-offset-[5px] cursor-pointer"
              >
                link
              </a>{" "}
              here!
            </p>
          ) : (
            <p className="text-rose-400 text-center text-sm">
              Registrations for NSS are currently been closed!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUpAndLogin;
