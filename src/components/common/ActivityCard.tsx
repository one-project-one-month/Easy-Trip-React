import { Card, CardContent } from "@/components/ui/card";

export default function ActivityCard({ name }) {
	return (
		<Card className="shadow-lg">
			<section className="flex px-3">
				<div className="self-center">Icon</div>
				<div className="">
					<CardContent>
						<h1 className="text-lg">{name}</h1>
					</CardContent>
				</div>
			</section>
		</Card>
	);
}
