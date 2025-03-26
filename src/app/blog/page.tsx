import React from "react";

const Blog = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});
	return <div>Blog</div>;
};

export default Blog;
