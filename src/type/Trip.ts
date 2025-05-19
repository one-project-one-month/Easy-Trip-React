export type Trip = {
	id: number;
	name: string;
	days: number;
	start_date: string;
	end_date: string;
	dayPlan: DayPlanProps[];
};

export type DayPlanProps = {
	day: number;
	date: string;
	title: string;
	place: string;
	description: string;
	activities: string[];
	estimated_day_budget: number;
};

export type Activity = {
	id: number;
	destination: string;
	desscription: string;
	time: string;
	location?: string;
};
