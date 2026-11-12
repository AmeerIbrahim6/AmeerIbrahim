import { contactInfo } from './portfolio-data';

export type ContactFormValues = {
	name: string;
	email: string;
	subject?: string;
	message: string;
};

export type ContactValidationResult =
	| { valid: true; mailtoUrl: string }
	| { valid: false; error: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SINGLE_LINE_CONTROL_CHARS = /[\x00-\x1F\x7F]/g;
const MULTILINE_CONTROL_CHARS = /[\x00-\x09\x0B-\x1F\x7F]/g;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

function sanitizeSingleLine(value: string): string {
	return value.replace(SINGLE_LINE_CONTROL_CHARS, ' ').trim();
}

function sanitizeMultiline(value: string): string {
	return value.replace(/\r\n?/g, '\n').replace(MULTILINE_CONTROL_CHARS, '').trim();
}

/**
 * Validates contact form fields and builds a properly URL-encoded mailto: link
 * targeting Ameer Ibrahim's email address.
 */
export function prepareContactMailto(
	values: ContactFormValues,
	options: { requireSubject?: boolean } = {}
): ContactValidationResult {
	const name = sanitizeSingleLine(values.name);
	const email = sanitizeSingleLine(values.email);
	const subjectInput = sanitizeSingleLine(values.subject ?? '');
	const message = sanitizeMultiline(values.message);

	if (!name) {
		return { valid: false, error: 'Please enter your name.' };
	}

	if (name.length > MAX_NAME_LENGTH) {
		return { valid: false, error: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` };
	}

	if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
		return { valid: false, error: 'Please enter a valid email address.' };
	}

	if (options.requireSubject && !subjectInput) {
		return { valid: false, error: 'Please enter a subject.' };
	}

	if (subjectInput.length > MAX_SUBJECT_LENGTH) {
		return { valid: false, error: `Subject must be ${MAX_SUBJECT_LENGTH} characters or fewer.` };
	}

	if (!message) {
		return { valid: false, error: 'Please enter a message before submitting.' };
	}

	if (message.length > MAX_MESSAGE_LENGTH) {
		return { valid: false, error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` };
	}

	const subject = subjectInput || `Portfolio Inquiry from ${name}`;
	const bodyLines = [
		`Hello ${contactInfo.name},`,
		'',
		message,
		'',
		'---',
		`From: ${name}`,
		`Reply-To: ${email}`,
	];

	const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

	return { valid: true, mailtoUrl };
}

