import UserRegisterForm from "@/app/[locale]/_components/UserRegisterForm";
import AgentRegisterForm from "../../_components/AgentRegisterForm";

export default async function RegisterByDoctor({
  params: { authDoctor },
}: {
  params: { authDoctor: string };
}) {
  const params = {
    authDoctor: authDoctor,
  };

  return <AgentRegisterForm params={params} />;
}
