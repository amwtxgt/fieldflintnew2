import vuetifyConfig from 'eslint-config-vuetify/index.ts.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
export default [
  ...vuetifyConfig, // 展开从 'eslint-config-vuetify' 导入的配置

  // 3. 集成 Prettier
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      ...prettierConfig.rules, // 关闭冲突规则
      'prettier/prettier': 'error' // 启用 Prettier 规则校验
      // 其他 ESLint 规则...
    }
  }
]
