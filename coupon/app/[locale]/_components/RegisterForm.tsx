"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { register } from "@/app/pages/actions/register";
import { useLocale } from "next-intl";

export default function RegisterForm() {
  const [error, action] = useFormState(register, {});
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center h-screen">
      <form action={action} className="text-center flex flex-col items-center">
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            id="name"
            name="name"
          />
          {error?.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            placeholder="Surname"
            className="input input-bordered w-full max-w-xs"
            id="surname"
            name="surname"
          />
          {error?.surname && (
            <div className="text-destructive">{error.surname}</div>
          )}
        </div>
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
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            placeholder="Telephone Number"
            className="input input-bordered w-full max-w-xs"
            id="telephone"
            name="telephone"
          />
          {error?.telephone && (
            <div className="text-destructive">{error.telephone}</div>
          )}
        </div>
        <div hidden={true} className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            placeholder="tr"
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
          <Link className="btn btn-ghost font-bold" href="/tr/login">
            Already Have An Account?
          </Link>
        </div>
      </form>
    </div>
  );
}