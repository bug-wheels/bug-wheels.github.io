---
home: true
heroImage: /logo_small.jpeg
heroText: Bug Wheels
tagline: 一个专门写 Bug 的轮子组织
actions:
  - text: 快速上手 link: /guide/getting-started type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
features:
- title: 浅尝辄止
  details: 所有的轮子都有可能半途而废。
- title: 技术驱动
  details: 只享受写代码带来的体验，不保证技术落地性，同时不追求技术的稳定性和落地可行性。
- title: 高风险
  details: 每一个轮子都可能有很多未知的 Bug，团队不负责修复 Bug。
footer: Apache Licensed | Copyright © 2021-present
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
