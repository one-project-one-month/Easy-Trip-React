import { useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function DestinationImageSection(data: any) {
  const [mainImg, setMainImage] = useState<number>(0);

  const { hightlight } = data;

  return (
    <div className="w-full py-3 space-y-4">
      <div className="w-full mx-auto flex justify-center items-center ">
        <div className="w-full border max-h-[500px] flex items-center justify-center bg-gray-100 rounded-xl">
          <img
            src={hightlight[mainImg].img}
            alt="Destination Highlight"
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="w-auto max-w-5xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {hightlight.map((hl: any, index: number) => (
              <CarouselItem
                key={index}
                className="pl-1 h-26 basis-1/2 md:basis-1/3"
              >
                <img
                  src={hl.img}
                  onClick={() => setMainImage(index)}
                  alt="Destination Highlight"
                  className="w-full h-26 object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious>
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}

export default DestinationImageSection;
