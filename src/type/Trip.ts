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
  activities: Activity[];
  estimated_day_budget?: number;
};

export interface Activity {
  id: number;
  name: string;
  description: string;
  location?: string;
}

export type Highlight = {
  img: string;
  name: string;
  description: string;
};

export type DestinationBrief = {
  _id: string;
  name: string;
  description: string;
  highlight: Highlight[];
  travel_info: {
    bestTimeToVisit: string;
    avgDailyBudget: string;
    climate: string;
    transport: string;
  };
  location: {
    lat: number;
    lng: number;
  };
};
