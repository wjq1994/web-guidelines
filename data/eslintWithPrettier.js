const eslintWithPrettier = [
	{
		desc: "这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：",
		rules: {
			"no-extra-parens": {
				value: "禁止不必要的括号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-extra-parens",
				isConfig: false,
			},
			"no-extra-semi": {
				value: "禁止不必要的分号",
				recommended: "recommended",
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-extra-semi",
				isConfig: false,
			},
			"no-unexpected-multiline": {
				value: "禁止出现令人困惑的多行表达式",
				recommended: "recommended",
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/no-unexpected-multiline",
				isConfig: true,
			},
		},
	},
	{
		desc: "这些规则是关于最佳实践的，帮助你避免一些问题",
		rules: {
			curly: {
				value: "强制所有控制语句使用一致的括号风格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/curly",
				isConfig: true,
			},
			"dot-location": {
				value: "强制在点号之前和之后一致的换行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/dot-location",
				isConfig: false,
			},
			"no-floating-decimal": {
				value: "禁止数字字面量中使用前导和末尾小数点",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-floating-decimal",
				isConfig: false,
			},
			"no-multi-spaces": {
				value: "禁止使用多个空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-multi-spaces",
				isConfig: false,
			},
			"wrap-iife": {
				value: "要求 IIFE 使用括号括起来",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/wrap-iife",
				isConfig: false,
			},
		},
	},
	{
		desc: "该规则与使用严格模式和严格模式指令有关：",
		rules: {},
	},
	{
		desc: "这些规则与变量声明有关：",
		rules: {},
	},
	{
		desc: "这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：",
		rules: {},
	},
	{
		desc: "这些规则是关于风格指南的，而且是非常主观的：",
		rules: {
			"array-bracket-newline": {
				value: "在数组开括号后和闭括号前强制换行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/array-bracket-newline",
				isConfig: false,
			},
			"array-bracket-spacing": {
				value: "强制数组方括号中使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/array-bracket-spacing",
				isConfig: false,
			},
			"array-element-newline": {
				value: "强制数组元素间出现换行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/array-element-newline",
				isConfig: false,
			},
			"block-spacing": {
				value: "禁止或强制在代码块中开括号前和闭括号后有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/block-spacing",
				isConfig: false,
			},
			"brace-style": {
				value: "强制在代码块中使用一致的大括号风格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/brace-style",
				isConfig: false,
			},
			"comma-dangle": {
				value: "要求或禁止末尾逗号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/comma-dangle",
				isConfig: false,
			},
			"comma-spacing": {
				value: "强制在逗号前后使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/comma-spacing",
				isConfig: false,
			},
			"comma-style": {
				value: "强制使用一致的逗号风格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/comma-style",
				isConfig: false,
			},
			"computed-property-spacing": {
				value: "强制在计算的属性的方括号中使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/computed-property-spacing",
				isConfig: false,
			},
			"eol-last": {
				value: "要求或禁止文件末尾存在空行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/eol-last",
				isConfig: false,
			},
			"func-call-spacing": {
				value: "要求或禁止在函数标识符和其调用之间有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/func-call-spacing",
				isConfig: false,
			},
			"function-paren-newline": {
				value: "强制在函数括号内使用一致的换行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/function-paren-newline",
				isConfig: false,
			},
			"implicit-arrow-linebreak": {
				value: "强制隐式返回的箭头函数体的位置",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/implicit-arrow-linebreak",
				isConfig: false,
			},
			indent: {
				value: "强制使用一致的缩进",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/indent",
				isConfig: false,
			},
			"jsx-quotes": {
				value: "强制在 JSX 属性中一致地使用双引号或单引号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/jsx-quotes",
				isConfig: false,
			},
			"key-spacing": {
				value: "强制在对象字面量的属性中键和值之间使用一致的间距",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/key-spacing",
				isConfig: false,
			},
			"keyword-spacing": {
				value: "强制在关键字前后使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/keyword-spacing",
				isConfig: false,
			},
			"linebreak-style": {
				value: "强制使用一致的换行风格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/linebreak-style",
				isConfig: false,
			},
			"lines-around-comment": {
				value: "要求在注释周围有空行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/lines-around-comment",
				isConfig: true,
			},
			"max-len": {
				value: "强制一行的最大长度",
				recommended: null,
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/max-len",
				isConfig: true,
			},
			"multiline-ternary": {
				value: "要求或禁止在三元操作数中间换行",
				recommended: null,
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/multiline-ternary",
				isConfig: false,
			},
			"new-parens": {
				value: "强制或禁止调用无参构造函数时有圆括号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/new-parens",
				isConfig: false,
			},
			"newline-per-chained-call": {
				value: "要求方法链中每个调用都有一个换行符",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/newline-per-chained-call",
				isConfig: false,
			},
			"no-mixed-operators": {
				value: "禁止混合使用不同的操作符",
				recommended: null,
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/no-mixed-operators",
				isConfig: true,
			},
			"no-mixed-spaces-and-tabs": {
				value: "禁止空格和 tab 的混合缩进",
				recommended: "recommended",
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/no-mixed-spaces-and-tabs",
				isConfig: false,
			},
			"no-multiple-empty-lines": {
				value: "禁止出现多行空行",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-multiple-empty-lines",
				isConfig: false,
			},
			"no-tabs": {
				value: "禁用 tab",
				recommended: null,
				fixable: null,
				href: "https://eslint.bootcss.com/docs/rules/no-tabs",
				isConfig: true,
			},
			"no-trailing-spaces": {
				value: "禁用行尾空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-trailing-spaces",
				isConfig: false,
			},
			"no-whitespace-before-property": {
				value: "禁止属性前有空白",
				recommended: null,
				fixable: "fixable",
				href:
					"https://eslint.bootcss.com/docs/rules/no-whitespace-before-property",
				isConfig: false,
			},
			"nonblock-statement-body-position": {
				value: "强制单个语句的位置",
				recommended: null,
				fixable: "fixable",
				href:
					"https://eslint.bootcss.com/docs/rules/nonblock-statement-body-position",
				isConfig: false,
			},
			"object-curly-newline": {
				value: "强制大括号内换行符的一致性",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/object-curly-newline",
				isConfig: false,
			},
			"object-curly-spacing": {
				value: "强制在大括号中使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/object-curly-spacing",
				isConfig: false,
			},
			"object-property-newline": {
				value: "强制将对象的属性放在不同的行上",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/object-property-newline",
				isConfig: false,
			},
			"one-var-declaration-per-line": {
				value: "要求或禁止在变量声明周围换行",
				recommended: null,
				fixable: "fixable",
				href:
					"https://eslint.bootcss.com/docs/rules/one-var-declaration-per-line",
				isConfig: false,
			},
			"operator-linebreak": {
				value: "强制操作符使用一致的换行符",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/operator-linebreak",
				isConfig: false,
			},
			"padded-blocks": {
				value: "要求或禁止块内填充",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/padded-blocks",
				isConfig: false,
			},
			"quote-props": {
				value: "要求对象字面量属性名称用引号括起来",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/quote-props",
				isConfig: false,
			},
			quotes: {
				value: "强制使用一致的反勾号、双引号或单引号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/quotes",
				isConfig: true,
			},
			semi: {
				value: "要求或禁止使用分号代替 ASI",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/semi",
				isConfig: false,
			},
			"semi-spacing": {
				value: "强制分号之前和之后使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/semi-spacing",
				isConfig: false,
			},
			"semi-style": {
				value: "强制分号的位置",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/semi-style",
				isConfig: false,
			},
			"space-before-blocks": {
				value: "强制在块之前使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/space-before-blocks",
				isConfig: false,
			},
			"space-before-function-paren": {
				value: "强制在 function的左括号之前使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href:
					"https://eslint.bootcss.com/docs/rules/space-before-function-paren",
				isConfig: false,
			},
			"space-in-parens": {
				value: "强制在圆括号内使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/space-in-parens",
				isConfig: false,
			},
			"space-infix-ops": {
				value: "要求操作符周围有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/space-infix-ops",
				isConfig: false,
			},
			"space-unary-ops": {
				value: "强制在一元操作符前后使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/space-unary-ops",
				isConfig: false,
			},
			"switch-colon-spacing": {
				value: "强制在 switch 的冒号左右有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/switch-colon-spacing",
				isConfig: false,
			},
			"template-tag-spacing": {
				value: "要求或禁止在模板标记和它们的字面量之间有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/template-tag-spacing",
				isConfig: false,
			},
			"unicode-bom": {
				value: "要求或禁止 Unicode 字节顺序标记 (BOM)",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/unicode-bom",
				isConfig: false,
			},
			"wrap-regex": {
				value: "要求正则表达式被括号括起来",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/wrap-regex",
				isConfig: false,
			},
		},
	},
	{
		desc: "这些规则只与 ES6 有关, 即通常所说的 ES2015：",
		rules: {
			"arrow-body-style": {
				value: "要求箭头函数体使用大括号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/arrow-body-style",
				isConfig: true,
			},
			"arrow-parens": {
				value: "要求箭头函数的参数使用圆括号",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/arrow-parens",
				isConfig: false,
			},
			"arrow-spacing": {
				value: "强制箭头函数的箭头前后使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/arrow-spacing",
				isConfig: false,
			},
			"generator-star-spacing": {
				value: "强制 generator 函数中 * 号周围使用一致的空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/generator-star-spacing",
				isConfig: false,
			},
			"no-confusing-arrow": {
				value: "禁止在可能与比较操作符相混淆的地方使用箭头函数",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/no-confusing-arrow",
				isConfig: true,
			},
			"prefer-arrow-callback": {
				value: "要求回调函数使用箭头函数",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/prefer-arrow-callback",
				isConfig: true,
			},
			"rest-spread-spacing": {
				value: "强制剩余和扩展运算符及其表达式之间有空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/rest-spread-spacing",
				isConfig: false,
			},
			"template-curly-spacing": {
				value: "要求或禁止模板字符串中的嵌入表达式周围空格的使用",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/template-curly-spacing",
				isConfig: false,
			},
			"yield-star-spacing": {
				value: "强制在 yield* 表达式中 * 周围使用空格",
				recommended: null,
				fixable: "fixable",
				href: "https://eslint.bootcss.com/docs/rules/yield-star-spacing",
				isConfig: false,
			},
		},
	},
];
module.exports = eslintWithPrettier;