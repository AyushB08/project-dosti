import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Project Dosti",
	description: "Project Dosti Description",
	icons: {
		icon: "/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={redHat.className}>
				
				{children}
				
			</body>
		</html>
	);
}
