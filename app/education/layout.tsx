import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education',
	description: 'Academic background of Ameer Ibrahim, including Matriculation and FSc ICS in Sialkot, Pakistan.',
	openGraph: {
		title: 'Education - Ameer Ibrahim',
		description: 'Academic background of Ameer Ibrahim, including Matriculation and FSc ICS in Sialkot, Pakistan.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
