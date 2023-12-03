import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

// Component Props Type
type ModalProps = {
  isOpen?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  bodyContent?: React.ReactElement;
  actionLabel: string;
};

//! The basic Modal Component

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onSubmit,
  onClose,
  title,
  bodyContent,
  actionLabel,
}) => {
  // State to control the opening and closing modal
  const [showModal, setShowModal] = useState(isOpen);

  // Effect for showModal changes
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Handling closing of the modal
  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Handling the submit action
  const handleSubmit = () => {
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none overflow-x-hidden overflow-y-auto bg-neutral-800/70 font-display">
      {/* Main Modal Component */}
      <div className="relative w-7/12 h-auto my-6 mx-auto">
        <div
          className={`transition duration-500 h-full ${
            showModal ? "translate-y-0" : "translate-y-full"
          } ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="h-auto transition border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-center justify-center p-6 relative border-b-[1px]">
              <div className="text-md font-semibold md:text-lg">{title}</div>
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute right-3 md:right-9"
              >
                <IoMdClose size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="relative p-6 flex-auto">{bodyContent}</div>

            {/* Footer */}
            <div className="p-4 w-full flex justify-end items-center gap-4">
              <button
                className="border border-accent bg-transparent text-accent px-4 py-2 hover:bg-accent hover:text-white transition-all duration-300 ease-in-out w-auto font-semibold text-sm"
                onClick={handleSubmit}
              >
                {actionLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
