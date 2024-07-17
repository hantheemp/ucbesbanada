import User from "../(models)/User";

export async function getAgent(id: string) {
  return User.findById(id);
}
