import React from "react";

type Author = {
	id: number;
	name: string;
};

const Author = async ({ userId }: { userId: number }) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`,
	);
	const author: Author = await res.json();
	console.log(author);
	return (
		<div className="text-sm text-gray-600">
			Written by:{" "}
			<span className="font-semibold text-gray-600 hover:text-gray-900 transition-colors">
				{author.name}
			</span>
		</div>
	);
};

export default Author;
