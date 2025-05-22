import RecommendPlaceCard from "./RecommendPlaceCard";

function RecommandedPlacesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-neutral-800 leading-snug">
          No idea? Let us inspire you.
        </h1>
        <p className="text-lg text-neutral-600 mt-2">
          Explore handpicked destinations perfect for a quick getaway.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <RecommendPlaceCard key={index} />
        ))}
      </div>
    </section>
  );
}

export default RecommandedPlacesSection;
