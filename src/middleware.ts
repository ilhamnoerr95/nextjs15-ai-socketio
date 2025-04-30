import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// handling headers and cookies in middleware
	const res = NextResponse.next();
	const themePreference = request.cookies.get("theme");
	if (!themePreference) {
		res.cookies.set("theme", "black");
	}

	// handling legacy url with rewrite to improving seo
	// NextResponse.rewrite(new URL("/", request.url));
	/**
	 * ex: when we redirect on /blog url, content will contain "/" but
	 * the url stay still on /blog
	 */
	// with conditional statemens
	// if (request.nextUrl.pathname === "/blog") {
	// 	return NextResponse.redirect(new URL("/", request.url));
	// }
}

// case 1 with matcher config
// no on could touch blog route
// export const config = {
// 	matcher: "/blog",
// };
