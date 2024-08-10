import { sendEmail } from "@/app/pages/actions/sendEmail";

export default function UserProfile() {
  sendEmail();

  return <h1>User Profile</h1>;
}
