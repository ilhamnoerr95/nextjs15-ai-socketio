"use client";

import React, { use } from "react";

const ReviewDetail = ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	const err = Math.floor(Math.random() * 2);
	console.log(err);

	if (err === 1) {
		throw new Error("test error in page");
	}

	const { productId, reviewId } = use(params);
	return (
		<div>
			{reviewId} for product Id {productId}
		</div>
	);
};

export default ReviewDetail;
