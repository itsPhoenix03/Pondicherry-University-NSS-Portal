import React from "react";
import DetailsDisplayComponent from "../components/UserComponents/DetailsDisplayComponent";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { changeStatus } from "../redux/slices/registrationLinkSlice";
import { logout } from "../redux/slices/profileSlice";
import { Navigate } from "react-router-dom";
import { UserType } from "../types";

const UserComponent: React.FC<UserType> = ({
  _id,
  image,
  name,
  email,
  department,
  dateOfBirth,
  gender,
  bloodGroup,
  religion,
  castCategory,
  mobileNumber,
  nativeState,
  presentAddress,
  permanentAddress,
  fatherName,
  motherName,
}) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    if (_id) dispatch(logout());
  };

  return (
    <>
      <div className="flex justify-evenly items-center gap-4 w-full mx-auto mt-8">
        <div className="h-full p-2 relative">
          <div className="h-[100%] w-[100%] skew-y-6 bg-accent absolute -top-0 left-0" />
          <img
            src={image}
            alt={`${name}'s Image`}
            className="w-[150px] h-[150px] object-contain z-10 relative overflow-hidden"
          />
        </div>
        <div className="p-6 flex-auto grid grid-cols-3 gap-4">
          <div className="font-bold text-[2rem] mb-2 text-primary col-span-3">
            {name}
          </div>
          {/* <div className="text-sm text-gray-600 mb-2">{email}</div> */}
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
      <button
        onClick={handleLogout}
        className="border border-rose-400 bg-transparent text-rose-400 py-2 px-4 font-semibold ml-[90%] hover:bg-rose-400 hover:text-white transition-all duration-300 ease-in-out"
      >
        Logout
      </button>
    </>
  );
};

const AdminComponent = () => {
  const registrationLinkStatus = useAppSelector(
    (state) => state.registrationLink.isOpened
  );
  const dispatch = useAppDispatch();

  return (
    <div className="mt-8">
      <h5 className="text-primary text-3xl font-semibold">
        Welcome, Pondicherry University NSS Admin
      </h5>

      <div className="mt-8">
        <p className="text-lg font-semibold text-neutral-700">
          Registration Open/Close Button
        </p>

        <div className="flex justify-start items-center gap-12 p-4">
          <span>
            Current Status of Registration:{" "}
            <span
              className={`${
                registrationLinkStatus ? "text-green-500" : "text-rose-400"
              } font-semibold`}
            >
              {registrationLinkStatus ? "Open" : "Close"}
            </span>
          </span>
          <button
            onClick={() => dispatch(changeStatus())}
            className={`border bg-transparent ${
              registrationLinkStatus
                ? "border-rose-400 text-rose-400 hover:bg-rose-400"
                : "border-green-500 text-green-500 hover:bg-green-500"
            } px-6 py-2 cursor-pointer  hover:text-white transition-all duration-300 ease-in-out rounded-full`}
          >
            {registrationLinkStatus ? "Close" : "Open"} Registration
          </button>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  const currentUser = useAppSelector((state) => state.profile.currentUser);

  if (!currentUser) return <Navigate to="/auth" replace />;

  console.log(currentUser);
  return currentUser.isAdmin ? (
    <AdminComponent />
  ) : (
    <UserComponent {...currentUser} />
  );
};

export default User;
