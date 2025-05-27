import axios from "axios";

import API from "@/lib/apiConfig";
import { DestinationDetail } from "@/store/appSettingStore";

export const getPopularPlaces = async () => {
  try {
    const response = await API.get("/destinations/popular");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw new Error(String(error));
  }
};

export const getSearchPlaces = async (search: string) => {
  try {
    const response = await API.get("/destinations", {
      params: {
        search,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw new Error(String(error));
  }
};

export const getThingsYouShouldKnow = async (data: DestinationDetail) => {
  try {
    const response = await API.post(
      "/trip/planner/thring-you-should-know",
      data
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }

    throw new Error(String(error));
  }
};
