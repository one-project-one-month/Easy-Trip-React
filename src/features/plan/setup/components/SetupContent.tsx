import useAppSettingStore from "@/store/appSettingStore";
import { useGetDestinationDescription } from "../../hooks/usePlan";

import { Separator } from "@/components/ui/separator";
import DestinationBrief from "./DestinationBrief";
import TripPlanForm from "./TripPlanForm";

function SetupContent() {
  const { destination } = useAppSettingStore();
  const { data, isLoading } = useGetDestinationDescription(
    destination?.destination_id || ""
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <div className="p-3">
        {data && <DestinationBrief brief={data.content} />}
        <Separator />
        <TripPlanForm />
      </div>
    </div>
  );
}

export default SetupContent;
