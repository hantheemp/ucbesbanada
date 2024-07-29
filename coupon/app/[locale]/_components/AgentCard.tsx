import QRCode from "react-qr-code";
import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";

export default function AgentCard({
  params: {
    id,
    name,
    surname,
    email,
    password,
    telephone,
    roleFilter,
    couponCode,
    pointsGained,
  },
}: {
  params: {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    telephone: string;
    roleFilter: string;
    couponCode: string;
    pointsGained: number;
  };
}) {
  const locale = useLocale();
  const value = process.env.QR_REDIRECT + locale + "/register/" + couponCode; 
  const translations = useTranslations("Agent");

  return (
    <div className="font-bold text-center">
      <div className="flex justify-center navbar bg-base-300 font-bold">
        <LocalSwitcher type="agent" id={id}></LocalSwitcher>
        <Link
          className="btn btn-ghost font-bold"
          href={`/${locale}/payment/${id}`}
        >
          {translations("agent-paymentRequest")}
        </Link>
        <Link className="btn btn-ghost" href="/">
          <PiPowerBold />
        </Link>
      </div>
      <div className="pt-20 space-y-4 flex flex-col justify-top items-center content-center h-screen">
        <h1 className="text-3xl">
          {translations("agent-welcome")} {name} {surname}
        </h1>
        <h2>
          {translations("agent-yourCouponCode")} {couponCode}
        </h2>
        <div>{translations("agent-registerSomeone")}</div>
        <QRCode
          size={256}
          style={{ height: "auto" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
