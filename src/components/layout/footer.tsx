import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
} from "@/app/assets/icons";
import { Logo, Piptan } from "@/app/assets/logo";
import { CONTACT, NAV_LINKS } from "@/constants";
import { getProjectsCardData } from "@/features/projects/actions/projects-actions";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = async () => {
	const portfolios = await getProjectsCardData();
	return (
		<footer
			aria-label="Website footer"
			className="overflow-hidden bg-black"
			role="contentinfo"
		>
			<div className="container">
				<section
					aria-label="Footer content"
					className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-12 lg:grid-cols-3 lg:py-16"
				>
					<div className="flex flex-col items-start justify-between gap-4">
						<div>
							<Link
								aria-label="Piptan Investment Home"
								className="flex items-center"
								href="/"
							>
								<Logo />
								<h3 className="sr-only">Piptan Investment</h3>
							</Link>

							<p className="mt-2 text-balance text-base text-primary-foreground">
								Piptan Investment is your trusted partner in premium real
								estate. From luxury residences to strategic investments, we help
								you make confident, future-ready property decisions in Dubai and
								beyond.
							</p>
						</div>
						<div className="w-full">
							<h4 className="mb-3 text-lg md:text-xl">Connect with us</h4>
							<ul
								aria-label="Social media links"
								className="flex flex-wrap items-center gap-2 md:gap-3"
								role="list"
							>
								<li>
									<Button
										aria-label="Follow us on Facebook"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandFacebook className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on Instagram"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandInstagram className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on LinkedIn"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandLinkedin className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on LinkedIn"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandTelegram className="size-5" />
									</Button>
								</li>
							</ul>
						</div>
					</div>
					<nav
						aria-label="Footer navigation"
						className="col-span-1 gap-8 max-sm:grid max-sm:grid-cols-2 md:col-span-2 md:flex md:flex-row md:gap-14 lg:col-span-2 lg:place-content-end"
					>
						<div>
							<h4 className="font-medium text-base text-muted-foreground md:text-lg">
								Quick Links
							</h4>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{NAV_LINKS.map((nav) => (
									<li key={nav.href}>
										<Link
											aria-label={`Navigate to ${nav.title}`}
											className="font-medium text-base md:text-lg"
											href={nav.href as Route}
										>
											{nav.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-medium text-base text-muted-foreground md:text-lg">
								Portfolios
							</h4>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{portfolios.map((data) => (
									<li key={data._id}>
										<Link
											aria-label={`Navigate to ${data.title}`}
											className="font-medium text-base md:text-lg"
											href={(data.link as Route) ?? "/"}
											target="_blank"
										>
											{data.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-medium text-base text-muted-foreground md:text-lg">
								Contact
							</h4>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{CONTACT.map((nav) => (
									<li key={nav.title}>
										<Link
											aria-label={`Navigate to ${nav.title}`}
											className="font-medium text-base md:text-lg"
											href={nav.href as Route}
										>
											{nav.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</section>
				{/* App Coming Soon Section */}
				<section
					aria-label="Mobile app coming soon"
					className="my-2 rounded-lg border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10"
				>
					<div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
						{/* Left: App logo + heading */}
						<div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
							{/* App Logo */}
							<div
								aria-label="Piptan app logo"
								className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg"
							>
								<Image
									alt="Piptan Investment mobile app logo"
									className="h-full w-full object-cover"
									height={80}
									src="/app-logo.png"
									unoptimized
									width={80}
								/>
							</div>
							<div className="text-center md:text-left">
								<p className="font-semibold text-primary text-xs uppercase tracking-widest">
									Mobile App
								</p>
								<h4 className="mt-1 font-bold text-white text-xl md:text-2xl">
									Coming Soon
								</h4>
								<p className="mt-1 max-w-xs text-primary-foreground/70 text-sm">
									The Piptan Investment app is on its way. Be the first to
									experience premium real estate on your phone.
								</p>
							</div>
						</div>

						{/* Right: Store badges */}
						<div className="flex flex-col items-center gap-3 sm:flex-row md:shrink-0">
							{/* App Store badge */}
							<div
								aria-label="Coming soon on App Store"
								className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-5 py-3 opacity-70 transition-opacity hover:opacity-90"
								title="Coming soon on the App Store"
							>
								<svg
									aria-hidden="true"
									className="h-7 w-7 shrink-0 fill-white"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
								</svg>
								<div className="leading-tight">
									<p className="font-medium text-[10px] text-white/70">
										Coming soon on the
									</p>
									<p className="font-semibold text-sm text-white">App Store</p>
								</div>
							</div>

							{/* Play Store badge */}
							<div
								aria-label="Coming soon on Google Play"
								className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-5 py-3 opacity-70 transition-opacity hover:opacity-90"
								title="Coming soon on Google Play"
							>
								<svg
									aria-hidden="true"
									className="h-7 w-7 shrink-0"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.65 11.76z"
										fill="#EA4335"
									/>
									<path
										d="M20.54 10.27 17.1 8.34 13.6 12l3.5 3.66 3.44-1.93a2 2 0 0 0 0-3.46z"
										fill="#FBBC04"
									/>
									<path
										d="M3.18.24 14.83 12 3.18 23.76A2 2 0 0 1 2 22V2A2 2 0 0 1 3.18.24z"
										fill="#34A853"
									/>
									<path
										d="M13.6 12 3.18.24a2 2 0 0 1 2.25.43l12.17 7.67z"
										fill="#4285F4"
									/>
								</svg>
								<div className="leading-tight">
									<p className="font-medium text-[10px] text-white/70">
										Coming soon on
									</p>
									<p className="font-semibold text-sm text-white">
										Google Play
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Separator />
				<div
					className="flex flex-col items-center justify-between gap-4 pt-6 pb-8 text-muted-foreground text-xs md:flex-row md:pt-9 md:pb-12 md:text-sm"
					role="contentinfo"
				>
					<div className="max-w-3xl">
						<h5>© {new Date().getFullYear()}, Piptan Capital L.L.C</h5>
						<div className="mt-2 flex items-center justify-between gap-4">
							<div className="shrink-0 rounded-md border bg-white p-1.5">
								<Image
									alt="Piptan Investment trade license QR code (scan to verify)"
									height={72}
									src="/images/licence-qrcode.jpg"
									title="Piptan Investment trade license QR code (scan to verify)"
									width={72}
								/>
							</div>
							<div>
								<h6 className="flex items-center gap-2 font-semibold">
									Reg. No.: 2699641
									<span
										aria-hidden="true"
										className="block size-1.5 rounded-full bg-muted-foreground"
									/>
									Lic. No.: 1551118
								</h6>
								<p>
									Piptan Capital L.L.C operates in accordance with the laws and
									regulations of the United Arab Emirates, We uphold the highest
									ethical and regulatory standards in all our activities,
									ensuring that our practices reflect both local and
									international best practices.
								</p>
							</div>
						</div>
					</div>
					<nav aria-label="Legal links" className="shrink-0">
						<div className="flex items-center gap-3">
							<Link aria-label="Terms   " href="/legal/terms-of-service">
								Terms of Service
							</Link>
							<span
								aria-hidden="true"
								className="block size-1.5 rounded-full bg-muted-foreground"
							/>
							<Link aria-label="Privacy Policy" href="/legal/privacy">
								Privacy policy
							</Link>
						</div>
					</nav>
				</div>
			</div>
			<Piptan
				aria-hidden="true"
				className="h-auto w-full translate-y-1/3 text-primary md:translate-y-9"
			/>
		</footer>
	);
};
