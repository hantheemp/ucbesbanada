"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/app/[locale]/(models)/User";
import { createSession } from "./session";
const bcrypt = require("bcrypt");

const registerSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string(),
  password: z.string().min(8),
  telephone: z.string().min(11),
  couponCode: z.string().optional(),
  locale: z.string().optional(),
  authDoctor: z.string().optional(),
});

export async function register(prevState: unknown, formData: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    console.log("This email is already in use!");
    redirect(`/${data.locale}/login`);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = new User({
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: hashedPassword,
    telephone: data.telephone,
    roleFilter: "U",
    couponCode: "None",
    pointsGained: 0,
    authDoctor: "None",
  });

  await newUser.save();
  await createSession(newUser._id, newUser.roleFilter);
}

export async function registerByDoctor(prevState: unknown, formData: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    console.log("This email is already in use!");
    redirect(`/${data.locale}/login`);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = new User({
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: hashedPassword,
    telephone: data.telephone,
    roleFilter: "AU",
    couponCode: "None%0",
    pointsGained: 0,
    authDoctor: data.authDoctor,
  });

  await newUser.save();
  await createSession(newUser._id, newUser.roleFilter);
}

export async function registerByAgent(prevState: unknown, formData: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    console.log("This email is already in use!");
    redirect(`/${data.locale}/register/thanks`);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = new User({
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: hashedPassword,
    telephone: data.telephone,
    roleFilter: "U",
    couponCode: data.couponCode,
    pointsGained: 0,
    authDoctor: data.authDoctor,
  });

  console.log(data.couponCode)

  await fetch(`${process.env.BASE_URL}/api/emails`, {
    method: "POST",
    body: JSON.stringify({
      authDoctor: newUser.authDoctor,
      name: newUser.name,
      surname: newUser.surname,
      telephone: newUser.telephone,
      couponCode: newUser.couponCode,
    }),
  });

  // For security issues, we are not saving the new patients to the database.
  // await newUser.save();
  await createSession(newUser._id, newUser.roleFilter);
}
