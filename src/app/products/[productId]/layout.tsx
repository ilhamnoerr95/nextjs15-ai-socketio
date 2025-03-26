import React from "react";

/**
 *
 * nested layout inside page, this will be replaced children of root layout, when the root layout rendered first
 * and filled with their children
 */

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			{children}
			<div>gantiin</div>
		</div>
	);
};

export default Layout;
