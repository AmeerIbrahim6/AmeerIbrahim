'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';

import {
	siteConfig,
	personalInfo,
	getVerifiedSocialLinks,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();
	const verifiedLinks = getVerifiedSocialLinks();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActiveRoute = (href: string) =>
		href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
			}`}
		>
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center gap-6 lg:gap-8 min-w-0">
					<Link href="/" className="flex items-center space-x-2 shrink-0">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="font-bold text-xl lg:text-2xl text-gradient whitespace-nowrap"
						>
							{personalInfo.displayName}
						</motion.div>
					</Link>
					<nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main navigation">
						{siteConfig.mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`nav-link text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
									isActiveRoute(item.href)
										? 'text-primary active'
										: 'text-muted-foreground'
								}`}
							>
								{item.title}
							</Link>
						))}
					</nav>
				</div>

				{/* Mobile & Tablet menu */}
				<div className="lg:hidden">
					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col p-6">
							<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
							<div className="flex items-center justify-between mb-8">
								<Link
									href="/"
									onClick={() => setMobileOpen(false)}
									className="flex items-center space-x-2"
								>
									<span className="font-bold text-2xl text-gradient">
										{personalInfo.displayName}
									</span>
								</Link>
							</div>
							<nav className="flex flex-col gap-4" aria-label="Mobile navigation">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setMobileOpen(false)}
										className={`text-base font-medium transition-colors hover:text-primary ${
											isActiveRoute(item.href)
												? 'text-primary'
												: 'text-muted-foreground'
										}`}
									>
										{item.title}
									</Link>
								))}
							</nav>
							{verifiedLinks.length > 0 && (
								<div className="mt-auto pt-4">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" className="w-full justify-between">
												Connect
												<ChevronDown className="h-4 w-4 ml-2" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											{verifiedLinks.map((social) => (
												<DropdownMenuItem key={social.platform} asChild>
													<a
														href={social.url}
														target={social.url.startsWith('http') ? '_blank' : undefined}
														rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
													>
														{social.label}
													</a>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							)}
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop actions */}
				<div className="hidden lg:flex items-center gap-4 shrink-0">
					<Button asChild>
						<Link href="/contact">Contact Me</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
