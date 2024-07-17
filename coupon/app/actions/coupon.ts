"use server";

import { redirect } from "next/navigation";
import User from "../(models)/User";
import z from "zod";

const editSchema = z.object({
  id: z.string(),
  couponCode: z.string().min(5).max(20),
  pointsGained: z.coerce.number().int(),
});

export async function getCoupon(){
  return User.find()
}

export async function getCouponById(id: string) {
  return User.findById(id);
}

export async function editCoupon(prevState: unknown, formData: FormData) {
  const result = editSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) return result.error.formErrors.fieldErrors;

  const data = result.data;

  await User.updateOne(
    {
      _id : data.id
    },
    {
      $set: data,
    }
  );

  redirect("/home/coupon")

}
