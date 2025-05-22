import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PicsDisplay from "./PicsDisplay";
import RecommandedPlacesSection from "./RecommandedPlacesSection";

const DestinationInput = () => {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-center text-neutral-800 leading-tight drop-shadow-md'>
        Where do you want to go?
      </h1>

      <p className='text-lg text-center text-neutral-600 max-w-xl'>
        Start your journey through the beauty of Myanmar. Choose a destination
        and let's explore!
      </p>

      <div className='flex flex-col md:flex-row items-center gap-3 w-full md:w-2/3 lg:w-1/2'>
        <div className='relative w-full'>
          <Input
            className='rounded-full pl-12 pr-4 py-4 h-12 shadow-md text-base focus:ring-2 focus:ring-primary'
            type='text'
            placeholder='Search destinations, cities, or landmarks'
          />
          <Search
            className='absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500'
            size={20}
          />
        </div>
        <Button className='rounded-full h-12 text-base px-8 shadow-md bg-primary text-white hover:bg-primary/90 transition'>
          Search
        </Button>
      </div>

      <PicsDisplay />

      <RecommandedPlacesSection />
    </>
  );
};

export default DestinationInput;
