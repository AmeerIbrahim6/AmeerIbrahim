import {
	Achievement,
	BlogPost,
	Certificate,
	ContactInfo,
	Education,
	Experience,
	PersonalInfo,
	Project,
	ResumeConfig,
	Skill,
	SocialLink,
} from './types';

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DATA FOR AMEER IBRAHIM
 * ----------------------------------------------------------------------------
 * Edit this file to update your personal details, education, skills,
 * experience, projects, certificates, achievements, social links, or blog posts.
 * All pages across the website read directly from this file.
 * ============================================================================
 */

export const personalInfo: PersonalInfo = {
	fullName: 'Ameer Ibrahim',
	displayName: 'Ameer Ibrahim',
	designation: 'AI Developer',
	status: 'Student',
	academicIdentity: 'Computer Science Student',
	location: 'Sialkot, Pakistan',
	browserTitle: 'Ameer Ibrahim - Portfolio',
	websiteHeading: "Ameer Ibrahim's Portfolio",
	tagline: 'Building Intelligent Solutions Through Code and Creativity.',
	heroSubtitle: 'Computer Science Student And AI Developer',
	heroIntroduction:
		'A passionate Computer Science student and aspiring AI Developer with a strong interest in software development, artificial intelligence, and innovative technology. Dedicated to continuous learning, problem-solving, and building meaningful digital solutions.',
	// Replace with e.g. '/images/profile.jpg' once you add a personal photo to public/images/
	profileImage: '',
	profileImageAlt: 'Ameer Ibrahim — Computer Science Student and AI Developer',
	about: {
		sectionDesignation: 'AI Developer',
		biography: [
			'I am a hardworking and determined Computer Science student with a lifelong passion for technology and programming. Throughout my academic journey, I have consistently maintained strong academic performance and developed a keen interest in computer science.',
			'I enjoy exploring new technologies, strengthening my programming skills, and challenging myself to solve problems. I am particularly interested in artificial intelligence and software development.',
			'My ambition is to become a successful AI Developer and contribute to building intelligent, innovative software solutions.',
			'I believe in continuous learning, dedication, teamwork, and the importance of staying curious in an ever-evolving technological world.',
		],
		personalJourney:
			'I have always achieved good grades and have been a talented and hardworking student. My academic journey has strengthened my interest in Computer Science and motivated me to pursue software and AI development.',
		careerGoal:
			'To become a successful developer, particularly in AI and software development.',
		passions: [
			'Computer Science',
			'Programming',
			'Software Development',
			'Artificial Intelligence',
			'Learning New Technologies',
			'Problem-Solving',
		],
		qualities: [
			'Passionate',
			'Hardworking',
			'Determined',
			'Dedicated',
			'Curious',
			'Team-Oriented',
		],
		previewDescription:
			'A passionate Computer Science student and aspiring AI Developer dedicated to building intelligent solutions through code and creativity.',
		previewSummary:
			'I am a hardworking and determined Computer Science student from Sialkot, Pakistan, with a strong interest in artificial intelligence, programming, and software development. I enjoy exploring new technologies, solving problems, and continuously growing my technical foundation.',
	},
};

export const contactInfo: ContactInfo = {
	name: 'Ameer Ibrahim',
	email: 'ameeribrahimqamar6@gmail.com',
	phoneDisplay: '0302-0009893',
	phoneHref: 'tel:+923020009893',
	whatsappDisplay: '0302-0009893',
	whatsappHref: 'https://wa.me/923020009893',
	location: 'Sialkot, Pakistan',
	preferredMethod: 'Email',
};

/**
 * Resume configuration.
 * Place your real PDF file at: public/resume/ameer-ibrahim-resume.pdf
 * Then set `available: true` below to enable direct downloads.
 */
export const resumeConfig: ResumeConfig = {
	path: '/resume/ameer-ibrahim-resume.pdf',
	available: false,
	unavailableMessage:
		'Resume PDF will be available soon. Please reach out via email or the contact page in the meantime.',
};

/**
 * Social & direct contact links.
 * Only entries with `verified: true` and a non-empty personal `url` are shown.
 * Add your personal GitHub, Instagram, or LinkedIn profile URLs when ready
 * and set `verified: true`.
 */
export const socialLinks: SocialLink[] = [
	{
		platform: 'email',
		label: 'Email',
		url: `mailto:${contactInfo.email}`,
		verified: true,
	},
	{
		platform: 'whatsapp',
		label: 'WhatsApp',
		url: contactInfo.whatsappHref,
		verified: true,
	},
	{
		platform: 'phone',
		label: 'Phone',
		url: contactInfo.phoneHref,
		verified: true,
	},
	{
		platform: 'github',
		label: 'GitHub',
		url: '',
		verified: false,
	},
	{
		platform: 'instagram',
		label: 'Instagram',
		url: '',
		verified: false,
	},
	{
		platform: 'linkedin',
		label: 'LinkedIn',
		url: '',
		verified: false,
	},
	{
		platform: 'twitter',
		label: 'Twitter',
		url: '',
		verified: false,
	},
	{
		platform: 'facebook',
		label: 'Facebook',
		url: '',
		verified: false,
	},
];

/**
 * Confirmed academic qualifications.
 * When your BSc (Hons) in Computer Science university, dates, and enrollment status
 * are confirmed, add a new Education object at the top of this array.
 */
export const education: Education[] = [
	{
		degree: 'Intermediate',
		field: 'FSc ICS',
		institution: 'Army Public College Boys Branch Sialkot Cantt',
		location: 'Sialkot, Pakistan',
		startDate: '2024',
		endDate: '2026',
		result: '85%',
		status: 'completed',
		achievements: [],
	},
	{
		degree: 'Matriculation',
		field: 'Computer Science',
		institution: 'Army Public School Boys Branch Sialkot Cantt',
		location: 'Sialkot, Pakistan',
		startDate: '2022',
		endDate: '2024',
		result: '85%',
		status: 'completed',
		achievements: [],
	},
];

/**
 * Higher education track awaiting official confirmation.
 * Keep details unfabricated until university, dates, and enrollment are finalized.
 */
export const upcomingEducation = {
	degree: 'BSc (Hons) in Computer Science',
	statusLabel: 'Awaiting Confirmation',
	note: 'University, enrollment dates, and status will be added once confirmed.',
};

/**
 * Skills organized by category (level from 1 to 10).
 */
export const skills: Skill[] = [
	// A. Technical Skills
	{ name: 'HTML', level: 8, category: 'technical' },
	{ name: 'Python', level: 7, category: 'technical' },
	{ name: 'C++', level: 7, category: 'technical' },
	{ name: 'PHP', level: 7, category: 'technical' },
	{ name: 'CSS', level: 6, category: 'technical' },
	{ name: 'JavaScript', level: 6, category: 'technical' },

	// B. Software Proficiency
	{ name: 'Antigravity IDE', level: 8, category: 'software' },
	{ name: 'GitHub', level: 8, category: 'software' },
	{ name: 'Microsoft Office', level: 8, category: 'software' },

	// C. Soft Skills
	{ name: 'Teamwork', level: 9, category: 'soft' },
	{ name: 'Problem Solving', level: 8, category: 'soft' },
	{ name: 'Communication', level: 7, category: 'soft' },
	{ name: 'Leadership', level: 7, category: 'soft' },

	// D. Languages
	{ name: 'Urdu', level: 10, category: 'language' },
	{ name: 'English', level: 9, category: 'language' },
];

/**
 * Professional & internship experience entries.
 * Add objects matching the `Experience` type as you gain experience:
 * {
 *   title: 'AI Developer Intern',
 *   company: 'Company Name',
 *   location: 'Sialkot, Pakistan',
 *   employmentType: 'Internship',
 *   startDate: 'Month Year',
 *   endDate: 'Month Year',
 *   current: false,
 *   responsibilities: ['...'],
 *   technologies: ['Python', 'Next.js'],
 *   companyLogo: '/images/company-logo.png', // optional
 * }
 */
export const experiences: Experience[] = [];

/**
 * Portfolio projects.
 * Add objects matching the `Project` type as you build projects:
 * {
 *   title: 'Project Name',
 *   shortDescription: 'Concise summary for project cards.',
 *   fullDescription: 'Detailed explanation of goals, architecture, and results.',
 *   coverImage: '/images/projects/project-cover.jpg',
 *   technologies: ['Python', 'Next.js', 'TypeScript'],
 *   category: 'Artificial Intelligence',
 *   liveDemoUrl: 'https://...', // optional
 *   githubRepoUrl: 'https://github.com/...', // optional
 *   completionDate: 'Month Year', // optional
 *   featured: true, // optional
 * }
 */
export const projects: Project[] = [];

/**
 * Certificates.
 * Add objects matching the `Certificate` type as you earn certifications:
 * {
 *   title: 'Certificate Name',
 *   issuer: 'Issuing Organization',
 *   issueDate: 'Month Year',
 *   certificateId: 'ID-12345', // optional
 *   verificationUrl: 'https://...', // optional
 *   image: '/images/certificates/cert.jpg', // optional
 *   pdf: '/certificates/cert.pdf', // optional
 * }
 */
export const certificates: Certificate[] = [];

/**
 * Achievements & honors.
 * Add objects matching the `Achievement` type when earned:
 * {
 *   title: 'Achievement Title',
 *   description: 'Details about the achievement.',
 *   issuer: 'Issuing Organization',
 *   date: 'Month Year',
 *   supportingDocument: '/certificates/achievement.pdf', // optional
 * }
 */
export const achievements: Achievement[] = [];

/**
 * Blog articles.
 * Add, edit, or remove entries here; every slug automatically generates
 * a working detail page at /blog/[slug].
 */
export const blogPosts: BlogPost[] = [
	{
		title: 'My Journey into Computer Science and Artificial Intelligence',
		slug: 'my-journey-into-computer-science-and-artificial-intelligence',
		excerpt:
			'How curiosity about how software works led me from school computer labs in Sialkot to setting my sights on Artificial Intelligence development.',
		date: 'November 2026',
		author: 'Ameer Ibrahim',
		image: '/images/blog/journey-into-computer-science.webp',
		category: 'Personal Reflection',
		readTime: '4 min read',
		tags: ['Computer Science', 'Artificial Intelligence', 'Learning Journey'],
		sections: [
			{
				heading: 'Where the Curiosity Started',
				paragraphs: [
					'Every developer starts with a simple question: how does the technology we use every day actually work? For me, that curiosity began during my early school years while studying Computer Science in Sialkot, Pakistan. Seeing how structured instructions could make a computer solve calculations, format documents, or respond to user input turned technology from a daily tool into an exciting field to explore.',
					'During Matriculation in Computer Science and later through FSc ICS, my interest grew far beyond classroom assignments. Maintaining consistent academic results required discipline, but it was genuine enthusiasm for logic and problem-solving that kept me engaged after class hours.',
				],
			},
			{
				heading: 'Building a Foundation Across Languages',
				paragraphs: [
					'As I explored programming further, I realized that different languages teach you different ways to think. Learning C++ introduced me to structured logic, memory awareness, and algorithmic thinking. Working with Python showed me how expressive, readable code can speed up experimentation and problem-solving. Exploring HTML, CSS, JavaScript, and PHP opened the door to how modern websites and web applications are structured and delivered.',
					'Each language and tool—whether practicing in Antigravity IDE or organizing code with GitHub—helped connect theoretical concepts to practical software development.',
				],
			},
			{
				heading: 'Looking Ahead Toward AI Development',
				paragraphs: [
					'My goal is to become a skilled AI Developer and contribute to intelligent, useful software systems. Artificial Intelligence stands out to me because it combines mathematical reasoning, software engineering, and creativity to tackle real-world challenges.',
					'I know that reaching this goal takes patience, consistent practice, and humility to keep learning every day. Right now, my focus is on strengthening my computer science fundamentals, collaborating well with peers, and turning curiosity into steady progress—one concept and one line of code at a time.',
				],
			},
		],
	},
	{
		title: 'Understanding Artificial Intelligence: From Basics to Real-World Applications',
		slug: 'understanding-artificial-intelligence-basics-to-applications',
		excerpt:
			'A clear, beginner-friendly look at what Artificial Intelligence actually means, how machine learning fits in, and where AI helps in everyday life.',
		date: 'November 2026',
		author: 'Ameer Ibrahim',
		image: '/images/blog/understanding-artificial-intelligence.webp',
		category: 'Artificial Intelligence',
		readTime: '5 min read',
		tags: ['Artificial Intelligence', 'Machine Learning', 'Python', 'Technology'],
		sections: [
			{
				heading: 'What Do We Mean by Artificial Intelligence?',
				paragraphs: [
					'Artificial Intelligence is often surrounded by buzzwords, which can make it sound mysterious to newcomers. At its core, AI refers to computer systems designed to perform tasks that usually require human intelligence—such as recognizing patterns, understanding language, making predictions, or assisting in decision-making.',
					'In traditional programming, a developer writes explicit step-by-step rules for every possible case. In modern AI systems, particularly those built with machine learning, algorithms learn patterns directly from data so they can generalize to new inputs.',
				],
			},
			{
				heading: 'Core Pillars: Data, Algorithms, and Compute',
				paragraphs: [
					'To understand how AI works in practice, it helps to look at three core ingredients. First is clean, representative data—because a model is only as reliable as the examples it learns from. Second is the algorithm or model architecture, ranging from classic decision trees and linear models to deep neural networks and large language models. Third is computing power and solid software engineering to train, evaluate, and deploy those models responsibly.',
					'Python has become the most widely used language in AI development because of its clean syntax and rich ecosystem of scientific and machine learning libraries, while languages like C++ quietly power high-performance execution underneath.',
				],
			},
			{
				heading: 'Everyday Applications Shaping the Future',
				paragraphs: [
					'Today, AI is already embedded in tools we interact with constantly: voice assistants, translation tools, medical imaging support, recommendation systems, fraud detection, and intelligent developer tools that help programmers write and review code faster.',
					'For Computer Science students, understanding both the possibilities and the limitations of AI—including accuracy, bias, and ethical use—is essential. AI works best not when it replaces human thinking, but when it amplifies human creativity and problem-solving.',
				],
			},
		],
	},
	{
		title: 'Why Programming Fundamentals Matter for Every Aspiring Developer',
		slug: 'why-programming-fundamentals-matter',
		excerpt:
			'Frameworks and tools evolve rapidly, but strong problem-solving habits, clean logic, and core computer science fundamentals remain timeless.',
		date: 'November 2026',
		author: 'Ameer Ibrahim',
		image: '/images/blog/programming-fundamentals.webp',
		category: 'Software Development',
		readTime: '4 min read',
		tags: ['Programming', 'C++', 'Python', 'Web Development'],
		sections: [
			{
				heading: 'Beyond Syntax and Trendy Frameworks',
				paragraphs: [
					'When starting out in software development, it is tempting to jump straight into the newest framework or copy code snippets until something appears on the screen. While experimentation is valuable, relying solely on surface-level familiarity makes debugging and scaling ideas much harder later on.',
					'Programming fundamentals—variables, control flow, functions, data structures, modular thinking, and error handling—are what turn someone who can follow a tutorial into someone who can design a solution from scratch.',
				],
			},
			{
				heading: 'Problem-Solving Before Typing Code',
				paragraphs: [
					'One of the most important habits any student or aspiring developer can build is breaking a problem down before touching the keyboard. Understanding what inputs you have, what outputs are expected, and what edge cases could break your logic saves hours of frustration.',
					'Whether writing a small utility script in Python, structuring logic in C++, handling form data in PHP, or building an interface with HTML, CSS, and JavaScript, the mindset is the same: keep code clear, readable, and intentional.',
				],
			},
			{
				heading: 'Collaboration and Continuous Growth',
				paragraphs: [
					'Modern software is rarely built in isolation. Learning version control with Git and GitHub early on teaches you how to track changes safely, document your reasoning, and collaborate smoothly with a team. Combined with strong communication and curiosity, solid fundamentals prepare you to adapt to whatever technologies define the next decade—especially in fast-moving fields like AI.',
				],
			},
		],
	},
];

