import UserRegisterForm from "@/app/[locale]/_components/UserRegisterForm";

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