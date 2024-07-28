import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";
import LocalSwitcher from "./LocalSwitcher";
import { getCookie, hasCookie } from "cookies-next";

export function DUNavbar() {
  const localeActive = useLocale();
  const translations = useTranslations("Home");
  const authDoctor = getCookie("authDoctor") + "";

  return (
    <div className="navbar bg-base-300 font-bold">
      <div className="flex-1">
        <Link
          href={`/${localeActive}/du/${authDoctor}`}
          className="btn btn-ghost text-2xl"
        >
          {translations("name")}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <LocalSwitcher type="homeDoctor" id="null"></LocalSwitcher>
          </li>
          <li>
            <Link href={`/${localeActive}/du/${authDoctor}/`}>
              {translations("navbar-home")}
            </Link>
          </li>
          <li>
            <Link href={`/${localeActive}/du/${authDoctor}/user`}>
              {translations("navbar-user")}
            </Link>
          </li>
          <li>
            <Link href={`/${localeActive}/du/${authDoctor}/coupon`}>
              {translations("navbar-coupon")}
            </Link>
          </li>
          <li>
            <Link href={`/${localeActive}/du/${authDoctor}/qr`}>
              {translations("navbar-qr")}
            </Link>
          </li>
        </ul>
        <button className="btn btn-ghost">
          <PiPowerBold></PiPowerBold>
        </button>
      </div>
    </div>
  );
}
