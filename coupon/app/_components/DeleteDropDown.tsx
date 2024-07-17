"use client";

import { startTransition } from "react";
import { deleteUser } from "../actions/users";
import { PiTrashBold } from "react-icons/pi";

interface DeleteDropDownProps{
    id : string
}

export default function DeleteDropDown({id} : DeleteDropDownProps) {
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await deleteUser(id);
          window.location.reload()
        });
      }}
    >Delete
    <PiTrashBold></PiTrashBold>
    </button>
  );
}