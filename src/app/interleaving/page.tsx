import React from "react";
import ClientCompo from "../components/ClientCompo";
import ServerCompo from "../components/ServerCompo";
const Page = () => {
	return (
		<div>
			<ClientCompo>
				<ServerCompo />
			</ClientCompo>
		</div>
	);
};

export default Page;
