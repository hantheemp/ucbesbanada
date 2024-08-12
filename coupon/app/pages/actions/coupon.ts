"use server";

import { redirect } from "next/navigation";
import User from "@/app/[locale]/(models)/User";
import z from "zod";
import { cookies } from "next/headers";

const editSchema = z.object({
  id: z.string(),
  couponCode: z.string().min(5).max(20),
  cost: z.coerce.number(),
  pointsGained: z.coerce.number().int(),
  locale: z.string().optional(),
});

export async function getCoupon() {
  const cookieStore = cookies();
  const authDoctor = cookieStore.get("authDoctor");

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
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  let parts = data.couponCode.split("%");

  let firstPart;
  let secondPart;

  if (parts.length == 2) {
    firstPart = parts[0];
    secondPart = parts[1];
  }

  const agentNameAndCommission = {
    agentName: firstPart,
    agentCommission: secondPart,
  };

  switch (agentNameAndCommission.agentCommission) {
    case "IRON":
      data.pointsGained = data.pointsGained + data.cost * 0.025;
      break;
    case "BRONZE":
      data.pointsGained = data.pointsGained + data.cost * 0.05;
      break;
    case "SILVER":
      data.pointsGained = data.pointsGained + data.cost * 0.075;
      break;
    case "GOLD":
      data.pointsGained = data.pointsGained + data.cost * 0.1;
      break;
    case "EMERALD":
      data.pointsGained = data.pointsGained + data.cost * 0.125;
      break;
    case "DIAMOND":
      data.pointsGained = data.pointsGained + data.cost * 0.15;
      break;
    case "MASTER":
      data.pointsGained = data.pointsGained + data.cost * 0.2;
      break;
  }

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
