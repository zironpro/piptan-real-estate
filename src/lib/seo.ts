import type { Metadata } from "next";
import { urlForOgImage } from "@/lib/sanity/image";

export const SITE_URL = "https://piptan.ae";
export const SITE_NAME = "Piptan Investment";
export const TWITTER_HANDLE: string | undefined = undefined; // set '@handle' only after ownership is confirmed

export const DEFAULT_OG_IMAGE = {
	url: "/og/piptan-default.jpg",
	width: 1200,
	height: 630,
	alt: "Piptan Investment - curated real estate investment opportunities in Dubai and the UAE",
	type: "image/jpeg",
};

export type SeoImage = {
	url: string;
	width: number;
	height: number;
	alt: string;
	type?: string;
};

export type SeoInput = {
	title: string;
	description: string;
	path: string;
	image?: SeoImage;
	type?: "website" | "article";
	publishedTime?: string;
	modifiedTime?: string;
	section?: string;
	keywords?: string | string[];
	noIndex?: boolean;
};

export function buildMetadata(i: SeoInput): Metadata {
	const image: SeoImage = i.image ?? DEFAULT_OG_IMAGE;

	return {
		title: i.title,
		description: i.description,
		...(i.keywords && { keywords: i.keywords }),
		alternates: {
			canonical: i.path,
		},
		openGraph: {
			title: i.title,
			description: i.description,
			url: i.path,
			siteName: SITE_NAME,
			locale: "en_US",
			type: i.type ?? "website",
			images: [
				{
					url: image.url,
					width: image.width,
					height: image.height,
					alt: image.alt,
					type: image.type ?? "image/jpeg",
				},
			],
			...(i.type === "article" && {
				publishedTime: i.publishedTime,
				modifiedTime: i.modifiedTime,
				section: i.section,
			}),
		},
		twitter: {
			card: "summary_large_image",
			title: i.title,
			description: i.description,
			images: [
				{
					url: image.url,
					alt: image.alt,
				},
			],
			...(TWITTER_HANDLE && {
				site: TWITTER_HANDLE,
				creator: TWITTER_HANDLE,
			}),
		},
		robots: i.noIndex
			? {
					index: false,
					follow: false,
				}
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-video-preview": -1,
						"max-image-preview": "large",
						"max-snippet": -1,
					},
				},
	};
}

export function buildSanityOgImage(source: any, alt?: string): SeoImage {
	if (!source) return DEFAULT_OG_IMAGE;
	try {
		const url = urlForOgImage(source).url();
		return {
			url,
			width: 1200,
			height: 630,
			alt: alt || "Piptan Investment - curated real estate in Dubai and UAE",
			type: "image/jpeg",
		};
	} catch (e) {
		console.error("Error generating Sanity OG image:", e);
		return DEFAULT_OG_IMAGE;
	}
}
