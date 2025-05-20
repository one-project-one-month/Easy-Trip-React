import ActivityCard from "@/components/common/ActivityCard";
import { type DayPlanProps } from "@/type/Trip";

export default function DayPlan({ plan }: { plan: DayPlanProps }) {
	return (
		<main>
			<section className="">
				<h1 className="text-lg font-semibold mb-3">{plan.date}</h1>
				<div className="flex flex-col gap-3 w-full sm:w-[50%]">
					{plan.activities.map((activity) => (
						<ActivityCard name={activity.name} />
					))}
				</div>
			</section>
		</main>
	);
}
