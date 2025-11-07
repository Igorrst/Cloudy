import { create } from "zustand";

interface ThemeState {
  isNight: boolean;
  toggleTheme: () => void;
  setNight: (value: boolean) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  isNight: false,
  toggleTheme: () => set((state) => ({ isNight: !state.isNight })),
  setNight: (value) => set({ isNight: value }),
}));

export default useThemeStore;