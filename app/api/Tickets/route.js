import Ticket from "@/app/(models)/Ticket";
import {NextResponse} from "next/server";

export async function POST(req) {
  try {
    console.log("POST /api/Tickets")
    const body = await req.json();
    const ticketData = body.formData;
    try {
      await Ticket.create(ticketData);
      // return a 201 status code with a message
      return NextResponse.json({ message: "Ticket created" }, { status: 201 });
    } catch (dbError) {
      // return a 500 status code with an error message
      return NextResponse.json({ message: dbError.message }, { status: 500 });
    }
  } catch (error) {
    // return a 500 status code with an error message
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log("GET /api/Tickets")
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    // return a 500 status code with an error message
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}