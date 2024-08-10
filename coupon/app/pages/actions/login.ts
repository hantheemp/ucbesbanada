"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/app/[locale]/(models)/User";
import { cookies } from "next/headers";
import { createSession, verifySession } from "./session";
const bcrypt = require("bcrypt");

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  locale: z.string().optional(),
});

export async function login(prevState: unknown, formData: FormData) {
  const isVerified = await verifySession();

  const result = loginSchema.safeParse(Object.fromEntries(formData));

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

  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) {
    console.log("Passwords are not matching!");
    return;
  }

  cookies().set("authDoctor", user.authDoctor, {
    httpOnly: false,
    secure: false,
  });
  await createSession(user._id, user.roleFilter);
}
