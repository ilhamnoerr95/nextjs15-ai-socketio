import React from "react";

// as default all server pages received params props route
// useParams only used in client components
const DetailProduct = async ({
	params,
}: {
	params: Promise<{ productId: string }>;
}) => {
	const productId = (await params).productId;
	console.log(productId);

	/**
	 * @dyanmic router this is dynamic route page
	 */

	return <div>DetailProduct {productId}</div>;
};

export default DetailProduct;
