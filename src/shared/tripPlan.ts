export const tripPlan = {
	destination: "London",
	start_date: "2025-06-01",
	end_date: "2025-06-04",
	total_budget: 350000,
	attendance_type: "Friends Trip",

	title: "3-Day Historical Adventure in Bagan",
	description:
		"Explore the timeless temples of Bagan, savor authentic Burmese dishes, and witness magical sunsets over ancient landscapes.",

	day_by_day_plan: [
		{
			day: 1,
			date: "2025-06-01",
			title: "Arrival & Golden Hour Exploration",
			place: "New Bagan",
			description:
				"Settle in, grab your e-bike, and start with the nearest wonders.",
			activities: [
				"Check-in to Hotel Yadanarbon",
				"Visit Dhammayangyi Temple",
				"Watch sunset from Shwesandaw Pagoda",
				"Dinner at Sanon Training Restaurant",
			],
			estimated_day_budget: 80000,
		},
		{
			day: 2,
			date: "2025-06-02",
			title: "Temples & Traditional Shows",
			place: "Old Bagan",
			description: "Full day of exploration with a cultural evening.",
			activities: [
				"Ananda Temple",
				"Thatbyinnyu Pagoda",
				"Lunch at The Moon Vegetarian Restaurant",
				"Evening Puppet Show at Nanda Restaurant",
			],
			estimated_day_budget: 100000,
		},
		{
			day: 3,
			date: "2025-06-03",
			title: "Markets & Memories",
			place: "Nyaung-U",
			description:
				"Wrap up your journey with local shopping and scenic vibes.",
			activities: [
				"Early walk to Nyaung-U Market",
				"Souvenir shopping (lacquerware, postcards)",
				"Return to Yangon by JJ Express night bus",
			],
			estimated_day_budget: 70000,
		},
	],

	transportation: {
		local_pass: "Bagan E-Bike Rental (2 Days)",
		recommandation_info: [
			"E-bike rental is ideal and eco-friendly for temple hopping.",
			"Night bus from Yangon (JJ Express) is budget-friendly and safe.",
			"Grab is not widely available — arrange transport via your hotel or local guesthouses.",
		],
	},

	accomodation: {
		suggested_area: "New Bagan",
		hotel_option: [
			{
				name: "Hotel Yadanarbon Bagan",
				price_per_night: 45000,
				link: "https://example.com/yadanarbon",
			},
			{
				name: "The Hotel Umbra Bagan",
				price_per_night: 55000,
				link: "https://example.com/umbra",
			},
		],
	},
};
