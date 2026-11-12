import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';

import {
	contactInfo,
	getVerifiedSocialLinks,
	personalInfo,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SocialIcon } from '@/components/shared/social-icon';
import { ResumeButton } from '@/components/shared/resume-button';

export function Footer() {
	const currentYear = new Date().getFullYear();
	const verifiedLinks = getVerifiedSocialLinks();

	const navColumns = [
		{
			title: 'About',
			links: [
				{ title: 'About Me', href: '/about' },
				{ title: 'Education', href: '/education' },
				{ title: 'Skills', href: '/skills' },
			],
		},
		{
			title: 'Work',
			links: [
				{ title: 'Experience', href: '/experience' },
				{ title: 'Projects', href: '/projects' },
				{ title: 'Certificates', href: '/certificates' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ title: 'Blog', href: '/blog' },
				{ title: 'Contact', href: '/contact' },
			],
			includeResume: true,
		},
	];

	return (
		<footer className="bg-card py-12 border-t">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-1">
						<Link href="/" className="inline-block">
							<span className="text-2xl font-bold text-gradient">
								{personalInfo.displayName}
							</span>
						</Link>
						<p className="mt-2 text-sm font-medium text-primary">
							{personalInfo.designation}
						</p>
						<p className="mt-3 text-sm text-muted-foreground">
							{personalInfo.tagline}
						</p>
						<div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
							<p className="flex items-center gap-2">
								<MapPin className="h-4 w-4 text-primary shrink-0" />
								<span>{personalInfo.location}</span>
							</p>
							<p className="flex items-center gap-2 break-all">
								<Mail className="h-4 w-4 text-primary shrink-0" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-primary transition-colors"
								>
									{contactInfo.email}
								</a>
							</p>
						</div>
						{verifiedLinks.length > 0 && (
							<div className="mt-6 flex flex-wrap gap-3">
								{verifiedLinks.map((link) => (
									<Button key={link.platform} size="icon" variant="outline" asChild>
										<a
											href={link.url}
											aria-label={link.label}
											target={link.url.startsWith('http') ? '_blank' : undefined}
											rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
										>
											<SocialIcon platform={link.platform} className="h-5 w-5" />
										</a>
									</Button>
								))}
							</div>
						)}
					</div>

					<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
						{navColumns.map((column) => (
							<div key={column.title}>
								<h3 className="font-semibold mb-3">{column.title}</h3>
								<ul className="space-y-2">
									{column.links.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-primary text-sm transition-colors"
											>
												{link.title}
											</Link>
										</li>
									))}
									{column.includeResume && (
										<li>
											<ResumeButton asTextLink label="Resume" />
										</li>
									)}
								</ul>
							</div>
						))}
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
					<p className="text-muted-foreground text-center sm:text-left">
						© <span suppressHydrationWarning>{currentYear}</span> {personalInfo.fullName}. All rights reserved.
					</p>
					<p className="text-muted-foreground text-center sm:text-right">
						{personalInfo.academicIdentity} • {personalInfo.location}
					</p>
				</div>
			</div>
		</footer>
	);
}
