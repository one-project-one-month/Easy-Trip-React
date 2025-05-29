import DetailPlan from "@/features/plan/itinerary/components/DetailPlan";
import withDestination from "@/features/withDestination";

function TripPlan() {
  return (
    // <AppErrorBoundary>
    <main className="w-full max-w-7xl mx-auto flex flex-col justify-center gap-6 items-center mt-10 px-4">
      <DetailPlan />
    </main>
    // </AppErrorBoundary>
  );
}

const TripPlanPage = withDestination(TripPlan);
export default TripPlanPage;
