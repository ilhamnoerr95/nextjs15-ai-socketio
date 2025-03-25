import React from "react";

/**
 *
 * @return catch all segment router
 * catch all segent router always return string of array
 *
 */
const Page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
	const { slug } = await params;
	console.info(slug);

	if (slug?.length === 2) {
		return (
			<div>
				Page with slug Feature: {slug[0]} and Content {slug[1]}
			</div>
		);
	}
	if (slug?.length === 1) {
		return <div>Page with only Feature: {slug[0]}</div>;
	}

	return <div>CATCH ALL SEGMENT ROUTE</div>;
};

export default Page;
