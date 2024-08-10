import "server-only";

import type { SessionPayload } from "./definitions";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);
const defaultLocale = "tr";

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(userId: string, roleFilter: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  switch (roleFilter) {
    case "U":
      redirect(`/tr/user`);
    case "AU":
      redirect(`/tr/agent/${userId}/`);
    case "DU":
      redirect(`/tr/home`);
    case "ADMIN":
      redirect(`/tr/home`);
    default:
      console.error("Unknown roleFilter:", roleFilter);
      return;
  }
}

export async function verifySession() {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect(`/${defaultLocale}/login`);
  }

  return { isAuth: true, userId: Number(session.userId) };
}

export async function updateSession() {
  const session = cookies().get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("session");
  redirect(`${defaultLocale}/login`);
}
