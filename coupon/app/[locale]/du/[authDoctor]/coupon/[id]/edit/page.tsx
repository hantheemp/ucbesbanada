import User from "@/app/[locale]/(models)/User";
import EditCouponForm from "@/app/[locale]/_components/EditCoupon";
import { getRelatedAgent } from "@/app/actions/agent";

export default async function EditUser({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await User.findOne({ _id: id });

  if (!user) {
    return <div>User not found</div>;
  }

  const userParams = {
    id: user.id,
    name: user.name,
    surname: user.surname,
    couponCode: user.couponCode,
    pointsGained: user.pointsGained,
  };

  return <EditCouponForm params={userParams} />;
}
