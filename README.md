# airdb.io — AirDB 产品官网

AirDB 数据平台的海外官网(Astro 静态站点,英文,面向全球开发者与企业用户):
云数据库工具、行业数据 API 与农业数据 SaaS 的产品介绍、定价与文档入口。

## 开发

```bash
pnpm install
pnpm dev      # 或 make run
pnpm build    # 构建产物输出到 dist/
```

## 目录结构

- `src/pages/index.astro` — 产品首页(平台能力 / Data API / 定价)
- `src/pages/docs/` — 开发者文档入口页
- `src/pages/get-access/` — API 访问申请表单与致谢页
- `src/layouts/ProductLayout.astro` — 站点外壳(导航 / 页脚 / SEO 元信息)
- `src/styles/product.css` — 设计体系
- `static/` — 静态资源(`publicDir`)

## 归档

原公益组织站点(Hugo 迁移内容、`content/` Markdown、BaseLayout 渲染链路、
中文菜单与路由映射)已整体移入 `archive/legacy-nonprofit/`,不参与构建。
如需恢复参考,直接从该目录取。
