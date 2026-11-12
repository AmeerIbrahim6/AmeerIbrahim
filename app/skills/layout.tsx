import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skills',
	description: 'Technical skills, software proficiency, soft skills, and languages of Ameer Ibrahim.',
	openGraph: {
		title: 'Skills - Ameer Ibrahim',
		description: 'Technical skills, software proficiency, soft skills, and languages of Ameer Ibrahim.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
