import React from "react";
import { photo } from "../image";
import Image from "next/image";
const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const { id } = await params;
	const imagess: { id?: number; name?: string; src?: string } = photo.find((p) => p.id == Number(id))!;
	return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
            <div>
                <h1 className="text-center text-3xl font-bold my-4">
                    {imagess?.name}
                </h1>
            </div>
            <Image
            src={imagess?.src || ""}
            alt={imagess?.name || ""}
            width={1000}
            height={100}
            className="w-full object-cover aspect-square"
            />
            </div>
        </div>
    );
};

export default Page;
