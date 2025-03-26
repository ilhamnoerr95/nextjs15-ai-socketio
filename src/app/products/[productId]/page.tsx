import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
	params: Promise<{ productId: string }>;
};

// metdata coul generate metadata
// all server components will receive props parameter as default
export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const productId = (await params).productId;

	return {
		title: `Product Detail - ${productId}`,
		// description: `Product Detail Page for ${productId}`,
	};
};

// as default all server pages received params, searchParams props route
// useParams only used in client components
const DetailProduct = async ({ params }: Props) => {
	const productId = (await params).productId;
	console.log(productId);

	/**
	 * @dyanmic router this is dynamic route page
	 */

	return (
		<div style={{ marginBottom: "1rem" }}>
			<h1>Detail Product {productId}</h1>
			<div
				style={{
					marginTop: "20px",
					display: "flex",
					gap: "10px",
					alignItems: "center",
				}}
			>
				<Link href={`/products/${productId}/review/123`}>Review 123</Link>
				<Link href={`/products/${productId}/review/223`}>Review 223</Link>
				<Link href={`/products/${productId}/review/323`}>Review 323</Link>
				<Link href={`/products/${productId}/review/423`}>Review 4 23</Link>
			</div>
		</div>
	);
};

export default DetailProduct;
