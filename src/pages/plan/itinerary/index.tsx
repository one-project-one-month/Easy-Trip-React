import { useGenerateThingsYouShouldKnow } from "@/features/plan/hooks/usePlan";
import DetailPlan from "@/features/plan/itinerary/components/DetailPlan";
import useAppSettingStore from "@/store/appSettingStore";
import withDestination from "@/features/withDestination";

function TripPlan() {
  const destination = useAppSettingStore(s => s.destination);

  const { data, isLoading } = useGenerateThingsYouShouldKnow({
    destination_id: destination?.destination_id,
    startDate: destination?.startDate,
    endDate: destination?.endDate,
    attendentsType: destination?.attendentsType,
    budget: destination?.budget,
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        generating ...
      </div>
    );
  }

  console.log("destination", destination);
  console.log("data", data);

  return (
    <main className="mt-10">
      <DetailPlan />
    </main>
  );
}

const TripPlanPage = withDestination(TripPlan);
export default TripPlanPage;
