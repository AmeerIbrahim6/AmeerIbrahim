'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ResumeButton } from '@/components/shared/resume-button';
import { personalInfo } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	const vantaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = vantaRef.current;
		if (!container) return;

		const prefersReducedMotion =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			return;
		}

		let cancelled = false;
		let initialized = false;
		let effect: {
			destroy?: () => void;
			renderer?: { setPixelRatio?: (ratio: number) => void };
		} | null = null;
		let idleHandle: number | null = null;
		let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

		const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

		const initVanta = async () => {
			if (cancelled || initialized || !vantaRef.current) return;
			initialized = true;
			try {
				const [THREE, vantaModule] = await Promise.all([
					import('three'),
					import('vanta/dist/vanta.net.min'),
				]);
				if (cancelled || !vantaRef.current) return;

				const NET = vantaModule.default;
				effect = NET({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 0.8,
					scaleMobile: 0.8,
					color: 0xff3f81,
					backgroundColor: 0x23153c,
					points: isMobileViewport ? 8.0 : 10.0,
					maxDistance: 15.0,
					spacing: isMobileViewport ? 22.0 : 20.0,
					showDots: false,
				});

				effect?.renderer?.setPixelRatio?.(
					isMobileViewport ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
				);
			} catch {
				// Gracefully fall back to CSS background if WebGL context cannot be created
				effect = null;
			}
		};

		const triggerInit = () => {
			cleanupTriggers();
			void initVanta();
		};

		const interactionEvents: Array<keyof WindowEventMap> = [
			'pointerdown',
			'touchstart',
			'scroll',
			'keydown',
		];

		const cleanupTriggers = () => {
			for (const evt of interactionEvents) {
				window.removeEventListener(evt, triggerInit);
			}
			if (idleHandle !== null && 'cancelIdleCallback' in window) {
				window.cancelIdleCallback(idleHandle);
				idleHandle = null;
			}
			if (timeoutHandle !== null) {
				clearTimeout(timeoutHandle);
				timeoutHandle = null;
			}
		};

		if (isMobileViewport) {
			for (const evt of interactionEvents) {
				window.addEventListener(evt, triggerInit, { once: true, passive: true });
			}
			timeoutHandle = setTimeout(triggerInit, 3500);
		} else if ('requestIdleCallback' in window) {
			idleHandle = window.requestIdleCallback(() => {
				triggerInit();
			}, { timeout: 600 });
		} else {
			timeoutHandle = setTimeout(triggerInit, 150);
		}

		return () => {
			cancelled = true;
			cleanupTriggers();
			if (effect && typeof effect.destroy === 'function') {
				effect.destroy();
			}
		};
	}, []);

	return (
		<section className="relative overflow-hidden">
			{/* Vanta.js Background (with static fallback when reduced-motion is preferred) */}
			<div
				ref={vantaRef}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-0 opacity-60 bg-[#23153c]/70"
			/>

			{/* Content */}
			<div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
				<motion.div
					variants={staggerContainer(0.05, 0)}
					initial={false}
					animate="show"
					className="max-w-3xl mx-auto text-center"
				>
					<motion.p
						variants={fadeIn('up', 0.2)}
						className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary"
					>
						{personalInfo.heroSubtitle}
					</motion.p>

					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="text-gradient">{personalInfo.displayName}&apos;s</span>{' '}
						Portfolio
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
					>
						{personalInfo.heroIntroduction}
					</motion.p>

					<motion.p
						variants={fadeIn('up', 0.6)}
						className="mt-4 text-sm sm:text-base font-medium text-primary/90 tracking-wide"
					>
						{personalInfo.tagline}
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-wrap gap-4 justify-center items-start"
					>
						<Button size="lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<ResumeButton
							label="Download Resume"
							size="lg"
							variant="outline"
						/>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]"
			/>
		</section>
	);
}
