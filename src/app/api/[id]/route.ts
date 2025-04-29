import { dataDummy } from "@/app/data/data";

export async function GET(
	Req: Request,
	{ params }: { params: Promise<{ id: string | number }> },
) {
	const { id } = await params;

	const dataDum = dataDummy.find(
		(d: { id: string | number; name: string; comment: string }) =>
			d.id === Number(id),
	);

	console.log(Req, "this request");
	if (!dataDum) {
		return Response.json(
			{
				eror: "data not Found",
			},
			{
				status: 404,
			},
		);
	}

	return Response.json(dataDum, {
		status: 200,
	});
}

export async function PATCH(
	Req: Request,
	{ params }: { params: Promise<{ id: string | number }> },
) {
	const { id } = await params;
	const re = await Req.json();

	const indexing = dataDummy.findIndex(
		(d: { id: string | number; name: string; comment: string }) =>
			d.id === Number(id),
	);
	dataDummy[indexing].name = re.text;
	console.log(re.text, id, indexing, dataDummy);

	return Response.json(dataDummy, {
		status: 200,
	});
}

export async function DELETE(
	Req: Request,
	{ params }: { params: Promise<{ id: string | number }> },
) {
	const { id } = await params;

	const indexing = dataDummy.findIndex(
		(d: { id: string | number; name: string; comment: string }) =>
			d.id === Number(id),
	);
	const deleteData = dataDummy[indexing];
	dataDummy.splice(indexing, 1);
	console.log(dataDummy);
	return Response.json(deleteData, {
		status: 200,
	});
}
