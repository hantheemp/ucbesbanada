import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createCookie(authDoctor : string) {

  cookies().set("authDoctor", authDoctor, {
    httpOnly: false,
    secure: false,
  });
}

export function deleteCookie() {
  cookies().delete("authDoctor");
  redirect(`/`);
}
