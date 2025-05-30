import { AppErrorBoundary } from "@/components/core/error";
import DetailPlan from "@/features/plan/itinerary/components/DetailPlan";
import ThingsYouShouldKnow from "@/features/plan/itinerary/components/ThingsYouShouldKnow";
import withDestination from "@/features/withDestination";

function TripPlan() {
  return (
    // <AppErrorBoundary>
    <main className="w-full max-w-7xl mx-auto flex flex-col justify-center gap-4 items-center mt-10 px-4">
      <AppErrorBoundary>
        <DetailPlan />
      </AppErrorBoundary>
      <AppErrorBoundary>
        <ThingsYouShouldKnow />
      </AppErrorBoundary>
    </main>
    // </AppErrorBoundary>
  );
}

const TripPlanPage = withDestination(TripPlan);
export default TripPlanPage;
