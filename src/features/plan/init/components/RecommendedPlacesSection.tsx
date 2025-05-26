import { useGetPopularPlace } from "../../hooks/usePlan";
import RecommendPlaceCard from "./RecommendPlaceCard";

import { Destination } from "@/type/Destination";

function RecommendedPlacesSection() {
  const { data, isLoading } = useGetPopularPlace();

  return (
    <section className="w-full mx-auto px-4 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-neutral-800 leading-snug">
          No idea? Let us inspire you.
        </h1>
        <p className="text-lg text-neutral-600 mt-2">
          Explore handpicked destinations perfect for a quick getaway.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }, (_, idx) => (
              <RecommendPlaceCard.Skeleton key={idx} />
            ))
          : data?.content?.map((destination: Destination, index: number) => (
              <RecommendPlaceCard data={destination} key={index} />
            ))}
      </div>
    </section>
  );
}

export default RecommendedPlacesSection;
