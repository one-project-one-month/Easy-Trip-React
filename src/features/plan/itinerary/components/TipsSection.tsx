interface TipsSectionProps {
  culturalTips?: string[];
  emergencyTips?: {
    nearest_clinic?: string;
    tourist_police?: string;
    general_emergency?: string;
    local_assistance?: string;
  };
}

export default function TipsSection({
  culturalTips,
  emergencyTips,
}: TipsSectionProps) {
  return (
    <section id="tips" className="mb-2 oorder-2 border-b pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cultural Sensitivity Tips */}
        <div className="bg-orange-50 rounded-xl p-6 shadow">
          <h2 className="text-lg md:text-xl font-semibold mb-3 text-orange-700">
            Cultural Sensitivity Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(culturalTips ?? []).map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
        {/* Emergency Tips */}
        <div className="bg-red-50 rounded-xl p-6 shadow">
          <h2 className="text-lg md:text-xl font-semibold mb-3 text-red-700">
            Emergency Tips
          </h2>
          <ul className="text-gray-700 space-y-1">
            <li>
              <span className="font-semibold">Nearest Clinic:</span>{" "}
              {emergencyTips?.nearest_clinic ?? "N/A"}
            </li>
            <li>
              <span className="font-semibold">Tourist Police:</span>{" "}
              {emergencyTips?.tourist_police ?? "N/A"}
            </li>
            <li>
              <span className="font-semibold">General Emergency:</span>{" "}
              {emergencyTips?.general_emergency ?? "N/A"}
            </li>
            <li>
              <span className="font-semibold">Local Assistance:</span>{" "}
              {emergencyTips?.local_assistance ?? "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
