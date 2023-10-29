export const revalidate = 420;

interface Post {
	title: string;
	content: string;
	slug: string;
	id: string;
}

interface BlogPostPageProps {
	params: { id: string };
}

export async function generateStaticParams() {
	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
		(res) => res.json()
	);

	return posts.map((p) => ({
		id: p.id,
	}));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
		(res) => res.json()
	);

	const post = posts.find((p) => p.id === params.id)!;

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}
