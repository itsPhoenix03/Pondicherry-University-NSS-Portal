import { useState } from "react";
import loginSvg from "../assets/svgs/login.svg";

// Type

type loginObjType = {
  registrationNumber: "";
  password: "";
};

//! Login Component

const LoginComponent: React.FC = () => {
  // State for managing the form object
  const [loginObj, setLoginObj] = useState<loginObjType>({
    registrationNumber: "",
    password: "",
  });

  // Handle Change Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Changing the login object as of form values
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });

    console.log("change func: " + loginObj);
  };

  // On Submit function for form
  const onSubmit = (e: React.FormEvent) => {
    // Prevent the refreshing of the page
    e.preventDefault();

    console.log(loginObj);
  };

  return (
    <form
      className="w-full border-b border-b-neutral-200 flex flex-col justify-center items-center gap-6 py-8 px-4"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="registrationNumber"
        onChange={handleChange}
        placeholder="Enter your Registration Number"
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
  return (
    <section className="flex justify-center items-center gap-4 px-4 py-2 mt-4">
      <div className="w-1/2 ">
        <img src={loginSvg} alt="NSS Logo" />
      </div>

      <div className="w-1/3 flex flex-col justify-center items-start gap-4">
        <h5 className="text-2xl font-semibold text-primary">
          Login NSS Student
        </h5>

        <LoginComponent />

        <div className="w-full text-end px-4 py-2">
          <span>
            New Registration{" "}
            <a
              href="https://forms.gle/htY1EpPMbJzgxdGV8"
              target="_blank"
              className="text-primary hover:underline underline-offset-[5px] cursor-pointer"
            >
              Sign Up
            </a>{" "}
            here!
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignUpAndLogin;
