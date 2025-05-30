import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AccomodationProps {
  accomodation: {
    suggested_area?: string;
    hotel_option?: {
      name?: string;
      price_per_night?: number;
    }[];
  };
}

export default function AccomodationSection({
  accomodation,
}: AccomodationProps) {
  return (
    <section id="accomodation" className="mb-2 border-b pb-12">
      <h1 className="text-lg md:text-2xl font-semibold mb-2">Accomodation</h1>
      <h5 className="text-md text-gray-600 mb-2">
        {accomodation?.suggested_area ??
          "No accomodation description available."}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {accomodation?.hotel_option?.map((hotel, index) => (
          <Card
            key={index}
            className="flex flex-col items-center p-4 transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Hotel"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <CardHeader className="p-0 mb-1 w-full text-center">
              <CardTitle className="text-lg font-semibold">
                {hotel?.name ?? "No Name"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 w-full text-center">
              <div className="text-sm text-gray-600 mb-1">
                ⭐ N/A · Free WiFi · Breakfast included
              </div>
              <div className="font-bold text-sm text-primary">
                From {hotel?.price_per_night} MMK/night
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
