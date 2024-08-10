import UserRegisterForm from "@/app/[locale]/_components/UserRegisterForm";

export default async function UserRegister({
  params: { couponCode, authDoctor },
}: {
  params: { couponCode: string, authDoctor : string };
}) {

  const params = {
    couponCode : couponCode,
    authDoctor : authDoctor
  }

  return <UserRegisterForm params={params}/>;
}