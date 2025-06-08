import React from "react";

type User = {
	id: number;
	name: string;
	email: string;
	username: string;
};
const UserList = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	// const res = await fetch("https://jsonplaceholder.typicode.com/users123");

	const data: User[] = await res.json();

	return (
		<ul>
			{data.map((user) => (
				<li key={user.id}>
					<h2>{user.name}</h2>
					<p>Email: {user.email}</p>
					<p>Username: {user.username}</p>
				</li>
			))}
		</ul>
	);
};

export default UserList;
