import DestinationInput from "@/features/plan/init/components/DestinationInput";
// import PicsDisplay from "@/features/plan/init/components/PicsDisplay";
import RecommendedPlacesSection from "@/features/plan/init/components/RecommendedPlacesSection";

const Init = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center gap-6 items-center mt-10 px-4">
      <DestinationInput />

      {/* <PicsDisplay /> */}

      <RecommendedPlacesSection />
    </div>
  );
};

export default Init;
