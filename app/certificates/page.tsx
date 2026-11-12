'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Award, Trophy, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { achievements, certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	const hasAnyItems = certificates.length > 0 || achievements.length > 0;

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
						<h1 className="text-4xl font-bold mb-4">Certificates &amp; Achievements</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Verified certifications and milestones reflecting continuous learning in
							Computer Science, programming, and artificial intelligence.
						</p>
					</motion.div>

					{!hasAnyItems ? (
						<motion.div variants={fadeIn('up', 0.3)} className="max-w-2xl mx-auto">
							<Card className="card-gradient">
								<CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
									<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
										<Award className="h-8 w-8" />
									</div>
									<h2 className="text-2xl font-semibold mb-3">
										Certifications &amp; Achievements Coming Soon
									</h2>
									<p className="text-muted-foreground mb-8 leading-relaxed">
										Learning never stops. My certifications and professional achievements
										will be showcased here as I continue developing my knowledge and skills.
									</p>
									<div className="flex flex-wrap gap-3 justify-center">
										<Button asChild>
											<Link href="/education">
												View My Education <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/skills">Explore Skills</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					) : (
						<div className="space-y-16">
							{certificates.length > 0 && (
								<section>
									<h2 className="text-2xl font-semibold mb-6">Certifications</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
										{certificates.map((cert, index) => (
											<motion.div
												key={`${cert.title}-${cert.issueDate}`}
												variants={fadeIn('up', 0.2 * index)}
											>
												<Card className="card-gradient h-full flex flex-col">
													{cert.image && (
														<div className="relative h-44 w-full">
															<Image
																src={cert.image}
																alt={cert.title}
																fill
																className="object-cover rounded-t-lg"
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
															/>
														</div>
													)}
													<CardContent className="p-6 flex-grow">
														<div className="flex items-start gap-4">
															<Award className="h-8 w-8 text-primary shrink-0" />
															<div>
																<h3 className="text-xl font-semibold mb-2">
																	{cert.title}
																</h3>
																<p className="text-muted-foreground">{cert.issuer}</p>
																<p className="text-sm text-muted-foreground mt-2">
																	Issued: {cert.issueDate}
																</p>
																{cert.certificateId && (
																	<p className="text-sm text-muted-foreground">
																		Certificate ID: {cert.certificateId}
																	</p>
																)}
															</div>
														</div>
													</CardContent>
													{(cert.verificationUrl || cert.pdf) && (
														<CardFooter className="p-6 pt-0 gap-2">
															{cert.verificationUrl && (
																<Button size="sm" variant="outline" asChild>
																	<a
																		href={cert.verificationUrl}
																		target="_blank"
																		rel="noopener noreferrer"
																	>
																		<ExternalLink className="h-4 w-4 mr-2" />
																		Verify
																	</a>
																</Button>
															)}
															{cert.pdf && (
																<Button size="sm" variant="outline" asChild>
																	<a href={cert.pdf} download>
																		<FileDown className="h-4 w-4 mr-2" />
																		Download
																	</a>
																</Button>
															)}
														</CardFooter>
													)}
												</Card>
											</motion.div>
										))}
									</div>
								</section>
							)}

							{achievements.length > 0 && (
								<section>
									<h2 className="text-2xl font-semibold mb-6">Achievements</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
										{achievements.map((item, index) => (
											<motion.div
												key={`${item.title}-${item.date}`}
												variants={fadeIn('up', 0.2 * index)}
											>
												<Card className="card-gradient h-full flex flex-col">
													<CardContent className="p-6 flex-grow">
														<div className="flex items-start gap-4">
															<Trophy className="h-8 w-8 text-accent shrink-0" />
															<div>
																<h3 className="text-xl font-semibold mb-2">
																	{item.title}
																</h3>
																<p className="text-muted-foreground mb-2">
																	{item.description}
																</p>
																<p className="text-sm text-muted-foreground">
																	{item.issuer} • {item.date}
																</p>
															</div>
														</div>
													</CardContent>
													{item.supportingDocument && (
														<CardFooter className="p-6 pt-0">
															<Button size="sm" variant="outline" asChild>
																<a href={item.supportingDocument} download>
																	<FileDown className="h-4 w-4 mr-2" />
																	View Document
																</a>
															</Button>
														</CardFooter>
													)}
												</Card>
											</motion.div>
										))}
									</div>
								</section>
							)}
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
}
