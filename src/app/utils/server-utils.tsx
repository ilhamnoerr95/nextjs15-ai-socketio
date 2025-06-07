// import "server-only";

export const serverSideFunction = () => {
	console.log(
		"multiple libraries, env variables, interact with database, confidential information",
	);

	return "Server result";
};
