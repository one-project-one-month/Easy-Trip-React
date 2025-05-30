import { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type DayPlanProps } from "@/type/Trip";

interface DayByDayPlanProps {
  plan: DayPlanProps[];
  thingsYouShouldBring?: string[];
}

export default function DayByDayPlan({ plan }: DayByDayPlanProps) {
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
    <section className="mb-4">
      <div className="min-h-fit">
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

        <Card className="mb-6 shadow-lg flex flex-row">
          <div className="w-1/3 md:w-1/4 p-2 ps-4">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Day Plan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Day {selectedDatePlan?.day}: {selectedDatePlan?.title}
              </CardTitle>
              <CardDescription className="text-gray-500">
                {selectedDatePlan?.date} · {selectedDatePlan?.place}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <span className="font-semibold">Description:</span>
                <span className="ml-2">{selectedDatePlan?.description}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Activities:</span>
                <ul className="list-disc list-inside ml-4">
                  {selectedDatePlan?.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="font-bold text-primary">
                Estimated Day Budget: {selectedDatePlan?.estimated_day_budget}{" "}
                MMK
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
