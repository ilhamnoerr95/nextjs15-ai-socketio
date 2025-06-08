import React from "react";

const Loading = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="animate-spin rounded-full border-b-4 border-gray-200 border-l-4 border-gray-200 h-12 w-12">
				Loading..
			</div>
		</div>
	);
};

export default Loading;
