# 更新日志

本项目的所有重要更改都将记录在此文件中。

此项目遵循 [语义化版本控制](https://semver.org/lang/zh-CN/)。


## [0.2.0](https://github.com/lchtao26/PanguMarkdown/compare/pangumarkdown-v0.1.3...pangumarkdown-v0.2.0) (2025-07-08)


### ✨ 新功能

* 优化 UI 界面，添加 localStorage 存储和全屏预览功能 ([d64ed19](https://github.com/lchtao26/PanguMarkdown/commit/d64ed194b8c6b8c28990a178d0b095b61d8ebc0a))
* 优化全屏切换按钮图标和添加 Tailwind Typography ([4318768](https://github.com/lchtao26/PanguMarkdown/commit/4318768f46d4f071c46559bb0ae2bce7e056e885))
* 更新 layout metadata 和 HTML lang 属性 ([649846b](https://github.com/lchtao26/PanguMarkdown/commit/649846b3c7e44207b57662e5c01326ec63372441))
* 添加智能排版功能并优化内容展示 ([8733e80](https://github.com/lchtao26/PanguMarkdown/commit/8733e808cdd40aa5c22919c225b97375efca5968))
* 添加输入面板切换功能 ([e62a0b6](https://github.com/lchtao26/PanguMarkdown/commit/e62a0b6ff4fdf2af214819c8f5718325d277aaf1))
* 清空默认 markdown 内容，提供空白编辑器 ([14c0a14](https://github.com/lchtao26/PanguMarkdown/commit/14c0a140c56b7b863a6d826a45c12ed5ee68fe22))


### 📚 文档

* 更新 README ([8716aa5](https://github.com/lchtao26/PanguMarkdown/commit/8716aa5b99c560360a3eefc91300b6017d714cf6))


### 🔨 构建

* 在发布和推送前添加 typecheck 和 lint 检查 ([7ce6ed4](https://github.com/lchtao26/PanguMarkdown/commit/7ce6ed44a0ef671b4a331266bf6cbe34fb99d656))
* 替换 release-please 为 standard-version ([29a13cc](https://github.com/lchtao26/PanguMarkdown/commit/29a13cc4d6c9c57d832d9039615c332a1accb349))
* 移除 pre-push hook，仅在 prerelease 时运行检查 ([cf2ccdc](https://github.com/lchtao26/PanguMarkdown/commit/cf2ccdcfa036427fd8d4bd625ead00447766be80))


### 🔧 其他

* init ([16a6ea3](https://github.com/lchtao26/PanguMarkdown/commit/16a6ea3cc18b2f1b8cdb342b6bd34d0938bac6de))
* **release:** 0.1.1 ([25ef3bb](https://github.com/lchtao26/PanguMarkdown/commit/25ef3bb1aa440c0ea7de5ff697233ee5b9c1fa44))
* **release:** 0.1.2 ([3488454](https://github.com/lchtao26/PanguMarkdown/commit/34884546fbe8dc4ff343dfe51da3914e9078a6af))
* **release:** 0.1.3 ([c84b3b4](https://github.com/lchtao26/PanguMarkdown/commit/c84b3b4c90e139d15c27debd6d0bbe6765424289))
* 切换到 release-please 进行发布管理 ([0c343c4](https://github.com/lchtao26/PanguMarkdown/commit/0c343c42d236e56261b2fbddb8d4e9d3274d5e97))
* 切换到 standard-version 进行发布管理 ([6b6a958](https://github.com/lchtao26/PanguMarkdown/commit/6b6a9583eb13f6ef2a21a9d1a81f4263d102e707))
* 移除 chart 组件和 recharts 依赖 ([1f4a73a](https://github.com/lchtao26/PanguMarkdown/commit/1f4a73afa02ce2f4db7541d31a43b238a75053f0))
* 移除 conventional-changelog 配置 ([5e2d833](https://github.com/lchtao26/PanguMarkdown/commit/5e2d833fe24f7f7bf7dc9c046d6528ff82daf2ed))

### [0.1.3](https://github.com/lchtao26/PanguMarkdown/compare/v0.1.2...v0.1.3) (2025-07-08)

### [0.1.2](https://github.com/lchtao26/PanguMarkdown/compare/v0.1.1...v0.1.2) (2025-07-08)


### 🔧 其他

* 切换到 standard-version 进行发布管理 ([6b6a958](https://github.com/lchtao26/PanguMarkdown/commit/6b6a9583eb13f6ef2a21a9d1a81f4263d102e707))

### 0.1.1 (2025-07-08)


### 🔧 其他

* init ([16a6ea3](https://github.com/lchtao26/PanguMarkdown/commit/16a6ea3cc18b2f1b8cdb342b6bd34d0938bac6de))

## 0.1.1 (2025-07-08)

## [Unreleased]

### ✨ 新功能
- 初始化 Pangu Markdown 编辑器项目
- 实现实时 Markdown 预览功能
- 集成 remark-pangu 插件，自动格式化中英文混排
- 添加一键复制 Markdown 源码功能
- 使用 shadcn/ui 构建现代化界面
- 支持响应式设计，适配桌面端和移动端

### 📚 文档
- 添加中文 README 文档
- 配置 release-it 自动生成更新日志
