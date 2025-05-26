import { Separator } from "@/components/ui/separator";
import DestinationBrief from "./DestinationBrief";
import TripPlanForm from "./TripPlanForm";

const dummy = {
  _id: "inle-lake",
  name: "Inle Lake",
  description:
    "Inle Lake is a serene freshwater lake located in the Shan Hills of Myanmar. Known for its floating villages, unique leg-rowing fishermen, and lush surroundings, it’s a peaceful retreat ideal for cultural exploration and nature lovers.",
  highlight: [
    {
      img: "https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg",
      name: "Leg-Rowing Fishermen",
      description:
        "Experience the unique rowing style of Intha fishermen, who skillfully paddle with one leg while balancing on narrow boats.",
    },
    {
      img: "https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg",
      name: "Floating Gardens",
      description:
        "Marvel at floating farms where locals grow vegetables on beds of water hyacinth and mud, anchored to the lakebed with bamboo poles.",
    },
    {
      img: "https://bagandaytours.com/wp-content/uploads/2017/02/dhammayangyi-pahto-temple-1.jpg",
      name: "Pindaya Caves",
      description:
        "A nearby attraction featuring thousands of Buddha images tucked into limestone caves — perfect for a day trip from the lake.",
    },
  ],
  travel_info: {
    bestTimeToVisit: "November to February",
    avgDailyBudget: "$40–$70 per person",
    climate: "Cool and dry",
    transport: "Accessible via Heho Airport + taxi",
  },
  location: {
    lat: 20.5861,
    lng: 96.9101,
  },
};

function SetupContent() {
  return (
    <div>
      <div className="p-3">
        <DestinationBrief dummy={dummy} />
        <Separator />
        <TripPlanForm />
      </div>
    </div>
  );
}

export default SetupContent;
