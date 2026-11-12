import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Software and artificial intelligence projects by Ameer Ibrahim.',
	openGraph: {
		title: 'Projects - Ameer Ibrahim',
		description: 'Software and artificial intelligence projects by Ameer Ibrahim.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
