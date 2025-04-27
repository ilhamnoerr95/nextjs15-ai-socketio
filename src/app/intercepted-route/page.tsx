import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			Intercepted <br />
			<Link href="/intercepted-route/f1">f1</Link> <br />
			<Link href="/intercepted-route/f2">f2</Link>
		</div>
	);
};

export default Page;
