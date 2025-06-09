type Post = {
	id: number;
	title: string;
	userId: number;
	body: string;
};

type Album = Omit<Post, "body">;

async function getUserPost(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
	);
	// const posts: Post[] = await response.json();
	return response.json();
}
async function getAlbum(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
	);
	// const albums: Album[] = await response.json();
	return response.json();
}

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const postsData = getUserPost(id);
	const albumsData = getAlbum(id);

	const [posts, albums] = await Promise.all([postsData, albumsData]);

	console.log(posts, albums);
	return (
		<div>
			<h1>Profile</h1>
			<h2>Posts</h2>
			<ul>
				{posts.map((post: Post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<h2>Albums</h2>
			<ul>
				{albums.map((album: Album) => (
					<li key={album.id}>{album.title}</li>
				))}
			</ul>
		</div>
	);
};

export default UserProfile;
