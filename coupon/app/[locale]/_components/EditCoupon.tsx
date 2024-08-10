"use client";

import React from "react";
import { useFormState } from "react-dom";
import { editCoupon } from "@/app/pages/actions/coupon";
import Coupon from "./Coupon";
import { useLocale, useTranslations } from "next-intl";

export default function EditCouponForm({
  params: { id, name, surname, couponCode, pointsGained },
}: {
  params: {
    id: string;
    name: string;
    surname: string;
    couponCode: string;
    pointsGained: number;
  };
}) {
  const translations = useTranslations("Coupon");
  const [error, action] = useFormState(editCoupon, {});
  const locale = useLocale();

  return (
    <div>
      <Coupon
        id={id}
        name={name}
        surname={surname}
        couponCode={couponCode}
        pointsGained={pointsGained}
      ></Coupon>
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
              placeholder="Coupon Code"
              className="input input-bordered w-full max-w-xs mb-2"
              id="id"
              name="id"
              defaultValue={id}
              hidden={true}
            />
            {error.couponCode && (
              <div className="text-desctructive">{error.couponCode}</div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <label className="mb-2" htmlFor="couponCode">
              {translations("coupon-edit-couponCode")}
            </label>
            <select defaultValue={couponCode} id="couponCode" name="couponCode">
              <option value={name + "-" + "IRON"}>{name + " " + surname + " Rank:"}IRON (2.5%)</option>
              <option value={name + "-" + "BRONZE"}>{name + " " + surname + " Rank:"}BRONZE (5.0%)</option>
              <option value={name + "-" + "SILVER"}>{name + " " + surname + " Rank:"}SILVER (7.5%)</option>
              <option value={name + "-" + "GOLD"}>{name + " " + surname + " Rank:"}GOLD (10.0%)</option>
              <option value={name + "-" + "EMERALD"}>{name + " " + surname + " Rank:"}EMERALD (12.5%)</option>
              <option value={name + "-" + "DIAMOND"}>{name + " " + surname + " Rank:"}DIAMOND (15.0%)</option>
              <option value={name + "-" + "MASTER"}>{name + " " + surname + " Rank:"}MASTER (20.0%)</option>
            </select>
            {error.couponCode && (
              <div className="text-desctructive">{error.couponCode}</div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <label className="mb-2" htmlFor="cost">
              {translations("coupon-edit-cost")}
            </label>
            <input
              type="number"
              placeholder="Cost"
              className="input input-bordered w-full max-w-xs mb-2"
              id="cost"
              name="cost"
            />
            {error.pointsGained && (
              <div className="text-desctructive">{error.pointsGained}</div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <label className="mb-2" htmlFor="pointsGained">
              {translations("coupon-edit-pointsGained")}
            </label>
            <input
              type="number"
              placeholder="Points"
              className="input input-bordered w-full max-w-xs mb-2"
              id="pointsGained"
              name="pointsGained"
              defaultValue={pointsGained}
            />
            {error.pointsGained && (
              <div className="text-desctructive">{error.pointsGained}</div>
            )}
          </label>
          <label hidden={true} className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="tr"
              className="input input-bordered w-full max-w-xs mb-2"
              id="locale"
              name="locale"
              defaultValue={locale}
              hidden={true}
            />
          </label>
          <button type="submit" className="btn btn-ghost font-bold">
            <label className="text-l">
              {translations("coupon-edit-submit")}
            </label>
          </button>
        </div>
      </form>
    </div>
  );
}
