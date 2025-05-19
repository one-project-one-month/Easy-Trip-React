import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { ArrowLeft } from "lucide-react";
import ActivityCard from "@/components/common/ActivityCard";

import DayPlan from "./components/DayPlan";

import { Link } from "react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Days = [
	"May - 12",
	"May - 13",
	"May - 14",
	"May - 15",
	"May - 16",
	"May - 17",
];

export default function DetailPlan() {
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
			<br />
			<section className="flex gap-5 ">
				<div className="w-[50%]">
					<Card className="gap-1 p-3 justify-between h-full">
						<CardHeader className="p-0">
							<CardTitle className="text-3xl">Bagan</CardTitle>
							<CardDescription className="">
								4 Days Trip
							</CardDescription>
						</CardHeader>
						<h1 className="text-xl">Total Cost : 2000 USD</h1>
					</Card>
				</div>
				<div className="w-[50%]">
					<div className="flex">
						<img
							src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
							alt=""
							className=" h-[200px] mx-auto"
						/>

						{/* <img
							src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
							alt=""
							// className="w-full h-full place-self-center"
						/> */}
					</div>
				</div>
			</section>

			<br />
			<div className="">
				<div className="bg-amber-300 rounded-xl p-3">
					<h1>Itinerary</h1>
				</div>
				<div className="bg-gray-300 mx-3 p-3">
					<div className="flex gap-3 mb-5">
						{Days.map((day) => (
							<Button variant={"secondary"}>{day}</Button>
						))}
					</div>

					<DayPlan date={"May12"} />
				</div>
			</div>
		</main>
	);
}
