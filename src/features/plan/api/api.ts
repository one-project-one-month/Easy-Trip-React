import API from "@/lib/apiConfig";
import { DestinationDetail } from "@/store/appSettingStore";
import { TRIP_PLANNER_API } from "./api.constant";

export const getGeneratedTripPlan = async (data: DestinationDetail) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20 * 1000);

  try {
    const response = await API.post(
      TRIP_PLANNER_API.GENERATE_TRIP_PLAN.URL,
      data,
      { signal: controller.signal }
    );
    return response.data;
  } finally {
    clearTimeout(timeout);
  }
};
