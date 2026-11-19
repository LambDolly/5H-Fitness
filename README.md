# 5H Fitness

A front-end website prototype for a fitness studio ("5H Fitness Club").
It covers the full member journey: discovering the studio, recording
workouts, tracking progress and reading training guides.

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `index.html` | Studio intro, specialties, membership program, course booking |
| Training | `training.html` | Workout / training records |
| Data Tracking | `progress.html` | Progress and body-data tracking |
| Knowledge | `knowledge.html` | Fitness knowledge base (e.g. a correct squat pose guide) |
| Profile | `profile.html` | Member personal center |

## Features

- Five linked pages with a shared navigation bar
- Interactive training records and profile, driven by `training.js`
  and `profile.js`
- Per-page stylesheets, so each section can be restyled on its own
- Gym photography shot for this project (see `image/`)

## Tech

Plain HTML, CSS and JavaScript — static site, no backend and no build
step. Data shown is front-end demo data.

## Run it

Open `index.html` in a browser, or serve the folder with any static
server, e.g.:

    npx serve .

---

## 中文介绍

一家健身工作室（5H Fitness Club）网站的前端原型，覆盖会员的完整
使用路径：了解工作室、记录训练、追踪进度、阅读健身知识。

### 页面

| 页面 | 文件 | 内容 |
| --- | --- | --- |
| 首页 | `index.html` | 工作室介绍、特色、会员计划、课程预约 |
| 训练记录 | `training.html` | 训练记录 |
| 数据追踪 | `progress.html` | 进度与身体数据追踪 |
| 健身知识 | `knowledge.html` | 健身知识库（如正确深蹲姿势指南） |
| 个人中心 | `profile.html` | 会员个人中心 |

### 功能特点

- 五个页面互相连通，共用同一导航栏
- 训练记录与个人中心带交互，由 `training.js` 和 `profile.js` 驱动
- 每个页面有独立的样式表，可单独调整风格
- 仓库里的健身房照片是为这个项目实拍的（见 `image/`）

### 技术

原生 HTML、CSS、JavaScript，纯静态站点，无后端、无构建步骤；
页面里的数据为前端演示数据。

### 运行

用浏览器打开 `index.html`，或用任意静态服务器托管本文件夹，例如：

    npx serve .
