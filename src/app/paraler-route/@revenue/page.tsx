import { Card } from "@/app/components/Card";
import React from "react";

const Revenue = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 5000);
	});
	return <Card>Revenue</Card>;
};

export default Revenue;
