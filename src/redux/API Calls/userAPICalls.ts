import toast from "react-hot-toast";
import { publicRequest } from "../../requestMethods";
import { UserType } from "../../types";

import {
  userFailure,
  userFetching,
  userLoginSuccess,
} from "../slices/profileSlice";
import { AppDispatch } from "../store";

// Type
type UserProps = {
  email: string;
  password: string;
};

export const login = async (dispatch: AppDispatch, user: UserProps) => {
  // axios call
  dispatch(userFetching());

  try {
    // Fetching data
    const res = await publicRequest.post("auth/login", user);

    // Success and returning the data
    dispatch(userLoginSuccess(res.data));
    toast.success(`Welcome Back! ${res.data.name}`);
  } catch (error) {
    dispatch(userFailure());
    toast.error("Oops! Something went wrong :/");
  }
};

export const update = async (
  dispatch: AppDispatch,
  updateUserProps: object,
  user: UserType
) => {
  // axios call
  dispatch(userFetching());

  try {
    // Update User request
    await publicRequest.patch(`candidate/${user._id}`, {
      ...updateUserProps,
      _id: user._id,
    });

    // Success and returning the data
    dispatch(userLoginSuccess({ ...user, ...updateUserProps }));
    toast.success("Profile Update Successful");
  } catch (error) {
    dispatch(userFailure());
    toast.error("Oops! Something went wrong :/");
  }
};
