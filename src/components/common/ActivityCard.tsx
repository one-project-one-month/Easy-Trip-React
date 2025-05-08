import { Card, CardContent } from "@/components/ui/card";

export default function ActivityCard() {
	return (
		<Card className="shadow-lg">
			<section className="flex px-3">
				<div className="self-center">Icon</div>
				<div className="">
					<CardContent>
						<h3>8:00 AM</h3>
						<h1 className="text-2xl">Breakfast at Aroma</h1>
						<h3>Map Link</h3>
					</CardContent>
				</div>
			</section>
		</Card>
	);
}
