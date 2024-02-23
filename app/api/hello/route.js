import { NextResponse } from "next/server";

export async function GET(request) {
	// here is where you process requrest data
	return new NextResponse(JSON.stringify({ pageHeader: "Hello", pageContent: "This is the hello page." }));
}
