import { Card, CardContent } from "@/components/ui/card";

export default function ActivityCard() {
	return (
		<Card className="shadow-lg">
			<section className="flex px-3">
				<div className="self-center">Icon</div>
				<div className="">
					<CardContent>
						<h3>8:00 AM</h3>
						<h1 className="text-lg">Breakfast at Aroma</h1>
					</CardContent>
				</div>
			</section>
		</Card>
	);
}
