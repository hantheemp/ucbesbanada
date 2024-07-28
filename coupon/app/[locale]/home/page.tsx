"use client"

import { useState, useEffect, ChangeEvent } from "react";

import TicketCard from "../_components/TicketCard";
import { useTranslations } from "next-intl";
import { getTicket } from "@/actions/tickets";

interface Ticket {
  _id: string;
  name: string;
  surname: string;
  iban: string;
  withdrawAmount: number;
  description: string;
  status: string;
}

export default function CouponManagement() {

  const translation = useTranslations("Home")

  const [status, setStatus] = useState("PENDING");
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function fetchTickets() {
      const ticketData = await getTicket(status) as Ticket[];
      setTickets(ticketData);
    }

    fetchTickets();
  }, [status]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <select id="status" value={status} onChange={handleChange}>
        <option value="PENDING">{translation("home-pending")}</option>
        <option value="APPROVED">{translation("home-approved")}</option>
        <option value="CANCELLED">{translation("home-cancelled")}</option>
      </select>
      <div>
        {tickets.map((ticket) => (
          <div key={ticket._id}>
            <TicketCard
              id={ticket._id}
              name={ticket.name}
              surname={ticket.surname}
              iban={ticket.iban}
              withdrawAmount={ticket.withdrawAmount}
              description={ticket.description}
              status={ticket.status}
            />
          </div>
        ))}
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
