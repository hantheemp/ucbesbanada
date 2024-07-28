"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/app/[locale]/(models)/User";
import { createSession } from "./session";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { cookies } from "next/headers";
import { createCookie } from "./cookie";
const bcrypt = require("bcrypt");

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  locale: z.string().optional(),
});

export async function login(prevState: unknown, formData: FormData) {
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

  await createSession(user._id, data.locale);
  await createCookie(user.authDoctor);

  switch (user.roleFilter) {
    case "U":
      redirect(`/${data.locale}/user/`);
    case "AU":
      redirect(`/${data.locale}/agent/${user._id}/`);
    case "DU":
      redirect(`/${data.locale}/home`);
    case "ADMIN":
      redirect(`/${data.locale}/home/`);
    default:
      console.error("Unknown roleFilter:", user.roleFilter);
      return;
  }
}
