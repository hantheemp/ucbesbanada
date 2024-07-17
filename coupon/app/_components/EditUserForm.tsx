"use client";

import { editUser } from "../actions/users";
import React from "react";
import { useFormState } from "react-dom";

export default function EditUserForm({
  params: {
    id,
    name,
    surname,
    email,
    password,
    telephone,
    roleFilter,
    couponCode,
    pointsGained,
  },
}: {
  params: {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    telephone: string;
    roleFilter: string;
    couponCode: string;
    pointsGained: number;
  };
}) {
  const [error, action] = useFormState(editUser, {});

  return (
    <form
      className="my-8 flex justify-center align-center text-l font-bold"
      action={action}
    >
      <div>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            Name
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
            Surname
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
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            placeholder="johndoe@example.com"
            className="input input-bordered w-full max-w-xs mb-2"
            id="email"
            name="email"
            defaultValue={email}
          />
          {error.email && (
            <div className="text-desctructive">{error.email}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs mb-2"
            id="password"
            name="password"
            defaultValue={password}
            hidden={true}
          />
          {error.password && (
            <div className="text-desctructive">{error.password}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="telephoneNumber">
            Telephone Number
          </label>
          <input
            type="tel"
            placeholder="+90 543 942 4001"
            className="input input-bordered w-full max-w-xs mb-2"
            id="telephone"
            name="telephone"
            defaultValue={telephone}
          />
          {error.telephone && (
            <div className="text-desctructive">{error.telephone}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="roleFilter">
            Role Filter
          </label>

          <select
            className="input input-bordered w-full max-w-xs mb-2"
            id="roleFilter"
            name="roleFilter"
            defaultValue={roleFilter}
          >
            <option value="U">U</option>
            <option value="AU">AU</option>
          </select>

          {error.roleFilter && (
            <div className="text-desctructive">{error.roleFilter}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="couponCode">
            Coupon Code
          </label>
          <input
            type="text"
            placeholder="Coupon Code"
            className="input input-bordered w-full max-w-xs mb-2"
            id="couponCode"
            name="couponCode"
            defaultValue={couponCode}
            hidden={true}
          />
          {error.couponCode && (
            <div className="text-desctructive">{error.couponCode}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label hidden={true} className="mb-2" htmlFor="pointsGained">
            Points Gained
          </label>
          <input
            type="number"
            placeholder="Points"
            className="input input-bordered w-full max-w-xs mb-2"
            id="pointsGained"
            name="pointsGained"
            defaultValue={pointsGained}
            hidden={true}
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
  );
}
