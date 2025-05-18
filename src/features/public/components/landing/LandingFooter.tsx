import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router";

export default function LandingFooter() {
  return (
    <div className='absolute bottom-0 left-0 w-full'>
      <div className='container mx-auto flex gap-4 items-end justify-between px-4 pb-4'>
        <div className='md:space-y-4 space-y-1'>
          <h1 className='md:text-2xl flex items-center gap-3 font-bold'>
            <MagicWandIcon className='md:w-6 md:h-6 w-3 h-3' />
            <span>Easy Trip</span>
          </h1>

          <ul className='flex sm:gap-6 gap-1 flex-col sm:flex-row md:text-sm text-xs'>
            <li>
              <Link
                to='/'
                className='hover:underline text-center transition duration-300'
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='hover:underline text-center transition duration-300'
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 items-center md:items-end'>
          <div className='flex gap-4'>
            <InstagramLogoIcon className='md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <GitHubLogoIcon className='md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <TwitterLogoIcon className='md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <LinkedInLogoIcon className='md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer' />
          </div>

          <p className='text-xs md:block hidden'>
            Easy Trip 2025 © All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
