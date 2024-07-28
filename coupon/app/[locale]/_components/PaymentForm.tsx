"use client";

import React from "react";
import { useFormState } from "react-dom";
import { createTicket } from "@/pages/actions/tickets";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function PaymentForm({
  params: { id, name, surname, pointsGained },
}: {
  params: {
    id: string;
    name: string;
    surname: string;
    pointsGained: number;
  };
}) {
  const [error, action] = useFormState(createTicket, {});
  const translations = useTranslations("Agent")
  const pointsString = pointsGained + " ";
  const locale = useLocale();

  return (
    <form
      className="my-8 flex justify-center align-center text-l font-bold"
      action={action}
    >
      <div className="flex flex-col justify-center items-center content-center h-screen font-bold space-y-8">
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="id">
            ID
          </label>
          <input
            hidden={true}
            type="text"
            placeholder="ID"
            className="input input-bordered w-full max-w-xs mb-2"
            id="id"
            name="id"
            defaultValue={id}
          />
          {error.id && <div className="text-destructive">{error.id}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            {translations("agent-paymentRequest-name")}
          </label>
          <input
            type="text"
            placeholder="John"
            className="input input-bordered w-full max-w-xs mb-2"
            id="name"
            name="name"
            defaultValue={name}
          />
          {error.name && <div className="text-destructive">{error.name}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="surname">
          {translations("agent-paymentRequest-surname")}
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="input input-bordered w-full max-w-xs mb-2"
            id="surname"
            name="surname"
            defaultValue={surname}
          />
          {error.surname && (
            <div className="text-desctructive">{error.surname}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="iban">
          {translations("agent-paymentRequest-iban")}
          </label>
          <input
            type="text"
            placeholder="TR77...."
            className="input input-bordered w-full max-w-xs mb-2"
            id="iban"
            name="iban"
          />
          {error.iban && <div className="text-desctructive">{error.iban}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="withdrawAmount">
          {translations("agent-paymentRequest-withdrawAmount")}
          </label>
          <input
            type="number"
            placeholder={pointsString}
            className="input input-bordered w-full max-w-xs mb-2"
            id="withdrawAmount"
            name="withdrawAmount"
            defaultValue={pointsGained}
          />
          {error.iban && <div className="text-desctructive">{error.iban}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="description">
          {translations("agent-paymentRequest-note")}
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs mb-2"
            id="description"
            name="description"
          />
          {error.description && (
            <div className="text-desctructive">{error.description}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="status">
            Status
          </label>
          <input
            hidden={true}
            type="text"
            placeholder="PAID"
            className="input input-bordered w-full max-w-xs mb-2"
            id="status"
            name="status"
          />
          {error.status && (
            <div className="text-desctructive">{error.status}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="locale">
            Locale
          </label>
          <input
            hidden={true}
            type="text"
            className="input input-bordered w-full max-w-xs mb-2"
            id="locale"
            name="locale"
            defaultValue={locale}
          />
          {error.status && (
            <div className="text-desctructive">{error.status}</div>
          )}
        </label>
        <div>
          <Link className="btn btn-ghost" href={`/${locale}/agent/${id}`}>
            <PiArrowBendDoubleUpLeftBold></PiArrowBendDoubleUpLeftBold>
          </Link>
          <button type="submit" className="btn btn-ghost font-bold">
            <label className="text-l">{translations("agent-register-submit")}</label>
          </button>
        </div>
      </div>
    </form>
  );
}
