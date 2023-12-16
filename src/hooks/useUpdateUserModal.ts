// A custom hook for maintaining the open and closing of a modal window
// Using zustand package for maintaining the states persistance

import { create } from "zustand";

// Create a type for the modal state

type UseUpdateUserModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
};

// Creating the custom hook for maintaining the opening and closing of the modal

const useUpdateUserModal = create<UseUpdateUserModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  confirmPassword: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));

export default useUpdateUserModal;
