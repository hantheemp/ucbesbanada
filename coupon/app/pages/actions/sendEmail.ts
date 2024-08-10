"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  let data;
  try {
    data = await resend.emails.send({
      from: "temelmuratkagan@gmail.com",
      to: "temelmuratkagan@gmail.com",
      subject: "test",
      html: "<strong>It works!</strong>",
    });
  } catch (error: unknown) {
    console.log("Internal server error,", error);
  }

  return {
    data,
  };
};
