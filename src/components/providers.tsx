"use client";

import React from "react";

import { ProgressProvider } from "@bprogress/next/app";
import { GoogleAnalytics } from "@next/third-parties/google";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ProgressProvider
				color="#D40C1A"
				height="3px"
				memo
				options={{ showSpinner: false }}
				shallowRouting
			>
				{children}
			</ProgressProvider>
			<GoogleAnalytics gaId="G-N3D28GZSBM" />
		</>
	);
};

export default Providers;
