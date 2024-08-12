"use client";

import { useLocale, useTranslations } from "next-intl";
import { updateUserPassword } from "@/app/pages/actions/users";
import React from "react";
import { useFormState } from "react-dom";

export default function ResetPasswordForm({ email }: { email: string }) {
  const locale = useLocale();
  const [error, action] = useFormState(updateUserPassword, {});
  const translations = useTranslations("User");

  const decodedEmail = decodeURIComponent(email);

  return (
    <div className="font-bold flex justify-center items-center h-screen">
      <form
        className="flex flex-col justify-center items-center w-full max-w-xs p-4"
        action={action}
      >
        <label className="form-control w-full mb-4">
          <span hidden={true} className="mb-2 block">
            {translations("user-add-email")}
          </span>
          <input
            type="text"
            placeholder="johndoe@example.com"
            className="input input-bordered w-full"
            id="email"
            name="email"
            defaultValue={decodedEmail}
            hidden={true}
          />
          {error?.email && (
            <div className="text-destructive mt-2">{error.email}</div>
          )}
        </label>
        <label className="form-control w-full mb-4">
          <span className="mb-2 block">
            {translations("user-add-password")}
          </span>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full"
            id="password"
            name="password"
          />
          {error?.password && (
            <div className="text-destructive mt-2">{error.password}</div>
          )}
        </label>
        <button type="submit" className="btn btn-ghost font-bold">
          {translations("user-add-submit")}
        </button>
      </form>
    </div>
  );
}
