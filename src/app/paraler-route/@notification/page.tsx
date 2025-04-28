import { Card } from "@/app/components/Card";
import Link from "next/link";
import React from "react";

const Notif = async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});
	return (
		<Card>
			Default notif
			{/* redirect to router in slot */}
			<Link href="/paraler-route/regular">Archieved notif</Link>
		</Card>
	);
};

export default Notif;
