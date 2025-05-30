import { Plus } from "lucide-react";

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

import useAppSettingStore from "@/store/appSettingStore";
import { useGenerateTripPlan } from "../../hooks/useGenerateTripPlan";
import GenerateLoader from "@/components/core/GenerateScreenLoader";
import AccomodationSection from "./AccomodationSection";
import TransportationSection from "./TransportationSection";
import TipsSection from "./TipsSection";
import DayByDayPlan from "./DayByDayPlan";

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
    data: plan,
    isLoading: isTripPlanLoading,
    isError: isTripPlanError,
  } = useGenerateTripPlan(payload);

  if (isTripPlanError) throw new Error("Error generating trip plan");

  if (isTripPlanLoading || !plan || !plan.place_detail || !plan.generate_data) {
    return <GenerateLoader />;
  }

  return (
    <main>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-lg md:text-3xl">Find Out your Trip</h1>
      </div>

      <section className="flex flex-col md:flex-row gap-5 mb-5 mb-8 border-b pb-6">
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
