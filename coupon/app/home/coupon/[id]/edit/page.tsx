import User from "@/app/(models)/User";
import EditCouponForm from "@/app/_components/EditCoupon";

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
