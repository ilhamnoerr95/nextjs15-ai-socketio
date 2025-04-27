import React from "react";
import Link from "next/link";
const Page = () => {
	return (
		<div>
			ROUTE F1: <br></br>
			<Link href="/itercepted-route/f1">F1</Link>
			<br />
			<Link href="/intercepted-route/f2">F2</Link>
		</div>
	);
};

export default Page;
