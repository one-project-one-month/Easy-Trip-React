import { useState } from "react";

import ActivityCard from "@/components/common/ActivityCard";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { type DayPlanProps, Activity } from "@/type/Trip";
import { Separator } from "@/components/ui/separator";

export default function DayPlan({ plan }: { plan: DayPlanProps }) {
	const [selectedActivity, setSelectedActivity] = useState<Activity>(
		plan.activities[0]
	);

	const handleActivity = (id: number) => {
		setSelectedActivity(plan.activities[id]);
	};
	return (
		<main>
			<section>
				<h1 className="text-lg font-semibold mb-3">{plan.date}</h1>

				<div className="flex flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-3 w-full md:w-[50%]">
						{plan.activities.map((activity) => (
							<ActivityCard
								id={activity.id}
								name={activity.name}
								activityClick={handleActivity}
							/>
						))}
					</div>

					<div className="w-full md:w-[50%]">
						<Card className="p-0">
							<CardTitle className="px-6 py-3 text-xl">
								{selectedActivity.name}
							</CardTitle>
							<Separator />
							<CardContent className="py-3">
								{selectedActivity.description}
							</CardContent>
							<Separator />
							<CardFooter className="py-3">
								<span className="font-semibold me-2">
									Location:
								</span>
								{selectedActivity.location}
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}
