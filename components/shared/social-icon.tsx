import {
	Mail,
	MessageSquare,
	Phone,
	Github,
	Instagram,
	Linkedin,
	Twitter,
	Facebook,
} from 'lucide-react';

import type { SocialPlatform } from '@/lib/types';

const iconMap: Record<SocialPlatform, typeof Mail> = {
	email: Mail,
	whatsapp: MessageSquare,
	phone: Phone,
	github: Github,
	instagram: Instagram,
	linkedin: Linkedin,
	twitter: Twitter,
	facebook: Facebook,
};

export function SocialIcon({
	platform,
	className = 'h-5 w-5',
}: {
	platform: SocialPlatform;
	className?: string;
}) {
	const Icon = iconMap[platform];
	return <Icon className={className} />;
}

