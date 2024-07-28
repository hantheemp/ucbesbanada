"use server";

import { redirect } from "next/navigation";
import User from "@/app/[locale]/(models)/User";
import z from "zod";
import { getCookie } from "cookies-next";
import { getLocale } from "next-intl/server";
import { cookies } from "next/headers";

const editSchema = z.object({
  id: z.string(),
  couponCode: z.string().min(5).max(20),
  commission: z.coerce.number().int(),
  cost: z.coerce.number(),
  pointsGained: z.coerce.number().int(),
  locale: z.string().optional(),
});

export async function getCoupon() {
  const cookieStore = cookies();
  const authDoctor = cookieStore.get("authDoctor");
  console.log(authDoctor?.value);
  return User.find({
    authDoctor: authDoctor?.value,
  });
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

  redirect(`/${data.locale}/home/coupon`);
}
