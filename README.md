# dtgg-net

DTGG 是一个聚焦“郑州电梯广告投放咨询”的静态获客站。当前重点是电梯轿厢内部电子显示屏广告，可播放视频或展示图片。网站目标不是泛广告平台，也不是传统广告公司官网，而是帮助访客快速获取郑州电梯广告报价区间、点位资源表和投放建议，并引导添加广告顾问微信。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看页面。

## 构建

```bash
npm run build
```

项目使用 Next.js 静态导出，构建产物在 `out` 目录。

## Cloudflare Pages 部署

1. 登录 Cloudflare Dashboard。
2. 进入 `Workers & Pages`。
3. 点击 `Create application`，选择 `Pages`。
4. 连接 GitHub 仓库 `jacksong2049-prog/dtgg-net`。
5. 选择 main 分支。
6. 使用以下配置：

```text
Build command: npm run build
Output directory: out
```

7. 保存并部署。

## 推荐配置

```text
Framework preset: Next.js
Build command: npm run build
Output directory: out
Node.js version: 20
```

## 绑定 dtgg.net

1. 在 Cloudflare Pages 项目中进入 `Custom domains`。
2. 点击 `Set up a custom domain`。
3. 输入 `dtgg.net`。
4. 按 Cloudflare 提示添加或确认 DNS 记录。
5. 等待证书签发完成后访问 `https://dtgg.net`。

## 替换微信二维码

统一修改 `config/site.ts`：

```ts
consultantName: "广告顾问",
wechatQrPath: "/wechat-qr.png"
```

修改后重新构建并部署即可。

## 为什么当前不保留表单

当前项目是静态获客站，没有接入 Supabase、飞书、企业微信机器人或邮件服务。为了避免用户提交表单后后台无人接收，页面只保留微信二维码作为主转化入口。

后续如需恢复表单，可接入：

- Supabase：保存客户线索到数据库。
- 飞书机器人：表单提交后推送到群。
- 企业微信机器人：提交后推送给广告顾问。
- 邮件通知：提交后发送线索邮件。

## 后续扩展城市和业务

预留数据文件：

```text
data/cities.ts
data/services.ts
data/faqs.ts
```

可以在 `data/cities.ts` 中继续扩展：

- 郑州地铁广告
- 洛阳电梯广告
- 西安电梯广告
- 武汉电梯广告
- 成都电梯广告
- 北京电梯广告
- 上海电梯广告
- 广州电梯广告
- 深圳电梯广告

建议先跑通郑州电梯广告获客，再按城市和业务类型拆分落地页，避免一开始做成泛广告资讯站。

当前版本不会请求不存在的接口，适合直接静态部署到 Cloudflare Pages。
