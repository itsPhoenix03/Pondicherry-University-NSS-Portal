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

  //TODO: Check the Chatgpt and implement the  functionality

  // Secondary Action
  const secondaryAction = () => setUpdatedUser({});

  // Body Content
  const bodyContent = (
    <input
      type="text"
      name="confirmPassword"
      onChange={(e) => updateUserModal.setConfirmPassword(e.target.value)}
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
      secondaryAction={secondaryAction}
      secondaryActionPresent={true}
    />
  );
};

export default UpdateUserModal;
