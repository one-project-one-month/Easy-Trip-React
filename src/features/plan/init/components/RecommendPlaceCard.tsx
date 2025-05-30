import { Navigation } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import useAppSettingStore from "@/store/appSettingStore";
import { DestinationInitProps } from "@/type/Trip";

function RecommendPlaceCard({ data }: { data: DestinationInitProps }) {
  const { setDestinationSetting } = useAppSettingStore();
  const navigate = useNavigate();

  const handleSelect = () => {
    setDestinationSetting({
      destination_id: data.id,
    });
    navigate("/plan/setup");
  };

  return (
    <Card className="py-0 overflow-hidden h-fit group rounded-lg">
      <CardContent className="space-y-4 px-0 pb-2">
        <figure className="h-2/3 overflow-hidden">
          <img
            src={data.main_image}
            alt=""
            className="w-full h-40 object-cover group-hover:scale-105 transition-all"
          />
        </figure>

        <div className="flex justify-between px-3 items-end">
          <div>
            <p className="text-lg font-bold leading-4">
              {data.destination_name}
            </p>

            <span className="text-xs text-neutral-600">
              {data.state_region}
            </span>
          </div>

          <Button
            onClick={handleSelect}
            className="cursor-pointer"
            variant={"outline"}
            size={"icon"}
          >
            <Navigation />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

RecommendPlaceCard.Skeleton = () => {
  return (
    <Card className="py-0 overflow-hidden h-fit rounded-lg">
      <CardContent className="space-y-4 px-0 pb-2">
        {/* Image placeholder */}
        <Skeleton className="h-40 w-full" />

        <div className="flex justify-between px-3 items-center">
          <div className="space-y-2">
            {/* Title skeleton */}
            <Skeleton className="h-4 w-32" />
            {/* Region skeleton */}
            <Skeleton className="h-3 w-20" />
          </div>

          {/* Icon button skeleton */}
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendPlaceCard;
