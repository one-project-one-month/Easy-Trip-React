import { useQuery } from "@tanstack/react-query";

import {
  getSearchPlaces,
  getThingsYouShouldKnow,
} from "../services/destinationService";
import { getPopularPlaces } from "../services/destinationService";
import { DestinationDetail } from "@/store/appSettingStore";

export const useGetPopularPlace = () => {
  return useQuery({
    queryKey: ["destination", "popular"],
    queryFn: getPopularPlaces,
  });
};

export const useSearchPlace = (search: string) => {
  return useQuery({
    queryKey: ["destination", search],
    queryFn: () => getSearchPlaces(search),
    enabled: false,
  });
};

export const useGenerateThingsYouShouldKnow = (data: DestinationDetail) => {
  return useQuery({
    queryKey: ["generate-things-you-should-know", data],
    queryFn: () => getThingsYouShouldKnow(data),
    enabled: !!data.destination_id,
    staleTime: 1000 * 60 * 60,
  });
};
