import ForgotPassEmail from "@/app/emails/ForgotPassEmail";
import UserEmail from "@/app/emails/UserEmail";
import { getUserByAuthDoctor } from "@/app/pages/actions/users";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { authDoctor, name, surname, telephone, couponCode, type, email } =
    await request.json();
  let emailResults: any[] = [];
  try {
    if (type === "incomingPatient") {
      const users = await getUserByAuthDoctor(authDoctor);

      for (const user of users) {
        if (user.roleFilter !== "AU") {
          const data = await resend.emails.send({
            from: "bilgi@ucbesbanada.com",
            to: user.email,
            subject: "Hasta Bilgilendirmesi Hk.",
            react: UserEmail({ name, surname, telephone, couponCode }),
          });

          emailResults.push(data);
        }
      }
    } else {
      const data = await resend.emails.send({
        from: "bilgi@ucbesbanada.com",
        to: email,
        subject: "Şifre Sıfırlama Bağlantısı",
        react: ForgotPassEmail({ email }),
      });

      emailResults.push(data);
    }

    return NextResponse.json({ success: true, emailResults });
  } catch (error) {
    console.error("Error sending emails:", error);
  }
}
