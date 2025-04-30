import { dataDummy } from "@/app/data/data";
import { headers } from "next/headers";

/**
 *
 * the diffrent of Nextresponse and Response Type in next js
 * @Response is standarnd api native browser and just for standard properti that have limit in method, headers, body, url etc
 * @NextResponse the property of Response native expanded in nextreposne, this add some feature like: nexturl, cookies, geo, ip
 */

import { NextRequest } from "next/server";

export async function GET(Req: NextRequest) {
	const headerlist = await headers();
	console.log(headerlist.get("Authorization"));
	const searchParam = Req.nextUrl.searchParams;
	const query = searchParam.get("name");
	const filterData = query
		? dataDummy.filter((d) => d.name.includes(query))
		: dataDummy;
	return Response.json(filterData, {
		status: 200,
	});
}

export async function POST(Req: Request) {
	const request = await Req.json();
	console.log(request);
	return Response.json(request, {
		status: 201,
	});
}
