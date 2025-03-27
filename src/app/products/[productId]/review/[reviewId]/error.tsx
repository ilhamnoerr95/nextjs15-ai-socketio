"use client";

import React from "react";
import { useRouter } from "next/navigation";
// render a part of the ui in the background
import { startTransition } from "react";

/**
 *
 * ? if you just only using reset, the component always rerender in client
 * ! error always bubble up to find the closest parent error boundary
 * ! an error.tsx file handles errors not just for its own folder, but for all the nested  child segments below it too
 * ! By strategically placing error.tsx files at different levels in route folder, could control exactyl how detail error handling gets
 * ! where put error.tsx file makes a huge difference - it determines exacytly whic parts of ui get affected when things go wrong.
 * ? error cannot be the same segment with layout, see how hyracy tree of components next.js. for solve this u must move in the parent segment of layout
 * ? the questio is if with wanna to set up global error in root layout, but the root layout doesn't have parent segmetn what do we do ?
 * ? the answer is next.js have special file called global-error.tsx that goes in root app directory.
 */

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	const router = useRouter();
	const reload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};

	return (
		<>
			<div>{error.message}</div>
			<button
				type="reset"
				onClick={reload}
			>
				Reset Error
			</button>
		</>
	);
};

export default Error;
