import { Card, CardContent } from "@/components/ui/card";

export default function ActivityCard({
	id,
	name,
	activityClick,
}: {
	id: number;
	name: string;
	activityClick: (id: number) => void;
}) {
	return (
		<Card className="shadow-lg">
			<section className="flex px-3">
				<div className="self-center">Icon</div>
				<div className="cursor-pointer">
					<CardContent onClick={() => activityClick(id - 1)}>
						<h1 className="lg:text-lg max-sm:text-sm">{name}</h1>
					</CardContent>
				</div>
			</section>
		</Card>
	);
}
