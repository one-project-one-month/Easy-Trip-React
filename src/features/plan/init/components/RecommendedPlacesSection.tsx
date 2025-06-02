import { Separator } from "@/components/ui/separator";
import { useGetPopularPlace } from "../../hooks/usePlan";
import RecommendPlaceCard from "./RecommendPlaceCard";

import { DestinationInitProps } from "@/type/Trip";

function RecommendedPlacesSection() {
  const { data, isLoading } = useGetPopularPlace();

  return (
    <section className="w-full mx-auto px-4 md:py-12">
      <Separator />
      <div className="mb-6 pt-3">
        <h1 className="md:text-4xl text-2xl font-extrabold text-neutral-800 leading-snug">
          No idea? Let us inspire you.
        </h1>
        <p className="md:text-lg text-sm text-neutral-600 mt-2">
          Explore handpicked destinations perfect for a quick getaway.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 8 }, (_, idx) => (
              <RecommendPlaceCard.Skeleton key={idx} />
            ))
          : data?.content?.map(
              (destination: DestinationInitProps, index: number) => (
                <RecommendPlaceCard data={destination} key={index} />
              )
            )}
      </div>
    </section>
  );
}

export default RecommendedPlacesSection;
