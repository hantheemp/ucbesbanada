import QRCode from "react-qr-code";
import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";

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
  const value = process.env.QR_REDIRECT + couponCode;

  return (
    <div className="font-bold text-center">
      <div className="flex justify-center navbar bg-base-300 font-bold">
        <Link className="btn btn-ghost" href={`/payment/${id}`}>Payment Request</Link>
        <Link className="btn btn-ghost" href="/">
          <PiPowerBold />
        </Link>
      </div>
      <div className="pt-20 space-y-4 flex flex-col justify-top items-center content-center h-screen">
      <h1 className="text-3xl">
        Welcome Back, {name} {surname}
      </h1>
      <h2>Your Coupon Code is: {couponCode}</h2>
      <div>To register someone with your code, Scan this QR Code!</div>
      <QRCode
        size={256}
        style={{ height: "auto"}}
        value={value}
        viewBox={`0 0 256 256`}
      />
      </div>
    </div>
  );
}
