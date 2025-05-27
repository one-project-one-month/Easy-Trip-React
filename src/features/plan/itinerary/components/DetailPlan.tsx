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

import { tripPlan } from "@/shared/tripPlan";

interface DetailPlanProps {
  thingsYouShouldBring?: string[];
}

export default function DetailPlan({ thingsYouShouldBring }: DetailPlanProps) {
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

      <section className="flex flex-col md:flex-row gap-5 mb-5 ">
        <div className="w-full md:w-[50%]">
          <Card className="p-5 md:p-8 justify-between h-70 md:h-80 lg:h-96 shadow-2xl">
            <div>
              <CardHeader className="flex justify-between items-center p-0 mb-2">
                <CardTitle className="text-2xl lg:text-4xl font-bold">
                  {tripPlan.destination}
                </CardTitle>
                <Button variant={"outline"}>
                  <Plus />
                </Button>
              </CardHeader>
              <CardDescription className="sm:text-lg mb-2">
                {tripPlan.title}
              </CardDescription>
              <Separator />
              <CardContent className="md::text-lg p-0 mt-2">
                {tripPlan.description}
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

      <Itinerary
        plan={tripPlan.day_by_day_plan}
        thingsYouShouldBring={thingsYouShouldBring}
      />
    </main>
  );
}
