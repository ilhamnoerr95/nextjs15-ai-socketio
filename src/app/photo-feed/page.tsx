import React from "react";
import Image from "next/image";
import { photo } from "./image";
import Link from "next/link";
const Page = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			{photo.map(
				({ id, name, src }: { id: number; name: string; src: string }) => {
					return (
						<Link
							key={id}
							href={`/photo-feed/${id}`}
						>
							<Image
								src={src}
								width={500}
								height={800}
								alt={name}
								className="w-full object-cover aspect-square"
							/>
						</Link>
					);
				},
			)}
		</div>
	);
};

export default Page;
