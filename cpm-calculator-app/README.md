# CPM.calc MVP

Next.js App Router MVP，按照上级目录的 `SPEC.md` 实现：

- CPM / Budget / Impressions 三种计算模式；
- 免费 AI Campaign Planner，支持读取计算器结果或独立创建预算计划；
- 单平台或多平台选择；
- 省钱、覆盖、效果、性价比、测试优先等分析目标；
- 保守、基准、积极三种情景；
- 省钱 / 效果 / 性价比三条方案路径；
- 平台适配矩阵和投放时间测试建议；
- 可打印投放报告下载（当前为 `.html`，作为浏览器端降级实现）；
- 响应式布局和基础可访问性支持。

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

然后打开 `http://localhost:3000/`。

## AI 配置

复制配置模板：

```bash
cp .env.example .env.local
```

然后填写：

```env
AI_API_URL=
AI_API_KEY=
AI_MODEL=
```

`AI_API_URL` 应填写 OpenAI-compatible Chat Completions 完整地址。未配置时，`/api/analyze-budget` 自动返回明确标注的本地估算结果。

## 部署到 Vercel

1. 将 `cpm-calculator-app` 作为项目根目录导入 Vercel；
2. Vercel 会自动识别 Next.js；
3. 在 Vercel Project Settings → Environment Variables 中添加 `.env.example` 里的变量；
4. Build Command 使用默认的 `next build`；
5. 部署后访问 `/`，API 地址自动使用同域的 `/api/analyze-budget`。

不要把 `.env.local` 或真实的 `AI_API_KEY` 提交到 Git；只提交 `.env.example`。
