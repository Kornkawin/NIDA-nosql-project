import Ticket from "@/app/(models)/Ticket";
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
  try {
    console.log("GET /api/Tickets/[id]")
    const { id } = params;
    const foundTicket = await  Ticket.findOne(id);
    return NextResponse.json({ foundTicket }, { status : 200 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    console.log("DELETE /api/Tickets/[id]")
    const {id} = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    console.log("PUT /api/Tickets/[id]")
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData
    })


    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}