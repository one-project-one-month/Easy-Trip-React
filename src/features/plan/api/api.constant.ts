export const TRIP_PLANNER_API = {
  GENERATE_TRIP_PLAN: {
    URL: "/trip/planner/generate-trip-plans",
    METHOD: "POST",
    cacheTime: 1000 * 60 * 60, // 1 hour
    cacheKey: "generate-trip-plan",
  },
} as const;
