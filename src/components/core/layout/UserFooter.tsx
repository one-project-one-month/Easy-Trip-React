import { Link } from "react-router";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

function UserFooter() {
  return (
    <footer className="bg-black p-8 py-20 flex-col space-y-7 justify-center items-center text-neutral-300 px-6">
      <h3 className="text-center font-extrabold text-lg">Easy Trip</h3>
      <ul className="flex-col flex md:flex-row gap-x-12 gap-y-3 items-center justify-center">
        <li className="text-center text-sm mb-2">
          <Link to="/">Homepage</Link>
        </li>
        <li className="text-center text-sm mb-2">
          <Link to="/">About us</Link>
        </li>
        <li className="text-center text-sm mb-2">
          <Link to="/">Services</Link>
        </li>
        <li className="text-center text-sm mb-2">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center">
          <InstagramLogoIcon className="sm:w-[25px] sm:h-[25px]" />
          <GitHubLogoIcon className="sm:w-[25px] sm:h-[25px]" />
          <TwitterLogoIcon className="sm:w-[25px] sm:h-[25px]" />
          <LinkedInLogoIcon className="sm:w-[25px] sm:h-[25px]" />
        </div>
        <p className="text-sm text-center">
          Easy Trip 2025 © All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default UserFooter;
