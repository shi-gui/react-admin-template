## react-admin-template 项目简介

## 技术体系

- 核心：TypeScript(5x) + React18(18x) + ReactRouter(6x) + Mobx(6x)
- UI：Ant Design(5x)
- CSS：tailwind(3x)
- HTTP 请求：Axios
- 依赖管理：pnpm
- 构建系统：Vite(4x)

### 目录规划

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
  |- layout // 布局组件
  |- plugins // 第三方插件
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

### 项目规范

- 代码规范：eslint + pritter
- 提交规范：githooks（husky）
- api 接口约定（按照 views 页面分组进行接口抽离）
- git 分支策略

### 项目实现的功能概览

- 主题切换
- 国际化

### 功能及 UI 参考

- https://github.com/yezihaohao/react-admin/tree/master
- https://github.com/NLRX-WJC/react-antd-admin-template

### 性能优化
