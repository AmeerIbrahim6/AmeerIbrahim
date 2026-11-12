import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'Learn about Ameer Ibrahim, a Computer Science student and aspiring AI Developer from Sialkot, Pakistan.',
	openGraph: {
		title: 'About - Ameer Ibrahim',
		description: 'Learn about Ameer Ibrahim, a Computer Science student and aspiring AI Developer from Sialkot, Pakistan.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
