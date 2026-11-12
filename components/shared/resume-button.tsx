'use client';

import { useState } from 'react';
import { FileDown, Clock } from 'lucide-react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { resumeConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ResumeButtonProps {
	label?: string;
	size?: ButtonProps['size'];
	variant?: ButtonProps['variant'];
	className?: string;
	asTextLink?: boolean;
}

export function ResumeButton({
	label = 'Download Resume',
	size = 'lg',
	variant = 'outline',
	className,
	asTextLink = false,
}: ResumeButtonProps) {
	const [showUnavailableNotice, setShowUnavailableNotice] = useState(false);

	if (resumeConfig.available) {
		if (asTextLink) {
			return (
				<a
					href={resumeConfig.path}
					download
					className={cn(
						'text-muted-foreground hover:text-primary text-sm transition-colors',
						className
					)}
				>
					{label}
				</a>
			);
		}

		return (
			<Button size={size} variant={variant} className={className} asChild>
				<a href={resumeConfig.path} download>
					{label} <FileDown className="ml-2 h-4 w-4" />
				</a>
			</Button>
		);
	}

	if (asTextLink) {
		return (
			<div className="space-y-1">
				<button
					type="button"
					onClick={() => setShowUnavailableNotice((prev) => !prev)}
					className={cn(
						'text-muted-foreground hover:text-primary text-sm transition-colors text-left',
						className
					)}
				>
					{label} (Coming Soon)
				</button>
				{showUnavailableNotice && (
					<p className="text-xs text-muted-foreground max-w-xs">
						{resumeConfig.unavailableMessage}
					</p>
				)}
			</div>
		);
	}

	return (
		<div className="inline-flex flex-col items-center sm:items-start">
			<Button
				type="button"
				size={size}
				variant={variant}
				className={className}
				onClick={() => setShowUnavailableNotice((prev) => !prev)}
				aria-expanded={showUnavailableNotice}
			>
				{label} <FileDown className="ml-2 h-4 w-4" />
			</Button>
			{showUnavailableNotice && (
				<p
					role="status"
					className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-border bg-card/90 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
				>
					<Clock className="h-3.5 w-3.5 text-primary shrink-0" />
					<span>{resumeConfig.unavailableMessage}</span>
				</p>
			)}
		</div>
	);
}

