# CPM.calc 英语市场 SEO 执行计划

> 目标市场：美国优先，英语国家（UK、CA、AU）作为次级市场
>
> 网站：<https://www.cpm-calculator.xyz/>
>
> 版本日期：2026-10-09

这不是“发一批目录链接就结束”的方案，而是一套一个月冲刺：先解决测量和索引，再增加可排名页面和真实引荐，最后按 Search Console 数据迭代。一个月结束后，只保留已经带来展示、使用或真实引荐的动作。

## 0. 当前基线与一个月目标

### 已确认的基线

- Search Console 截图：近 3 个月 6 次展示、0 点击、平均排名 28。
- 当前可抓取核心 URL：主页、`/cpm-formula/`、`/ad-budget-calculator/`、`/impressions-calculator/`、`/reverse-cpm-calculator/`。
- 主页已经有唯一 H1、英文 title/description、canonical、robots、WebApplication JSON-LD、FAQ 可见内容和工具之间的链接。
- 站点地图和 robots.txt 已存在；需要在 GSC 中确认实际提交、抓取和索引状态。
- 当前代码中没有看到 GA4/GTM/Clarity 等行为分析接入；在开始外链前必须补上，否则无法判断哪些渠道带来有效使用。

### 目标（目标是过程和信号，不是排名保证）

| 时间 | 可验收目标 |
|---|---|
| 第 1 周 | 5 个现有 URL 均完成 URL Inspection；GA4/事件追踪可看到 `calculator_complete`；建立查询词、外链和发布追踪表 |
| 第 2 周 | 发布 2 个高质量英文资源页；补齐现有工具页的正文内链；新 URL 已请求索引 |
| 第 3 周 | 至少 5 个高相关平台完成提交；至少 1 个公开产品页或引荐来源可验证 |
| 第 4 周 | 发布 2 个资源页或重点页升级；完成一轮 GSC/GA4 复盘，确定下个月只继续有效渠道 |

如果第 4 周仍为 0 展示，先暂停扩写，排查索引、canonical、robots、域名重定向和服务器可访问性。

## 1. 关键词和页面地图

先做能满足搜索意图的页面，不把“一个关键词重复写成多篇文章”。关键词量和难度只能作为优先级参考，发布前必须用美国 Google 无痕搜索人工检查前 10 名的页面类型。

| 优先级 | 页面 | 主关键词 | 搜索意图 | 验收标准 |
|---|---|---|---|---|
| P0 | `/` | `cpm calculator` | 立即计算 | 工具在首屏；公式、例子、反向计算、FAQ；可在移动端完成计算 |
| P0 | `/cpm-formula/` | `cpm formula`, `calculate the cpm` | 理解公式 | 展示公式、单位、3 步案例、常见错误，并链接回计算器 |
| P0 | `/ad-budget-calculator/` | `advertising budget calculator` | 反推预算 | 输入 target impressions + CPM；注明仅估算媒体成本 |
| P0 | `/impressions-calculator/` | `impressions calculator` | 预算反推展示量 | 解释 impressions 与 reach/frequency 的区别 |
| P0 | `/reverse-cpm-calculator/` | `reverse cpm calculator` | 反推可接受 CPM | 给出 CPM ceiling 和预算缓冲说明 |
| P1 | `/resources/cpm-vs-cpc-vs-cpa/` | `cpm vs cpc vs cpa` | 指标选择 | 对比表、何时使用、示例；链接 3 个工具 |
| P1 | `/resources/cost-per-impression-calculator/` | `cost per impression calculator` | 长尾计算 | 与 CPM 的关系；避免与主页重复，提供独立例子 |
| P1 | `/resources/how-to-lower-cpm/` | `how to lower cpm` | 优化投放 | 受众、版位、素材、频次、竞价的可测试清单 |
| P1 | `/resources/average-cpm-by-platform/` | `average cpm by platform` | 比较渠道 | 只使用注明日期和来源的数据；不承诺固定价格 |
| P2 | `/resources/cpm-by-country/` | `average cpm US`、`UK CPM` | 地区研究 | 只有在有可靠数据和更新责任时才发布 |
| P2 | `/resources/media-buying-glossary/` | 广告术语长尾 | 教育和内链 | 汇总 CPM/CPC/CPA/CTR/reach/frequency |

### 每页统一写作模板（发布前逐项打勾）

- [ ] Title 50–60 个英文字符，关键词靠前且不与其他页重复
- [ ] Meta description 140–160 个字符，说明工具结果和下一步
- [ ] 一个 H1；首段直接回答搜索意图
- [ ] 工具页首屏可用；文章页首屏给 Quick answer/公式
- [ ] 至少一个真实数值例子和“估算不等于平台报价”说明
- [ ] 至少 3 个上下文内链：上游公式页、同类工具、下一步操作
- [ ] 作者/审核者、首次发布和最后更新日期；数据文章附来源链接
- [ ] WebApplication 或 Article/BreadcrumbList JSON-LD 与页面真实内容一致
- [ ] 移动端检查 LCP、布局跳动、键盘可用性和表单错误提示

## 2. 一个月执行路线

### 第 1 周：测量和索引地基（必须先做）

1. 在 GA4 建立 property，配置 `page_view`、`calculator_start`、`calculator_complete`、`copy_result`、`ai_plan_start`、`outbound_click`。至少把完成计算作为关键事件。
2. 在 GSC 验证 property 的 `www` HTTPS 版本；检查 5 个 URL 的 URL Inspection：索引状态、Google 选择的 canonical、最后抓取时间、移动可用性。
3. 提交 `https://www.cpm-calculator.xyz/google-sitemap.xml` 一次；保留 robots.txt 中的 sitemap 指令。记录提交截图和状态。
4. 确认 `http`、非 `www`、带/不带尾斜杠是否统一 301 到 canonical；若不统一，修复后再请求索引。
5. 建立 3 张表：`Keyword Tracker`、`Backlink Tracker`、`Content Calendar`。模板见本文末尾。

**本周反馈：**GSC 记录 indexed/not indexed 数量；GA4 实时报告完成一次计算；PageSpeed 移动端记录 LCP/INP/CLS 基线。

### 第 2 周：修正现有 5 页并发布第一批内容

1. 完成 5 个现有 URL 的 title、description、H1、canonical、OG、内链和 FAQ 检查。
2. 首页正文增加可抓取的 CPM/CPC/CPA 对比表和“由 CPM 反推预算/展示量”的文字步骤；不要只让 JS 计算器承担解释。
3. 发布 `/resources/cpm-vs-cpc-vs-cpa/` 和 `/resources/cost-per-impression-calculator/`。
4. 每篇内容发布后：在 GSC 请求索引，提交 URL 到内部链接检查，记录发布时间和目标词。

**本周反馈：**新页面是否进入“已编入索引”；GSC Performance 中是否出现 impressions；GA4 是否有自然访问和工具完成事件。

### 第 3 周：第一轮真实引荐

1. 准备 Product Hunt 发布包：英文 tagline、100 词简介、300 词简介、Logo、3–5 张截图、演示视频、创始人简介。
2. 提交第一批相关平台：Product Hunt、Indie Hackers 产品页、SaaSHub、Launching Next、BetaPage。每个平台只提交一次，不复制完全相同的描述。
3. 对每次提交在追踪表记录日期、审核状态、公开页 URL 和带来的 referral session；不购买加急审核。

**本周反馈：**每周记录收录链接、nofollow/dofollow、referral session、注册/互动、是否带来新查询词；只有“有收录或有真实访问”的平台才进入下一轮。

### 第 4 周：扩展内容并完成第一次复盘

1. 发布 `/resources/how-to-lower-cpm/` 和 `/resources/average-cpm-by-platform/`；后者必须写清数据来源、国家和日期。
2. 每周二查看 GSC Queries/Pages：把展示多、CTR 低的页面只改一次 title/description；把排名 8–20 的页面补充案例、内链和明确答案。
3. 检查第 3 周的目录审核状态；有公开页的，确认描述、官网链接和页面可访问性。
4. 做一次 30 天复盘：保留有收录、引荐、展示或计算完成的渠道；停止无相关性、无页面或无反馈的目录。下月再考虑定向 outreach 和有条件目录。

**本周反馈：**记录索引页数、非品牌展示、自然点击、referral session、计算完成率；每次修改记录日期，避免无法判断因果。

## 3. 外链平台执行清单（按 CPM.calc 适配度筛选）

外链的目标是发现、品牌信号和引荐流量；目录链接不等于排名保证。所有平台先检查是否允许工具类产品、是否有真实页面、是否要求付费，再决定提交。

### A 组：现在可做（第 3–4 周）

| 平台 | 适合原因 | 提交内容 | 成功标准 |
|---|---|---|---|
| Product Hunt | 产品发布和品牌发现 | 产品页、截图、Maker、首发帖 | 页面公开且有真实访问 |
| Indie Hackers | 独立产品和创业者受众 | 产品页 + 构建过程帖 | 产品页收录/社区访问 |
| SaaSHub | 软件和替代品目录 | 分类、功能、官网、截图 | 产品页公开且链接可访问 |
| Launching Next | Startup discovery | 100 词简介、Logo、官网 | 收录页和 referral |
| BetaPage | 新产品目录 | Beta 状态、功能、截图 | 收录页和 referral |
| Hacker News | 仅限有真实技术/产品故事 | `Show HN` + 可公开讨论的构建过程 | 真实讨论或访问；不把它当目录链接 |

### B 组：有条件再做（本月不作为主任务）

| 平台 | 前置条件 | 不满足时的动作 |
|---|---|---|
| AlternativeTo | 能明确说明替代的产品和差异 | 先补比较页和真实功能说明 |
| Crunchbase | 公司/创始人/网站信息真实可核验 | 不编造融资、团队或公司数据 |
| G2 | 有真实用户和可验证产品体验 | 先收集自愿、真实、无激励评价 |
| Capterra | 产品资料完整且适合其软件分类 | 不为一个低频免费工具购买加急 |
| SourceForge | 只有开源项目才提交 | 非开源不提交 |

### C 组：暂不批量提交

清单中的 AI 导航站（There's An AI For That、Future Tools、Toolify 等）与 CPM Calculator 的定位不匹配。除非产品新增真实 AI 功能、页面能证明该功能且平台允许提交，否则不要为了“数量”注册。faizer、Product Radar 等低确定性目录先观察，只有确认收录页和真实流量后才投入时间。

## 4. 外链提交 SOP（每个平台 15–30 分钟）

1. 检查平台是否真实、是否能公开访问产品页、是否有清晰编辑/删除政策。
2. 使用域名邮箱和密码管理器；每个平台保存账号、提交日期和审核邮件。
3. 根据平台受众改写简介，不复制同一段 300 词文本；锚文本以品牌名或自然 URL 为主。
4. 只填写真实资料，不虚构融资、客户、评分、AI 能力或团队规模。
5. 提交后 7 天检查审核状态，14 天仍无结果才发一次礼貌跟进。
6. 收录后打开公开页面，确认官网链接、品牌名、描述和是否出现 `nofollow`，再记录 referral 参数/来源。
7. 30 天无收录、无流量、无品牌价值的平台标记为 `Stop`，不重复提交。

## 5. 可复制的周反馈仪表板

每周固定在周一记录上一周（周一至周日），不要每天凭感觉改策略。

| 指标 | 来源 | 记录方式 | 触发动作 |
|---|---|---|---|
| Impressions / Clicks / CTR / Avg position | GSC | 国家=United States；品牌词与非品牌词分开 | impressions 增长但 CTR 低：改 title/description |
| Query / Page | GSC | 导出 CSV，保留 clicks、impressions、position | position 8–20：补内容和内链 |
| Indexed pages | GSC Pages + sitemap | 记录已编入索引/未编入索引原因 | 4 周仍未收录：检查 canonical/robots/质量 |
| Organic users | GA4 | `session source/medium = google / organic` | 有访问无完成：优化首屏和表单 |
| Calculator completion rate | GA4 | `calculator_complete / calculator_start` | <40%：减少输入摩擦，检查移动端 |
| Referral sessions | GA4 | 按平台来源过滤 | 有引荐无使用：改平台文案或停止 |
| Referring pages | GSC Links | 每月导出一次 | 只关注相关、可访问、带品牌的页面 |
| CWV | PageSpeed/Search Console | 移动端每月一次 | LCP >2.5s、INP >200ms、CLS >0.1 时修复 |

### 每周决策规则

- **有展示、无点击：**只修改一次 title/description，等待至少 14 天再判断。
- **有点击、无计算完成：**检查搜索意图是否与页面首屏一致，优化工具加载和输入错误提示。
- **排名 8–20：**优先补独特内容、案例、内链和可引用数据，不先写更多新页面。
- **排名 50 以后且 8 周无展示：**检查意图匹配；不相关就合并或停止扩写。
- **外链收录但无引荐：**保留品牌价值，停止继续批量提交同类目录。

## 6. 英文素材包（用于目录和 outreach）

**Tagline（≤60 characters）**

`Free CPM calculator for ad cost, reach, and budget planning`

**Short description**

`CPM.calc is a free advertising calculator that turns ad spend and impressions into cost per thousand impressions. Calculate CPM, work backwards from a target budget or reach goal, compare planning scenarios, and understand the trade-offs between CPM, CPC, CPA, reach, and frequency. No account is required for the basic calculator.`

**目录标签**

`Advertising`, `Marketing Analytics`, `Media Planning`

**自然介绍句**

`I built CPM.calc to make campaign math easier to check before and after a media buy. It shows the formula, a worked example, and reverse calculations for budget and impressions without presenting estimates as guaranteed platform prices.`

## 7. 你现在就按这个顺序做

1. 今天：在 GSC 完成 5 个 URL Inspection，提交 sitemap，确认 canonical/重定向。
2. 明天：接入 GA4 事件，完成一次从打开计算器到 `calculator_complete` 的测试。
3. 第 2 周：发布两个 P1 资源页，补首页对比表和正文内链。
4. 第 3 周：准备并提交 Product Hunt、Indie Hackers、SaaSHub、Launching Next、BetaPage。
5. 第 4 周：发布后两个资源页，复盘所有数据，制定下月只保留有效渠道的计划。
6. 每周一：填写反馈仪表板，只根据规则做 1–3 个改动。

## 8. 直接照做的 20 个工作日清单

### 第 1 周

- [ ] Day 1：GSC 检查首页和 4 个工具页，记录 Indexing、Canonical、Last crawl。
- [ ] Day 2：提交 `google-sitemap.xml`；检查 http/non-www/尾斜杠是否统一。
- [ ] Day 3：接入 GA4；创建 `calculator_start`、`calculator_complete`、`copy_result` 事件。
- [ ] Day 4：在移动端完成一次计算，确认事件、按钮、输入错误和页面速度。
- [ ] Day 5：建立 Keyword Tracker、Content Calendar、Backlink Tracker；保存第一份基线数据。

### 第 2 周

- [ ] Day 6：优化首页可抓取正文，加入 CPM/CPC/CPA 对比和预算/展示量反推说明。
- [ ] Day 7：发布 `cpm-vs-cpc-vs-cpa`，加入 3 个工具内链和一个计算例子。
- [ ] Day 8：发布 `cost-per-impression-calculator`，说明 impressions、CPM 和估算限制。
- [ ] Day 9：对 2 个新页面和修改后的首页请求索引。
- [ ] Day 10：检查 GA4 是否记录自然访问和 `calculator_complete`；修复发现的问题。

### 第 3 周

- [ ] Day 11：准备英文 Logo、截图、tagline、100 词/300 词简介和演示链接。
- [ ] Day 12：提交 Product Hunt；保存提交时间和公开 URL。
- [ ] Day 13：提交 Indie Hackers 和 SaaSHub；按平台受众改写简介。
- [ ] Day 14：提交 Launching Next 和 BetaPage；不购买加急审核。
- [ ] Day 15：检查已提交页面是否公开；在 GA4 中记录 referral source。

### 第 4 周

- [ ] Day 16：发布 `how-to-lower-cpm`，内容以可测试的投放动作和指标为主。
- [ ] Day 17：发布 `average-cpm-by-platform`，标注国家、日期、样本和来源；没有可靠数据就改为方法指南。
- [ ] Day 18：导出 GSC 查询和页面数据；标记展示最多、排名 8–20、CTR 最低的页面。
- [ ] Day 19：只做 1–3 个改动：改一个 CTR 低页面的 title/description，给一个排名 8–20 页面补案例和内链。
- [ ] Day 20：完成月度复盘：索引页数、非品牌展示/点击、关键词 Top 30、referral sessions、calculator completions、已收录外链；决定下月保留和停止的动作。

## 附：外链追踪表字段

建议复制到 Google Sheets，状态只使用 `待准备 / 已提交 / 审核中 / 已收录 / 被拒 / Stop`。

`Platform | Type | URL | Audience fit | Account email | Submitted date | Status | Listing URL | Link rel | Referral sessions | Calculator completions | Next follow-up | Notes`
