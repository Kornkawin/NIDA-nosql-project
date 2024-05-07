import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Ticket");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const TicketPage = async ({ params }) => {
  const EDIT_MODE = params.id !== "new";

  let updateTicketData = {};

  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;