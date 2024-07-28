"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import Ticket from "@/app/[locale]/(models)/Ticket";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const createSchema = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  iban: z.string(),
  withdrawAmount: z.coerce.number().int(),
  description: z.string(),
  status: z.string(),
  locale: z.string().optional(),
});

export async function getTicket(status: string) {
  const cookieStore = cookies();
  const authDoctor = cookieStore.get("authDoctor");
  console.log(authDoctor?.value);
  switch (status) {
    case "PENDING":
      return await Ticket.find({ status: "PENDING", authDoctor: authDoctor?.value });
    case "APPROVED":
      return await Ticket.find({ status: "APPROVED", authDoctor: authDoctor?.value });
    case "CANCELLED":
      return await Ticket.find({ status: "CANCELLED", authDoctor: authDoctor?.value });
    default:
      throw new Error("Invalid status");
  }
}

export async function createTicket(prevState: unknown, formData: FormData) {
  const result = createSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const authDoctor = getCookie("authDoctor") + "";

  await Ticket.create({
    name: data.name,
    surname: data.surname,
    iban: data.iban,
    withdrawAmount: data.withdrawAmount,
    description: data.description,
    status: "PENDING",
    authDoctor: authDoctor,
  });

  redirect(`/${data.locale}/agent/${data.id}`);
}

export async function editTicket(prevState: unknown, formData: FormData) {
  const result = createSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await Ticket.updateOne(
    {
      _id: data.id,
    },
    {
      $set: data,
    }
  );

  redirect(`/${data.locale}/home`);
}

export async function deleteTicket(id: string) {
  await Ticket.deleteOne({
    _id: id,
  });
}
