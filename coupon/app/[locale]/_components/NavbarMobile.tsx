import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";
import LocalSwitcher from "./LocalSwitcher";

export function NavbarMobile() {
  const localeActive = useLocale();
  const translations = useTranslations("Home");

  return (
    <div className="navbar bg-base-300 font-bold">
      <div className="flex-1">
        <Link
          href={`/${localeActive}/home/`}
          className="btn btn-ghost text-2xl"
        >
          {translations("name")}
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Menus
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <LocalSwitcher type="home" id="null"></LocalSwitcher>
            </li>
            <li>
              <Link href={`/${localeActive}/home`}>
                {translations("navbar-home")}
              </Link>
            </li>
            <li>
              <Link href={`/${localeActive}/home/user`}>
                {translations("navbar-user")}
              </Link>
            </li>
            <li>
              <Link href={`/${localeActive}/home/coupon`}>
                {translations("navbar-coupon")}
              </Link>
            </li>
            <li>
              <Link href={`/${localeActive}/home/qr`}>
                {translations("navbar-qr")}
              </Link>
            </li>
          </ul>
          <Link className="btn btn-ghost" href={`/${localeActive}/`}>
            <PiPowerBold></PiPowerBold>
          </Link>
        </div>
      </div>
    </div>
  );
}
