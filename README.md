## react-admin-template 项目简介

## 技术体系

- 核心：TypeScript(5x) + React18(18x) + ReactRouter(6x) + Mobx(6x)
- UI：Ant Design(5x)
- CSS：Tailwind(3x)
- HTTP 请求：Axios
- 依赖管理：Pnpm
- 国际化：i18next、react-i18next
- 构建系统：Vite(4x)

## 三方插件

- Cookie：[js-cookie](https://github.com/js-cookie/js-cookie)
- 背景动画：[particles-bg](https://github.com/lindelof/particles-bg)
- 滚动条：[react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)
- 工具函数:[loadsh](https://www.lodashjs.com/)

## 目录规划

```js
|- dist // 构建成果
|- public
|- src
  |- api // api接口管理
  |- assets  // 静态资源
  |- components // 全局组件
  |- config // 全局配置
  |- enums // 枚举值
  |- hooks // 全局hooks，用于抽离公用逻辑
  |- lang // 国际化资源
  |- layout // 布局组件
  |- libs // 第三方插件
  |- request // axios封装
  |- router  // 路由
  |- store   // 状态
  |- utils   // 工具函数
  |- views   // 页面
  |- App.tsx  // 根组件
  |- main.tsx
|-type // ts类型
```

## 使用说明

```bash
# 安装依赖
pnpm install

# 开发环境启动
pnpm run serve
# 或
pnpm run dev

# 生产环境打包
pnpm run build

```

## 项目规范

- 代码规范：eslint + pritter
- 提交规范：githooks（husky）
  - ✨feat：内容新增
  - 🐛fix：bug修复
  - 📝docs：文档变更
  - 💄style：格式，空格, 分号等格式修复
  - ♻️refacto：代码重构
  - ⚡️perf：性能相关
  - ✅test：测试相关代码
  - 🔧chore：工具，开发工具变动
  - ⏪revert：代码回退
- api 接口约定（按照 views 页面分组进行接口抽离）
- git 分支策略

## 菜单及功能概览

- 首页
- 权限页面
- 嵌套路由
- 表格
- 大屏
- 流程图
- 文件预览

## 功能及 UI 参考

- https://github.com/NLRX-WJC/react-antd-admin-template
- https://github.com/ant-design/ant-design-pro

## 性能优化
