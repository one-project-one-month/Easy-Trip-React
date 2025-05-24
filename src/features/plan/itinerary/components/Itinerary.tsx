import { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import DayPlan from "@/features/plan/itinerary/components/DayPlan";

import { type DayPlanProps } from "@/type/Trip";

export default function Itinerary({ plan }: { plan: DayPlanProps[] }) {
  const [selectedDatePlan, setSelectedDatePlan] = useState<DayPlanProps>(
    plan[0]
  );

  const buttonRowRef = useRef<HTMLDivElement>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (buttonRowRef.current) {
        buttonRowRef.current.scrollBy({ left: 100, behavior: "smooth" });
      }
    },
    onSwipedRight: () => {
      if (buttonRowRef.current) {
        buttonRowRef.current.scrollBy({ left: -100, behavior: "smooth" });
      }
    },
    trackMouse: true,
  });

  return (
    <section className="">
      <div className="bg-neutral-800 rounded-xl p-3">
        <h1 className="text-lg md:text-2xl font-semibold text-white">
          Itinerary
        </h1>
      </div>
      <div className="bg-neutral-200 mx-3 p-3 min-h-[800px]">
        <div
          {...handlers}
          ref={buttonRowRef}
          className="flex overflow-x-auto whitespace-nowrap gap-3 mb-5 md:flex hide-scrollbar"
        >
          {plan.map(item => (
            <Button
              variant={
                selectedDatePlan.date === item.date ? "secondary" : "ghost"
              }
              key={item.date}
              onClick={() => setSelectedDatePlan(item)}
              className="flex-shrink-0"
            >
              {item.date}
            </Button>
          ))}
        </div>

        <DayPlan plan={selectedDatePlan} />

        <Card className="text-center mt-5 p-0">
          <CardTitle>
            <h1 className="text-xl p-2">Things you should bring</h1>
          </CardTitle>
          <Separator />
          <CardContent>
            <ul className="md:text-lg">
              <li className="">Lorem, ipsum dolor.</li>
              <li className="">Lorem, Lorem, ipsum. ipsum dolor.</li>
              <li className="">Lorem ipsum dolor sit.</li>
              <li className="">Lorem, ipsum dolor.</li>
              <li className="">sit down stand up</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
