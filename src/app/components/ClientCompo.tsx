"use client";
import React from "react";

const ClientCompo = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			ClientCompo1
			{children}
		</div>
	);
};

export default ClientCompo;
