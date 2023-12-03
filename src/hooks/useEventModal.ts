// A custom hook for maintaining the open and closing of a modal window
// Using zustand package for maintaining the states persistance

import { create } from "zustand";

// Create a type for the modal state

type useEventModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Creating the custom hook for maintaining the opening and closing of the modal

const useEventModal = create<useEventModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEventModal;
