import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import useUpdateUserModal from "../hooks/useUpdateUserModal";
import Modal from "./Modal";

// Type
type UpdateUserModalProps = {
  handleSubmit: () => void;
  setUpdatedUser: React.Dispatch<React.SetStateAction<object>>;
};

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  handleSubmit,
  setUpdatedUser,
}) => {
  const updateUserModal = useUpdateUserModal();

  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? FaRegEyeSlash : FaRegEye;

  // Secondary Action
  const secondaryAction = () => setUpdatedUser({});

  // Body Content
  const bodyContent = (
    <div className="relative">
      <button
        className="absolute top-2 right-4"
        onClick={() => setShowPassword(!showPassword)}
      >
        <Icon color={showPassword ? "#fabc2a" : "#fb7185"} size={"1.5rem"} />
      </button>
      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        onChange={(e) => updateUserModal.setConfirmPassword(e.target.value)}
        className="w-full border-b border-b-neutral-300 focus:border-b-primary px-4 py-2 outline-none"
        placeholder="Enter your profile password to update your profile"
      />
    </div>
  );

  return (
    <Modal
      isOpen={updateUserModal.isOpen}
      actionLabel="Confirm to Update"
      title="Confirm with your password to update your profile"
      onClose={updateUserModal.onClose}
      onSubmit={handleSubmit}
      bodyContent={bodyContent}
      secondaryAction={secondaryAction}
      secondaryActionPresent={true}
    />
  );
};

export default UpdateUserModal;
