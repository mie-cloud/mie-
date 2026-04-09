## 1. Architecture Design
纯静态网站架构，使用 React + Vite 构建，部署到 Cloudflare Pages。

```mermaid
graph LR
  A[前端 React 应用] --> B[Vite 构建]
  B --> C[Cloudflare Pages 部署]
```

## 2. Technology Description
- Frontend: React@18 + TypeScript + tailwindcss@3 + vite
- Initialization Tool: vite-init
- Backend: None（纯静态网站）
- Database: None
- 部署: Cloudflare Pages

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页 - 个人介绍和课程列表 |
| /course/:id | 课程详情页 |

## 4. API Definitions
本项目为纯静态网站，无需后端 API

## 5. Server Architecture Diagram
不适用（纯静态网站）

## 6. Data Model
不适用（纯静态网站，数据硬编码）
