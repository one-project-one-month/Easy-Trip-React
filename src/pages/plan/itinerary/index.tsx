import { useGenerateThingsYouShouldKnow } from "@/features/plan/hooks/usePlan";
import DetailPlan from "@/features/plan/itinerary/components/DetailPlan";
import withDestination from "@/features/withDestination";

import useAppSettingStore from "@/store/appSettingStore";

function TripPlan() {
  const destination = useAppSettingStore(s => s.destination);

  const {
    data: thingsYouShouldBring,
    isLoading: isThingsYouShouldBringLoading,
  } = useGenerateThingsYouShouldKnow({
    destination_id: destination?.destination_id,
    startDate: destination?.startDate,
    endDate: destination?.endDate,
    attendentsType: destination?.attendentsType,
    budget: destination?.budget,
  });

  if (isThingsYouShouldBringLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
          <span className="animate-pulse">Generating</span>
          <span className="flex space-x-1">
            <span className="animate-bounce [animation-delay:-0.2s]">.</span>
            <span className="animate-bounce [animation-delay:-0.1s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </div>
      </div>
    );
  }

  console.log("destination", destination);
  console.log("data", thingsYouShouldBring);

  return (
    <main className="mt-10">
      <DetailPlan thingsYouShouldBring={thingsYouShouldBring?.data} />
    </main>
  );
}

const TripPlanPage = withDestination(TripPlan);
export default TripPlanPage;
