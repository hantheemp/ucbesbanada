import UserEmail from "@/app/emails/UserEmail";
import { getUserByAuthDoctor } from "@/app/pages/actions/users";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { authDoctor, name, surname, couponCode } = await request.json();
    const users = await getUserByAuthDoctor(authDoctor);

    let emailResults: any[] = [];

    for (const user of users) {
      if (user.roleFilter !== "AU") {
        const data = await resend.emails.send({
          from: "bilgi@ucbesbanada.com",
          to: user.email,
          subject: "Hasta Bilgilendirmesi Hk.",
          react: UserEmail({ name, surname, couponCode }),
        });

        emailResults.push(data);
      }
    }

    return NextResponse.json({ success: true, emailResults });
  } catch (error) {
    console.error("Error sending emails:", error);
    console.log(error);
  }
}
