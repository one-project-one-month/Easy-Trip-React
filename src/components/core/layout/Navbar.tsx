import { Link } from "react-router";
import {
  UserCircleIcon,
  LogOutIcon,
  Home,
  Info,
  LogIn,
  FilePen,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getAccessToken } from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const token = getAccessToken();

  return (
    <nav className="flex justify-between text-white items-center fixed w-full py-3 px-6 bg-foreground z-50 shadow-lg">
      <div>
        <Link
          className="font-extrabold flex text-sm md:text-3xl hover:bg-transparent hover:text-white transition-transform duration-300"
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
                <span className="md:block hidden">Home</span>
                <Home className="text-white md:hidden block" />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-300 active:bg-transparent hover:bg-transparent text-md transition-colors duration-300 hover:text-white"
                href="/about"
              >
                <span className="md:block hidden">About</span>
                <Info className="text-white md:hidden block" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <NavigationMenu>
          {!token ? (
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-gray-300 active:bg-transparent hover:bg-transparent transition-colors duration-300 text-lg hover:text-white"
                  href="/auth"
                >
                  <span className="md:block hidden">Login</span>
                  <LogIn className="text-white md:hidden block" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/auth/register"
                  className="px-5 py-2 border-2 border-gray-700 hover:border-gray-500 rounded-full shadow-md  text-gray-300 font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <span className="md:block hidden">Register</span>
                  <FilePen className="md:hidden block" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          ) : (
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem className="text-gray-300  active:bg-transparent hover:bg-transparent transition-colors duration-300 text-lg hover:text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback className="rounded-lg">
                            CN
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">Name</span>
                          <span className="truncate text-xs text-muted-foreground">
                            Email
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <UserCircleIcon />
                        Account
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOutIcon />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}
        </NavigationMenu>
      </div>
    </nav>
  );
}
