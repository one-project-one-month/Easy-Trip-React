import { create } from "zustand";

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

const useAppSettingStore = create<AppSettingStore>(set => ({
  destination: undefined,
  setDestinationSetting: value =>
    set(state => ({
      destination: {
        ...state.destination,
        ...value,
      },
    })),
}));

export default useAppSettingStore;
