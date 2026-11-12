import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Articles by Ameer Ibrahim on artificial intelligence, computer science, programming, and software development.',
	openGraph: {
		title: 'Blog - Ameer Ibrahim',
		description: 'Articles by Ameer Ibrahim on artificial intelligence, computer science, programming, and software development.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
