import { Calendar, DollarSign, CloudSun, Bus } from "lucide-react";
import DestinationImageSection from "./DestinationImageSection";
import { DestinationBrief } from "@/type/Trip";

function DestinationBrief({ dummy }: { dummy: DestinationBrief }) {
  const { name, description, travel_info, highlight } = dummy;

  return (
    <section className="w-full py-8">
      <div className="space-y-10">
        <header>
          <h1 className="md:text-7xl text-4xl font-extrabold text-neutral-800 mb-4">
            {name}
          </h1>
          <p className="md:text-xl text-neutral-700 leading-relaxed">
            {description}
          </p>
        </header>

        <DestinationImageSection hightlight={highlight} />

        <section>
          <h2 className="md:text-4xl text-2xl font-semibold text-neutral-500 mb-6">
            Travel Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Calendar className="text-indigo-600 mt-1" size={24} />
              <div>
                <p className="text-sm text-neutral-500">Best Time to Visit</p>
                <p className="md:text-lg text-neutral-800 font-medium">
                  {travel_info.bestTimeToVisit}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <DollarSign className="text-green-600 mt-1" size={24} />
              <div>
                <p className="text-sm text-neutral-500">Average Daily Budget</p>
                <p className="md:text-lg text-neutral-800 font-medium">
                  {travel_info.avgDailyBudget}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CloudSun className="text-yellow-500 mt-1" size={24} />
              <div>
                <p className="text-sm text-neutral-500">Climate</p>
                <p className="md:text-lg text-neutral-800 font-medium">
                  {travel_info.climate}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Bus className="text-blue-600 mt-1" size={24} />
              <div>
                <p className="text-sm text-neutral-500">Transport</p>
                <p className="text-lg text-neutral-800 font-medium">
                  {travel_info.transport}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default DestinationBrief;
