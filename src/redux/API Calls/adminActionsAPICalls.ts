import { publicRequest } from "../../requestMethods";
import { actionFailure, actionSuccess } from "../slices/adminActionsSlice";
import { userFailure, userFetching } from "../slices/profileSlice";
import { AppDispatch } from "../store";

export const changeSignUpLink = async (
  dispatch: AppDispatch,
  formLink: string
) => {
  // axios call
  try {
    // Update the form link
    await publicRequest.patch(``, { formLink });

    // Success
    dispatch(actionSuccess());
  } catch (error) {
    dispatch(actionFailure());
  }
};

export const adminCandidateUpdate = async (
  dispatch: AppDispatch,
  updateUserProps: object
) => {
  // axios call
  dispatch(userFetching());

  try {
    // Update User request
    await publicRequest.patch(`candidate/admin/update-candidate`, {
      ...updateUserProps,
    });

    // Success and returning the data
    // dispatch(userLoginSuccess({...updateUserProps }));
  } catch (error) {
    dispatch(userFailure());
  }
};
