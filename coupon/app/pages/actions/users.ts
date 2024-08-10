"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "@/app/[locale]/(models)/User";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
const bcrypt = require("bcrypt");

const addSchema = z.object({
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().min(8),
  password: z.string().min(8),
  telephone: z.string().min(11),
  roleFilter: z.string().min(1).max(2),
  pointsGained: z.coerce.number().int(),
});

const editSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string().min(8),
  password: z.string().min(8),
  telephone: z.string().min(11),
  roleFilter: z.string().min(1).max(2),
  couponCode: z.string().optional(),
  pointsGained: z.coerce.number().int(),
});

export async function getUser() {
  const cookieStore = cookies();
  const authDoctor = cookieStore.get("authDoctor");
  console.log(authDoctor?.value);
  return await User.find({
    authDoctor: authDoctor?.value,
  });
}

export async function getUserByAuthDoctor(authDoctor: string) {
  const users = await User.find({
    authDoctor: authDoctor,
  });

  return users;
}

export async function addUser(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) return result.error.formErrors.fieldErrors;

  const data = result.data;

  const hashedPassword = await bcrypt.hash(data.password, 10);

  await User.create({
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: hashedPassword,
    telephone: data.telephone,
    roleFilter: data.roleFilter,
    pointsGained: data.pointsGained,
  });

  redirect("/home/user");
}

export async function deleteUser(id: string) {
  await User.deleteOne({
    _id: id,
  });
}

export async function editUser(prevState: unknown, formData: FormData) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) return result.error.formErrors.fieldErrors;

  const data = result.data;

  await User.updateOne({ email: data.email }, { $set: data });
}
