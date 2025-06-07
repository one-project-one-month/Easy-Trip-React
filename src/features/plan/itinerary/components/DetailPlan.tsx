import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import useAppSettingStore from "@/store/appSettingStore";
import { useGenerateTripPlan } from "../../hooks/useGenerateTripPlan";
import { useGetDestinationDescription } from "../../hooks/usePlan";
import GenerateLoader from "@/components/core/GenerateScreenLoader";
import AccomodationSection from "./AccomodationSection";
import TransportationSection from "./TransportationSection";
import TipsSection from "./TipsSection";
import DayByDayPlan from "./DayByDayPlan";
import { Highlight } from "@/type/Trip";
import Map from "@/components/common/Map";

export default function DetailPlan() {
  const destination = useAppSettingStore(s => s.destination);

  const payload = {
    destination_id: destination?.destination_id,
    startDate: destination?.startDate,
    endDate: destination?.endDate,
    attendentsType: destination?.attendentsType,
    budget: destination?.budget,
  };

  const { data: description, isLoading: descriptionLoading } =
    useGetDestinationDescription(payload.destination_id || "");

  const {
    data: plan,
    isLoading: isTripPlanLoading,
    isError: isTripPlanError,
  } = useGenerateTripPlan(payload);

  if (isTripPlanError) throw new Error("Error generating trip plan");

  if (
    isTripPlanLoading ||
    !plan ||
    !plan.place_detail ||
    !plan.generate_data ||
    descriptionLoading
  ) {
    return <GenerateLoader />;
  }

  console.log(plan?.generate_data?.budget_breakdown.total_estimated, "hello");
  return (
    <main>
      <div className="flex items-center gap-3 mb-5">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Find Out your Trip
        </h1>
      </div>

      {/* //TODO: Add more sections like "Trip Overview", need to refactor. */}
      <section className="grid lg:grid-cols-2 gap-5 mb-5 border-b pb-6">
        <div className="w-full">
          <Card className="relative p-5 md:p-8 flex flex-col h-full justify-between border">
            <div>
              <CardHeader className="flex justify-between items-center p-0 mb-3">
                <CardTitle className="text-2xl lg:text-4xl font-extrabold flex items-center gap-2 text-primary">
                  <span className="inline-block">
                    {plan?.place_detail?.name ?? "No Name Available"}
                  </span>
                  <span className="text-base text-primary/80 font-semibold">
                    {plan?.place_detail?.address?.state &&
                      `(${plan?.place_detail?.address?.state} region)`}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardDescription className="sm:text-lg mb-3 text-gray-600 italic">
                {plan?.generate_data.title ?? "No title available."}
              </CardDescription>
              <Separator className="my-2" />
              <CardContent className="md:text-lg p-0 mt-2 text-gray-900 font-medium">
                {plan?.generate_data?.description ??
                  "No description available."}
              </CardContent>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <Separator />
              <span className="text-base font-semibold text-gray-700">
                Total Estimated Budget
              </span>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-green-800 drop-shadow">
                  {plan?.generate_data?.budget_breakdown.total_estimated?.toLocaleString() ??
                    "N/A"}
                </span>
                <span className="text-lg font-semibold text-green-700 mb-1">
                  MMK
                </span>
              </div>
              <span className="text-xs text-gray-500">
                This is an approximate cost for your trip.
              </span>
            </div>
            <span className="absolute top-3 right-3 bg-primary text-white text-[10px] md:text-xs px-4 py-1 rounded-full shadow-lg font-semibold tracking-wide">
              {plan?.place_detail?.category ?? "Destination"}
            </span>
          </Card>
        </div>
        {description && description?.content && (
          <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col gap-4">
            <Carousel>
              <CarouselContent>
                {description?.content?.highlights?.map(
                  (hl: Highlight, idx: number) => (
                    <CarouselItem
                      key={idx}
                      className="h-70 md:h-80 lg:h-96 flex flex-col items-center justify-center"
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={hl.url}
                          alt={hl.name}
                          className="rounded-2xl w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 rounded-b-2xl">
                          <h3 className="text-white text-lg font-bold drop-shadow">
                            {hl.name}
                          </h3>
                          {hl.description && (
                            <p className="text-gray-200 md:text-sm mt-1 line-clamp-2">
                              {hl.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </section>
      <Map
        lat={plan?.place_detail.latitude}
        lng={plan?.place_detail.longitude}
        place={plan?.place_detail.name}
      />

      <DayByDayPlan plan={plan?.generate_data?.day_by_day_plan} />
      <AccomodationSection accomodation={plan?.generate_data?.accomodation} />
      <TransportationSection
        transportation={plan?.generate_data?.transportation}
      />
      <TipsSection
        culturalTips={plan?.generate_data?.cultural_sensitivity_tips}
        emergencyTips={plan?.generate_data?.emergency_tips}
      />
    </main>
  );
}
