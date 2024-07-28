import AgentRegisterForm from "../../_components/AgentRegisterForm";

export default function RegisterByDoctor({
  params: { authDoctor },
}: {
  params: {
    authDoctor: string;
  };
}) {

  const userParams = {
    authDoctor: authDoctor
  }

  return <AgentRegisterForm params={userParams} />;
}
