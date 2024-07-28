"use client";

import { useFormState } from "react-dom";
import { editTicket } from "@/pages/actions/tickets";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";

export default function EditTicketForm({
  params: { id, name, surname, iban, withdrawAmount, description, status },
}: {
  params: {
    id: string;
    name: string;
    surname: string;
    iban: string;
    withdrawAmount: number;
    description: string;
    status: string;
  };
}) {
  const [error, action] = useFormState(editTicket, {});
  const translations = useTranslations("Home");
  const locale = useLocale();
  return (
    <form
      className="my-8 flex justify-center align-center text-l font-bold"
      action={action}
    >
      <div>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="id">
            ID
          </label>
          <input
            type="text"
            placeholder="ID"
            className="input input-bordered w-full max-w-xs mb-2"
            id="id"
            name="id"
            defaultValue={id}
            hidden={true}
          />
          {error.name && <div className="text-destructive">{error.name}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            {translations("home-edit-name")}
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
          {translations("home-edit-surname")}
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
          {translations("home-edit-iban")}
          </label>
          <input
            type="text"
            placeholder="TR77..."
            className="input input-bordered w-full max-w-xs mb-2"
            id="iban"
            name="iban"
            defaultValue={iban}
          />
          {error.iban && <div className="text-desctructive">{error.iban}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="withdrawAmount">
          {translations("home-edit-withdrawAmount")}
          </label>
          <input
            type="number"
            placeholder="100"
            className="input input-bordered w-full max-w-xs mb-2"
            id="withdrawAmount"
            name="withdrawAmount"
            defaultValue={withdrawAmount}
          />
          {error.withdrawAmount && (
            <div className="text-desctructive">{error.withdrawAmount}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="description">
            {translations("home-edit-description")}
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs mb-2"
            id="description"
            name="description"
            defaultValue={description}
          />
          {error.description && (
            <div className="text-desctructive">{error.description}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="status">
          {translations("home-edit-status")}
          </label>
          <select
            className="input input-bordered w-full max-w-xs mb-2"
            id="status"
            name="status"
            defaultValue={status}
          >
            <option value="PENDING">{translations("home-pending")}</option>
            <option value="CANCELLED">{translations("home-cancelled")}</option>
            <option value="APPROVED">{translations("home-approved")}</option>
          </select>
          {error.status && (
            <div className="text-desctructive">{error.status}</div>
          )}
        </label>
        <label hidden={true} className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs mb-2"
            id="locale"
            name="locale"
            defaultValue={locale}
            hidden={true}
          />
        </label>
        <button type="submit" className="btn btn-ghost font-bold">
          <label className="text-l">Submit</label>
        </button>
      </div>
    </form>
  );
}
