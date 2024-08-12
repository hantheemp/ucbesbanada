import ResetPasswordForm from "../../_components/ResetPasswordForm";

export default function ResetPassword({
  params: { email },
}: {
  params: {
    email: string;
  };
}) {

  return <ResetPasswordForm email={email} />;
}
