import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates',
	description: 'Certifications and achievements of Ameer Ibrahim.',
	openGraph: {
		title: 'Certificates - Ameer Ibrahim',
		description: 'Certifications and achievements of Ameer Ibrahim.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
