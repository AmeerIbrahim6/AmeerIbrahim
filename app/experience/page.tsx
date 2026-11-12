'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Briefcase, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ExperiencePage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl font-bold mb-6"
					>
						Experience
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My professional journey and future roles in software development and
						artificial intelligence.
					</motion.p>

					{experiences.length === 0 ? (
						<motion.div variants={fadeIn('up', 0.3)}>
							<Card className="card-gradient">
								<CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
									<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
										<Briefcase className="h-8 w-8" />
									</div>
									<h2 className="text-2xl font-semibold mb-3">
										My Professional Journey
									</h2>
									<p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
										Every journey starts somewhere. I&apos;m currently developing my
										skills and exploring opportunities to gain practical experience in
										software development and artificial intelligence.
									</p>
									<div className="flex flex-wrap gap-3 justify-center">
										<Button asChild>
											<Link href="/skills">
												Explore My Skills <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/contact">Get in Touch</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					) : (
						<div className="space-y-8">
							{experiences.map((exp, index) => (
								<motion.div
									key={`${exp.title}-${exp.company}-${exp.startDate}`}
									variants={fadeIn('up', 0.2 * index)}
								>
									<Card className="card-gradient">
										<CardContent className="p-6">
											<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
												<div className="flex items-center gap-4">
													{exp.companyLogo && (
														<div className="relative h-12 w-12 rounded-md overflow-hidden border bg-background shrink-0">
															<Image
																src={exp.companyLogo}
																alt={exp.company}
																fill
																className="object-contain p-1"
															/>
														</div>
													)}
													<div>
														<h2 className="text-2xl font-semibold">{exp.title}</h2>
														<p className="text-primary">{exp.company}</p>
													</div>
												</div>
												<div className="flex flex-wrap gap-2">
													<Badge variant="outline">{exp.employmentType}</Badge>
													{exp.current && <Badge>Current</Badge>}
												</div>
											</div>

											<div className="space-y-3 mb-6">
												<div className="flex items-center text-muted-foreground">
													<MapPin className="h-4 w-4 mr-2 shrink-0 text-primary" />
													<span>{exp.location}</span>
												</div>
												<div className="flex items-center text-muted-foreground">
													<Calendar className="h-4 w-4 mr-2 shrink-0 text-primary" />
													<span>
														{exp.startDate} - {exp.current ? 'Present' : exp.endDate}
													</span>
												</div>
											</div>

											{exp.responsibilities.length > 0 && (
												<div className="space-y-4">
													<h3 className="text-lg font-semibold">
														Key Responsibilities
													</h3>
													<ul className="space-y-2">
														{exp.responsibilities.map((item, i) => (
															<li key={i} className="flex items-start">
																<CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
																<span className="text-muted-foreground">{item}</span>
															</li>
														))}
													</ul>
												</div>
											)}

											{exp.technologies.length > 0 && (
												<div className="mt-6">
													<h3 className="text-lg font-semibold mb-3">
														Technologies &amp; Tools
													</h3>
													<div className="flex flex-wrap gap-2">
														{exp.technologies.map((tech) => (
															<Badge key={tech} variant="secondary">
																{tech}
															</Badge>
														))}
													</div>
												</div>
											)}
										</CardContent>
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
