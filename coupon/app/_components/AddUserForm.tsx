"use client";

import { addUser } from "../actions/users";
import { useFormState } from "react-dom";

export default function AddUserForm() {
  const [error, action] = useFormState(addUser, {});

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
          />
          {error.surname && (
            <div className="text-destructive">{error.surname}</div>
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
          />
          {error.email && <div className="text-destructive">{error.email}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="johndoe"
            className="input input-bordered w-full max-w-xs mb-2"
            id="password"
            name="password"
          />
          {error.password && (
            <div className="text-destructive">{error.password}</div>
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
          />
          {error.telephone && (
            <div className="text-destructive">{error.telephone}</div>
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
          >
            <option value="U">U</option>
            <option value="AU">AU</option>
          </select>
          {error.roleFilter && (
            <div className="text-destructive">{error.roleFilter}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="couponCode">
            Coupon Code
          </label>
          <input
            type="text"
            placeholder="JOHN10"
            className="input input-bordered w-full max-w-xs mb-2"
            id="couponCode"
            name="couponCode"
          />
          {error.couponCode && (
            <div className="text-destructive">{error.couponCode}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="pointsGained">
            Points
          </label>
          <input
            type="text"
            placeholder="100"
            className="input input-bordered w-full max-w-xs mb-2"
            id="pointsGained"
            name="pointsGained"
          />
          {error.pointsGained && (
            <div className="text-destructive">{error.pointsGained}</div>
          )}
        </label>
        <button type="submit" className="btn btn-ghost font-bold">
          <label className="text-l">Submit</label>
        </button>
      </div>
    </form>
  );
}
