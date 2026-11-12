'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { skills } from '@/lib/constants';
import { staggerContainer, fadeIn } from '@/lib/motion';

export function SkillsPreview() {
	const topTechnicalSkills = skills
		.filter((skill) => skill.category === 'technical')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const topSoftwareSkills = skills
		.filter((skill) => skill.category === 'software')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const topSoftSkills = skills
		.filter((skill) => skill.category === 'soft')
		.sort((a, b) => b.level - a.level)
		.slice(0, 3);

	const columns = [
		{ title: 'Technical Skills', items: topTechnicalSkills, delay: 0.1 },
		{ title: 'Software Proficiency', items: topSoftwareSkills, delay: 0.2 },
		{ title: 'Soft Skills', items: topSoftSkills, delay: 0.3 },
	];

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Technical Skills"
					description="Key competencies and tools I am building throughout my Computer Science and AI development journey."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
				>
					{columns.map((column) => (
						<motion.div
							key={column.title}
							variants={fadeIn('up', column.delay)}
							className="space-y-6"
						>
							<Card>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4">{column.title}</h3>
									<div className="space-y-4">
										{column.items.map((skill, index) => (
											<div key={skill.name}>
												<div className="flex justify-between mb-1">
													<span>{skill.name}</span>
													<span className="text-muted-foreground">
														{skill.level}/10
													</span>
												</div>
												<div
													className="skill-bar"
													role="progressbar"
													aria-valuenow={skill.level}
													aria-valuemin={0}
													aria-valuemax={10}
													aria-label={`${skill.name} proficiency`}
												>
													<motion.div
														className="skill-progress"
														initial={{ width: 0 }}
														whileInView={{ width: `${skill.level * 10}%` }}
														viewport={{ once: true }}
														transition={{ duration: 1, delay: index * 0.1 }}
													/>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/skills">
							View All Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
