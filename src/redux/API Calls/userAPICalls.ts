import { publicRequest } from "../../requestMethods";

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
  //axios call
  dispatch(userFetching());

  try {
    // Fetching data
    const res = await publicRequest.post("auth/login", user);

    // Success and returning the data
    dispatch(userLoginSuccess(res.data));
  } catch (error) {
    dispatch(userFailure());
  }
};
