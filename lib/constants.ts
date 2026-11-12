import {
	achievements,
	blogPosts,
	certificates,
	contactInfo,
	education,
	experiences,
	personalInfo,
	projects,
	resumeConfig,
	skills,
	socialLinks,
	upcomingEducation,
} from './portfolio-data';

export type {
	Achievement,
	BlogPost,
	BlogSection,
	Certificate,
	ContactInfo,
	Education,
	EducationStatus,
	Experience,
	NavItem,
	PersonalInfo,
	Project,
	ResumeConfig,
	Skill,
	SkillCategoryKey,
	SocialLink,
	SocialPlatform,
} from './types';

export {
	achievements,
	blogPosts,
	certificates,
	contactInfo,
	education,
	experiences,
	personalInfo,
	projects,
	resumeConfig,
	skills,
	socialLinks,
	upcomingEducation,
};

/**
 * Returns only verified social/contact links that have a non-empty personal URL.
 */
export function getVerifiedSocialLinks() {
	return socialLinks.filter((item) => item.verified && item.url.trim().length > 0);
}

export const siteConfig = {
	name: personalInfo.browserTitle,
	heading: personalInfo.websiteHeading,
	description:
		'Personal portfolio of Ameer Ibrahim, an aspiring AI Developer and Computer Science student passionate about programming, software development, and artificial intelligence.',
	author: personalInfo.fullName,
	location: personalInfo.location,
	mainNav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Experience', href: '/experience' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Certificates', href: '/certificates' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Contact', href: '/contact' },
	],
	links: {
		email: `mailto:${contactInfo.email}`,
		whatsapp: contactInfo.whatsappHref,
		phone: contactInfo.phoneHref,
	},
};
