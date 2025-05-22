import { Link } from "react-router";

import AvatarDropdown from "./AvatarDropdown";
import { Button } from "@/components/ui/button";

import { getAccessToken } from "@/store/authStore";

export default function Navbar() {
  const token = getAccessToken();

  return (
    <nav className='sticky top-0 left-0 bg-accent-foreground text-accent'>
      <div className='h-16 flex items-center justify-between container mx-auto px-3'>
        <Link className='text-xl font-semibold' to='/'>
          Easy Trip
        </Link>

        <div className='flex items-center justify-center gap-4'>
          {token ? (
            <AvatarDropdown />
          ) : (
            <>
              <Button
                className='text-white hover:no-underline'
                variant='link'
                asChild
              >
                <Link to='/auth'>Login</Link>
              </Button>

              <Button variant='secondary' asChild>
                <Link to='/auth/register'>Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
