import React from "react";

const ReviewDetail = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	const { productId, reviewId } = await params;
	return (
		<div>
			{reviewId} for product Id {productId}
		</div>
	);
};

export default ReviewDetail;
