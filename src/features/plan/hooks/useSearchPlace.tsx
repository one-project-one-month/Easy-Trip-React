import { useQuery } from "@tanstack/react-query"
import { getSearchPlaces } from "../services/destinationService"

function useSearchPlace(search: string) {
  return (
    useQuery({
        queryKey: ['destination', search],
        queryFn: () => getSearchPlaces(search),
        enabled: false,
    })
  )
}

export default useSearchPlace