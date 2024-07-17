import React from "react";
import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";
import DeleteDropDown from "./DeleteDropDown";

interface TicketCardProps {
  id: string;
  name: string;
  surname: string;
  iban: string;
  withdrawAmount: number;
  description: string;
  status: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  id,
  name,
  surname,
  iban,
  withdrawAmount,
  description,
  status,
}) => {
  return (
    <div className="font-bold card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {name} {surname}
        </h2>
        <p>{iban}</p>
        <p>{description}</p>
        <p>{withdrawAmount}</p>
        <p>{status}</p>
        <div className="card-actions justify-end">
          <div className="row-actions">
            <Link href={`/home/${id}/edit`} className="action-link">
              Edit
              <PiNotePencilBold />
            </Link>
            <DeleteDropDown id={id} type="TICKET" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
