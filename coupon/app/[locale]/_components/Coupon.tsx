import React from "react";

interface CouponCardProps {
  name: string;
  surname: string;
  couponCode: string;
  pointsGained: number;
  id: string;
}

const Coupon: React.FC<CouponCardProps> = ({
  name,
  surname,
  couponCode,
  pointsGained,
  id,
}) => {
  return (
    <div className="font-bold  card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl">
          {name} {surname}
        </h2>
        <p>{couponCode}</p>
        <p>{pointsGained}</p>
      </div>
    </div>
  );
};

export default Coupon;
