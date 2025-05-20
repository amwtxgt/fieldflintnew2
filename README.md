# Vuetify（默认）

这是 Vuetify 的官方脚手架工具，旨在帮助您在构建新的 Vuetify 应用程序时有一个良好的开端。它设置了一个基础模板，包含所有必要的配置和标准目录结构，使您能够轻松开始开发，而无需从头开始设置项目。

## ❗ 重要链接

- 📄 [文档](https://vuetifyjs.com/)
- 🚨 [问题](https://issues.vuetifyjs.com/)
- 🏬 [商店](https://store.vuetifyjs.com/)
- 🎮 [游乐场](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💿 安装

使用您喜欢的包管理器设置您的项目。使用相应的命令安装依赖项：

| 包管理器                                                | 命令        |
|-------------------------------------------------------|-------------|
| [yarn](https://yarnpkg.com/getting-started)           | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm install`  |
| [pnpm](https://pnpm.io/installation)                  | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                | `bun install`  |

完成安装后，您的环境就准备好进行 Vuetify 开发了。

## ✨ 功能

- 🖼️ **优化的前端堆栈**：利用最新的 Vue 3 和 Vuetify 3，提供现代、响应式的 UI 开发体验。[Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **状态管理**：集成 [Pinia](https://pinia.vuejs.org/)，为 Vue 提供直观且模块化的状态管理解决方案。
- 🚦 **路由和布局**：使用 Vue Router 进行 SPA 导航，并使用 vite-plugin-vue-layouts-next 组织 Vue 文件布局。[Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts-next](https://github.com/loicduong/vite-plugin-vue-layouts-next)
- 💻 **增强的开发体验**：受益于 TypeScript 的静态类型检查和 Vue 的 ESLint 插件套件，确保代码质量和一致性。[TypeScript](https://www.typescriptlang.org/) | [ESLint 插件 Vue](https://eslint.vuejs.org/)
- ⚡ **下一代工具**：由 Vite 提供支持，体验快速冷启动和即时 HMR（热模块替换）。[Vite](https://vitejs.dev/)
- 🧩 **自动组件导入**：通过 unplugin-vue-components 流程化工作流程，在使用组件时自动导入它们。[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- 🛠️ **强类型 Vue**：使用 vue-tsc 进行 Vue 组件的类型检查，并享受强大的开发体验。[vue-tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc)

这些功能经过精心挑选，以提供从设置到部署的无缝开发体验，确保您的 Vuetify 应用程序既强大又易于维护。

## 💡 使用方法

本节介绍如何启动开发服务器以及为生产环境构建项目。

### 启动开发服务器

要启动带有热重载的开发服务器，请运行以下命令。服务器将在 [http://localhost:3000](http://localhost:3000) 上可用：

```bash
yarn dev
```

（对于 npm、pnpm 和 bun，请重复使用相应的命令。）

> 添加 NODE_OPTIONS='--no-warnings' 以抑制由于 Vuetify 导入映射引起的 JSON 导入警告。如果您使用的是 Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) 或更高版本，可以将此参数更改为 NODE_OPTIONS='--disable-warning=5401'。如果您不介意这些警告，可以从 package.json 的 dev 脚本中删除此参数。

### 为生产环境构建

要为生产环境构建项目，请使用：

```bash
yarn build
```

（对于 npm、pnpm 和 bun，请重复使用相应的命令。）

一旦构建过程完成，您的应用程序就可以在生产环境中部署了。

## 💪 支持 Vuetify 开发

这个项目是基于 [Vuetify](https://vuetifyjs.com/en/) 构建的，这是一个具有全面 Vue 组件集合的 UI 库。Vuetify 是一个 MIT 许可的开源项目，由于我们 [赞助者和支持者](https://vuetifyjs.com/introduction/sponsors-and-backers/) 的慷慨贡献才得以实现。如果您有兴趣支持这个项目，请考虑：

- [请求企业支持](https://support.vuetifyjs.com/)
- [在 Github 上赞助 John](https://github.com/users/johnleider/sponsorship)
- [在 Github 上赞助 Kael](https://github.com/users/kaelwd/sponsorship)
- [在 Open Collective 上支持团队](https://opencollective.com/vuetify)
- [在 Patreon 上成为赞助者](https://www.patreon.com/vuetify)
- [在 Tidelift 上成为订阅者](https://tidelift.com/subscription/npm/vuetify)
- [通过 Paypal 进行一次性捐赠](https://paypal.me/vuetify)

## 📑 许可证
[MIT](http://opensource.org/licenses/MIT)

版权所有 (c) 2016-present Vuetify, LLC