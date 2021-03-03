# prettier

[prettier官方配置](https://prettier.io/docs/en/options.html)

```js
// 插件所有可配置项
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

# prettier安装

```
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

# eslint配置

```js
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 2020,
	},
	globals: {
		localStorage: true,
		window: true,
		document: true,
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "es5",
				bracketSpacing: true,
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prefer-rest-params": "off",
		"no-prototype-builtins": "off",
		"no-empty": "off",
		// quotes: ['error', 'single'],
	},
};

```

## 编辑器配置vscode

```js
{
  "editor.tabSize": 2,
  "editor.rulers": [
    80
  ],
  "editor.formatOnSave": true, // 在保存时自动格式化
  "editor.formatOnType": false, // 在键入一行后是否自动化格式
  "editor.formatOnPaste": true, // 在粘贴时自动格式化
  // 保存时按照哪个规则进行格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "addMissingImports": true
  },
  "eslint.validate": [],
  "vetur.format.enable": false
}
```

# rules

> 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：

+ [ ] [no-extra-parens](https://eslint.bootcss.com/docs/rules/no-extra-parens) 禁止不必要的括号

+ [ ] [no-extra-semi](https://eslint.bootcss.com/docs/rules/no-extra-semi) 禁止不必要的分号

+ [x] [no-unexpected-multiline](https://eslint.bootcss.com/docs/rules/no-unexpected-multiline) 禁止出现令人困惑的多行表达式

> 这些规则是关于最佳实践的，帮助你避免一些问题

+ [x] [curly](https://eslint.bootcss.com/docs/rules/curly) 强制所有控制语句使用一致的括号风格

+ [ ] [dot-location](https://eslint.bootcss.com/docs/rules/dot-location) 强制在点号之前和之后一致的换行

+ [ ] [no-floating-decimal](https://eslint.bootcss.com/docs/rules/no-floating-decimal) 禁止数字字面量中使用前导和末尾小数点

+ [ ] [no-multi-spaces](https://eslint.bootcss.com/docs/rules/no-multi-spaces) 禁止使用多个空格

+ [ ] [wrap-iife](https://eslint.bootcss.com/docs/rules/wrap-iife) 要求 IIFE 使用括号括起来

> 该规则与使用严格模式和严格模式指令有关：

> 这些规则与变量声明有关：

> 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：

> 这些规则是关于风格指南的，而且是非常主观的：

+ [ ] [array-bracket-newline](https://eslint.bootcss.com/docs/rules/array-bracket-newline) 在数组开括号后和闭括号前强制换行

+ [ ] [array-bracket-spacing](https://eslint.bootcss.com/docs/rules/array-bracket-spacing) 强制数组方括号中使用一致的空格

+ [ ] [array-element-newline](https://eslint.bootcss.com/docs/rules/array-element-newline) 强制数组元素间出现换行

+ [ ] [block-spacing](https://eslint.bootcss.com/docs/rules/block-spacing) 禁止或强制在代码块中开括号前和闭括号后有空格

+ [ ] [brace-style](https://eslint.bootcss.com/docs/rules/brace-style) 强制在代码块中使用一致的大括号风格

+ [ ] [comma-dangle](https://eslint.bootcss.com/docs/rules/comma-dangle) 要求或禁止末尾逗号

+ [ ] [comma-spacing](https://eslint.bootcss.com/docs/rules/comma-spacing) 强制在逗号前后使用一致的空格

+ [ ] [comma-style](https://eslint.bootcss.com/docs/rules/comma-style) 强制使用一致的逗号风格

+ [ ] [computed-property-spacing](https://eslint.bootcss.com/docs/rules/computed-property-spacing) 强制在计算的属性的方括号中使用一致的空格

+ [ ] [eol-last](https://eslint.bootcss.com/docs/rules/eol-last) 要求或禁止文件末尾存在空行

+ [ ] [func-call-spacing](https://eslint.bootcss.com/docs/rules/func-call-spacing) 要求或禁止在函数标识符和其调用之间有空格

+ [ ] [function-paren-newline](https://eslint.bootcss.com/docs/rules/function-paren-newline) 强制在函数括号内使用一致的换行

+ [ ] [implicit-arrow-linebreak](https://eslint.bootcss.com/docs/rules/implicit-arrow-linebreak) 强制隐式返回的箭头函数体的位置

+ [ ] [indent](https://eslint.bootcss.com/docs/rules/indent) 强制使用一致的缩进

+ [ ] [jsx-quotes](https://eslint.bootcss.com/docs/rules/jsx-quotes) 强制在 JSX 属性中一致地使用双引号或单引号

+ [ ] [key-spacing](https://eslint.bootcss.com/docs/rules/key-spacing) 强制在对象字面量的属性中键和值之间使用一致的间距

+ [ ] [keyword-spacing](https://eslint.bootcss.com/docs/rules/keyword-spacing) 强制在关键字前后使用一致的空格

+ [ ] [linebreak-style](https://eslint.bootcss.com/docs/rules/linebreak-style) 强制使用一致的换行风格

+ [x] [lines-around-comment](https://eslint.bootcss.com/docs/rules/lines-around-comment) 要求在注释周围有空行

+ [x] [max-len](https://eslint.bootcss.com/docs/rules/max-len) 强制一行的最大长度

+ [ ] [multiline-ternary](https://eslint.bootcss.com/docs/rules/multiline-ternary) 要求或禁止在三元操作数中间换行

+ [ ] [new-parens](https://eslint.bootcss.com/docs/rules/new-parens) 强制或禁止调用无参构造函数时有圆括号

+ [ ] [newline-per-chained-call](https://eslint.bootcss.com/docs/rules/newline-per-chained-call) 要求方法链中每个调用都有一个换行符

+ [x] [no-mixed-operators](https://eslint.bootcss.com/docs/rules/no-mixed-operators) 禁止混合使用不同的操作符

+ [ ] [no-mixed-spaces-and-tabs](https://eslint.bootcss.com/docs/rules/no-mixed-spaces-and-tabs) 禁止空格和 tab 的混合缩进

+ [ ] [no-multiple-empty-lines](https://eslint.bootcss.com/docs/rules/no-multiple-empty-lines) 禁止出现多行空行

+ [x] [no-tabs](https://eslint.bootcss.com/docs/rules/no-tabs) 禁用 tab

+ [ ] [no-trailing-spaces](https://eslint.bootcss.com/docs/rules/no-trailing-spaces) 禁用行尾空格

+ [ ] [no-whitespace-before-property](https://eslint.bootcss.com/docs/rules/no-whitespace-before-property) 禁止属性前有空白

+ [ ] [nonblock-statement-body-position](https://eslint.bootcss.com/docs/rules/nonblock-statement-body-position) 强制单个语句的位置

+ [ ] [object-curly-newline](https://eslint.bootcss.com/docs/rules/object-curly-newline) 强制大括号内换行符的一致性

+ [ ] [object-curly-spacing](https://eslint.bootcss.com/docs/rules/object-curly-spacing) 强制在大括号中使用一致的空格

+ [ ] [object-property-newline](https://eslint.bootcss.com/docs/rules/object-property-newline) 强制将对象的属性放在不同的行上

+ [ ] [one-var-declaration-per-line](https://eslint.bootcss.com/docs/rules/one-var-declaration-per-line) 要求或禁止在变量声明周围换行

+ [ ] [operator-linebreak](https://eslint.bootcss.com/docs/rules/operator-linebreak) 强制操作符使用一致的换行符

+ [ ] [padded-blocks](https://eslint.bootcss.com/docs/rules/padded-blocks) 要求或禁止块内填充

+ [ ] [quote-props](https://eslint.bootcss.com/docs/rules/quote-props) 要求对象字面量属性名称用引号括起来

+ [x] [quotes](https://eslint.bootcss.com/docs/rules/quotes) 强制使用一致的反勾号、双引号或单引号

+ [ ] [semi](https://eslint.bootcss.com/docs/rules/semi) 要求或禁止使用分号代替 ASI

+ [ ] [semi-spacing](https://eslint.bootcss.com/docs/rules/semi-spacing) 强制分号之前和之后使用一致的空格

+ [ ] [semi-style](https://eslint.bootcss.com/docs/rules/semi-style) 强制分号的位置

+ [ ] [space-before-blocks](https://eslint.bootcss.com/docs/rules/space-before-blocks) 强制在块之前使用一致的空格

+ [ ] [space-before-function-paren](https://eslint.bootcss.com/docs/rules/space-before-function-paren) 强制在 function的左括号之前使用一致的空格

+ [ ] [space-in-parens](https://eslint.bootcss.com/docs/rules/space-in-parens) 强制在圆括号内使用一致的空格

+ [ ] [space-infix-ops](https://eslint.bootcss.com/docs/rules/space-infix-ops) 要求操作符周围有空格

+ [ ] [space-unary-ops](https://eslint.bootcss.com/docs/rules/space-unary-ops) 强制在一元操作符前后使用一致的空格

+ [ ] [switch-colon-spacing](https://eslint.bootcss.com/docs/rules/switch-colon-spacing) 强制在 switch 的冒号左右有空格

+ [ ] [template-tag-spacing](https://eslint.bootcss.com/docs/rules/template-tag-spacing) 要求或禁止在模板标记和它们的字面量之间有空格

+ [ ] [unicode-bom](https://eslint.bootcss.com/docs/rules/unicode-bom) 要求或禁止 Unicode 字节顺序标记 (BOM)

+ [ ] [wrap-regex](https://eslint.bootcss.com/docs/rules/wrap-regex) 要求正则表达式被括号括起来

> 这些规则只与 ES6 有关, 即通常所说的 ES2015：

+ [x] [arrow-body-style](https://eslint.bootcss.com/docs/rules/arrow-body-style) 要求箭头函数体使用大括号

+ [ ] [arrow-parens](https://eslint.bootcss.com/docs/rules/arrow-parens) 要求箭头函数的参数使用圆括号

+ [ ] [arrow-spacing](https://eslint.bootcss.com/docs/rules/arrow-spacing) 强制箭头函数的箭头前后使用一致的空格

+ [ ] [generator-star-spacing](https://eslint.bootcss.com/docs/rules/generator-star-spacing) 强制 generator 函数中 * 号周围使用一致的空格

+ [x] [no-confusing-arrow](https://eslint.bootcss.com/docs/rules/no-confusing-arrow) 禁止在可能与比较操作符相混淆的地方使用箭头函数

+ [x] [prefer-arrow-callback](https://eslint.bootcss.com/docs/rules/prefer-arrow-callback) 要求回调函数使用箭头函数

+ [ ] [rest-spread-spacing](https://eslint.bootcss.com/docs/rules/rest-spread-spacing) 强制剩余和扩展运算符及其表达式之间有空格

+ [ ] [template-curly-spacing](https://eslint.bootcss.com/docs/rules/template-curly-spacing) 要求或禁止模板字符串中的嵌入表达式周围空格的使用

+ [ ] [yield-star-spacing](https://eslint.bootcss.com/docs/rules/yield-star-spacing) 强制在 yield* 表达式中 * 周围使用空格

# prettier + typescript

```js
{
    "@typescript-eslint/quotes": 0,

    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
  }
```

> typescriptWithPrettier

+ [ ] [@typescript-eslint/member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-delimiter-style.md) Require a specific member delimiter style for interfaces and type literals

+ [ ] [@typescript-eslint/type-annotation-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/type-annotation-spacing.md) Require consistent spacing around type annotations

+ [ ] [@typescript-eslint/brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/brace-style.md) Enforce consistent brace style for blocks

+ [ ] [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-dangle.md) Require or disallow trailing comma

+ [ ] [@typescript-eslint/comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-spacing.md) Enforces consistent spacing before and after commas

+ [ ] [@typescript-eslint/func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/func-call-spacing.md) Require or disallow spacing between function identifiers and their invocations

+ [ ] [@typescript-eslint/indent](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/indent.md) Enforce consistent indentation

+ [ ] [@typescript-eslint/keyword-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/keyword-spacing.md) Enforce consistent spacing before and after keywords

+ [ ] [@typescript-eslint/no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-parens.md) Disallow unnecessary parentheses

+ [ ] [@typescript-eslint/no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-semi.md) Disallow unnecessary semicolons

+ [x] [@typescript-eslint/quotes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/quotes.md) Enforce the consistent use of either backticks, double, or single quotes

+ [ ] [@typescript-eslint/semi](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/semi.md) Require or disallow semicolons instead of ASI

+ [ ] [@typescript-eslint/space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-before-function-paren.md) Enforces consistent spacing before function parenthesis

+ [ ] [@typescript-eslint/space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-infix-ops.md) This rule is aimed at ensuring there are spaces around infix operators.

