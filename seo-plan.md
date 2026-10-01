# CPM Calculator SEO 页面方案

## 核心页面

- 建议 URL：`/cpm-calculator/`
- Title：`CPM Calculator: Calculate Cost Per Thousand Impressions`
- H1：`CPM Calculator`
- Meta description：`Calculate CPM from ad spend and impressions. Use the free CPM calculator to estimate budget, impressions, and cost per thousand impressions.`

上线前需要根据目标市场实际 SERP 调整英文措辞，不要机械照搬。

## 页面结构

### 1. 首屏工具区

- 一句话说明用途
- 广告花费输入框
- 展示次数输入框
- 计算按钮
- CPM结果
- 单位和币种说明

### 2. 三种计算模式

- Calculate CPM
- Calculate Advertising Budget
- Calculate Impressions

三个模式放在同一页面，避免建立重复且薄的页面。

### 3. 公式与例子

解释：

```text
CPM = Ad Spend ÷ Impressions × 1,000
```

配合 `$500` 和 `100,000 impressions` 的示例，结果为 `$5 CPM`。

### 4. CPM 与其他广告指标

用简单表格解释 CPM、CPC、CPA、CTR 的区别，以及何时使用哪个指标。

### 5. 使用场景

- 广告投放预算
- 媒体主报价
- 广告活动复盘
- 学习数字营销

### 6. FAQ

优先覆盖：

- What is CPM?
- How do you calculate CPM?
- What is a good CPM?
- How do I calculate impressions from CPM?
- Is CPM the same as cost per impression?

FAQ内容必须直接回答问题，不为了 SEO 堆砌重复关键词。

## 内部链接

后续可以从主页面链接到：

- `/resources/cpm-vs-cpc/`
- `/resources/cpm-vs-cpa/`
- `/resources/how-to-calculate-cpm/`
- `/tools/ad-budget-calculator/`
- `/tools/impressions-calculator/`

第一阶段只需要主页面和一篇公式解释文章。确认有搜索和使用后，再扩展工具群。

## 结构化数据和技术要求

- 使用 WebApplication 或 SoftwareApplication 相关结构化数据，字段必须与页面真实功能一致
- FAQ结构化数据只标记页面上真实展示的问答
- 移动端优先，首屏计算器不被弹窗遮挡
- 计算逻辑应在浏览器端快速完成，避免用户等待服务器
- 输入框支持键盘操作，错误信息可被屏幕阅读器识别
- 不依赖图片展示公式，公式和结果使用可抓取文本
- 页面加载后立即可用，不把核心计算器延迟到广告脚本之后

## 主要 KPI

第一阶段观察：

- 主关键词排名和收录
- 自然搜索进入计算器的访问量
- 计算器开始使用率
- 计算完成率
- 复制/分享结果次数
- AI功能等待名单或邮箱提交率
- 计算器到付费/联盟点击的转化率

