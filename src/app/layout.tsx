import "../styles/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MenuBar } from "@/components";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MAGIC CUISINE",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<MenuBar />
				{children}
			</body>
		</html>
	);
}
