import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const publicPath = path == "/login" || path == "/cep";
	console.log(path);
	if (!publicPath) {
		return NextResponse.redirect(new URL("/login", request.url));
	} else {
		return;
	}

	// return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/login", "/cep"],
};
