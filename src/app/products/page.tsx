"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Products = () => {
	const router = useRouter();
	const pathanme = usePathname();

	console.info("pathanme", pathanme);
	return (
		<>
			<h1>Products</h1>
			<ol>
				<li onClick={() => router.push("/products/1")}>Product 1</li>
				<li onClick={() => router.push("/products/2")}>Product 2</li>
				<li onClick={() => router.push("/products/3")}>Product 3</li>
			</ol>
		</>
	);
};

export default Products;
