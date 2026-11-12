'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Clock } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education, upcomingEducation } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function EducationPage() {
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
						Education
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My academic background in Computer Science and ongoing preparation for higher
						studies in software and artificial intelligence development.
					</motion.p>

					<div className="space-y-8">
						{education.map((edu, index) => (
							<motion.div
								key={`${edu.degree}-${edu.institution}`}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
											<div>
												<h2 className="text-2xl font-semibold">{edu.degree}</h2>
												<p className="text-primary">{edu.field}</p>
											</div>
											{(edu.result || edu.gpa) && (
												<p className="text-lg font-semibold mt-1 md:mt-0">
													{edu.result ? `Result: ${edu.result}` : `GPA: ${edu.gpa}`}
												</p>
											)}
										</div>

										<div className="space-y-3">
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2 shrink-0 text-primary" />
												<span>
													{edu.institution}, {edu.location}
												</span>
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2 shrink-0 text-primary" />
												<span>
													{edu.startDate} - {edu.endDate}
												</span>
											</div>
										</div>

										{edu.achievements.length > 0 && (
											<div className="mt-6">
												<h3 className="text-lg font-semibold mb-3">Achievements</h3>
												<ul className="space-y-2">
													{edu.achievements.map((achievement, i) => (
														<li key={i} className="flex items-start">
															<Award className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
															<span className="text-muted-foreground">
																{achievement}
															</span>
														</li>
													))}
												</ul>
											</div>
										)}
									</CardContent>
								</Card>
							</motion.div>
						))}

						{upcomingEducation && (
							<motion.div variants={fadeIn('up', 0.4)} className="relative">
								<Card className="card-gradient border-dashed">
									<CardContent className="p-6">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
											<div className="flex items-center gap-2">
												<GraduationCap className="h-5 w-5 text-primary shrink-0" />
												<h2 className="text-xl font-semibold">
													{upcomingEducation.degree}
												</h2>
											</div>
											<Badge variant="outline" className="w-fit">
												<Clock className="h-3.5 w-3.5 mr-1.5 text-primary" />
												{upcomingEducation.statusLabel}
											</Badge>
										</div>
										<p className="text-sm text-muted-foreground">
											{upcomingEducation.note}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
