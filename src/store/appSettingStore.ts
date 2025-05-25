import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type DestinationDetail = {
  destination_id?: string;
  startDate?: string;
  endDate?: string;
  budget?: string;
  attendentsType?: string;
};

type AppSettingStore = {
  destination?: DestinationDetail;
  setDestinationSetting: (value: Partial<DestinationDetail>) => void;
};

const useAppSettingStore = create<AppSettingStore>()(
  persist(
    (set, get) => ({
      destination: undefined,
      setDestinationSetting: value => {
        const prev = get().destination || {};
        set({
          destination: {
            ...prev,
            ...value,
          },
        });
      },
    }),
    {
      name: "app-setting",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAppSettingStore;
