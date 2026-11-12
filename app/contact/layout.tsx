import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Get in touch with Ameer Ibrahim by email, phone, or WhatsApp. Based in Sialkot, Pakistan.',
	openGraph: {
		title: 'Contact - Ameer Ibrahim',
		description: 'Get in touch with Ameer Ibrahim by email, phone, or WhatsApp. Based in Sialkot, Pakistan.',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
