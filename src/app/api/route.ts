export async function GET() {
    return new Response("API ROUTE")
}

export async function POST(Req:Request) {
    const request = await Req.json()
    console.log(request)
    return Response.json(request,{
        status: 201
    })
}