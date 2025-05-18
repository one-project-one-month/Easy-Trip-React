import { Button } from "@/components/ui/button";
import LandingFooter from "./LandingFooter";
import { Link } from "react-router";

export default function LandingInterface() {
  return (
    <div className='w-full h-lvh flex relative justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center gap-5'>
        <div className='text-xl md:text-2xl lg:text-5xl font-mono animate-fade-in tracking-wide lg:space-y-4 space-y-2'>
          <p className='lg:text-2xl md:text-xl text-base'>
            YOUR PERFECT <span className='text-blue-500'>TRIP,</span>
          </p>

          <p>
            PLANNED IN <span className='text-blue-500'>MINUTES</span>
          </p>
        </div>

        <Button asChild size={"lg"}>
          <Link to='/plan/setup'>Get Started</Link>
        </Button>
      </div>

      <LandingFooter />
    </div>
  );
}
