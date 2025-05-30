import { useGenerateThingsYouShouldKnow } from "../../hooks/usePlan";
import useAppSettingStore from "@/store/appSettingStore";
import GenerateLoader from "@/components/core/GenerateScreenLoader";

export default function ThingsYouShouldKnow() {
  const destination = useAppSettingStore(s => s.destination);

  const payload = {
    destination_id: destination?.destination_id,
    startDate: destination?.startDate,
    endDate: destination?.endDate,
    attendentsType: destination?.attendentsType,
    budget: destination?.budget,
  };
  const {
    data: thingsYouShouldBring,
    isLoading: isThingsYouShouldBringLoading,
    isError: isThingsYouShouldBringError,
  } = useGenerateThingsYouShouldKnow(payload);

  if (isThingsYouShouldBringError) {
    throw new Error("Error generating things you should bring.");
  }
  if (isThingsYouShouldBringLoading || !thingsYouShouldBring) {
    return <GenerateLoader />;
  }

  return (
    <section className="thing-you-should-know w-full mb-8">
      <div className="min-h-fit">
        <div className="bg-yellow-50 rounded-xl shadow-inner p-5">
          <h2 className="text-xl font-semibold mb-3 text-yellow-800">
            Things you should bring
          </h2>
          <hr className="mb-3 border-yellow-200" />
          <ul className="list-decimal text-start pl-5 space-y-2">
            {thingsYouShouldBring?.slice(0, 10)?.map((item: string) => (
              <li key={item} className="text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
