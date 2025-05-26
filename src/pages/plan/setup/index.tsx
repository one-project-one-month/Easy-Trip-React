import SetupContent from "@/features/plan/setup/components/SetupContent";
import withDestination from "@/features/withDestination";

const Setup = () => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto">
      <SetupContent />
    </div>
  );
};

const SetupPage = withDestination(Setup);
export default SetupPage;
