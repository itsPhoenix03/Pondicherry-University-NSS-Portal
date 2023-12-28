import { useState } from "react";
import loginSvg from "../assets/svgs/login.svg";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { login } from "../redux/API Calls/userAPICalls";
import { Navigate } from "react-router-dom";
import CustomInputField from "../components/CustomInputField";
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
      setLoginObj({
        email: "",
        password: "",
      });
    }
  };

  if (isCurrentUserAvailable && !currentUser?.isAdmin)
    return <Navigate to={`/user/${currentUser?._id}`} replace />;

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6 py-6 px-0 md:px-4"
      onSubmit={onSubmit}
    >
      <CustomInputField
        fieldName="email"
        handleChange={handleChange}
        label="Registered Email Id"
        placeholder="Enter your registered email id"
        required={true}
        className="z-10"
      />

      <CustomInputField
        fieldName="password"
        handleChange={handleChange}
        label="Password"
        placeholder="Enter your account password"
        required={true}
        className="z-10"
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
  const formLink = useAppSelector((state) => state.adminAction.signUpFormLink);

  const Icon = registrationLinkStatus
    ? AiOutlineExclamationCircle
    : IoWarningOutline;

  return (
    <section className="flex justify-center items-center gap-4 px-4 py-2 mt-4">
      <div className="w-2/5 lg:w-1/2 hidden md:block">
        <img src={loginSvg} alt="NSS Logo" className="" />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-start gap-4">
        <h5 className="text-2xl font-semibold text-primary">
          Login for Pondicherry University&nbsp;
          <span className="text-accent">NSS Candidate</span>
        </h5>

        <LoginComponent />

        <h6
          className="relative font-semibold text-accent/80 text-center w-full after:absolute after:content-[''] after:top-3 after:-right-5 after:w-[35%] md:after:w-[40%] after:h-[1px] after:bg-accent/50
          before:absolute before:content-[''] before:top-3 before:w-[35%] md:before:w-[40%] before:h-[1px] before:bg-accent/50 before:-left-5
        "
        >
          Sign Up Here!
        </h6>

        <div
          className={`w-full relative text-start px-12 lg:px-8 py-4 mt-4 ${
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
            <p className="text-black/75 text-center text-xs lg:text-sm">
              New Registration are currently opened, so Register yourself
              through this&nbsp;
              <a
                // TODO: Update the link from here
                href={
                  formLink ? formLink : "https://forms.gle/htY1EpPMbJzgxdGV8"
                }
                target="_blank"
                className="text-accent hover:underline underline-offset-[5px] cursor-pointer"
              >
                link
              </a>
              &nbsp;here!
            </p>
          ) : (
            <p className="text-neutral-700/80  text-center text-xs lg:text-sm">
              Registrations for NSS are currently been closed!
              <br />
              Please contact your NSS coordinator for further information on
              this process.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUpAndLogin;
