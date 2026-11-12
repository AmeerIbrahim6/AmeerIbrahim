'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills, type Skill } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

function SkillCategory({
	title,
	items,
	icon,
	delay,
}: {
	title: string;
	items: Skill[];
	icon: React.ReactNode;
	delay: number;
}) {
	return (
		<motion.div variants={fadeIn('up', delay)}>
			<Card className="card-gradient h-full">
				<CardContent className="p-6">
					<div className="flex items-center gap-2 mb-6">
						{icon}
						<h2 className="text-2xl font-semibold">{title}</h2>
					</div>
					<div className="space-y-4">
						{items.map((skill, index) => (
							<div key={skill.name}>
								<div className="flex justify-between mb-1">
									<span>{skill.name}</span>
									<span className="text-muted-foreground">{skill.level}/10</span>
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
	);
}

export default function SkillsPage() {
	const technicalSkills = skills.filter((skill) => skill.category === 'technical');
	const softwareSkills = skills.filter((skill) => skill.category === 'software');
	const softSkills = skills.filter((skill) => skill.category === 'soft');
	const languageSkills = skills.filter((skill) => skill.category === 'language');

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills &amp; Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A comprehensive overview of my technical abilities, software proficiency,
							soft skills, and language capabilities.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<SkillCategory
							title="Technical Skills"
							items={technicalSkills}
							icon={<Cpu className="h-6 w-6 text-primary" />}
							delay={0.3}
						/>
						<SkillCategory
							title="Software Proficiency"
							items={softwareSkills}
							icon={<Code2 className="h-6 w-6 text-secondary" />}
							delay={0.4}
						/>
						<SkillCategory
							title="Soft Skills"
							items={softSkills}
							icon={<Brain className="h-6 w-6 text-accent" />}
							delay={0.5}
						/>
						<SkillCategory
							title="Languages"
							items={languageSkills}
							icon={<Languages className="h-6 w-6 text-primary" />}
							delay={0.6}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
