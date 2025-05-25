import TripPlanForm from "@/features/plan/setup/components/TripPlanForm";
import withDestination from "@/features/withDestination";

const Setup = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <TripPlanForm />
    </div>
  );
};

const SetupPage = withDestination(Setup);
export default SetupPage;
