import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";

export function Navbar() {
  return (
    <div className="navbar bg-base-300 font-bold">
      <div className="flex-1">
        <Link href="/home" className="btn btn-ghost text-2xl">
          Üç Beş Bana Da
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/home/user">User Management</Link>
          </li>
          <li>
            <Link href="/home/coupon">Coupon Management</Link>
          </li>
        </ul>
        <Link className="btn btn-ghost" href="/">
          <PiPowerBold />
        </Link>
      </div>
    </div>
  );
}