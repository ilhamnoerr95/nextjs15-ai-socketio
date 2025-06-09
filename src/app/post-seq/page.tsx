import React, { Suspense } from "react";
import Author from "./author";

type Post = {
	userId: number;
	title: string;
	body: string;
	id: number;
};

const PostSequential = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data: Post[] = await res.json();

	const filteredPost = data.filter((post: Post) => post.id % 10 === 1);
	console.log(filteredPost);
	return (
		<div className="p-4 max-w-7xl mx-auto">
			<div className="text-3xl font-extrabold mb-8 text-black">blog Posts</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{filteredPost.map((post: Post) => (
					<div
						key={post.id}
						className="bg-white rounded-lg shadow-lg p-6"
					>
						<h2 className="text-lg font-semibold mb-2">{post.title}</h2>
						<p className="text-gray-600">{post.body}</p>
						{/* suspence for streaming data who have delay, like loading*/}
						<Suspense
							fallback={<div className="text-gray-600">Loading Author...</div>}
						>
							<Author userId={post.userId} />
						</Suspense>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostSequential;
