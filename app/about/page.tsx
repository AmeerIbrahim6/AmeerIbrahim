'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Sparkles } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProfileVisual } from '@/components/shared/profile-visual';
import { ResumeButton } from '@/components/shared/resume-button';
import { personalInfo } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
								{personalInfo.about.sectionDesignation}
							</p>
							<h1 className="text-4xl font-bold">About Me</h1>
						</div>

						<div className="space-y-4 text-muted-foreground leading-relaxed">
							{personalInfo.about.biography.map((paragraph, index) => (
								<p key={index} className={index === 0 ? 'text-lg text-foreground/90' : ''}>
									{paragraph}
								</p>
							))}
						</div>

						<div className="space-y-3 pt-2">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground leading-relaxed">
								{personalInfo.about.personalJourney}
							</p>
						</div>

						<div className="pt-2">
							<ResumeButton
								label="Download Resume"
								size="default"
								variant="default"
							/>
						</div>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)}>
						<ProfileVisual className="h-[440px] sm:h-[500px] w-full" />
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<div className="flex items-center gap-2 mb-4">
									<Target className="h-5 w-5 text-primary" />
									<h3 className="text-xl font-semibold">Career Goal</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									{personalInfo.about.careerGoal}
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<div className="flex items-center gap-2 mb-4">
									<Heart className="h-5 w-5 text-secondary" />
									<h3 className="text-xl font-semibold">Passions</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{personalInfo.about.passions.map((passion) => (
										<Badge key={passion} variant="secondary">
											{passion}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<div className="flex items-center gap-2 mb-4">
									<Sparkles className="h-5 w-5 text-accent" />
									<h3 className="text-xl font-semibold">Personal Qualities</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{personalInfo.about.qualities.map((quality) => (
										<Badge key={quality} variant="outline">
											{quality}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
