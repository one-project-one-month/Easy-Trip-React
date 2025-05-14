import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ActivityCard from "@/components/common/ActivityCard";

import { Link } from "react-router";

export default function DayPlan() {
	return (
		<main className="">
			<div className="flex items-center gap-3">
				<Button className="rounded-full">
					<Link to="">
						<ArrowLeft />
					</Link>
				</Button>
				<h1 className="text-3xl">Find Out your Trip</h1>
			</div>

			<div className="">
				<img
					src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
					alt=""
					// className="w-full h-full place-self-center"
				/>

				<img
					src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
					alt=""
					// className="w-full h-full place-self-center"
				/>
			</div>

			<div className="">
				<div className="flex flex-col gap-5 mx-auto">
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
				</div>
			</div>
		</main>
	);
}
