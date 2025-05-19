import ActivityCard from "@/components/common/ActivityCard";
import { type DayPlanProps } from "@/type/Trip";

export default function DayPlan({ plan }: { plan: DayPlanProps }) {
	return (
		<main>
			<section className="">
				<h1 className="text-2xl">{plan.date}</h1>
				<div className="flex flex-col gap-3 w-[40%]">
					<ActivityCard name={"Arnanda"} />
					<ActivityCard name={"Shewzekone"} />
				</div>

				<div className=""></div>
			</section>
		</main>
	);
}
