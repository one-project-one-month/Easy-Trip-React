import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useAppSettingStore from "@/store/appSettingStore";
// import { Image } from "lucide-react";

import { Destination } from "@/type/Destination";
import { useNavigate } from "react-router";

function RecommendPlaceCard({data}: {data: Destination}) {

  const {setDestinationSetting} = useAppSettingStore();
  const navigate = useNavigate();


  const handleSelect = () => {
    setDestinationSetting(data.destination);
    navigate("/plan/setup");
  }


  return (
    <Card className="w-full pt-0 max-w-xs rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="h-40 w-full bg-neutral-100 flex justify-center items-center border-b">
          <img
                src='https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg'
                alt=''
                className='w-full bg-cover mx-auto'
              />
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-2">
        <h2 className="text-xl font-bold text-neutral-800">{data.destination_name}</h2>
        <CardDescription className="mt-1 text-neutral-600">
          <span>{data.state_region}</span>
        </CardDescription>
      </CardContent>

      <CardFooter className="px-5 pt-3">
        <CardAction className="w-full">
          <Button onClick={handleSelect} className="w-full bg-primary text-white hover:bg-primary/90 transition">
            Select
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default RecommendPlaceCard;
