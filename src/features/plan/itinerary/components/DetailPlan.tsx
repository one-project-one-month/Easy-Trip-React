import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Itinerary from "./Itinerary";

import { tripPlan } from "@/shared/tripPlan";

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
			<section className="flex gap-5">
				<div className="w-[50%]">
					<Card className="gap-1 p-3 justify-between h-full  shadow-2xl">
						<CardHeader className="p-0">
							<CardTitle className="text-3xl">
								{tripPlan.destination}
							</CardTitle>
							<CardDescription>4 Days Trip</CardDescription>
						</CardHeader>
						<h1 className="text-xl font-semibold">
							Total Cost : 2000 USD
						</h1>
					</Card>
				</div>

				<Carousel className="w-[50%]">
					<CarouselContent>
						<CarouselItem>
							<img
								src="https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg"
								alt=""
								className="w-full h-[200px]"
							/>
						</CarouselItem>
						<CarouselItem>
							<img
								src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
								alt=""
								className="w-full h-[200px]"
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>

			<br />

			<Itinerary plan={tripPlan.day_by_day_plan} />
		</main>
	);
}
