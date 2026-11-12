import dynamic from 'next/dynamic';

import { HeroSection } from '@/components/home/hero-section';

const AboutPreview = dynamic(() =>
	import('@/components/home/about-preview').then((mod) => mod.AboutPreview)
);
const ProjectsPreview = dynamic(() =>
	import('@/components/home/projects-preview').then((mod) => mod.ProjectsPreview)
);
const SkillsPreview = dynamic(() =>
	import('@/components/home/skills-preview').then((mod) => mod.SkillsPreview)
);
const ContactPreview = dynamic(() =>
	import('@/components/home/contact-preview').then((mod) => mod.ContactPreview)
);

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutPreview />
			<ProjectsPreview />
			<SkillsPreview />
			<ContactPreview />
		</>
	);
}
