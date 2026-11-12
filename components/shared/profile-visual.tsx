'use client';

import Image from 'next/image';
import { Cpu, Code2, Sparkles, MapPin } from 'lucide-react';

import { personalInfo } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ProfileVisualProps {
	className?: string;
	sizes?: string;
}

export function ProfileVisual({
	className,
	sizes = '(max-width: 768px) 100vw, 50vw',
}: ProfileVisualProps) {
	if (personalInfo.profileImage) {
		return (
			<div className={cn('relative overflow-hidden rounded-lg', className)}>
				<Image
					src={personalInfo.profileImage}
					alt={personalInfo.profileImageAlt}
					fill
					className="object-cover"
					sizes={sizes}
				/>
			</div>
		);
	}

	return (
		<div
			className={cn(
				'relative overflow-hidden rounded-lg border bg-card flex flex-col items-center justify-center p-8 text-center card-gradient',
				className
			)}
			role="img"
			aria-label={personalInfo.profileImageAlt}
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(circle_at_bottom_left,hsl(var(--secondary)/0.2),transparent_55%)]"
			/>
			<div className="relative z-10 flex flex-col items-center max-w-xs space-y-5">
				<div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary/40 bg-background/80 shadow-lg">
					<span className="text-3xl font-bold tracking-tight text-gradient">AI</span>
					<span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm">
						<Cpu className="h-4 w-4" />
					</span>
				</div>

				<div className="space-y-1.5">
					<h3 className="text-2xl font-bold">{personalInfo.displayName}</h3>
					<p className="text-sm font-medium text-primary">
						{personalInfo.heroSubtitle}
					</p>
					<p className="inline-flex items-center justify-center gap-1 text-xs text-muted-foreground pt-1">
						<MapPin className="h-3.5 w-3.5 text-primary" />
						<span>{personalInfo.location}</span>
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-2 pt-2">
					<span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
						<Code2 className="h-3.5 w-3.5 text-primary" />
						Software Development
					</span>
					<span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
						<Sparkles className="h-3.5 w-3.5 text-secondary" />
						Artificial Intelligence
					</span>
				</div>
			</div>
		</div>
	);
}

