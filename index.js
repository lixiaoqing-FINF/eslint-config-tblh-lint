module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
 // 不允许重写module这个全局变量
  globals: {
    module: 'readonly',
  },
  rules: {
    // 强制使用骆驼拼写法命名约定
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    // 允许逻辑短路，三元逻辑等使用不报错，项目中经常出现
    'no-unused-expressions': 'off',
    // 最大400行 提示
    'max-lines': ['error', 400],
    // 禁止出现空函数
    'no-empty-function': [2, { allow: [] }],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': [1, 'as-needed'],
    // 缩进 两个空格缩进 SwitchCase一个缩进空格
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 行的最大长度
    'max-len': ['error',{
      // 强制行的最大长度
      code: 120,
      // 指定 tab 字符的宽度
      tabWidth: 2,
      // 忽略含有链接的行
      ignoreUrls: true,
      // 忽略所有拖尾注释和行内注释
      // 注释的长度限制一下
      ignoreComments: false,
      // 忽略包含正则表达式的行
      ignoreRegExpLiterals: true,
      // 忽略含有双引号或单引号字符串的行
      ignoreStrings: true,
      // 忽略包含模板字面量的行
      ignoreTemplateLiterals: true,
    }],
    'newline-per-chained-call': 2,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数 var x = a => 1 ? 2 : 3; 会报错 。这样不会报错（用个括号把表达式包起来）： var x = a => (1 ? 2 : 3);
    'no-confusing-arrow': 2,
    'no-console': 1,
    // 禁止未使用过的变量 已定义 未使用
    'no-unused-vars': [2, {
      vars: 'all', varsIgnorePattern: 'React', args: 'after-used', ignoreRestSiblings: true,
    }],
    '@typescript-eslint/no-unused-vars': [2, {
      vars: 'all', varsIgnorePattern: 'React', args: 'after-used', ignoreRestSiblings: true,
    }],
    // 禁止在变量定义之前使用它们

    // 考虑到columns中render中的函数定义可能在columns之后,关闭variables校验,但是variables: false关闭了，会存在使用未定义的变量！！！！
    'no-use-before-define': [1, { functions: true, classes: true, variables: true }],
    'object-curly-newline': ['error', {

      // ObjectPattern解构赋值模式、ImportDeclaration（antd 组件）、ExportDeclaration就不起新的一行了

      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },

      // ObjectPattern: { minProperties: 4, multiline: true, consistent: true },

      // ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },

      // ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // react
    // 属性不能用扩展运算符形式传递
    'react/jsx-props-no-spreading': 'off',
    // state定义放入构造函数 也可以不放进去呀！！！ 不放
    'react/state-in-constructor': 'off',
    // 既可以解构props  eg: const {title}  = props;  也可以用{props.title}, 所以关了
    'react/destructuring-assignment': 'off',
    // 感觉业务不用在意关闭标签的位置吧 关了
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // 一条JSX语句独占一行，关闭 其实可以不用关闭的
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',

    // import
    'import/no-unresolved': 0,
    'import/extensions': 0,

    // 非import导入语句后不能是导入语句了 ，得开着
    // 'import/imports-first': 0,
    // import语句后空一行
    // 'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': 'off',

    // jsx
    // 对 div 等元素绑定 click事件时需要增加role 属性，增加了之后又需要增加焦点处理 so关闭了
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    // typescript
    // ts定义 interface时 必须以I开头 type 以T开头
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
