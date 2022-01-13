# Quick Start React Project

快速开始一个 React 项目

### 依赖

> [React](https://reactjs.org/) + [TS](https://www.typescriptlang.org/) + [Emotion](https://emotion.sh/)

### 开始

```bash
$ git clone git@github.com:MagnumGoYB/quick-start-react-project.git
$ npm install && npm start
```

### 代码规范

**提交代码时将使用 [husky](https://typicode.github.io/husky/) 工具进行 eslint + prettier 格式化**

- React Components (自定义组件) - 首字母大写+驼峰
- Custom Hooks (自定义 Hook) - 遵循 React 官方规范
- 变量、常量使用首字母小写+驼峰

### 提交代码

项目中依赖 [Commitlint](https://commitlint.js.org/) + [Gitmoji](https://gitmoji.dev/) 进行 Commit Messages 检查

- [Gitmoji Commit Message 规范](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/commitlint-config)
- [规范引导](https://www.yuque.com/arvinxx-fe/workflow/gcm-v2)

#### 格式

```markdown
:gitmoji: type: message
```

##### type

- feat: 新功能
- fix: 修复问题
- docs: 修改文档
- ci: 修复 CI 构建问题
- style: 修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- perf: 提升性能
- revert: 恢复代码
- test: 增加修改测试用例
- chore: 修改工具相关（包括但不限于文档、代码生成等）
- wip: 工作进行中

##### gitmoji

- [Gitmoji 参考手册](https://gitmoji.dev/)

### 示例

```bash
$ git add .
$ git commit -m ":bug: fix: 修复一个 BUG"
```

```bash
$ git add .
$ git commit -m ":sparkles: feat: 增加一个新功能"
```
