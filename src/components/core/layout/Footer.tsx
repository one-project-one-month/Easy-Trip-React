import {
	InstagramLogoIcon,
	TwitterLogoIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
	MagicWandIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="border-t ">
			<div className="container mx-auto max-sm:flex-col gap-3 max-sm:text-center flex items-center justify-between py-3 px-5 md:px-10">
				<div className="">
					<h1 className="sm:text-xl text-lg flex items-center gap-2 mb-2">
						<MagicWandIcon />
						<span>Easy Trip</span>
					</h1>
					<ul className="flex sm:gap-5 gap-1 flex-col sm:flex-row max-sm:text-xs">
						<li>
							<Link to="/">Terms & Conditions</Link>
						</li>
						<li>
							<Link to="/">Privacy Policy</Link>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex gap-2 max-sm:justify-center justify-end">
						<InstagramLogoIcon className="sm:w-[25px] sm:h-[25px]" />
						<GitHubLogoIcon className="sm:w-[25px] sm:h-[25px]" />
						<TwitterLogoIcon className="sm:w-[25px] sm:h-[25px]" />
						<LinkedInLogoIcon className="sm:w-[25px] sm:h-[25px]" />
					</div>
					<p className="text-xs md:text-base md:text-end">
						Easy Trip 2025 © All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
