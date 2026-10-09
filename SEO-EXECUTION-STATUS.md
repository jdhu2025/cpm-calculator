# CPM.calc SEO 执行状态

> 执行负责人：Codex  
> 最后更新：2026-10-09（Asia/Shanghai）  
> 状态定义：`代码完成` = 本地变更和构建通过；`已部署` = 生产地址可验证；`已获得反馈` = 已在 GSC / GA4 / 引荐来源中取得数据。

## 现在的真实状态

| 工作项 | 状态 | 已验证证据 | 下一步 / 反馈窗口 |
|---|---|---|---|
| `google-sitemap.xml` 提交 | 已部署，待反馈 | 用户已确认提交 | 每周检查 GSC Sitemap 的发现 URL、已索引 URL 和读取时间 |
| 5 个核心工具页索引 | 已请求编入索引，待反馈 | 用户截图确认 `/cpm-formula/`、`/impressions-calculator/`、`/reverse-cpm-calculator/` 均显示“已请求编入索引”；此前 2 个已索引页面也已复核 | 等待 Google 抓取和评估；不重复提交。下次检查：2026-10-16 |
| 两篇第 2 周资源页 | 已请求编入索引，待反馈 | 用户截图确认 `/resources/cpm-vs-cpc-vs-cpa/` 和 `/resources/cost-per-impression-calculator/` 均显示“已请求编入索引”；生产页面和 canonical 已先由我验证 | 等待 Google 抓取和评估；下次检查：2026-10-16，14 天查看 impressions |
| 新页 sitemap 条目 | 已部署，待反馈 | 同一提交 `235a346` 已更新两份 sitemap；生产部署已完成 | 你打开线上 `google-sitemap.xml` 确认两条 URL 后，不需重复提交 sitemap；7 天检查 sitemap 发现数 |
| 正文内链 | 已部署，待反馈 | 生产资源页已验证可见工具内链；成本页可见 CPM vs CPC vs CPA 和自身页面链接 | 14–30 天查看 GSC Links 和目标页 impressions；不因短期无数据重复改链接 |
| GA4 + 关键事件 | 未开始：需要用户输入 | 当前项目中没有 GA4/GTM ID 或现有实现 | 需要用户提供 Measurement ID（格式 `G-XXXXXXXXXX`）或说明已由 GTM 托管；部署后用 DebugView 验证 `calculator_complete` |
| 外链平台第一批 | 待开始：需要账号操作 | 尚未向第三方平台提交，避免未授权创建/提交账号 | 素材准备完成后，由用户完成登录/最终提交，或在每一次最终发布前明确授权 |
| Product Hunt 发布 | 已提交，待发布/反馈 | 用户已确认完成 Product Hunt 提交；此前已准备 thumbnail、3 张 Gallery 图片和首条 Maker 评论 | 需要确认最终 Product Hunt URL、排期日期和状态；发布日记录首小时、24 小时访问与互动 |

## 当前待办队列

1. **等待 Google 抓取** — 5 个 URL 已进入优先抓取队列，期间不要重复请求同一 URL。
2. **2026-10-16** — 你在 GSC 查看 5 个 URL 的 Indexing、Last crawl、Discovery 状态，把截图或文字发我；我更新状态并决定是否改内容。
3. **需要你提供：GA4** — 发我 Measurement ID（`G-XXXXXXXXXX`）或确认使用 GTM；我再接入事件并推送。
4. **2026-10-23** — 从 GSC 导出 Query × Page；我根据真实查询词选择下一次只改 1–3 个页面。
5. **Product Hunt 发布前** — 准备发布日回复模板和 UTM 链接；不重复提交其他目录，避免分散精力。

## 反馈记录规则

每项任务完成后追加一行，而不是只改状态：

`日期 | 页面或渠道 | 动作 | 可验证证据 | 指标结果 | 后续决定 | 下次检查`

示例：

`2026-10-16 | /cpm-formula/ | Request indexing | GSC URL Inspection 截图 | 已抓取，未收录 | 等待内容评估，不重复提交 | 2026-10-23`

## 本周的完成标准

- [x] 生产环境包含两篇资源页、sitemap 更新和正文内链。
- [x] 对 5 个部署版本 URL 完成 Request indexing；每个 URL 的状态写回本文件。
- [ ] GA4 Measurement ID 已配置，且 DebugView 能看到一次计算完成事件。
- [ ] 每项状态都有证据、下次检查日期和明确指标。

## 已完成反馈记录

`2026-10-09 | GitHub main | 推送 SEO 内容、sitemap、内链和状态表 | 远程 main = 235a346；生产两篇资源页可打开；成本页 canonical 正确 | 已部署，尚无 GSC/GA4 数据 | 请求索引并等待抓取 | 2026-10-16`

`2026-10-09 | Google Search Console | 对 5 个 URL 请求编入索引 | 用户提供 5 张截图，5 个 URL 均显示“已请求编入索引” | 已进入优先抓取队列，尚未证明已收录 | 等待抓取，不重复提交 | 2026-10-16`

`2026-10-09 | Product Hunt | 用户确认已提交产品发布 | 待补充提交成功页/产品 URL | 已提交，尚未发布或取得流量数据 | 核对排期和最终页面后等待发布日 | 发布日`
