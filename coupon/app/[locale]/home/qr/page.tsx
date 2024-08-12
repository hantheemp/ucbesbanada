import QRCode from "react-qr-code";
import { useLocale, useTranslations } from "next-intl";
import { cookies } from "next/headers";

export default function DoctorQR() {
  const cookieStore = cookies();
  const authDoctor = cookieStore.get("authDoctor");

  const value =
    process.env.QR_REDIRECT +
    useLocale() +
    "/" +
    authDoctor?.value +
    "/register";
  const translations = useTranslations("Agent");

  return (
    <div className="font-bold text-center">
      <div className="pt-20 space-y-4 flex flex-col justify-top items-center content-center h-screen">
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
