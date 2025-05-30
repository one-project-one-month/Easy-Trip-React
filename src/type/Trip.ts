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
  estimated_day_budget?: number;
};

export interface Activity {
  id: number;
  name: string;
  description: string;
  location?: string;
}

export type DestinationInitProps = {
  id: string;
  destination_name: string;
  destination: string;
  state_region: string;
  country: string;
  score: number;
  description: string;
  main_image: string;
};

export type Highlight = {
  name: string;
  description: string;
  url: string;
};

type Location = {
  lat: number;
  lng: number;
};

type TravelInfo = {
  avg_daily_budget: string;
  best_time_to_visit: string;
  climate: string;
  transport: string;
};

export type DestinationBrief = {
  id: string;
  country: string;
  state_region: string;
  destination: string;
  destination_name: string;
  description: string;
  main_image: string;
  score: number;
  location: Location;
  travel_info: TravelInfo;
  highlights: Highlight[];
};
