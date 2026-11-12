'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, MailCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { contactInfo } from '@/lib/constants';
import { prepareContactMailto } from '@/lib/contact';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const [infoMessage, setInfoMessage] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setErrorMessage('');
		setInfoMessage('');
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const result = prepareContactMailto(formState, { requireSubject: false });

		if (!result.valid) {
			setErrorMessage(result.error);
			setInfoMessage('');
			return;
		}

		setErrorMessage('');
		setInfoMessage(
			`Opening your default email application to compose an email to ${contactInfo.email}.`
		);
		window.location.href = result.mailtoUrl;
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in collaborating, discussing AI and software development, or connecting? Send a message via email."
					className="text-center flex flex-col items-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleSubmit} noValidate className="space-y-4">
						<div>
							<Input
								name="name"
								aria-label="Your Name"
								placeholder="Your Name"
								value={formState.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Input
								name="email"
								type="email"
								aria-label="Your Email"
								placeholder="Your Email"
								value={formState.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Textarea
								name="message"
								aria-label="Your Message"
								placeholder="Your Message"
								value={formState.message}
								onChange={handleChange}
								required
								className="min-h-[150px]"
							/>
						</div>

						{errorMessage && (
							<div
								role="alert"
								className="flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive"
							>
								<AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
								<span>{errorMessage}</span>
							</div>
						)}

						{infoMessage && (
							<div
								role="status"
								className="flex items-start gap-2 rounded-md border border-primary/40 bg-primary/10 p-3 text-sm text-foreground"
							>
								<MailCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
								<span>{infoMessage}</span>
							</div>
						)}

						<Button type="submit" className="w-full">
							Send Message <Send className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
