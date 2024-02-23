import { NextResponse } from "next/server";

export async function GET(request) {
	// here is where you process requrest data
	return new NextResponse(
		JSON.stringify({ pageHeader: "Welcome", pageContent: "Welcome to my first Next.js project" })
	);
}
