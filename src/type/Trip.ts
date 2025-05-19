export type Trip = {
	id: number;
	name: string;
	days: number;
	start_date: string;
	end_date: string;
	dayPlan: DayPlan[];
};

type DayPlan = {
	date: string;
	activities: Activity[];
};

type Activity = {
	id: number;
	destination: string;
	desscription: string;
	time: string;
	location?: string;
};
