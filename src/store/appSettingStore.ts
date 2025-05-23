import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AppSettingStore = {
  destination: string;
  setDestinationSetting: (value: string) => void;
};

const useAppSettingStore = create<AppSettingStore>()(
  persist(
    (set) => ({
      destination: "",
      setDestinationSetting: (value: string) => {
        set({ destination: value });
      },
    }),
    {
      name: "app-setting",
      storage: createJSONStorage(() => localStorage),
    }
  )
);


export const getDestination = () => useAppSettingStore.getState().destination;


export default useAppSettingStore;
