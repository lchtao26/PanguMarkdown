"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkPangu from "remark-pangu";
import remarkSmartypants from "remark-smartypants";

export default function Home() {
	const [markdown, setMarkdown] = useState(`# 欢迎使用 Pangu Markdown

一个专为中英文混排设计的优雅 Markdown 编辑器。

## 特色功能

### 🌟 智能排版
自动在中英文之间添加合适的空格，让你的文档更加美观易读。

### ✨ 优雅符号
"智能引号"和'单引号'会自动转换为正确的样式。
连字符--变成en dash，三连字符---变成em dash。
省略号...会变得更加优雅。

### 📝 实时预览
在编辑的同时，即时查看渲染效果。

## 使用示例

### 代码展示

\`\`\`javascript
// 中英文混排示例
const message = "Hello世界！";
console.log(message);
\`\`\`

### 列表格式

1. 第一个重要事项 Important Item
2. 第二个关键要点 Key Point
3. 第三个核心概念 Core Concept

### 文本样式

这里有**粗体文字 Bold Text**和*斜体文字 Italic Text*的混合使用。

你还可以添加[链接 Link](https://example.com)来引用外部资源。

> 这是一个引用块 Quote Block，用来突出重要信息。

---

开始在左侧编辑区域输入你的 Markdown 内容，右侧会实时显示渲染结果！`);

	const [copied, setCopied] = useState(false);
	const [showInputPanel, setShowInputPanel] = useState(true);

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
					className={`grid gap-6 h-[calc(100vh-200px)] ${showInputPanel ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
				>
					{/* Markdown Input */}
					{showInputPanel && (
						<Card className="flex flex-col">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
								<CardTitle className="text-lg">Markdown</CardTitle>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setShowInputPanel(!showInputPanel)}
									aria-label="隐藏输入面板"
									className="h-8 px-3"
								>
									<EyeOff className="h-4 w-4 mr-2" />
									隐藏
								</Button>
							</CardHeader>
							<CardContent className="flex-1 p-4">
								<Textarea
									value={markdown}
									onChange={(e) => setMarkdown(e.target.value)}
									placeholder="在这里输入你的 Markdown 内容..."
									className="w-full h-full resize-none font-mono text-sm"
								/>
							</CardContent>
						</Card>
					)}

					{/* Markdown Preview */}
					<Card className="flex flex-col">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
							<CardTitle className="text-lg">预览</CardTitle>
							<div className="flex items-center gap-2">
								{!showInputPanel && (
									<Button
										variant="outline"
										size="sm"
										onClick={() => setShowInputPanel(!showInputPanel)}
										aria-label="显示输入面板"
										className="h-8 px-3"
									>
										<Eye className="h-4 w-4 mr-2" />
										显示编辑
									</Button>
								)}
								<Button
									variant="outline"
									size="sm"
									onClick={handleCopy}
									className="h-8 px-3"
								>
									{copied ? (
										<>
											<Check className="h-4 w-4 mr-2" />
											已复制
										</>
									) : (
										<>
											<Copy className="h-4 w-4 mr-2" />
											复制
										</>
									)}
								</Button>
							</div>
						</CardHeader>
						<CardContent className="flex-1 p-4 overflow-auto">
							<div className="prose prose-sm max-w-none dark:prose-invert">
								<ReactMarkdown
									remarkPlugins={[remarkPangu, remarkSmartypants]}
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
