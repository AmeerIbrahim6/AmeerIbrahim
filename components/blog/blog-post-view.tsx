'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { BlogPost } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

interface BlogPostViewProps {
	post: BlogPost;
	prevPost?: BlogPost;
	nextPost?: BlogPost;
}

export function BlogPostView({ post, prevPost, nextPost }: BlogPostViewProps) {
	return (
		<article className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.div variants={fadeIn('down', 0.1)} className="mb-8">
						<Button variant="ghost" size="sm" asChild className="-ml-3">
							<Link href="/blog">
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back to Blog
							</Link>
						</Button>
					</motion.div>

					<motion.header variants={fadeIn('down', 0.2)} className="space-y-4 mb-8">
						<div className="flex flex-wrap items-center gap-2">
							<Badge variant="secondary">{post.category}</Badge>
							{post.tags.map((tag) => (
								<Badge key={tag} variant="outline">
									{tag}
								</Badge>
							))}
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
							{post.title}
						</h1>

						<p className="text-lg text-muted-foreground">{post.excerpt}</p>

						<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
							<span className="flex items-center">
								<User className="h-4 w-4 mr-1.5 text-primary" />
								{post.author}
							</span>
							<span className="flex items-center">
								<Calendar className="h-4 w-4 mr-1.5 text-primary" />
								{post.date}
							</span>
							<span className="flex items-center">
								<Clock className="h-4 w-4 mr-1.5 text-primary" />
								{post.readTime}
							</span>
						</div>
					</motion.header>

					<motion.div
						variants={fadeIn('up', 0.3)}
						className="relative h-[240px] sm:h-[360px] md:h-[420px] w-full rounded-lg overflow-hidden border mb-10"
					>
						<Image
							src={post.image}
							alt={post.title}
							fill
							priority
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 768px"
						/>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.4)} className="space-y-8">
						{post.sections.map((section) => (
							<section key={section.heading} className="space-y-4">
								<h2 className="text-2xl font-semibold tracking-tight">
									{section.heading}
								</h2>
								{section.paragraphs.map((paragraph, pIndex) => (
									<p
										key={pIndex}
										className="text-muted-foreground leading-relaxed text-base sm:text-lg"
									>
										{paragraph}
									</p>
								))}
							</section>
						))}
					</motion.div>

					<Separator className="my-12" />

					{(prevPost || nextPost) && (
						<nav
							aria-label="Article navigation"
							className="grid grid-cols-1 sm:grid-cols-2 gap-4"
						>
							<div>
								{prevPost && (
									<Link href={`/blog/${prevPost.slug}`} className="block h-full">
										<Card className="h-full card-gradient hover:border-primary/50 transition-colors">
											<CardContent className="p-5">
												<span className="text-xs text-muted-foreground inline-flex items-center mb-1">
													<ArrowLeft className="h-3.5 w-3.5 mr-1" />
													Previous Article
												</span>
												<p className="font-semibold line-clamp-2">{prevPost.title}</p>
											</CardContent>
										</Card>
									</Link>
								)}
							</div>
							<div>
								{nextPost && (
									<Link href={`/blog/${nextPost.slug}`} className="block h-full">
										<Card className="h-full card-gradient hover:border-primary/50 transition-colors">
											<CardContent className="p-5 text-left sm:text-right">
												<span className="text-xs text-muted-foreground inline-flex items-center justify-end mb-1">
													Next Article
													<ArrowRight className="h-3.5 w-3.5 ml-1" />
												</span>
												<p className="font-semibold line-clamp-2">{nextPost.title}</p>
											</CardContent>
										</Card>
									</Link>
								)}
							</div>
						</nav>
					)}
				</motion.div>
			</div>
		</article>
	);
}

