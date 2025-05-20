import { useState } from "react";

import { Button } from "@/components/ui/button";

import DayPlan from "@/features/plan/itinerary/components/DayPlan";

import { type DayPlanProps } from "@/type/Trip";

export default function Itinerary({ plan }: { plan: DayPlanProps[] }) {
	const [selectedDatePlan, setSelectedDatePlan] = useState<DayPlanProps>(
		plan[0]
	);
	return (
		<section className="">
			<div className="bg-neutral-800 rounded-xl p-3">
				<h1 className="text-lg md:text-2xl font-semibold text-white">
					Itinerary
				</h1>
			</div>
			<div className="bg-neutral-200 mx-3 p-3 min-h-[800px]">
				<div className="max-md:grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3 mb-5">
					{plan.map((item) => (
						<Button
							variant={
								selectedDatePlan.date === item.date
									? "secondary"
									: "ghost"
							}
							key={item.date}
							onClick={() => setSelectedDatePlan(item)}
						>
							{item.date}
						</Button>
					))}
				</div>

				<DayPlan plan={selectedDatePlan} />
			</div>
		</section>
	);
}
