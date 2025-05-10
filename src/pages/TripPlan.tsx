import ActivityCard from "@/components/common/ActivityCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function TripPlan() {
	return (
		<main className="container mx-auto">
			<section className="flex flex-col gap-10 my-10 px-8">
				<div className="flex items-center gap-10">
					<Button className="rounded-full">
						<Link to="">
							<ArrowLeft />
						</Link>
					</Button>

					<h1 className="text-3xl">Find Out your Trip</h1>
				</div>

				<div className="flex gap-10 text-xl text-white">
					<h1 className="rounded-4xl bg-gray-900 py-2 px-4">Bagan</h1>
					<h1 className="rounded-4xl bg-gray-900 py-2 px-4">
						5 Days Trip
					</h1>
				</div>

				<div className="grid grid-cols-2 w-full gap-5">
					<img
						src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
						alt=""
						className="w-full h-full place-self-center"
					/>

					<img
						src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
						alt=""
						className="w-full h-full place-self-center"
					/>
				</div>

				<div className="flex flex-col gap-5 mx-auto">
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
					<ActivityCard />
				</div>
			</section>
		</main>
	);
}

export default TripPlan;
