import { serverSideFunction } from "@/app/utils/server-utils";
import React from "react";
// import { ImageSlider } from "@/app/components/Slider";

const ServerRoutePage = () => {
	const server = serverSideFunction();
	return (
		<div className="">
			ini server components<br></br>
			{server}
			{/* <ImageSlider /> */}
		</div>
	);
};

export default ServerRoutePage;
