import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(Req: NextRequest) {
	const theme = Req.cookies.get("theme");
	console.log(theme);

	const cookiesStore = await cookies();
	cookiesStore.set("uye", "20");

	return new Response("test", {
		headers: {
			"Set-Cookie": "theme=dark",
		},
	});
}
