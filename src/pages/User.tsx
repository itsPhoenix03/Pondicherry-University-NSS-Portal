import React from "react";
import DetailsDisplayComponent from "../components/UserComponents/DetailsDisplayComponent";

export type UserComponentProps = {
  image: string;
  name: string;
  email: string;
  department: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  religion: string;
  castCategory: string;
  mobileNumber: string;
  nativeState: string;
  presentAddress: string;
  permanentAddress: string;
  fatherName: string;
  motherName: string;
};

const UserComponent: React.FC<UserComponentProps> = ({
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
  return (
    <div className="flex justify-evenly items-center gap-4 w-full mx-auto mt-8">
      <div className="h-full p-2 relative">
        <div className="h-[100%] w-[100%] skew-y-6 bg-accent absolute -top-0 left-0" />
        <img
          src={image}
          alt={`${name}'s Image`}
          className="w-full h-full object-contain z-10 relative overflow-hidden"
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
  );
};

//Dummy data
const dummyUser: UserComponentProps = {
  image: "https://placekitten.com/200/200", // Replace with a valid image URL
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  bloodGroup: "A+",
  religion: "Christian",
  castCategory: "General",
  mobileNumber: "1234567890",
  nativeState: "California",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Park Ave, Townsville",
  fatherName: "Robert Doe",
  motherName: "Mary Doe",
};

const User = () => {
  return <UserComponent {...dummyUser} />;
};

export default User;
