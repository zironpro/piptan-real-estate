import React from "react";
import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PaymentNoticePopup } from "@/components/payment-notice-popup";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Cta />
			<Footer />
			<PaymentNoticePopup />
		</>
	);
}
