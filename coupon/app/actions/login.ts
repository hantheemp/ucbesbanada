"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import User from "../(models)/User";

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export default async function login(prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (result.success === false) return result.error.formErrors.fieldErrors;

  const data = result.data;

  const users = await User.find({
    email: data.email,
  });

  if (users.length > 0) {
    const user = users[0];

    if (user.roleFilter === "AU") {
      redirect("/home");
    } else {
      redirect(`/agent/${user.id}`);
    }
  }
}
