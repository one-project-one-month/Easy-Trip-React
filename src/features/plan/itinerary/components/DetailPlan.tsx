import { Link } from "react-router";
import { ArrowLeft, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
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

import Itinerary from "./Itinerary";

import useAppSettingStore from "@/store/appSettingStore";
import { useGenerateThingsYouShouldKnow } from "../../hooks/usePlan";
import { useGenerateTripPlan } from "../../hooks/useGenerateTripPlan";

export default function DetailPlan() {
  const destination = useAppSettingStore(s => s.destination);

  const payload = {
    destination_id: destination?.destination_id,
    startDate: destination?.startDate,
    endDate: destination?.endDate,
    attendentsType: destination?.attendentsType,
    budget: destination?.budget,
  };

  const {
    data: thingsYouShouldBring,
    isLoading: isThingsYouShouldBringLoading,
    isError: isThingsYouShouldBringError,
  } = useGenerateThingsYouShouldKnow(payload);

  const {
    data: plan,
    isLoading: isTripPlanLoading,
    isError: isTripPlanError,
  } = useGenerateTripPlan(payload);

  if (isThingsYouShouldBringError || isTripPlanError)
    throw new Error("Error generating trip plan or things you should bring.");

  if (
    isThingsYouShouldBringLoading ||
    isTripPlanLoading ||
    !plan ||
    !plan.place_detail ||
    !plan.generate_data
  ) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
          <span className="animate-pulse">Generating</span>
          <span className="flex space-x-1">
            <span className="animate-bounce [animation-delay:-0.2s]">.</span>
            <span className="animate-bounce [animation-delay:-0.1s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="flex items-center gap-3 mb-5">
        <Button className="rounded-full" size="default">
          <Link to="">
            <ArrowLeft />
          </Link>
        </Button>
        <h1 className="text-lg md:text-3xl">Find Out your Trip</h1>
      </div>

      {/* //TODO: Add more sections like "Trip Overview", need to refactor. */}
      <section className="flex flex-col md:flex-row gap-5 mb-5 border-b pb-6">
        <div className="w-full md:w-[50%]">
          <Card className="p-5 md:p-8 justify-between h-70 md:h-80 lg:h-96">
            <div>
              <CardHeader className="flex justify-between items-center p-0 mb-2">
                <CardTitle className="text-2xl lg:text-4xl font-bold">
                  {plan?.place_detail?.name ?? "No Name Available"}
                  <span>
                    {"(" + (plan?.place_detail?.address?.state || "") + ")"}
                  </span>
                </CardTitle>
                <Button variant={"outline"}>
                  <Plus />
                </Button>
              </CardHeader>
              <CardDescription className="sm:text-lg mb-2">
                {plan?.generate_data.title ?? "No title available."}
              </CardDescription>
              <Separator />
              <CardContent className="md::text-lg p-0 mt-2">
                {plan?.generate_data?.description ??
                  "No description available."}
              </CardContent>
            </div>
            <h1 className="md:text-xl font-bold ">Total Cost : 2000 USD</h1>
          </Card>
        </div>
        <div className="w-full md:w-[50%]  rounded-2xl overflow-hidden">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="h-70 md:h-80 lg:h-96">
                <img
                  src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
                  alt=""
                  className="rounded-2xl w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-70 md:h-80 lg:h-96">
                <img
                  src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
                  alt=""
                  className="rounded-2xl w-full h-full object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* //TODO: Add more sections like "Accomodation", need to refactor. */}
      <section id="accomodation" className="mb-2 border-b pb-12">
        <h1 className="text-lg md:text-2xl font-semibold mb-2">Accomodation</h1>
        <h5 className="text-md text-gray-600 mb-2">
          {plan?.generate_data?.accomodation.suggested_area ??
            "No accomodation description available."}
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plan?.generate_data?.accomodation?.hotel_option?.map(
            (hotel: any, index: number) => (
              <Card
                key={index}
                className="flex flex-col items-center p-4 transition-shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Hotel"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <CardHeader className="p-0 mb-1 w-full text-center">
                  <CardTitle className="text-lg font-semibold">
                    {hotel?.name ?? "No Name"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 w-full text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    ⭐ N/A · Free WiFi · Breakfast included
                  </div>
                  <div className="font-bold text-sm text-primary">
                    From {hotel?.price_per_night} MMK/night
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* //TODO: Add more sections like "Transportation", need to refactor. */}
      <section id="transportation" className="mb-8">
        <h1 className="text-lg md:text-2xl font-semibold mb-2">
          Transportation
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
            alt="Transportation"
            className="w-full md:w-1/3 h-48 object-cover rounded-xl"
          />
          <div className="flex-1">
            <div className="mb-2 text-md text-gray-700">
              <span className="font-semibold">Local Pass:</span>{" "}
              {plan?.generate_data?.transportation?.local_pass ??
                "No transportation info available."}
            </div>
            <div>
              <span className="font-semibold">Recommendations:</span>
              <ul className="list-disc list-inside ml-4 mt-1 text-gray-700">
                {(
                  plan?.generate_data?.transportation?.recommandation_info ?? []
                ).map((info: string, idx: number) => (
                  <li key={idx}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* //TODO: Add more sections like "Cultural Sensitivity Tips", need to refactor. */}
      <section id="tips" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cultural Sensitivity Tips */}
          <div className="bg-orange-50 rounded-xl p-6 shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-orange-700">
              Cultural Sensitivity Tips
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {(plan?.generate_data?.cultural_sensitivity_tips ?? []).map(
                (tip: string, idx: number) => (
                  <li key={idx}>{tip}</li>
                )
              )}
            </ul>
          </div>
          {/* Emergency Tips */}
          <div className="bg-red-50 rounded-xl p-6 shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-red-700">
              Emergency Tips
            </h2>
            <ul className="text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Nearest Clinic:</span>{" "}
                {plan?.generate_data?.emergency_tips?.nearest_clinic ?? "N/A"}
              </li>
              <li>
                <span className="font-semibold">Tourist Police:</span>{" "}
                {plan?.generate_data?.emergency_tips?.tourist_police ?? "N/A"}
              </li>
              <li>
                <span className="font-semibold">General Emergency:</span>{" "}
                {plan?.generate_data?.emergency_tips?.general_emergency ??
                  "N/A"}
              </li>
              <li>
                <span className="font-semibold">Local Assistance:</span>{" "}
                {plan?.generate_data?.emergency_tips?.local_assistance ?? "N/A"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Itinerary
        plan={plan?.generate_data?.day_by_day_plan ?? []}
        thingsYouShouldBring={thingsYouShouldBring?.data ?? []}
      />
    </main>
  );
}
