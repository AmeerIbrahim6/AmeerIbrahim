'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, FolderCode } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale, fadeIn } from '@/lib/motion';

export function ProjectsPreview() {
	const featuredProjects = projects.filter((project) => project.featured);
	const previewProjects = (featuredProjects.length > 0 ? featuredProjects : projects).slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="Software development and artificial intelligence work as my portfolio grows."
				/>

				{previewProjects.length === 0 ? (
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="mt-10"
					>
						<Card className="card-gradient">
							<CardContent className="p-8 md:p-10 flex flex-col items-center text-center max-w-2xl mx-auto">
								<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
									<FolderCode className="h-7 w-7" />
								</div>
								<h3 className="text-xl font-semibold mb-2">Projects Coming Soon</h3>
								<p className="text-muted-foreground mb-6">
									I&apos;m continuously learning, experimenting with new technologies, and
									working towards building innovative software solutions. My projects will
									be showcased here as my journey progresses.
								</p>
								<Button variant="outline" asChild>
									<Link href="/projects">
										Explore Projects Page <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					</motion.div>
				) : (
					<>
						<motion.div
							variants={staggerContainer()}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
						>
							{previewProjects.map((project, index) => (
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
											<div className="mb-2 flex items-center justify-between gap-2">
												<Badge variant="outline">{project.category}</Badge>
												{project.completionDate && (
													<span className="text-xs text-muted-foreground">
														{project.completionDate}
													</span>
												)}
											</div>
											<h3 className="font-bold text-xl mb-2">{project.title}</h3>
											<p className="text-muted-foreground mb-4">
												{project.shortDescription}
											</p>
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
						</motion.div>

						<div className="flex justify-center mt-10">
							<Button asChild>
								<Link href="/projects">
									View All Projects <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</>
				)}
			</div>
		</section>
	);
}
