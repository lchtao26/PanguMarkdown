import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pangu Markdown",
	description:
		"一个现代化的 Markdown 编辑器，专为中英文混排优化。支持实时预览、语法高亮、表格渲染和自动格式化。",
	keywords: [
		"markdown",
		"editor",
		"pangu",
		"中英文混排",
		"实时预览",
		"语法高亮",
	],
	authors: [{ name: "PanguMarkdown Team" }],
	creator: "PanguMarkdown",
	publisher: "PanguMarkdown",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://pangu-markdown.vercel.app"),
	openGraph: {
		title: "Pangu Markdown",
		description: "一个现代化的 Markdown 编辑器，专为中英文混排优化。",
		url: "https://pangu-markdown.vercel.app",
		siteName: "Pangu Markdown",
		locale: "zh_CN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pangu Markdown",
		description: "一个现代化的 Markdown 编辑器，专为中英文混排优化。",
	},
	robots: {
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-CN">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
