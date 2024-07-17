"use client";

import { startTransition } from "react";
import { deleteUser } from "../actions/users";
import { PiTrashBold } from "react-icons/pi";
import { deleteTicket } from "../actions/tickets";

interface DeleteDropDownProps {
  id: string;
  type: string;
}

async function selectFunction({ id, type }: DeleteDropDownProps) {
  switch (type) {
    case "USER":
      startTransition(async () => {
        await deleteUser(id);
        window.location.reload();
      });
      break;
    case "TICKET":
      startTransition(async () => {
        await deleteTicket(id);
        window.location.reload();
      });
      break;
  }
}

export default function DeleteDropDown({ id, type }: DeleteDropDownProps) {
  return (
    <button
      onClick={() => {
        selectFunction({ id, type });
      }}
    >
      Delete
      <PiTrashBold />
    </button>
  );
}
