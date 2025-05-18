import { Button } from "@/components/ui/button";
import LandingFooter from "./LandingFooter";
import { Link } from "react-router";

export default function LandingInterface() {
  return (
    <div className="w-full h-lvh flex relative justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-5xl md:text-6xl lg:text-9xl font-mono animate-fade-in">
          YOUR PERFECT <span className="text-blue-500">TRIP,</span>
          <br />
          PLANNED IN <span className="text-blue-500">MINUTES</span>
        </p>
        <Link to="/auth">
          <Button className="mt-8 w-64 py-7 text-lg font-semibold rounded-full shadow-lg bg-black text-white transition-transform transform hover:scale-105 hover:shadow-xl">
            Get Started
          </Button>
        </Link>
      </div>
      <LandingFooter />
    </div>
  );
}
