import { Card } from "@/app/components/Card";
import React from "react";

const Notif = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});
	return <Card>Notif</Card>;
};

export default Notif;
