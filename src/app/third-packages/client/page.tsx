"use client";

import React from "react";
import { serverSideFunction } from "@/app/utils/server-utils";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/app/components/ProviderContext";

const ImageSlider = () => {
	// const settings = {
	// 	dots: true,
	// };
	const theme = useTheme();
	const server = serverSideFunction();

	return (
		<div
			className="image-slider-container"
			style={{ color: theme.colors.primary }}
		>
			client components {server}
			{/* <Slider {...settings}>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
			</Slider> */}
		</div>
	);
};

export default ImageSlider;
