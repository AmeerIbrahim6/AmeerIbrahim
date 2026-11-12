import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience',
	description: 'The professional journey of Ameer Ibrahim, Computer Science student and aspiring AI Developer.',
	openGraph: {
		title: 'Experience - Ameer Ibrahim',
		description: 'The professional journey of Ameer Ibrahim, Computer Science student and aspiring AI Developer.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
