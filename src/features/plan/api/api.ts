import API from "@/lib/apiConfig";
import { DestinationDetail } from "@/store/appSettingStore";
import { TRIP_PLANNER_API } from "./api.constant";
import axios from "axios";

export const getGeneratedTripPlan = async (data: DestinationDetail) => {
  try {
    const response = await API.post(
      TRIP_PLANNER_API.GENERATE_TRIP_PLAN.URL,
      data,
      { timeout: 60 * 60 * 1000 }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw new Error(String(error));
  }
};
