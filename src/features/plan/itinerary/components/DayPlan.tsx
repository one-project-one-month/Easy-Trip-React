// import { useState } from "react";
//
// import ActivityCard from "@/components/common/ActivityCard";
// import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { type DayPlanProps } from "@/type/Trip";
// import { Separator } from "@/components/ui/separator";

export default function DayPlan({ plan }: { plan: DayPlanProps }) {
  console.log(plan);
  // const [selectedActivity, setSelectedActivity] = useState<Activity>(
  //   plan.activities[0]
  // );

  // const handleActivity = (id: number) => {
  //   setSelectedActivity(plan.activities[id]);
  // };
  return (
    <>hello</>
    // <main>
    //   <section>
    //     <h1 className="text-lg font-semibold mb-3">{plan.date}</h1>

    //     <div className="flex flex-col md:flex-row gap-5">
    //       <div className="flex flex-col gap-3 w-full md:w-[50%]">
    //         {plan.activities.map(activity => (
    //           <ActivityCard
    //             key={activity}
    //             id={activity}
    //             name={activity}
    //             activityClick={handleActivity}
    //           />
    //         ))}
    //       </div>

    //       <div className="w-full md:w-[50%]">
    //         <Card className="p-0">
    //           <CardTitle className="px-6 py-3 text-xl">
    //             {selectedActivity.name}
    //           </CardTitle>
    //           <Separator />
    //           <CardContent className="py-3">
    //             <div className="flex gap-5 mb-3 lg:h-70">
    //               <img
    //                 src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
    //                 alt=""
    //                 className="rounded-2xl w-full h-full object-cover"
    //               />
    //             </div>
    //             {selectedActivity.description}
    //           </CardContent>
    //           <Separator />
    //           <CardFooter className="py-3">
    //             <span className="font-semibold me-2">Location:</span>
    //             {selectedActivity.location}
    //           </CardFooter>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
