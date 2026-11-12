'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, FolderGit2, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale, fadeIn } from '@/lib/motion';

export default function ProjectsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeInScale(0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Projects</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Software development and artificial intelligence work built as I continue
							learning and experimenting with new technologies.
						</p>
					</motion.div>

					{projects.length === 0 ? (
						<motion.div variants={fadeIn('up', 0.3)} className="max-w-2xl mx-auto">
							<Card className="card-gradient">
								<CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
									<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
										<FolderGit2 className="h-8 w-8" />
									</div>
									<h2 className="text-2xl font-semibold mb-3">
										Projects Coming Soon
									</h2>
									<p className="text-muted-foreground mb-8 leading-relaxed">
										I&apos;m continuously learning, experimenting with new technologies, and
										working towards building innovative software solutions. My projects will
										be showcased here as my journey progresses.
									</p>
									<div className="flex flex-wrap gap-3 justify-center">
										<Button asChild>
											<Link href="/blog">
												Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/contact">Collaborate With Me</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects.map((project, index) => (
								<motion.div
									key={project.title}
									variants={fadeInScale(index * 0.1)}
									className="flex"
								>
									<Card className="flex flex-col h-full w-full card-gradient">
										<div className="relative h-48 w-full">
											<Image
												src={project.coverImage}
												alt={project.title}
												fill
												className="object-cover rounded-t-lg"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>
										<CardContent className="flex-grow p-6">
											<div className="flex items-center justify-between gap-2 mb-2">
												<Badge variant="outline">{project.category}</Badge>
												{project.completionDate && (
													<span className="text-xs text-muted-foreground">
														{project.completionDate}
													</span>
												)}
											</div>
											<h2 className="font-bold text-xl mb-2">{project.title}</h2>
											<p className="text-muted-foreground mb-2">
												{project.shortDescription}
											</p>
											{project.fullDescription && (
												<p className="text-sm text-muted-foreground/90 mb-4">
													{project.fullDescription}
												</p>
											)}
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech) => (
													<Badge key={tech} variant="secondary">
														{tech}
													</Badge>
												))}
											</div>
										</CardContent>
										{(project.liveDemoUrl || project.githubRepoUrl) && (
											<CardFooter className="p-6 pt-0 gap-2">
												{project.liveDemoUrl && (
													<Button size="sm" variant="outline" asChild>
														<a
															href={project.liveDemoUrl}
															target="_blank"
															rel="noopener noreferrer"
														>
															<ExternalLink className="h-4 w-4 mr-2" />
															Demo
														</a>
													</Button>
												)}
												{project.githubRepoUrl && (
													<Button size="sm" variant="outline" asChild>
														<a
															href={project.githubRepoUrl}
															target="_blank"
															rel="noopener noreferrer"
														>
															<Github className="h-4 w-4 mr-2" />
															Repo
														</a>
													</Button>
												)}
											</CardFooter>
										)}
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
