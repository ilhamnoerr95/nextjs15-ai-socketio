"use client";
// using fetching in client when need realtim updates
// when data depends on client side interactions that cannot predicts on server
import React from "react";

type User = {
	id: number;
	name: string;
	email: string;
	username: string;
};

const Page = () => {
	const [users, setUser] = React.useState<User[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState<string | null>(null);

	// when fetching in client
	React.useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users",
				);
				if (!response.ok) throw new Error("Network response was not ok");
				const data = await response.json();
				setUser(data);
			} catch (error) {
				setError("Error fetching users");

				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<ul className="space-y-4 p-4">
			{users.map((user, index) => (
				<li
					key={index}
					className="bg-white p-4 rounded-lg shadow-md"
				>
					<h2 className="text-xl font-bold mb-2">{user.name}</h2>
					<p className="text-gray-600">Email: {user.email}</p>
					<p className="text-gray-600">Username: {user.username}</p>
				</li>
			))}
		</ul>
	);
};

export default Page;
