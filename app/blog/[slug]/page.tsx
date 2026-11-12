import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { blogPosts, personalInfo } from '@/lib/constants';
import { BlogPostView } from '@/components/blog/blog-post-view';

type BlogPostPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts.find((item) => item.slug === slug);

	if (!post) {
		return {
			title: 'Article Not Found',
		};
	}

	return {
		title: post.title,
		description: post.excerpt,
		authors: [{ name: post.author }],
		openGraph: {
			title: `${post.title} - ${personalInfo.fullName}`,
			description: post.excerpt,
			type: 'article',
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const postIndex = blogPosts.findIndex((item) => item.slug === slug);

	if (postIndex === -1) {
		notFound();
	}

	const post = blogPosts[postIndex];
	const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : undefined;
	const nextPost =
		postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : undefined;

	return <BlogPostView post={post} prevPost={prevPost} nextPost={nextPost} />;
}

