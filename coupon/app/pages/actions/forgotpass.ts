"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/app/[locale]/(models)/User";
import { cookies } from "next/headers";
import { createSession, verifySession } from "./session";
const bcrypt = require("bcrypt");

const forgotSchema = z.object({
  email: z.string().min(1),
});

export async function sendEmailToReset(prevState: unknown, formData: FormData) {
  const result = forgotSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) return result.error.formErrors.fieldErrors;

  const data = result.data;

  const users = await User.find({
    email: data.email,
  });

  if (!(users.length > 0)) {
    console.log("No user found!");
    return;
  }

  const user = users[0];

  await fetch(`${process.env.BASE_URL}/api/emails`, {
    method: "POST",
    body: JSON.stringify({
      type: "forgotPassword",
      email: data.email,
    }),
  });

  await createSession(user._id, user._roleFilter);
}
