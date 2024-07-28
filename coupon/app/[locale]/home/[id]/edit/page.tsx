import Ticket from "@/app/[locale]/(models)/Ticket";
import EditTicketForm from "@/app/[locale]/_components/EditTicketForm";

export default async function EditTicket({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const ticket = await Ticket.findById(id);

  const ticketParams = {
    id: ticket.id,
    name: ticket.name,
    surname: ticket.surname,
    iban: ticket.iban,
    withdrawAmount: ticket.withdrawAmount,
    description: ticket.description,
    status: ticket.status,
  };

  return <EditTicketForm params={ticketParams}></EditTicketForm>;
}
