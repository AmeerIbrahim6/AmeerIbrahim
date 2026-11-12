export type NavItem = {
	title: string;
	href: string;
};

export type SocialPlatform =
	| 'email'
	| 'whatsapp'
	| 'phone'
	| 'github'
	| 'instagram'
	| 'linkedin'
	| 'twitter'
	| 'facebook';

export type SocialLink = {
	platform: SocialPlatform;
	label: string;
	url: string;
	/**
	 * Only verified, personal profile or contact links should have verified: true.
	 * Platform homepages (e.g. https://github.com/) are kept unverified/hidden.
	 */
	verified: boolean;
};

export type ContactInfo = {
	name: string;
	email: string;
	phoneDisplay: string;
	phoneHref: string;
	whatsappDisplay: string;
	whatsappHref: string;
	location: string;
	preferredMethod: string;
};

export type ResumeConfig = {
	path: string;
	available: boolean;
	unavailableMessage: string;
};

export type PersonalInfo = {
	fullName: string;
	displayName: string;
	designation: string;
	status: string;
	academicIdentity: string;
	location: string;
	browserTitle: string;
	websiteHeading: string;
	tagline: string;
	heroSubtitle: string;
	heroIntroduction: string;
	profileImage: string;
	profileImageAlt: string;
	about: {
		sectionDesignation: string;
		biography: string[];
		personalJourney: string;
		careerGoal: string;
		passions: string[];
		qualities: string[];
		previewDescription: string;
		previewSummary: string;
	};
};

export type EducationStatus = 'completed' | 'in-progress' | 'awaiting-confirmation';

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	result?: string;
	gpa?: string;
	status?: EducationStatus;
	statusNote?: string;
	achievements: string[];
};

export type SkillCategoryKey = 'technical' | 'software' | 'soft' | 'language';

export type Skill = {
	name: string;
	level: number; // 1-10
	category: SkillCategoryKey;
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	employmentType: string;
	startDate: string;
	endDate: string;
	current: boolean;
	responsibilities: string[];
	technologies: string[];
	companyLogo?: string;
};

export type Project = {
	title: string;
	shortDescription: string;
	fullDescription: string;
	coverImage: string;
	technologies: string[];
	category: string;
	liveDemoUrl?: string;
	githubRepoUrl?: string;
	completionDate?: string;
	featured?: boolean;
};

export type Certificate = {
	title: string;
	issuer: string;
	issueDate: string;
	certificateId?: string;
	verificationUrl?: string;
	image?: string;
	pdf?: string;
};

export type Achievement = {
	title: string;
	description: string;
	issuer: string;
	date: string;
	supportingDocument?: string;
	image?: string;
};

export type BlogSection = {
	heading: string;
	paragraphs: string[];
};

export type BlogPost = {
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	category: string;
	readTime: string;
	tags: string[];
	sections: BlogSection[];
};

