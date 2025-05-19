import ActivityCard from "@/components/common/ActivityCard";

export default function DayPlan() {
	return (
		<main>
			<section className="flex">
				<div className="flex flex-col gap-3">
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
				</div>

				<div className=""></div>
			</section>
		</main>
	);
}
