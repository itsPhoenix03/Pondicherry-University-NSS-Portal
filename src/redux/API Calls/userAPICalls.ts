import { UserComponentProps } from "../../pages/User";
import {
  getUserSuccess,
  userFailure,
  userFetching,
  userLoginSuccess,
} from "../slices/profileSlice";
import { AppDispatch } from "../store";

export const login = async (
  dispatch: AppDispatch,
  user: UserComponentProps
) => {
  //axios call
  dispatch(userFetching());

  try {
    // Dummy data
    const res = user;

    dispatch(userLoginSuccess(res));
  } catch (error) {
    dispatch(userFailure());
  }
};
