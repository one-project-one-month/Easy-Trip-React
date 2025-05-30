interface TransportationProps {
  transportation?: {
    local_pass?: string;
    recommandation_info?: string[];
  };
}

export default function TransportationSection({
  transportation,
}: TransportationProps) {
  return (
    <section id="transportation" className="mb-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
          alt="Transportation"
          className="w-full md:w-1/3 h-48 object-cover rounded-xl"
        />
        <div className="flex-1">
          <div className="mb-2 text-md text-gray-700">
            <span className="font-semibold">Local Pass:</span>{" "}
            {transportation?.local_pass ?? "No transportation info available."}
          </div>
          <div>
            <span className="font-semibold">Recommendations:</span>
            <ul className="list-disc list-inside ml-4 mt-1 text-gray-700">
              {(transportation?.recommandation_info ?? []).map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
