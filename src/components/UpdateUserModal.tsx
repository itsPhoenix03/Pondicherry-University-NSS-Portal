import { useState } from "react";
import useUpdateUserModal from "../hooks/useUpdateUserModal";
import Modal from "./Modal";

const UpdateUserModal = () => {
  const updateUserModal = useUpdateUserModal();

  //TODO: Check the Chatgpt and implement the  functionality

  // State to track the confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  // Body Content
  const bodyContent = (
    <input
      type="text"
      name="confirmPassowrd"
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="w-full border-b border-b-neutral-300 focus:border-b-primary px-4 py-2 outline-none"
      placeholder="Enter your profile password to update your profile"
    />
  );

  return (
    <Modal
      isOpen={updateUserModal.isOpen}
      actionLabel="Confirm to Update"
      title="Confirm with your password to update your profile"
      onClose={updateUserModal.onClose}
      onSubmit={handleSubmit}
      bodyContent={bodyContent}
    />
  );
};

export default UpdateUserModal;
