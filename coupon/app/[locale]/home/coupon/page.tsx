
import CouponCard from "@/app/[locale]/_components/CouponCard";
import { getCoupon } from "@/app/actions/coupon";

export default async function CouponManagement() {
  const coupons = await getCoupon();

  return (
    <div>
      {coupons.map((coupon, index) => (
        <div key={coupon._id}>
          <CouponCard
            name={coupon.name}
            surname={coupon.surname}
            couponCode={coupon.couponCode}
            pointsGained={coupon.pointsGained}
            id={coupon._id}
          />
        </div>
      ))}
    </div>
  );
}