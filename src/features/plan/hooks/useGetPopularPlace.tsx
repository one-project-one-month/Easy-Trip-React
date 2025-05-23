import { useQuery } from "@tanstack/react-query"
import { getPopularPlaces } from "../services/destinationService"


function useGetPopularPlace() {
  return useQuery({
    queryKey: ['destination', 'popular'],
    queryFn: getPopularPlaces,
  })
}

export default useGetPopularPlace