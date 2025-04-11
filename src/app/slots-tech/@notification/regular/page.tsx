import { Card } from "@/app/components/Card";
import Link from "next/link";
import React from "react";

const Notif = async () => {
	return (
		<Card>
			Regular notif
			{/* redirect to router in slot */}
			<Link href="/slots-tech"> Archieved notif</Link>
		</Card>
	);
};

export default Notif;
