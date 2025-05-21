import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Image } from "lucide-react";

function RecommendPlaceCard() {
  return (
    <Card className="w-full max-w-xs rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="h-40 w-full bg-neutral-100 flex justify-center items-center border-b">
          {/* Replace with actual image when available */}
          <Image size={48} className="text-neutral-400" />
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-4">
        <h2 className="text-xl font-bold text-neutral-800">Bagan</h2>
        <CardDescription className="mt-1 text-neutral-600">
          A breathtaking ancient city and one of Myanmar’s most iconic destinations.
        </CardDescription>
      </CardContent>

      <CardFooter className="px-5 pb-4 pt-2">
        <CardAction className="w-full">
          <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90 transition">
            Select
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default RecommendPlaceCard;
