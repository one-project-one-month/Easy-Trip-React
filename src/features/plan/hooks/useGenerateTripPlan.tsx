import { DestinationDetail } from "@/store/appSettingStore";
import { useQuery } from "@tanstack/react-query";
import { TRIP_PLANNER_API } from "../api/api.constant";
import { getGeneratedTripPlan } from "../api/api";

export const useGenerateTripPlan = (data: DestinationDetail) => {
  return useQuery({
    queryKey: [TRIP_PLANNER_API.GENERATE_TRIP_PLAN.cacheKey, data],
    queryFn: () => getGeneratedTripPlan(data),
    enabled: !!data.destination_id,
    staleTime: TRIP_PLANNER_API.GENERATE_TRIP_PLAN.cacheTime,
    select: data => data.content,
  });
};
