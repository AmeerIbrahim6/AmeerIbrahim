import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { personalInfo, siteConfig } from '@/lib/constants';

const inter = localFont({
	src: './fonts/inter-latin.woff2',
	weight: '100 900',
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: personalInfo.browserTitle,
		template: `%s | ${personalInfo.browserTitle}`,
	},
	description: siteConfig.description,
	authors: [{ name: personalInfo.fullName }],
	creator: personalInfo.fullName,
	referrer: 'strict-origin-when-cross-origin',
	keywords: [
		'Ameer Ibrahim',
		'AI Developer',
		'Computer Science Student',
		'Software Developer',
		'Portfolio',
		'Sialkot Pakistan',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: personalInfo.browserTitle,
		description: siteConfig.description,
		siteName: personalInfo.websiteHeading,
	},
	twitter: {
		card: 'summary_large_image',
		title: personalInfo.browserTitle,
		description: siteConfig.description,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<div className="relative min-h-screen flex flex-col overflow-x-hidden">
						<a
							href="#main-content"
							className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
						>
							Skip to main content
						</a>
						<Navbar />
						<main id="main-content" className="flex-grow pt-16">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
