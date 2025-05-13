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
        <div className="absolute bottom-0 left-0 w-full ">
            <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-between py-6 px-5 md:px-10">
                <div>
                    <h1 className="sm:text-2xl text-xl flex items-center gap-3 mb-4 font-bold">
                        <MagicWandIcon className="w-6 h-6 " />
                        <span>Easy Trip</span>
                    </h1>
                    <ul className="flex sm:gap-6 gap-3 flex-col sm:flex-row text-sm">
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
                        <InstagramLogoIcon className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <GitHubLogoIcon className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <TwitterLogoIcon className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        <LinkedInLogoIcon className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                    </div>
                    <p className="text-xs md:text-sm text-center md:text-right">
                        Easy Trip 2025 © All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
