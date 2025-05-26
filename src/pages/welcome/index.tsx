import { Link } from "react-router";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  //   MagicWandIcon,
} from "@radix-ui/react-icons";
import { Icons } from "@/shared/icons/Icons";

import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div className="w-full h-[90vh] flex relative justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center gap-5 mb-16">
        <div className="text-xl md:text-2xl lg:text-5xl font-mono animate-fade-in tracking-wide lg:space-y-4 space-y-2">
          <p className="lg:text-2xl md:text-xl text-base">
            YOUR PERFECT <span className="text-blue-500">TRIP,</span>
          </p>

          <p>
            PLANNED IN <span className="text-blue-500">MINUTES</span>
          </p>
        </div>

        <Button asChild size={"lg"}>
          <Link to="/plan/init">Get Started</Link>
        </Button>
      </div>

      <div className="container mx-auto flex gap-4 items-end justify-between px-4 pb-4 absolute bottom-0 left-0 right-0">
        <div className="md:space-y-4 space-y-1">
          <h1 className="md:text-2xl flex items-center gap-3 font-bold">
            {/* <MagicWandIcon className='md:w-6 md:h-6 w-3 h-3' /> */}
            <Icons.logo />
            <span>Easy Trip</span>
          </h1>

          <ul className="flex sm:gap-6 gap-1 flex-col sm:flex-row md:text-sm text-xs">
            <li>
              <Link
                to="/"
                className="hover:underline text-center transition duration-300"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="hover:underline text-center transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-end">
          <div className="flex gap-4">
            <InstagramLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <GitHubLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <TwitterLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <LinkedInLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </div>

          <p className="text-xs md:block hidden">
            Easy Trip 2025 © All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
