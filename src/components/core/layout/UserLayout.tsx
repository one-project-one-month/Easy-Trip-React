import { Outlet } from 'react-router'
import UserNavbar from '../UserNavbar'

export default function UserLayout() {
  return (
    <div>
        <UserNavbar />
        <Outlet />
    </div>
  )
}
