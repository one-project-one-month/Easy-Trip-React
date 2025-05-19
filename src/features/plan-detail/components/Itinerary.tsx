import { useState } from "react";

import { Button } from "@/components/ui/button";

import DayPlan from "@/features/plan-detail/components/DayPlan";

import { type DayPlanProps } from "@/type/Trip";

const plan: DayPlanProps[] = [
	{
		day: 1,
		date: "2025-06-01",
		title: "Arrival & Golden Hour Exploration",
		place: "New Bagan",
		description:
			"Settle in, grab your e-bike, and start with the nearest wonders.",
		activities: [
			"Check-in to Hotel Yadanarbon",
			"Visit Dhammayangyi Temple",
			"Watch sunset from Shwesandaw Pagoda",
			"Dinner at Sanon Training Restaurant",
		],
		estimated_day_budget: 80000,
	},
	{
		day: 2,
		date: "2025-06-02",
		title: "Temples & Traditional Shows",
		place: "Old Bagan",
		description: "Full day of exploration with a cultural evening.",
		activities: [
			"Ananda Temple",
			"Thatbyinnyu Pagoda",
			"Lunch at The Moon Vegetarian Restaurant",
			"Evening Puppet Show at Nanda Restaurant",
		],
		estimated_day_budget: 100000,
	},
	{
		day: 3,
		date: "2025-06-03",
		title: "Markets & Memories",
		place: "Nyaung-U",
		description:
			"Wrap up your journey with local shopping and scenic vibes.",
		activities: [
			"Early walk to Nyaung-U Market",
			"Souvenir shopping (lacquerware, postcards)",
			"Return to Yangon by JJ Express night bus",
		],
		estimated_day_budget: 70000,
	},
];

export default function Itinerary() {
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
