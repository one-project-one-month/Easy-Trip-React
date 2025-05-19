import { useState } from "react";

import { Button } from "@/components/ui/button";

import DayPlan from "@/features/plan-detail/components/DayPlan";

import { type DayPlanProps } from "@/type/Trip";

export default function Itinerary({ plan }: { plan: DayPlanProps[] }) {
	const [selectedDatePlan, setSelectedDatePlan] = useState<DayPlanProps>(
		plan[0]
	);
	return (
		<section className="">
			<div className="bg-amber-300 rounded-xl p-3">
				<h1>Itinerary</h1>
			</div>
			<div className="bg-gray-300 mx-3 p-3">
				<div className="flex gap-3 mb-5">
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
