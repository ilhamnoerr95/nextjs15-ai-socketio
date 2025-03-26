"use client";

import React, { use } from "react";

const ReviewDetail = ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	const { productId, reviewId } = use(params);
	return (
		<div>
			{reviewId} for product Id {productId}
		</div>
	);
};

export default ReviewDetail;
