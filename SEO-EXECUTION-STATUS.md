# CPM.calc SEO 执行状态

> 执行负责人：Codex  
> 最后更新：2026-10-09（Asia/Shanghai）  
> 状态定义：`代码完成` = 本地变更和构建通过；`已部署` = 生产地址可验证；`已获得反馈` = 已在 GSC / GA4 / 引荐来源中取得数据。

## 现在的真实状态

| 工作项 | 状态 | 已验证证据 | 下一步 / 反馈窗口 |
|---|---|---|---|
| `google-sitemap.xml` 提交 | 已部署，待反馈 | 用户已确认提交 | 每周检查 GSC Sitemap 的发现 URL、已索引 URL 和读取时间 |
| 5 个核心工具页索引 | 部分已获得反馈 | 用户截图：2 页已索引；`/cpm-formula/`、`/impressions-calculator/`、`/reverse-cpm-calculator/` 为“已发现，尚未编入索引”，且尚无抓取日期 | 生产部署后，对 3 个未索引页做 URL Inspection；只在页面可访问后请求索引一次。下次检查：部署后 7 天 |
| 两篇第 2 周资源页 | 代码完成，待部署 | 已新增 `/resources/cpm-vs-cpc-vs-cpa/`、`/resources/cost-per-impression-calculator/`；`npm run build` 通过，静态路由已生成；英文文案已改为更具体的媒体计划判断和核对步骤 | 部署后确认 HTTP 200、canonical、sitemap；在 GSC 请求索引，7 天检查是否被发现 |
| 新页 sitemap 条目 | 代码完成，待部署 | 两份 sitemap 已加入两条新 URL | 部署后直接打开 `google-sitemap.xml` 并确认 URL 存在；无需再次创建 sitemap |
| 正文内链 | 代码完成，待部署 | 首页和 4 个工具页已增加到两个新资源页的上下文链接 | 部署后爬取检查链接为 200；30 天查看 GSC Links 与目标页 impressions |
| GA4 + 关键事件 | 未开始：需要用户输入 | 当前项目中没有 GA4/GTM ID 或现有实现 | 需要用户提供 Measurement ID（格式 `G-XXXXXXXXXX`）或说明已由 GTM 托管；部署后用 DebugView 验证 `calculator_complete` |
| 外链平台第一批 | 待开始：需要账号操作 | 尚未向第三方平台提交，避免未授权创建/提交账号 | 素材准备完成后，由用户完成登录/最终提交，或在每一次最终发布前明确授权 |

## 当前待办队列

1. **阻塞：部署** — 将已完成代码发布到生产环境。
2. **部署后当天** — 验证新旧 URL、sitemap、canonical；对三个未收录工具页和两篇新页分别执行一次 URL Inspection / Request indexing。
3. **部署后 7 天** — 记录五个页面的 Indexing 状态、last crawl、impressions；不因没有即时变化重复请求。
4. **部署后 14 天** — 从 GSC 导出 Query × Page，挑选实际获得展示的页面进行下一次优化。

## 反馈记录规则

每项任务完成后追加一行，而不是只改状态：

`日期 | 页面或渠道 | 动作 | 可验证证据 | 指标结果 | 后续决定 | 下次检查`

示例：

`2026-10-16 | /cpm-formula/ | Request indexing | GSC URL Inspection 截图 | 已抓取，未收录 | 等待内容评估，不重复提交 | 2026-10-23`

## 本周的完成标准

- [ ] 生产环境包含两篇资源页、sitemap 更新和正文内链。
- [ ] 对部署版本完成 URL Inspection；每个 URL 的状态写回本文件。
- [ ] GA4 Measurement ID 已配置，且 DebugView 能看到一次计算完成事件。
- [ ] 每项状态都有证据、下次检查日期和明确指标。
