import User from "@/app/[locale]/(models)/User";
import PaymentForm from "@/app/[locale]/_components/PaymentForm";

export default async function PaymentPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await User.findById(id);

  const userParams = {
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
    telephone: user.telephone,
    roleFilter: user.roleFilter,
    couponCode: user.couponCode,
    pointsGained: user.pointsGained,
  };

  return <PaymentForm params={userParams}></PaymentForm>;
}
