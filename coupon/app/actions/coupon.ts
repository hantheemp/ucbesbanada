"use server";

import { redirect } from "next/navigation";
import User from "../[locale]/(models)/User";
import z from "zod";
import { getCookie } from "cookies-next";
import { getLocale } from "next-intl/server";

const editSchema = z.object({
  id: z.string(),
  couponCode: z.string().min(5).max(20),
  commission: z.coerce.number().int(),
  cost: z.coerce.number(),
  pointsGained: z.coerce.number().int(),
});

export async function getCoupon() {
  return User.find();
}

export async function getCouponById(id: string) {
  return User.findById(id);
}

export async function editCoupon(prevState: unknown, formData: FormData) {
  const result = editSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) {
    console.log(result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  data.pointsGained = data.pointsGained + (data.cost * data.commission) / 100;

  await User.updateOne(
    {
      _id: data.id,
    },
    {
      $set: data,
    }
  );

  redirect("/home/coupon");
}

export async function getCouponDU() {
  const authDoctor = getCookie("authDoctor") + "";
  return User.find({
    authDoctor: authDoctor,
  });
}

export async function getCouponByIdDU(id: string) {
  const authDoctor = getCookie("authDoctor") + "";
  return User.find({
    _id: id,
    authDoctor: authDoctor,
  });
}

export async function editCouponDU(prevState: unknown, formData: FormData) {
  const result = editSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) {
    console.log(result.error.formErrors.fieldErrors);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const authDoctor = getCookie("authDoctor") + "";

  data.pointsGained = data.pointsGained + (data.cost * data.commission) / 100;

  await User.updateOne(
    {
      _id: data.id,
    },
    {
      $set: data,
    }
  );

  redirect(`${getLocale()}/du/${authDoctor}`);
}
