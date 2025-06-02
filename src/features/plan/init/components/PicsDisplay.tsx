import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const PicsDisplay = () => {
  return (
    <Carousel className="w-full h-[30rem] mt-8 max-w-6xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="border relative rounded-4xl w-full flex justify-center items-center">
              <img
                src="https://bagandaytours.com/wp-content/uploads/2017/02/7453229842_c938700c47_b.jpg"
                alt=""
                className="w-full h-[30rem] rounded-4xl bg-cover mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-neutral-600 opacity-50 pointer-events-none rounded-4xl" />
              <div className="absolute left-8 bottom-8 text-5xl font-semibold text-white">
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-xl mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi, accusamus?
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-full" />
      <CarouselNext className="rounded-full" />
    </Carousel>
  );
};

export default PicsDisplay;
