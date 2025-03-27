import React from "react";

/**
 *
 * @Slots this slot could read the folder with prefix @ without import the folder
 * each folder like isolate each other, slot does not effect to url structure
 */
const layout = ({
	children,
	notification,
	revenue,
	users,
}: {
	children: React.ReactNode;
	notification: React.ReactNode;
	revenue: React.ReactNode;
	users: React.ReactNode;
}) => {
	return (
		<div>
			<div>{children}</div>
			<div style={{ display: "flex" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div>{users}</div>
					<div>{revenue}</div>
				</div>
				<div style={{ display: "flex", flex: 1 }}>{notification}</div>
			</div>
		</div>
	);
};

export default layout;
