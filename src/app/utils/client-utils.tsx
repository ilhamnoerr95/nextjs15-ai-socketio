import "client-only";

import React from "react";

const ClientFunction = () => {
	console.log("use window object, use localstorage");

	return <div>ClientFunction</div>;
};

export default ClientFunction;
