import EditUserForm from "@/app/[locale]/_components/EditUserForm";
import User from "@/app/[locale]/(models)/User";

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
    email: user.email,
    password: user.password,
    telephone: user.telephone,
    roleFilter: user.roleFilter,
    couponCode: user.couponCode,
    pointsGained: user.pointsGained,
  };

  return <EditUserForm params={userParams} />;
}
