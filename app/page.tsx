"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Edit, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkPangu from "remark-pangu";
import remarkSmartypants from "remark-smartypants";

const STORAGE_KEY = "pangu-markdown-content";

export default function Home() {
	const [markdown, setMarkdown] = useState("");
	const [copied, setCopied] = useState(false);
	const [showInputPanel, setShowInputPanel] = useState(true);

	// Load markdown content from localStorage on component mount
	useEffect(() => {
		const savedContent = localStorage.getItem(STORAGE_KEY);
		if (savedContent) {
			setMarkdown(savedContent);
		}
	}, []);

	// Save markdown content to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, markdown);
	}, [markdown]);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(markdown);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<div className="min-h-screen p-4 md:p-8 bg-background">
			<div className="max-w-7xl mx-auto">
				<div
					className={`grid gap-6 h-[calc(100vh-70px)] ${showInputPanel ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
				>
					{/* Markdown Input */}
					{showInputPanel && (
						<Card className="flex flex-col p-0 relative">
							<CardContent className="flex-1 p-6">
								<Textarea
									value={markdown}
									onChange={(e) => setMarkdown(e.target.value)}
									placeholder="在这里输入你的 Markdown 内容..."
									className="w-full h-full resize-none font-mono text-sm border-none shadow-none focus:ring-0 focus-visible:ring-0"
								/>
							</CardContent>
						</Card>
					)}

					{/* Markdown Preview */}
					<Card className="flex flex-col p-0 relative">
						{markdown.trim() && (
							<div className="absolute right-4 top-4 z-10 flex items-center gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => setShowInputPanel(!showInputPanel)}
									aria-label={showInputPanel ? "全屏预览" : "显示编辑"}
									className="h-8 w-8 p-0"
								>
									{showInputPanel ? (
										<Maximize2 className="h-4 w-4" />
									) : (
										<Edit className="h-4 w-4" />
									)}
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={handleCopy}
									className="h-8 w-8 p-0"
									aria-label={copied ? "已复制" : "复制"}
								>
									{copied ? (
										<Check className="h-4 w-4" />
									) : (
										<Copy className="h-4 w-4" />
									)}
								</Button>
							</div>
						)}
						<CardContent className="flex-1 py-14 px-10 overflow-auto">
							<div className="prose prose-sm max-w-none dark:prose-invert">
								<ReactMarkdown
									remarkPlugins={[
										remarkPangu,
										remarkSmartypants,
										remarkGfm,
										remarkEmoji,
										remarkBreaks,
									]}
									rehypePlugins={[rehypeHighlight]}
									components={{
										// Custom styling for better appearance
										h1: ({ children }) => (
											<h1 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">
												{children}
											</h1>
										),
										h2: ({ children }) => (
											<h2 className="text-xl font-semibold mb-3 text-foreground">
												{children}
											</h2>
										),
										h3: ({ children }) => (
											<h3 className="text-lg font-medium mb-2 text-foreground">
												{children}
											</h3>
										),
										p: ({ children }) => (
											<p className="mb-4 text-foreground leading-relaxed">
												{children}
											</p>
										),
										code: ({ children, className }) => {
											const isInline = !className;
											return isInline ? (
												<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
													{children}
												</code>
											) : (
												<code className={className}>{children}</code>
											);
										},
										pre: ({ children }) => (
											<pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
												{children}
											</pre>
										),
										ul: ({ children }) => (
											<ul className="list-disc list-inside mb-4 space-y-1">
												{children}
											</ul>
										),
										ol: ({ children }) => (
											<ol className="list-decimal list-inside mb-4 space-y-1">
												{children}
											</ol>
										),
										li: ({ children }) => (
											<li className="text-foreground">{children}</li>
										),
										blockquote: ({ children }) => (
											<blockquote className="border-l-4 border-border pl-4 italic mb-4 text-muted-foreground">
												{children}
											</blockquote>
										),
										a: ({ href, children }) => (
											<a
												href={href}
												className="text-primary hover:underline"
												target="_blank"
												rel="noopener noreferrer"
											>
												{children}
											</a>
										),
										strong: ({ children }) => (
											<strong className="font-semibold text-foreground">
												{children}
											</strong>
										),
										em: ({ children }) => (
											<em className="italic text-foreground">{children}</em>
										),
										hr: () => <hr className="border-border my-6" />,
										table: ({ children }) => (
											<div className="overflow-x-auto my-4">
												<table className="min-w-full border-collapse border border-border">
													{children}
												</table>
											</div>
										),
										thead: ({ children }) => (
											<thead className="bg-muted">{children}</thead>
										),
										tbody: ({ children }) => <tbody>{children}</tbody>,
										tr: ({ children }) => (
											<tr className="border-b border-border">{children}</tr>
										),
										th: ({ children }) => (
											<th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
												{children}
											</th>
										),
										td: ({ children }) => (
											<td className="border border-border px-4 py-2 text-foreground">
												{children}
											</td>
										),
									}}
								>
									{markdown}
								</ReactMarkdown>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
