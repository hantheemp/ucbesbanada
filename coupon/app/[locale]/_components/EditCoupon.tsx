"use client";

import React from "react";
import { useFormState } from "react-dom";
import { editCoupon } from "@/pages/actions/coupon";
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

  function splitCommission(couponCode: string) {
    let parts = couponCode.split("%");

    let firstPart;

    let secondPart;

    if (parts.length === 2) {
      firstPart = parts[0];
      secondPart = parts[1];
    }

    const agentNameAndCommission = {
      agentName: firstPart,
      agentCommission: secondPart,
    };

    return agentNameAndCommission;
  }

  const agentInfo = splitCommission(couponCode);

  const agentCommission = agentInfo.agentCommission;

  console.log(agentCommission);

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
            <input
              type="text"
              placeholder="Coupon Code"
              className="input input-bordered w-full max-w-xs mb-2"
              id="couponCode"
              name="couponCode"
              defaultValue={couponCode}
            />
            {error.couponCode && (
              <div className="text-desctructive">{error.couponCode}</div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <label className="mb-2" htmlFor="commission">
              {translations("coupon-edit-commission")}
            </label>
            <input
              type="number"
              placeholder="Commission"
              className="input input-bordered w-full max-w-xs mb-2"
              id="commission"
              name="commission"
              defaultValue={agentCommission}
            />
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
              defaultValue={pointsGained}
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
              placeholder="Points"
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
