'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { ProfileVisual } from '@/components/shared/profile-visual';
import { personalInfo } from '@/lib/constants';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	const highlights = [
		{
			label: 'Focus Area',
			value: personalInfo.about.sectionDesignation,
		},
		{
			label: 'Academic Identity',
			value: personalInfo.academicIdentity,
		},
		{
			label: 'Education',
			value: 'FSc ICS (2024–2026)',
		},
		{
			label: 'Location',
			value: personalInfo.location,
		},
	];

	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description={personalInfo.about.previewDescription}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<ProfileVisual className="h-[400px] w-full" />
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">
							{personalInfo.about.sectionDesignation}
						</h3>
						<p className="text-muted-foreground mb-6">
							{personalInfo.about.previewSummary}
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
							{highlights.map((item) => (
								<Card key={item.label} className="card-gradient">
									<CardContent className="p-4">
										<h4 className="font-semibold">{item.label}</h4>
										<p className="text-sm text-muted-foreground">{item.value}</p>
									</CardContent>
								</Card>
							))}
						</div>

						<div>
							<Button asChild>
								<Link href="/about">
									More About Me <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
