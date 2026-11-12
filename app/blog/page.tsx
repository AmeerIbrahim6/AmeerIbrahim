'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, BookOpen } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function BlogPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Blog</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Articles and reflections on Artificial Intelligence, Computer Science,
							programming fundamentals, and software development.
						</p>
					</motion.div>

					{blogPosts.length === 0 ? (
						<motion.div variants={fadeIn('up', 0.3)} className="max-w-2xl mx-auto">
							<Card className="card-gradient">
								<CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
									<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
										<BookOpen className="h-8 w-8" />
									</div>
									<h2 className="text-2xl font-semibold mb-3">
										Articles Coming Soon
									</h2>
									<p className="text-muted-foreground mb-8 leading-relaxed">
										New articles on Artificial Intelligence, Computer Science, and
										programming will be published here soon.
									</p>
									<Button variant="outline" asChild>
										<Link href="/about">
											Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{blogPosts.map((post, index) => (
								<motion.div
									key={post.slug}
									variants={fadeIn('up', 0.2 * index)}
									className="flex"
								>
									<Card className="flex flex-col h-full w-full card-gradient">
										<div className="relative h-48 w-full">
											<Image
												src={post.image}
												alt={post.title}
												fill
												className="object-cover rounded-t-lg"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>
										<CardContent className="flex-grow p-6">
											<div className="flex items-center justify-between gap-2 mb-3">
												<Badge variant="secondary">{post.category}</Badge>
												<span className="flex items-center text-xs text-muted-foreground">
													<Clock className="h-3.5 w-3.5 mr-1" />
													{post.readTime}
												</span>
											</div>
											<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
												<div className="flex items-center">
													<Calendar className="h-4 w-4 mr-1 text-primary" />
													{post.date}
												</div>
												<div className="flex items-center">
													<User className="h-4 w-4 mr-1 text-primary" />
													{post.author}
												</div>
											</div>
											<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
											<p className="text-muted-foreground">{post.excerpt}</p>
										</CardContent>
										<CardFooter className="p-6 pt-0">
											<Button variant="outline" className="w-full" asChild>
												<Link href={`/blog/${post.slug}`}>
													Read More <ArrowRight className="ml-2 h-4 w-4" />
												</Link>
											</Button>
										</CardFooter>
									</Card>
								</motion.div>
							))}
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
}
