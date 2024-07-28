import { getCookie } from "cookies-next";
import User from "@/app/[locale]/(models)/User";

export async function getAgent(id: string) {
  return User.findById(id);
}

export function getRelatedAgent(couponCode: string) {
  let parts = couponCode.split("%");

  let firstPart;

  let secondPart;

  if (parts.length === 2) {
    firstPart = parts[0];
    secondPart = parts[1];
  }

  const agentNameAndCommission = {
    agentName: firstPart,
    agentCommission: secondPart,
  };

  return agentNameAndCommission;
}
