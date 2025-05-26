import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Icons } from "@/shared/icons/Icons";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t ">
      <div className="container mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row justify-between gap-5">
        <div className="flex items-start">
          <div className="flex items-center">
            <Icons.logo />
            <h1 className="text-2xl font-bold">Easy Trip</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">Contact Us</h1>
            <ul className="space-y-1">
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Service Guarantee
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  More Service Info
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">About</h1>
            <ul className="space-y-1">
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  About Easy Trip
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  News
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Privacy Statement
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">Contact Us</h1>
            <ul className="space-y-1">
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  Service Guarantee
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-blue-600">
                  More Service Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-center md:items-end">
          <div className="flex gap-4">
            <InstagramLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <GitHubLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <TwitterLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <LinkedInLogoIcon className="md:w-6 md:h-6 w-4 h-4 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </div>

          <p className="text-xs md:text-end">
            Easy Trip 2025 © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
