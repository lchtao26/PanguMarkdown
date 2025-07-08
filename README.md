# Pangu Markdown

一个支持实时预览和中英文自动格式化的 Markdown 编辑器，基于 Next.js 和 React 构建。

## 功能特性

- ✨ **实时预览**：在编辑器中输入 Markdown，右侧实时显示渲染结果
- 🔤 **Pangu 格式化**：自动在中英文之间添加空格，提升阅读体验
- 📋 **一键复制**：点击复制按钮快速复制 Markdown 源码
- 🎨 **现代化 UI**：使用 shadcn/ui 组件库构建，支持深色模式
- 📱 **响应式设计**：完美适配桌面端和移动端

## 技术栈

- **框架**：Next.js 15 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **UI 组件**：shadcn/ui
- **Markdown 渲染**：react-markdown
- **文本处理**：remark-pangu

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 使用方法

1. 在左侧的文本框中输入 Markdown 内容
2. 右侧会实时显示渲染后的效果
3. 点击预览区域右上角的"复制"按钮可以复制 Markdown 源码
4. Pangu 插件会自动在中英文之间添加适当的空格

## 示例

输入：
```markdown
# 标题title
这是一个example示例，包含中文English混排的text。
```

输出（经过 Pangu 格式化）：
```markdown
# 标题 title
这是一个 example 示例，包含中文 English 混排的 text。
```

## 项目结构

```
PanguMarkdown/
├── app/                    # Next.js App Router 页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   └── ui/               # shadcn/ui 组件
├── lib/                  # 工具函数
├── types/                # TypeScript 类型定义
└── public/               # 静态资源
```

## 发布流程

本项目使用 [release-please](https://github.com/googleapis/release-please) 进行自动化发布和更新日志生成。

### 发布流程

Release-please 通过 GitHub Actions 自动工作：

1. **自动检测变更**：基于 conventional commits 自动检测需要发布的版本类型
2. **创建 Release PR**：自动创建包含 CHANGELOG 和版本更新的 Pull Request
3. **合并发布**：合并 PR 后自动创建 GitHub Release

### 本地命令

```bash
# 创建 release PR（需要 GITHUB_TOKEN 环境变量）
pnpm release:pr

# 创建 GitHub release（需要 GITHUB_TOKEN 环境变量）
pnpm release

# 初始化 release-please（首次使用）
pnpm release:bootstrap
```

### Commit 规范

本项目遵循 [Angular Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范：

```
<类型>: <描述>

[可选的正文]

[可选的脚注]
```

支持的类型：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `build`: 构建相关
- `ci`: CI/CD 相关
- `chore`: 其他修改

## 贡献

欢迎提交 Issue 和 Pull Request！请确保：

1. 遵循项目的代码规范
2. 提交信息符合 Conventional Commits 规范
3. 在提交前运行 `pnpm lint` 检查代码质量

## 许可证

本项目采用 MIT 许可证。

## 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-pangu](https://github.com/VincentBel/remark-pangu)
- [shadcn/ui](https://ui.shadcn.com/)
