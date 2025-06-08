"use client";

import React from "react";

const Error = ({ error }: { error: Error }) => {
	React.useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="flex items-center justify center h-screen">
			<div className="text-2xl text-red-500">error Fetching users</div>
		</div>
	);
};

export default Error;
