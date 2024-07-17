import React from "react";
import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";

interface CouponCardProps {
  name: string;
  surname: string;
  couponCode: string;
  pointsGained: number;
  id: number;
}

const CouponCard: React.FC<CouponCardProps> = ({
  name,
  surname,
  couponCode,
  pointsGained,
  id,
}) => {
  return (
    <div className="font-bold card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {name} {surname}
        </h2>
        <p>{couponCode}</p>
        <p>{pointsGained}</p>
        <Link className="card-actions justify-end" href={`coupon/${id}/edit/`}>
          Edit
          <PiNotePencilBold />
        </Link>
      </div>
    </div>
  );
};

export default CouponCard;
