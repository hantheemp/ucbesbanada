"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { useLocale } from "next-intl";
import { login } from "@/app/actions/login";
import { getCookie, hasCookie } from "cookies-next";
import { cookies } from "next/headers";

export default function LoginForm() {
  const [error, action] = useFormState(login, {});
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={action} className="text-center flex flex-col items-center">
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            id="email"
            name="email"
          />
          {error?.email && (
            <div className="text-destructive">{error.email}</div>
          )}
        </div>
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            id="password"
            name="password"
          />
          {error?.password && (
            <div className="text-destructive">{error.password}</div>
          )}
        </div>
        <div hidden={true} className="form-control w-full max-w-xs mb-2">
          <input
            type="locale"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            id="locale"
            name="locale"
            defaultValue={locale}
            hidden={true}
          />
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="btn btn-ghost font-bold">
            Submit
          </button>
          <Link
            className="btn btn-ghost font-bold"
            href={`/${locale}/forgotpass`}
          >
            Forgot Password?
          </Link>
          <Link
            className="btn btn-ghost font-bold"
            href={`/${locale}/register`}
          >
            Don't Have An Account?
          </Link>
        </div>
      </form>
    </div>
  );
}
