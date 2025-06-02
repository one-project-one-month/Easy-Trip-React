import { useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Highlight } from "@/type/Trip";

function DestinationImageSection(data: { hightlight: Highlight[] }) {
  const [mainImg, setMainImage] = useState<number>(0);

  const { hightlight } = data;

  return (
    <div className="w-full py-3 space-y-6">
      <div className="w-full mx-auto flex justify-center items-center">
        <div className="w-full border max-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl relative overflow-hidden transition-all duration-300">
          <img
            src={hightlight[mainImg].url}
            alt={hightlight[mainImg].name || "Destination Highlight"}
            className="w-full max-h-[600px] object-cover rounded-2xl scale-105 hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 pointer-events-none rounded-2xl" />
          <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-white rounded-lg md:px-5 md:py-4 max-w-[80%]">
            <h2 className="text-lg md:text-4xl font-bold drop-shadow mb-2">
              {hightlight[mainImg].name}
            </h2>
            <p className="text-sm md:text-lg drop-shadow">
              {hightlight[mainImg].description}
            </p>
          </div>
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
                  src={hl.url}
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
