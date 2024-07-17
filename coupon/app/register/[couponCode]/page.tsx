import UserRegisterForm from "@/app/_components/UserRegisterForm";

export default async function UserRegister({
  params: { couponCode },
}: {
  params: { couponCode: string };
}) {

  const params = {
    couponCode : couponCode
  }

  return <UserRegisterForm params={params}/>;
}