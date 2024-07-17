"use client";

import { editUser } from "../actions/users";
import React from "react";
import { useFormState } from "react-dom";
import { editCoupon } from "../actions/coupon";
import Coupon from "./Coupon";

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
  const [error, action] = useFormState(editCoupon, {});

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
              Coupon Code
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
            <label className="mb-2" htmlFor="pointsGained">
              Points Gained
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
          <button type="submit" className="btn btn-ghost font-bold">
            <label className="text-l">Submit</label>
          </button>
        </div>
      </form>
    </div>
  );
}
