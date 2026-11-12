'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	Phone,
	Mail,
	MapPin,
	Send,
	MessageSquare,
	AlertCircle,
	MailCheck,
	User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { contactInfo } from '@/lib/constants';
import { prepareContactMailto } from '@/lib/contact';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
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
		const result = prepareContactMailto(formState, { requireSubject: true });

		if (!result.valid) {
			setErrorMessage(result.error);
			setInfoMessage('');
			return;
		}

		setErrorMessage('');
		setInfoMessage(
			`Opening your default email application to compose your message to ${contactInfo.email}.`
		);
		window.location.href = result.mailtoUrl;
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question, project idea, or want to connect? Feel free to reach out!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6 flex flex-col justify-between h-full">
									<div>
										<div className="flex flex-wrap items-center justify-between gap-2 mb-6">
											<h2 className="text-2xl font-semibold">Contact Information</h2>
											<Badge variant="secondary">
												Preferred: {contactInfo.preferredMethod}
											</Badge>
										</div>
										<div className="space-y-4">
											<div className="flex items-center">
												<User className="h-5 w-5 text-primary mr-3 shrink-0" />
												<p className="text-foreground font-medium">{contactInfo.name}</p>
											</div>
											<div className="flex items-center">
												<Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
												<a
													href={`mailto:${contactInfo.email}`}
													className="text-muted-foreground hover:text-primary transition-colors break-all"
												>
													{contactInfo.email}
												</a>
											</div>
											<div className="flex items-center">
												<Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
												<a
													href={contactInfo.phoneHref}
													className="text-muted-foreground hover:text-primary transition-colors"
												>
													{contactInfo.phoneDisplay}
												</a>
											</div>
											<div className="flex items-center">
												<MessageSquare className="h-5 w-5 text-primary mr-3 shrink-0" />
												<a
													href={contactInfo.whatsappHref}
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
												>
													WhatsApp: {contactInfo.whatsappDisplay}
												</a>
											</div>
											<div className="flex items-center">
												<MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
												<p className="text-muted-foreground">{contactInfo.location}</p>
											</div>
										</div>
									</div>

									<div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
										<Button size="sm" asChild>
											<a href={`mailto:${contactInfo.email}`}>
												<Mail className="h-4 w-4 mr-2" />
												Email Directly
											</a>
										</Button>
										<Button size="sm" variant="outline" asChild>
											<a
												href={contactInfo.whatsappHref}
												target="_blank"
												rel="noopener noreferrer"
											>
												<MessageSquare className="h-4 w-4 mr-2" />
												Chat on WhatsApp
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} noValidate className="space-y-4">
								<div>
									<Input
										placeholder="Your Name"
										aria-label="Name"
										name="name"
										value={formState.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Your Email"
										aria-label="Email"
										name="email"
										value={formState.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										placeholder="Subject"
										aria-label="Subject"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Textarea
										placeholder="Your Message"
										aria-label="Message"
										name="message"
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
				</motion.div>
			</div>
		</div>
	);
}
