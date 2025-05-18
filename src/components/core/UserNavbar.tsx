import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "../ui/button";

export default function UserNavbar() {
  return (
    <nav className="flex justify-between text-white items-center fixed w-full py-3 px-6 bg-black z-50 shadow-lg">
      <div>
        <Link
          className="font-extrabold flex text-3xl hover:bg-transparent hover:text-white transition-transform duration-300 hover:scale-110"
          to="/"
        >
          Easy Trip
        </Link>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-300 active:bg-transparent hover:bg-transparent text-md transition-colors duration-300 hover:text-white"
                href="/"
              >
                Destination
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-300 active:bg-transparent hover:bg-transparent text-md transition-colors duration-300 hover:text-white"
                href="/about"
              >
                Plan History
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem className="text-gray-300  active:bg-transparent hover:bg-transparent transition-colors duration-300 text-lg hover:text-white">
              <HoverCard>
                <HoverCardTrigger>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="p-2">
                  <Link to="/user/profile">
                    <Button className="w-full flex justify-center">
                      <UserRound />
                      Profile
                    </Button>
                  </Link>
                  <Button variant="destructive" className="flex mt-2 w-full justify-center">
                    <LogOut />
                    Logout
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
