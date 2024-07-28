import User from "@/app/[locale]/(models)/User";
import AgentCard from "@/app/[locale]/_components/AgentCard";

export default async function AgentPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await User.findOne({ _id: id });

  if (!user) {
    return <div>Agent not found</div>;
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

  return <AgentCard params={userParams} />;
}
