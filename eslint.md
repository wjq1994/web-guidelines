## eslint

> 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：

+ [x] [for-direction](https://eslint.bootcss.com/docs/rules/for-direction) 强制 “for” 循环中更新子句的计数器朝着正确的方向移动

+ [x] [getter-return](https://eslint.bootcss.com/docs/rules/getter-return) 强制 getter 函数中出现 return 语句

+ [x] [no-async-promise-executor](https://eslint.bootcss.com/docs/rules/no-async-promise-executor) 禁止使用异步函数作为 Promise executor

+ [ ] [no-await-in-loop](https://eslint.bootcss.com/docs/rules/no-await-in-loop) 禁止在循环中出现 await

+ [x] [no-compare-neg-zero](https://eslint.bootcss.com/docs/rules/no-compare-neg-zero) 禁止与 -0 进行比较

+ [x] [no-cond-assign](https://eslint.bootcss.com/docs/rules/no-cond-assign) 禁止条件表达式中出现赋值操作符

+ [ ] [no-console](https://eslint.bootcss.com/docs/rules/no-console) 禁用 console

+ [x] [no-constant-condition](https://eslint.bootcss.com/docs/rules/no-constant-condition) 禁止在条件中使用常量表达式

+ [x] [no-control-regex](https://eslint.bootcss.com/docs/rules/no-control-regex) 禁止在正则表达式中使用控制字符

+ [x] [no-debugger](https://eslint.bootcss.com/docs/rules/no-debugger) 禁用 debugger

+ [x] [no-dupe-args](https://eslint.bootcss.com/docs/rules/no-dupe-args) 禁止 function 定义中出现重名参数

+ [x] [no-dupe-keys](https://eslint.bootcss.com/docs/rules/no-dupe-keys) 禁止对象字面量中出现重复的 key

+ [x] [no-duplicate-case](https://eslint.bootcss.com/docs/rules/no-duplicate-case) 禁止出现重复的 case 标签

+ [x] [no-empty](https://eslint.bootcss.com/docs/rules/no-empty) 禁止出现空语句块

+ [x] [no-empty-character-class](https://eslint.bootcss.com/docs/rules/no-empty-character-class) 禁止在正则表达式中使用空字符集

+ [x] [no-ex-assign](https://eslint.bootcss.com/docs/rules/no-ex-assign) 禁止对 catch 子句的参数重新赋值

+ [x] [no-extra-boolean-cast](https://eslint.bootcss.com/docs/rules/no-extra-boolean-cast) 禁止不必要的布尔转换

+ [ ] [no-extra-parens](https://eslint.bootcss.com/docs/rules/no-extra-parens) 禁止不必要的括号

+ [x] [no-extra-semi](https://eslint.bootcss.com/docs/rules/no-extra-semi) 禁止不必要的分号

+ [x] [no-func-assign](https://eslint.bootcss.com/docs/rules/no-func-assign) 禁止对 function 声明重新赋值

+ [x] [no-inner-declarations](https://eslint.bootcss.com/docs/rules/no-inner-declarations) 禁止在嵌套的块中出现变量声明或 function 声明

+ [x] [no-invalid-regexp](https://eslint.bootcss.com/docs/rules/no-invalid-regexp) 禁止 RegExp 构造函数中存在无效的正则表达式字符串

+ [x] [no-irregular-whitespace](https://eslint.bootcss.com/docs/rules/no-irregular-whitespace) 禁止不规则的空白

+ [x] [no-misleading-character-class](https://eslint.bootcss.com/docs/rules/no-misleading-character-class) 不允许在字符类语法中出现由多个代码点组成的字符

+ [x] [no-obj-calls](https://eslint.bootcss.com/docs/rules/no-obj-calls) 禁止把全局对象作为函数调用

+ [x] [no-prototype-builtins](https://eslint.bootcss.com/docs/rules/no-prototype-builtins) 禁止直接调用 Object.prototypes 的内置属性

+ [x] [no-regex-spaces](https://eslint.bootcss.com/docs/rules/no-regex-spaces) 禁止正则表达式字面量中出现多个空格

+ [x] [no-sparse-arrays](https://eslint.bootcss.com/docs/rules/no-sparse-arrays) 禁用稀疏数组

+ [ ] [no-template-curly-in-string](https://eslint.bootcss.com/docs/rules/no-template-curly-in-string) 禁止在常规字符串中出现模板字面量占位符语法

+ [x] [no-unexpected-multiline](https://eslint.bootcss.com/docs/rules/no-unexpected-multiline) 禁止出现令人困惑的多行表达式

+ [x] [no-unreachable](https://eslint.bootcss.com/docs/rules/no-unreachable) 禁止在 return、throw、continue 和 break 语句之后出现不可达代码

+ [x] [no-unsafe-finally](https://eslint.bootcss.com/docs/rules/no-unsafe-finally) 禁止在 finally 语句块中出现控制流语句

+ [x] [no-unsafe-negation](https://eslint.bootcss.com/docs/rules/no-unsafe-negation) 禁止对关系运算符的左操作数使用否定操作符

+ [x] [require-atomic-updates](https://eslint.bootcss.com/docs/rules/require-atomic-updates) 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值

+ [x] [use-isnan](https://eslint.bootcss.com/docs/rules/use-isnan) 要求使用 isNaN() 检查 NaN

+ [x] [valid-typeof](https://eslint.bootcss.com/docs/rules/valid-typeof) 强制 typeof 表达式与有效的字符串进行比较

> 这些规则是关于最佳实践的，帮助你避免一些问题

+ [ ] [accessor-pairs](https://eslint.bootcss.com/docs/rules/accessor-pairs) 强制 getter 和 setter 在对象中成对出现

+ [ ] [array-callback-return](https://eslint.bootcss.com/docs/rules/array-callback-return) 强制数组方法的回调函数中有 return 语句

+ [ ] [block-scoped-var](https://eslint.bootcss.com/docs/rules/block-scoped-var) 强制把变量的使用限制在其定义的作用域范围内

+ [ ] [class-methods-use-this](https://eslint.bootcss.com/docs/rules/class-methods-use-this) 强制类方法使用 this

+ [ ] [complexity](https://eslint.bootcss.com/docs/rules/complexity) 指定程序中允许的最大环路复杂度

+ [ ] [consistent-return](https://eslint.bootcss.com/docs/rules/consistent-return) 要求 return 语句要么总是指定返回的值，要么不指定

+ [ ] [curly](https://eslint.bootcss.com/docs/rules/curly) 强制所有控制语句使用一致的括号风格

+ [ ] [default-case](https://eslint.bootcss.com/docs/rules/default-case) 要求 switch 语句中有 default 分支

+ [ ] [dot-location](https://eslint.bootcss.com/docs/rules/dot-location) 强制在点号之前和之后一致的换行

+ [ ] [dot-notation](https://eslint.bootcss.com/docs/rules/dot-notation) 强制尽可能地使用点号

+ [ ] [eqeqeq](https://eslint.bootcss.com/docs/rules/eqeqeq) 要求使用 === 和 !==

+ [ ] [guard-for-in](https://eslint.bootcss.com/docs/rules/guard-for-in) 要求 for-in 循环中有一个 if 语句

+ [ ] [max-classes-per-file](https://eslint.bootcss.com/docs/rules/max-classes-per-file) 强制每个文件中包含的的类的最大数量

+ [ ] [no-alert](https://eslint.bootcss.com/docs/rules/no-alert) 禁用 alert、confirm 和 prompt

+ [ ] [no-caller](https://eslint.bootcss.com/docs/rules/no-caller) 禁用 arguments.caller 或 arguments.callee

+ [x] [no-case-declarations](https://eslint.bootcss.com/docs/rules/no-case-declarations) 不允许在 case 子句中使用词法声明

+ [ ] [no-div-regex](https://eslint.bootcss.com/docs/rules/no-div-regex) 禁止除法操作符显式的出现在正则表达式开始的位置

+ [ ] [no-else-return](https://eslint.bootcss.com/docs/rules/no-else-return) 禁止 if 语句中 return 语句之后有 else 块

+ [ ] [no-empty-function](https://eslint.bootcss.com/docs/rules/no-empty-function) 禁止出现空函数

+ [x] [no-empty-pattern](https://eslint.bootcss.com/docs/rules/no-empty-pattern) 禁止使用空解构模式

+ [ ] [no-eq-null](https://eslint.bootcss.com/docs/rules/no-eq-null) 禁止在没有类型检查操作符的情况下与 null 进行比较

+ [ ] [no-eval](https://eslint.bootcss.com/docs/rules/no-eval) 禁用 eval()

+ [ ] [no-extend-native](https://eslint.bootcss.com/docs/rules/no-extend-native) 禁止扩展原生类型

+ [ ] [no-extra-bind](https://eslint.bootcss.com/docs/rules/no-extra-bind) 禁止不必要的 .bind() 调用

+ [ ] [no-extra-label](https://eslint.bootcss.com/docs/rules/no-extra-label) 禁用不必要的标签

+ [x] [no-fallthrough](https://eslint.bootcss.com/docs/rules/no-fallthrough) 禁止 case 语句落空

+ [ ] [no-floating-decimal](https://eslint.bootcss.com/docs/rules/no-floating-decimal) 禁止数字字面量中使用前导和末尾小数点

+ [x] [no-global-assign](https://eslint.bootcss.com/docs/rules/no-global-assign) 禁止对原生对象或只读的全局对象进行赋值

+ [ ] [no-implicit-coercion](https://eslint.bootcss.com/docs/rules/no-implicit-coercion) 禁止使用短符号进行类型转换

+ [ ] [no-implicit-globals](https://eslint.bootcss.com/docs/rules/no-implicit-globals) 禁止在全局范围内使用变量声明和 function 声明

+ [ ] [no-implied-eval](https://eslint.bootcss.com/docs/rules/no-implied-eval) 禁止使用类似 eval() 的方法

+ [ ] [no-invalid-this](https://eslint.bootcss.com/docs/rules/no-invalid-this) 禁止 this 关键字出现在类和类对象之外

+ [ ] [no-iterator](https://eslint.bootcss.com/docs/rules/no-iterator) 禁用 __iterator__ 属性

+ [ ] [no-labels](https://eslint.bootcss.com/docs/rules/no-labels) 禁用标签语句

+ [ ] [no-lone-blocks](https://eslint.bootcss.com/docs/rules/no-lone-blocks) 禁用不必要的嵌套块

+ [ ] [no-loop-func](https://eslint.bootcss.com/docs/rules/no-loop-func) 禁止在循环语句中出现包含不安全引用的函数声明

+ [ ] [no-magic-numbers](https://eslint.bootcss.com/docs/rules/no-magic-numbers) 禁用魔术数字

+ [ ] [no-multi-spaces](https://eslint.bootcss.com/docs/rules/no-multi-spaces) 禁止使用多个空格

+ [ ] [no-multi-str](https://eslint.bootcss.com/docs/rules/no-multi-str) 禁止使用多行字符串

+ [ ] [no-new](https://eslint.bootcss.com/docs/rules/no-new) 禁止使用 new 以避免产生副作用

+ [ ] [no-new-func](https://eslint.bootcss.com/docs/rules/no-new-func) 禁止对 Function 对象使用 new 操作符

+ [ ] [no-new-wrappers](https://eslint.bootcss.com/docs/rules/no-new-wrappers) 禁止对 String，Number 和 Boolean 使用 new 操作符

+ [x] [no-octal](https://eslint.bootcss.com/docs/rules/no-octal) 禁用八进制字面量

+ [ ] [no-octal-escape](https://eslint.bootcss.com/docs/rules/no-octal-escape) 禁止在字符串中使用八进制转义序列

+ [ ] [no-param-reassign](https://eslint.bootcss.com/docs/rules/no-param-reassign) 禁止对 function 的参数进行重新赋值

+ [ ] [no-proto](https://eslint.bootcss.com/docs/rules/no-proto) 禁用 __proto__ 属性

+ [x] [no-redeclare](https://eslint.bootcss.com/docs/rules/no-redeclare) 禁止多次声明同一变量

+ [ ] [no-restricted-properties](https://eslint.bootcss.com/docs/rules/no-restricted-properties) 禁止使用对象的某些属性

+ [ ] [no-return-assign](https://eslint.bootcss.com/docs/rules/no-return-assign) 禁止在 return 语句中使用赋值语句

+ [ ] [no-return-await](https://eslint.bootcss.com/docs/rules/no-return-await) 禁用不必要的 return await

+ [ ] [no-script-url](https://eslint.bootcss.com/docs/rules/no-script-url) 禁止使用 javascript: url

+ [x] [no-self-assign](https://eslint.bootcss.com/docs/rules/no-self-assign) 禁止自我赋值

+ [ ] [no-self-compare](https://eslint.bootcss.com/docs/rules/no-self-compare) 禁止自身比较

+ [ ] [no-sequences](https://eslint.bootcss.com/docs/rules/no-sequences) 禁用逗号操作符

+ [ ] [no-throw-literal](https://eslint.bootcss.com/docs/rules/no-throw-literal) 禁止抛出异常字面量

+ [ ] [no-unmodified-loop-condition](https://eslint.bootcss.com/docs/rules/no-unmodified-loop-condition) 禁用一成不变的循环条件

+ [ ] [no-unused-expressions](https://eslint.bootcss.com/docs/rules/no-unused-expressions) 禁止出现未使用过的表达式

+ [x] [no-unused-labels](https://eslint.bootcss.com/docs/rules/no-unused-labels) 禁用出现未使用过的标

+ [ ] [no-useless-call](https://eslint.bootcss.com/docs/rules/no-useless-call) 禁止不必要的 .call() 和 .apply()

+ [x] [no-useless-catch](https://eslint.bootcss.com/docs/rules/no-useless-catch) 禁止不必要的 catch 子句

+ [ ] [no-useless-concat](https://eslint.bootcss.com/docs/rules/no-useless-concat) 禁止不必要的字符串字面量或模板字面量的连接

+ [x] [no-useless-escape](https://eslint.bootcss.com/docs/rules/no-useless-escape) 禁用不必要的转义字符

+ [ ] [no-useless-return](https://eslint.bootcss.com/docs/rules/no-useless-return) 禁止多余的 return 语句

+ [ ] [no-void](https://eslint.bootcss.com/docs/rules/no-void) 禁用 void 操作符

+ [ ] [no-warning-comments](https://eslint.bootcss.com/docs/rules/no-warning-comments) 禁止在注释中使用特定的警告术语

+ [x] [no-with](https://eslint.bootcss.com/docs/rules/no-with) 禁用 with 语句

+ [ ] [prefer-named-capture-group](https://eslint.bootcss.com/docs/rules/prefer-named-capture-group) 建议在正则表达式中使用命名捕获组

+ [ ] [prefer-promise-reject-errors](https://eslint.bootcss.com/docs/rules/prefer-promise-reject-errors) 要求使用 Error 对象作为 Promise 拒绝的原因

+ [ ] [radix](https://eslint.bootcss.com/docs/rules/radix) 强制在 parseInt() 使用基数参数

+ [ ] [require-await](https://eslint.bootcss.com/docs/rules/require-await) 禁止使用不带 await 表达式的 async 函数

+ [ ] [require-unicode-regexp](https://eslint.bootcss.com/docs/rules/require-unicode-regexp) 强制在 RegExp 上使用 u 标志

+ [ ] [vars-on-top](https://eslint.bootcss.com/docs/rules/vars-on-top) 要求所有的 var 声明出现在它们所在的作用域顶部

+ [ ] [wrap-iife](https://eslint.bootcss.com/docs/rules/wrap-iife) 要求 IIFE 使用括号括起来

+ [ ] [yoda](https://eslint.bootcss.com/docs/rules/yoda) 要求或禁止 “Yoda” 条件

> 该规则与使用严格模式和严格模式指令有关：

+ [ ] [strict](https://eslint.bootcss.com/docs/rules/strict) 要求或禁止使用严格模式指令

> 这些规则与变量声明有关：

+ [ ] [init-declarations](https://eslint.bootcss.com/docs/rules/init-declarations) 要求或禁止 var 声明中的初始化

+ [x] [no-delete-var](https://eslint.bootcss.com/docs/rules/no-delete-var) 禁止删除变量

+ [ ] [no-label-var](https://eslint.bootcss.com/docs/rules/no-label-var) 不允许标签与变量同名

+ [ ] [no-restricted-globals](https://eslint.bootcss.com/docs/rules/no-restricted-globals) 禁用特定的全局变量

+ [ ] [no-shadow](https://eslint.bootcss.com/docs/rules/no-shadow) 禁止变量声明与外层作用域的变量同名

+ [x] [no-shadow-restricted-names](https://eslint.bootcss.com/docs/rules/no-shadow-restricted-names) 禁止将标识符定义为受限的名字

+ [x] [no-undef](https://eslint.bootcss.com/docs/rules/no-undef) 禁用未声明的变量，除非它们在 /*global */ 注释中被提到

+ [ ] [no-undef-init](https://eslint.bootcss.com/docs/rules/no-undef-init) 禁止将变量初始化为 undefined

+ [ ] [no-undefined](https://eslint.bootcss.com/docs/rules/no-undefined) 禁止将 undefined 作为标识符

+ [x] [no-unused-vars](https://eslint.bootcss.com/docs/rules/no-unused-vars) 禁止出现未使用过的变量

+ [ ] [no-use-before-define](https://eslint.bootcss.com/docs/rules/no-use-before-define) 禁止在变量定义之前使用它们

> 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：

+ [ ] [callback-return](https://eslint.bootcss.com/docs/rules/callback-return) 强制数组方法的回调函数中有 return 语句

+ [ ] [global-require](https://eslint.bootcss.com/docs/rules/global-require) 要求 require() 出现在顶层模块作用域中

+ [ ] [handle-callback-err](https://eslint.bootcss.com/docs/rules/handle-callback-err) 要求回调函数中有容错处理

+ [ ] [no-buffer-constructor](https://eslint.bootcss.com/docs/rules/no-buffer-constructor) 禁用 Buffer() 构造函数

+ [ ] [no-mixed-requires](https://eslint.bootcss.com/docs/rules/no-mixed-requires) 禁止混合常规变量声明和 require 调用

+ [ ] [no-new-require](https://eslint.bootcss.com/docs/rules/no-new-require) 禁止调用 require 时使用 new 操作符

+ [ ] [no-path-concat](https://eslint.bootcss.com/docs/rules/no-path-concat) 禁止对 __dirname 和 __filename 进行字符串连接

+ [ ] [no-process-env](https://eslint.bootcss.com/docs/rules/no-process-env) 禁用 process.env

+ [ ] [no-process-exit](https://eslint.bootcss.com/docs/rules/no-process-exit) 禁用 process.exit()

+ [ ] [no-restricted-modules](https://eslint.bootcss.com/docs/rules/no-restricted-modules) 禁用通过 require 加载的指定模块

+ [ ] [no-sync](https://eslint.bootcss.com/docs/rules/no-sync) 禁用同步方法

> 这些规则是关于风格指南的，而且是非常主观的：

+ [ ] [array-bracket-newline](https://eslint.bootcss.com/docs/rules/array-bracket-newline) 在数组开括号后和闭括号前强制换行

+ [ ] [array-bracket-spacing](https://eslint.bootcss.com/docs/rules/array-bracket-spacing) 强制数组方括号中使用一致的空格

+ [ ] [array-element-newline](https://eslint.bootcss.com/docs/rules/array-element-newline) 强制数组元素间出现换行

+ [ ] [block-spacing](https://eslint.bootcss.com/docs/rules/block-spacing) 禁止或强制在代码块中开括号前和闭括号后有空格

+ [ ] [brace-style](https://eslint.bootcss.com/docs/rules/brace-style) 强制在代码块中使用一致的大括号风格

+ [ ] [camelcase](https://eslint.bootcss.com/docs/rules/camelcase) 强制使用骆驼拼写法命名约定

+ [ ] [capitalized-comments](https://eslint.bootcss.com/docs/rules/capitalized-comments) 强制或禁止对注释的第一个字母大写

+ [ ] [comma-dangle](https://eslint.bootcss.com/docs/rules/comma-dangle) 要求或禁止末尾逗号

+ [ ] [comma-spacing](https://eslint.bootcss.com/docs/rules/comma-spacing) 强制在逗号前后使用一致的空格

+ [ ] [comma-style](https://eslint.bootcss.com/docs/rules/comma-style) 强制使用一致的逗号风格

+ [ ] [computed-property-spacing](https://eslint.bootcss.com/docs/rules/computed-property-spacing) 强制在计算的属性的方括号中使用一致的空格

+ [ ] [consistent-this](https://eslint.bootcss.com/docs/rules/consistent-this) 当获取当前执行环境的上下文时，强制使用一致的命名

+ [ ] [eol-last](https://eslint.bootcss.com/docs/rules/eol-last) 要求或禁止文件末尾存在空行

+ [ ] [func-call-spacing](https://eslint.bootcss.com/docs/rules/func-call-spacing) 要求或禁止在函数标识符和其调用之间有空格

+ [ ] [func-name-matching](https://eslint.bootcss.com/docs/rules/func-name-matching) 要求函数名与赋值给它们的变量名或属性名相匹配

+ [ ] [func-names](https://eslint.bootcss.com/docs/rules/func-names) 要求或禁止使用命名的 function 表达式

+ [ ] [func-style](https://eslint.bootcss.com/docs/rules/func-style) 强制一致地使用 function 声明或表达式

+ [ ] [function-paren-newline](https://eslint.bootcss.com/docs/rules/function-paren-newline) 强制在函数括号内使用一致的换行

+ [ ] [id-blacklist](https://eslint.bootcss.com/docs/rules/id-blacklist) 禁用指定的标识符

+ [ ] [id-length](https://eslint.bootcss.com/docs/rules/id-length) 强制标识符的最小和最大长度

+ [ ] [id-match](https://eslint.bootcss.com/docs/rules/id-match) 要求标识符匹配一个指定的正则表达式

+ [ ] [implicit-arrow-linebreak](https://eslint.bootcss.com/docs/rules/implicit-arrow-linebreak) 强制隐式返回的箭头函数体的位置

+ [ ] [indent](https://eslint.bootcss.com/docs/rules/indent) 强制使用一致的缩进

+ [ ] [jsx-quotes](https://eslint.bootcss.com/docs/rules/jsx-quotes) 强制在 JSX 属性中一致地使用双引号或单引号

+ [ ] [key-spacing](https://eslint.bootcss.com/docs/rules/key-spacing) 强制在对象字面量的属性中键和值之间使用一致的间距

+ [ ] [keyword-spacing](https://eslint.bootcss.com/docs/rules/keyword-spacing) 强制在关键字前后使用一致的空格

+ [ ] [line-comment-position](https://eslint.bootcss.com/docs/rules/line-comment-position) 强制行注释的位置

+ [ ] [linebreak-style](https://eslint.bootcss.com/docs/rules/linebreak-style) 强制使用一致的换行风格

+ [ ] [lines-around-comment](https://eslint.bootcss.com/docs/rules/lines-around-comment) 要求在注释周围有空行

+ [ ] [lines-between-class-members](https://eslint.bootcss.com/docs/rules/lines-between-class-members) 要求或禁止类成员之间出现空行

+ [ ] [max-depth](https://eslint.bootcss.com/docs/rules/max-depth) 强制可嵌套的块的最大深度

+ [ ] [max-len](https://eslint.bootcss.com/docs/rules/max-len) 强制一行的最大长度

+ [ ] [max-lines](https://eslint.bootcss.com/docs/rules/max-lines) 强制最大行数

+ [ ] [max-lines-per-function](https://eslint.bootcss.com/docs/rules/max-lines-per-function) 强制函数最大代码行数

+ [ ] [max-nested-callbacks](https://eslint.bootcss.com/docs/rules/max-nested-callbacks) 强制回调函数最大嵌套深度

+ [ ] [max-params](https://eslint.bootcss.com/docs/rules/max-params) 强制函数定义中最多允许的参数数量

+ [ ] [max-statements](https://eslint.bootcss.com/docs/rules/max-statements) 强制函数块最多允许的的语句数量

+ [ ] [max-statements-per-line](https://eslint.bootcss.com/docs/rules/max-statements-per-line) 强制每一行中所允许的最大语句数量

+ [ ] [multiline-comment-style](https://eslint.bootcss.com/docs/rules/multiline-comment-style) 强制对多行注释使用特定风格

+ [ ] [multiline-ternary](https://eslint.bootcss.com/docs/rules/multiline-ternary) 要求或禁止在三元操作数中间换行

+ [ ] [new-cap](https://eslint.bootcss.com/docs/rules/new-cap) 要求构造函数首字母大写

+ [ ] [new-parens](https://eslint.bootcss.com/docs/rules/new-parens) 强制或禁止调用无参构造函数时有圆括号

+ [ ] [newline-per-chained-call](https://eslint.bootcss.com/docs/rules/newline-per-chained-call) 要求方法链中每个调用都有一个换行符

+ [ ] [no-array-constructor](https://eslint.bootcss.com/docs/rules/no-array-constructor) 禁用 Array 构造函数

+ [ ] [no-bitwise](https://eslint.bootcss.com/docs/rules/no-bitwise) 禁用按位运算符

+ [ ] [no-continue](https://eslint.bootcss.com/docs/rules/no-continue) 禁用 continue 语句

+ [ ] [no-inline-comments](https://eslint.bootcss.com/docs/rules/no-inline-comments) 禁止在代码后使用内联注释

+ [ ] [no-lonely-if](https://eslint.bootcss.com/docs/rules/no-lonely-if) 禁止 if 作为唯一的语句出现在 else 语句中

+ [ ] [no-mixed-operators](https://eslint.bootcss.com/docs/rules/no-mixed-operators) 禁止混合使用不同的操作符

+ [x] [no-mixed-spaces-and-tabs](https://eslint.bootcss.com/docs/rules/no-mixed-spaces-and-tabs) 禁止空格和 tab 的混合缩进

+ [ ] [no-multi-assign](https://eslint.bootcss.com/docs/rules/no-multi-assign) 禁止连续赋值

+ [ ] [no-multiple-empty-lines](https://eslint.bootcss.com/docs/rules/no-multiple-empty-lines) 禁止出现多行空行

+ [ ] [no-negated-condition](https://eslint.bootcss.com/docs/rules/no-negated-condition) 禁用否定的表达式

+ [ ] [no-nested-ternary](https://eslint.bootcss.com/docs/rules/no-nested-ternary) 禁用嵌套的三元表达式

+ [ ] [no-new-object](https://eslint.bootcss.com/docs/rules/no-new-object) 禁用 Object 的构造函数

+ [ ] [no-plusplus](https://eslint.bootcss.com/docs/rules/no-plusplus) 禁用一元操作符 ++ 和 --

+ [ ] [no-restricted-syntax](https://eslint.bootcss.com/docs/rules/no-restricted-syntax) 禁用特定的语法

+ [ ] [no-tabs](https://eslint.bootcss.com/docs/rules/no-tabs) 禁用 tab

+ [ ] [no-ternary](https://eslint.bootcss.com/docs/rules/no-ternary) 禁用三元操作符

+ [ ] [no-trailing-spaces](https://eslint.bootcss.com/docs/rules/no-trailing-spaces) 禁用行尾空格

+ [ ] [no-underscore-dangle](https://eslint.bootcss.com/docs/rules/no-underscore-dangle) 禁止标识符中有悬空下划线

+ [ ] [no-unneeded-ternary](https://eslint.bootcss.com/docs/rules/no-unneeded-ternary) 禁止可以在有更简单的可替代的表达式时使用三元操作符

+ [ ] [no-whitespace-before-property](https://eslint.bootcss.com/docs/rules/no-whitespace-before-property) 禁止属性前有空白

+ [ ] [nonblock-statement-body-position](https://eslint.bootcss.com/docs/rules/nonblock-statement-body-position) 强制单个语句的位置

+ [ ] [object-curly-newline](https://eslint.bootcss.com/docs/rules/object-curly-newline) 强制大括号内换行符的一致性

+ [ ] [object-curly-spacing](https://eslint.bootcss.com/docs/rules/object-curly-spacing) 强制在大括号中使用一致的空格

+ [ ] [object-property-newline](https://eslint.bootcss.com/docs/rules/object-property-newline) 强制将对象的属性放在不同的行上

+ [ ] [one-var](https://eslint.bootcss.com/docs/rules/one-var) 强制函数中的变量要么一起声明要么分开声明

+ [ ] [one-var-declaration-per-line](https://eslint.bootcss.com/docs/rules/one-var-declaration-per-line) 要求或禁止在变量声明周围换行

+ [ ] [operator-assignment](https://eslint.bootcss.com/docs/rules/operator-assignment) 要求或禁止在可能的情况下使用简化的赋值操作符

+ [ ] [operator-linebreak](https://eslint.bootcss.com/docs/rules/operator-linebreak) 强制操作符使用一致的换行符

+ [ ] [padded-blocks](https://eslint.bootcss.com/docs/rules/padded-blocks) 要求或禁止块内填充

+ [ ] [padding-line-between-statements](https://eslint.bootcss.com/docs/rules/padding-line-between-statements) 要求或禁止在语句间填充空行

+ [ ] [prefer-object-spread](https://eslint.bootcss.com/docs/rules/prefer-object-spread) 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。

+ [ ] [quote-props](https://eslint.bootcss.com/docs/rules/quote-props) 要求对象字面量属性名称用引号括起来

+ [ ] [quotes](https://eslint.bootcss.com/docs/rules/quotes) 强制使用一致的反勾号、双引号或单引号

+ [ ] [semi](https://eslint.bootcss.com/docs/rules/semi) 要求或禁止使用分号代替 ASI

+ [ ] [semi-spacing](https://eslint.bootcss.com/docs/rules/semi-spacing) 强制分号之前和之后使用一致的空格

+ [ ] [semi-style](https://eslint.bootcss.com/docs/rules/semi-style) 强制分号的位置

+ [ ] [sort-keys](https://eslint.bootcss.com/docs/rules/sort-keys) 要求对象属性按序排列

+ [ ] [sort-vars](https://eslint.bootcss.com/docs/rules/sort-vars) 要求同一个声明块中的变量按顺序排列

+ [ ] [space-before-blocks](https://eslint.bootcss.com/docs/rules/space-before-blocks) 强制在块之前使用一致的空格

+ [ ] [space-before-function-paren](https://eslint.bootcss.com/docs/rules/space-before-function-paren) 强制在 function的左括号之前使用一致的空格

+ [ ] [space-in-parens](https://eslint.bootcss.com/docs/rules/space-in-parens) 强制在圆括号内使用一致的空格

+ [ ] [space-infix-ops](https://eslint.bootcss.com/docs/rules/space-infix-ops) 要求操作符周围有空格

+ [ ] [space-unary-ops](https://eslint.bootcss.com/docs/rules/space-unary-ops) 强制在一元操作符前后使用一致的空格

+ [ ] [spaced-comment](https://eslint.bootcss.com/docs/rules/spaced-comment) 强制在注释中 // 或 /* 使用一致的空格

+ [ ] [switch-colon-spacing](https://eslint.bootcss.com/docs/rules/switch-colon-spacing) 强制在 switch 的冒号左右有空格

+ [ ] [template-tag-spacing](https://eslint.bootcss.com/docs/rules/template-tag-spacing) 要求或禁止在模板标记和它们的字面量之间有空格

+ [ ] [unicode-bom](https://eslint.bootcss.com/docs/rules/unicode-bom) 要求或禁止 Unicode 字节顺序标记 (BOM)

+ [ ] [wrap-regex](https://eslint.bootcss.com/docs/rules/wrap-regex) 要求正则表达式被括号括起来

> 这些规则只与 ES6 有关, 即通常所说的 ES2015：

+ [ ] [arrow-body-style](https://eslint.bootcss.com/docs/rules/arrow-body-style) 要求箭头函数体使用大括号

+ [ ] [arrow-parens](https://eslint.bootcss.com/docs/rules/arrow-parens) 要求箭头函数的参数使用圆括号

+ [ ] [arrow-spacing](https://eslint.bootcss.com/docs/rules/arrow-spacing) 强制箭头函数的箭头前后使用一致的空格

+ [x] [constructor-super](https://eslint.bootcss.com/docs/rules/constructor-super) 要求在构造函数中有 super() 的调用

+ [ ] [generator-star-spacing](https://eslint.bootcss.com/docs/rules/generator-star-spacing) 强制 generator 函数中 * 号周围使用一致的空格

+ [x] [no-class-assign](https://eslint.bootcss.com/docs/rules/no-class-assign) 禁止修改类声明的变量

+ [ ] [no-confusing-arrow](https://eslint.bootcss.com/docs/rules/no-confusing-arrow) 禁止在可能与比较操作符相混淆的地方使用箭头函数

+ [x] [no-const-assign](https://eslint.bootcss.com/docs/rules/no-const-assign) 禁止修改 const 声明的变量

+ [x] [no-dupe-class-members](https://eslint.bootcss.com/docs/rules/no-dupe-class-members) 禁止类成员中出现重复的名称

+ [ ] [no-duplicate-imports](https://eslint.bootcss.com/docs/rules/no-duplicate-imports) 禁止重复模块导入

+ [x] [no-new-symbol](https://eslint.bootcss.com/docs/rules/no-new-symbol) 禁止 Symbolnew 操作符和 new 一起使用

+ [ ] [no-restricted-imports](https://eslint.bootcss.com/docs/rules/no-restricted-imports) 禁止使用指定的 import 加载的模块

+ [x] [no-this-before-super](https://eslint.bootcss.com/docs/rules/no-this-before-super) 禁止在构造函数中，在调用 super() 之前使用 this 或 super

+ [ ] [no-useless-computed-key](https://eslint.bootcss.com/docs/rules/no-useless-computed-key) 禁止在对象中使用不必要的计算属性

+ [ ] [no-useless-constructor](https://eslint.bootcss.com/docs/rules/no-useless-constructor) 禁用不必要的构造函数

+ [ ] [no-useless-rename](https://eslint.bootcss.com/docs/rules/no-useless-rename) 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字

+ [ ] [no-var](https://eslint.bootcss.com/docs/rules/no-var) 要求使用 let 或 const 而不是 var

+ [ ] [object-shorthand](https://eslint.bootcss.com/docs/rules/object-shorthand) 要求或禁止对象字面量中方法和属性使用简写语法

+ [ ] [prefer-arrow-callback](https://eslint.bootcss.com/docs/rules/prefer-arrow-callback) 要求回调函数使用箭头函数

+ [ ] [prefer-const](https://eslint.bootcss.com/docs/rules/prefer-const) 要求使用 const 声明那些声明后不再被修改的变量

+ [ ] [prefer-destructuring](https://eslint.bootcss.com/docs/rules/prefer-destructuring) 优先使用数组和对象解构

+ [ ] [prefer-numeric-literals](https://eslint.bootcss.com/docs/rules/prefer-numeric-literals) 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量

+ [ ] [prefer-rest-params](https://eslint.bootcss.com/docs/rules/prefer-rest-params) 要求使用剩余参数而不是 arguments

+ [ ] [prefer-spread](https://eslint.bootcss.com/docs/rules/prefer-spread) 要求使用扩展运算符而非 .apply()

+ [ ] [prefer-template](https://eslint.bootcss.com/docs/rules/prefer-template) 要求使用模板字面量而非字符串连接

+ [x] [require-yield](https://eslint.bootcss.com/docs/rules/require-yield) 要求 generator 函数内有 yield

+ [ ] [rest-spread-spacing](https://eslint.bootcss.com/docs/rules/rest-spread-spacing) 强制剩余和扩展运算符及其表达式之间有空格

+ [ ] [sort-imports](https://eslint.bootcss.com/docs/rules/sort-imports) 强制模块内的 import 排序

+ [ ] [symbol-description](https://eslint.bootcss.com/docs/rules/symbol-description) 要求 symbol 描述

+ [ ] [template-curly-spacing](https://eslint.bootcss.com/docs/rules/template-curly-spacing) 要求或禁止模板字符串中的嵌入表达式周围空格的使用

+ [ ] [yield-star-spacing](https://eslint.bootcss.com/docs/rules/yield-star-spacing) 强制在 yield* 表达式中 * 周围使用空格

## prettier

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

## typescriptWithPrettier

+ [ ] [@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md) Require that member overloads be consecutive

+ [ ] [@typescript-eslint/array-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/array-type.md) Requires using either T[] or Array<T> for arrays

+ [ ] [@typescript-eslint/await-thenable](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/await-thenable.md) Disallows awaiting a value that is not a Thenable

+ [ ] [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-ts-comment.md) Bans @ts-<directive> comments from being used or requires descriptions after directive
 

+ [ ] [@typescript-eslint/ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-tslint-comment.md) Bans // tslint:<rule-flag> comments from being used

+ [ ] [@typescript-eslint/ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-types.md) Bans specific types from being used

+ [ ] [@typescript-eslint/class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/class-literal-property-style.md) Ensures that literals on classes are exposed in a consistent style

+ [ ] [@typescript-eslint/consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md) Enforce or disallow the use of the record type

+ [ ] [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-assertions.md) Enforces consistent usage of type assertions

+ [ ] [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-definitions.md) Consistent with type definition either interface or type
 

+ [ ] [@typescript-eslint/consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-imports.md) Enforces consistent usage of type imports

+ [ ] [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md) Require explicit return types on functions and class methods

+ [ ] [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md) Require explicit accessibility modifiers on class properties and methods

+ [ ] [@typescript-eslint/explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md) Require explicit return and argument types on exported functions' and classes' public class methods

+ [ ] [@typescript-eslint/member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-delimiter-style.md) Require a specific member delimiter style for interfaces and type literals

+ [ ] [@typescript-eslint/member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-ordering.md) Require a consistent member declaration order

+ [ ] [@typescript-eslint/method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/method-signature-style.md) Enforces using a particular method signature syntax.

+ [ ] [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/naming-convention.md) Enforces naming conventions for everything across a codebase

+ [ ] [@typescript-eslint/no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-base-to-string.md) Requires that .toString() is only called on objects which provide useful information when
 stringified

+ [ ] [@typescript-eslint/no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md) Disallow non-null assertion in locations that may be confusing

+ [ ] [@typescript-eslint/no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md) Requires expressions of type void to appear in statement position

+ [ ] [@typescript-eslint/no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dynamic-delete.md) Disallow the delete operator with computed key expressions

+ [ ] [@typescript-eslint/no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-empty-interface.md) Disallow the declaration of empty interfaces

+ [ ] [@typescript-eslint/no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-explicit-any.md) Disallow usage of the any type

+ [ ] [@typescript-eslint/no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md) Disallow extra non-null assertion

+ [ ] [@typescript-eslint/no-extraneous-class](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extraneous-class.md) Forbids the use of classes as namespaces

+ [ ] [@typescript-eslint/no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-floating-promises.md) Requires Promise-like values to be handled appropriately

+ [ ] [@typescript-eslint/no-for-in-array](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-for-in-array.md) Disallow iterating over an array with a for-in loop

+ [ ] [@typescript-eslint/no-implicit-any-catch](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md) Disallow usage of the implicit any type in catch clauses

+ [ ] [@typescript-eslint/no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-inferrable-types.md) Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
 

+ [ ] [@typescript-eslint/no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-void-type.md) Disallows usage of void type outside of generic or return types

+ [ ] [@typescript-eslint/no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-misused-new.md) Enforce valid definition of new and constructor
 

+ [ ] [@typescript-eslint/no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-misused-promises.md) Avoid using promises in places not designed to handle them

+ [ ] [@typescript-eslint/no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-namespace.md) Disallow the use of custom TypeScript modules and namespaces

+ [ ] [@typescript-eslint/no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md) Disallows using a non-null assertion after an optional chain expression

+ [ ] [@typescript-eslint/no-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-non-null-assertion.md) Disallows non-null assertions using the ! postfix operator

+ [ ] [@typescript-eslint/no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-parameter-properties.md) Disallow the use of parameter properties in class constructors

+ [ ] [@typescript-eslint/no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-require-imports.md) Disallows invocation of require()
 

+ [ ] [@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-this-alias.md) Disallow aliasing this
 

+ [ ] [@typescript-eslint/no-type-alias](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-type-alias.md) Disallow the use of type aliases

+ [ ] [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md) Flags unnecessary equality comparisons against boolean literals

+ [ ] [@typescript-eslint/no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md) Prevents conditionals where the type is always truthy or always falsy

+ [ ] [@typescript-eslint/no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md) Warns when a namespace qualifier is unnecessary

+ [ ] [@typescript-eslint/no-unnecessary-type-arguments](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md) Enforces that type arguments will not be used if not required

+ [ ] [@typescript-eslint/no-unnecessary-type-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md) Warns if a type assertion does not change the type of an expression

+ [ ] [@typescript-eslint/no-unnecessary-type-constraint](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md) Disallows unnecessary constraints on generic types

+ [ ] [@typescript-eslint/no-unsafe-assignment](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md) Disallows assigning any to variables and properties

+ [ ] [@typescript-eslint/no-unsafe-call](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-call.md) Disallows calling an any type value

+ [ ] [@typescript-eslint/no-unsafe-member-access](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md) Disallows member access on any typed variables

+ [ ] [@typescript-eslint/no-unsafe-return](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-return.md) Disallows returning any from a function

+ [ ] [@typescript-eslint/no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-var-requires.md) Disallows the use of require statements except in import statements

+ [ ] [@typescript-eslint/non-nullable-type-assertion-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md) Prefers a non-null assertion over explicit type cast when possible

+ [ ] [@typescript-eslint/prefer-as-const](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-as-const.md) Prefer usage of as const over literal type

+ [ ] [@typescript-eslint/prefer-enum-initializers](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md) Prefer initializing each enums member value

+ [ ] [@typescript-eslint/prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-for-of.md) Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being
 iterated
 

+ [ ] [@typescript-eslint/prefer-function-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-function-type.md) Use function types instead of interfaces with call signatures

+ [ ] [@typescript-eslint/prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-includes.md) Enforce includes method over indexOf method

+ [ ] [@typescript-eslint/prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md) Require that all enum members be literal values to prevent unintended enum member name shadow issues

+ [ ] [@typescript-eslint/prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md) Require the use of the namespace keyword instead of the module keyword to declare
 custom TypeScript modules

+ [ ] [@typescript-eslint/prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md) Enforce the usage of the nullish coalescing operator instead of logical chaining

+ [ ] [@typescript-eslint/prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md) Prefer using concise optional chain expressions instead of chained logical ands

+ [ ] [@typescript-eslint/prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-readonly.md) Requires that private members are marked as readonly if they're never modified outside of the
 constructor

+ [ ] [@typescript-eslint/prefer-readonly-parameter-types](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md) Requires that function parameters are typed as readonly to prevent accidental mutation of inputs

+ [ ] [@typescript-eslint/prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md) Prefer using type parameter when calling Array#reduce instead of casting

+ [ ] [@typescript-eslint/prefer-regexp-exec](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md) Enforce that RegExp#exec is used instead of String#match if no global flag is
 provided

+ [ ] [@typescript-eslint/prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md) Enforce the use of String#startsWith and String#endsWith instead of other
 equivalent
 methods of checking substrings

+ [ ] [@typescript-eslint/prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md) Recommends using @ts-expect-error over @ts-ignore
 

+ [ ] [@typescript-eslint/promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md) Requires any function or method that returns a Promise to be marked async

+ [ ] [@typescript-eslint/require-array-sort-compare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/require-array-sort-compare.md) Requires Array#sort calls to always provide a compareFunction
 

+ [ ] [@typescript-eslint/restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/restrict-plus-operands.md) When adding two variables, operands must both be of type number or of type string

+ [ ] [@typescript-eslint/restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/restrict-template-expressions.md) Enforce template literal expressions to be of string type

+ [ ] [@typescript-eslint/sort-type-union-intersection-members](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md) Enforces that members of a type union/intersection are sorted alphabetically

+ [ ] [@typescript-eslint/strict-boolean-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md) Restricts the types allowed in boolean expressions

+ [ ] [@typescript-eslint/switch-exhaustiveness-check](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md) Exhaustiveness checking in switch with union type

+ [ ] [@typescript-eslint/triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/triple-slash-reference.md) Sets preference level for triple slash directives versus ES6-style import declarations

+ [ ] [@typescript-eslint/type-annotation-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/type-annotation-spacing.md) Require consistent spacing around type annotations

+ [ ] [@typescript-eslint/typedef](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/typedef.md) Requires type annotations to exist

+ [ ] [@typescript-eslint/unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unbound-method.md) Enforces unbound methods are called with their expected scope

+ [ ] [@typescript-eslint/unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unified-signatures.md) Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
 

+ [ ] [@typescript-eslint/brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/brace-style.md) Enforce consistent brace style for blocks

+ [ ] [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-dangle.md) Require or disallow trailing comma

+ [ ] [@typescript-eslint/comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-spacing.md) Enforces consistent spacing before and after commas

+ [ ] [@typescript-eslint/default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/default-param-last.md) Enforce default parameters to be last

+ [ ] [@typescript-eslint/dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/dot-notation.md) enforce dot notation whenever possible

+ [ ] [@typescript-eslint/func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/func-call-spacing.md) Require or disallow spacing between function identifiers and their invocations

+ [ ] [@typescript-eslint/indent](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/indent.md) Enforce consistent indentation

+ [ ] [@typescript-eslint/init-declarations](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/init-declarations.md) require or disallow initialization in variable declarations

+ [ ] [@typescript-eslint/keyword-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/keyword-spacing.md) Enforce consistent spacing before and after keywords

+ [ ] [@typescript-eslint/lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/lines-between-class-members.md) Require or disallow an empty line between class members

+ [ ] [@typescript-eslint/no-array-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-array-constructor.md) Disallow generic Array constructors

+ [ ] [@typescript-eslint/no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dupe-class-members.md) Disallow duplicate class members

+ [ ] [@typescript-eslint/no-duplicate-imports](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-duplicate-imports.md) Disallow duplicate imports

+ [ ] [@typescript-eslint/no-empty-function](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-empty-function.md) Disallow empty functions

+ [ ] [@typescript-eslint/no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-parens.md) Disallow unnecessary parentheses

+ [ ] [@typescript-eslint/no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-semi.md) Disallow unnecessary semicolons

+ [ ] [@typescript-eslint/no-implied-eval](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-implied-eval.md) Disallow the use of eval()-like methods

+ [ ] [@typescript-eslint/no-invalid-this](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-this.md) Disallow this keywords outside of classes or class-like objects

+ [ ] [@typescript-eslint/no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loop-func.md) Disallow function declarations that contain unsafe references inside loop statements

+ [ ] [@typescript-eslint/no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loss-of-precision.md) Disallow literal numbers that lose precision

+ [ ] [@typescript-eslint/no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-magic-numbers.md) Disallow magic numbers

+ [ ] [@typescript-eslint/no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-redeclare.md) Disallow variable redeclaration

+ [ ] [@typescript-eslint/no-shadow](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-shadow.md) Disallow variable declarations from shadowing variables declared in the outer scope

+ [ ] [@typescript-eslint/no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-throw-literal.md) Disallow throwing literals as exceptions

+ [ ] [@typescript-eslint/no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-expressions.md) Disallow unused expressions

+ [ ] [@typescript-eslint/no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-vars.md) Disallow unused variables

+ [ ] [@typescript-eslint/no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-use-before-define.md) Disallow the use of variables before they are defined

+ [ ] [@typescript-eslint/no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md) Disallow unnecessary constructors

+ [ ] [@typescript-eslint/object-curly-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/object-curly-spacing.md) Enforce consistent spacing inside braces

+ [ ] [@typescript-eslint/quotes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/quotes.md) Enforce the consistent use of either backticks, double, or single quotes

+ [ ] [@typescript-eslint/require-await](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/require-await.md) Disallow async functions which have no await expression

+ [ ] [@typescript-eslint/return-await](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/return-await.md) Enforces consistent returning of awaited values

+ [ ] [@typescript-eslint/semi](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/semi.md) Require or disallow semicolons instead of ASI

+ [ ] [@typescript-eslint/space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-before-function-paren.md) Enforces consistent spacing before function parenthesis

+ [ ] [@typescript-eslint/space-infix-ops](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-infix-ops.md) This rule is aimed at ensuring there are spaces around infix operators.

## typescriptWithPrettier

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

## vue

+ [x] [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html) support comment-directives in &lt;template&gt;

+ [x] [vue/experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html) prevent variables defined in &lt;script setup&gt; to be marked as
 undefined

+ [x] [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html) prevent variables used in JSX to be marked as unused

+ [x] [vue/no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html) disallow using arrow functions to define watcher

+ [x] [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html) disallow asynchronous actions in computed properties

+ [x] [vue/no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html) disallow using deprecated object declaration on data (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html) disallow using deprecated destroyed and beforeDestroy
 lifecycle hooks (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html) disallow using deprecated $listeners (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html) disallow using deprecated $scopedSlots (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html) disallow using deprecated events api (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html) disallow using deprecated filters syntax (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-functional-template](https://eslint.vuejs.org/rules/no-deprecated-functional-template.html) disallow using deprecated the functional template (in Vue.js
 3.0.0+)
 

+ [x] [vue/no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html) disallow using deprecated the is attribute on HTML elements (in
 Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html) disallow using deprecated inline-template attribute (in Vue.js
 3.0.0+)

+ [x] [vue/no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html) disallow props default function this access

+ [x] [vue/no-deprecated-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html) disallow deprecated scope attribute (in Vue.js 2.5.0+)

+ [x] [vue/no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html) disallow deprecated slot attribute (in Vue.js 2.6.0+)

+ [x] [vue/no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html) disallow deprecated slot-scope attribute (in Vue.js 2.6.0+)

+ [x] [vue/no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html) disallow use of deprecated .sync modifier on v-bind
 directive (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html) disallow using deprecated .native modifiers (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html) disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)

+ [x] [vue/no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html) disallow using deprecated Vue.config.keyCodes (in Vue.js 3.0.0+)
 

+ [x] [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html) disallow duplication of field names

+ [x] [vue/no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html) disallow duplicate conditions in v-if &#x2F; v-else-if
 chains
 

+ [x] [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html) disallow duplication of attributes

+ [x] [vue/no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html) disallow asynchronously registered lifecycle hooks

+ [x] [vue/no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html) disallow mutation of component props

+ [x] [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html) disallow parsing errors in &lt;template&gt;

+ [x] [vue/no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html) disallow use of value wrapped by ref() (Composition API) as an
 operand

+ [x] [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html) disallow overwriting reserved keys

+ [x] [vue/no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html) disallow destructuring of props passed to setup

+ [x] [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html) enforce component&#39;s data property to be a function

+ [x] [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html) disallow side effects in computed properties

+ [x] [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html) disallow key attribute on &lt;template&gt;

+ [x] [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html) disallow mustaches in &lt;textarea&gt;

+ [x] [vue/no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html) disallow registering components that are not used inside templates

+ [x] [vue/no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html) disallow unused variable definitions of v-for directives or scope attributes
 

+ [x] [vue/no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html) disallow use v-if on the same element as v-for

+ [x] [vue/no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html) disallow key of &lt;template v-for&gt; placed on child elements
 

+ [x] [vue/no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html) disallow asynchronously registered watch

+ [x] [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is.html) require v-bind:is of &lt;component&gt; elements

+ [x] [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html) require prop type to be a constructor

+ [x] [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html) enforce render function to always return value

+ [x] [vue/require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html) enforce properties of $slots to be used as a function

+ [x] [vue/require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html) require control the display of the content inside
 &lt;transition&gt;
 

+ [x] [vue/require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html) require v-bind:key with v-for directives

+ [x] [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html) enforce props default values to be valid

+ [x] [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html) enforce that a return statement is present in computed property

+ [x] [vue/return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html) enforce that a return statement is present in emits validator

+ [x] [vue/use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html) enforce usage of exact modifier on v-on

+ [x] [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html) enforce valid template root

+ [x] [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html) enforce valid v-bind directives

+ [x] [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html) enforce valid v-cloak directives

+ [x] [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html) enforce valid v-else-if directives

+ [x] [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html) enforce valid v-else directives

+ [x] [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html) enforce valid v-for directives

+ [x] [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html) enforce valid v-html directives

+ [x] [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html) enforce valid v-if directives

+ [x] [vue/valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html) enforce valid v-is directives

+ [x] [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html) enforce valid v-model directives

+ [x] [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html) enforce valid v-on directives

+ [x] [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html) enforce valid v-once directives

+ [x] [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html) enforce valid v-pre directives

+ [x] [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html) enforce valid v-show directives

+ [x] [vue/valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html) enforce valid v-slot directives

+ [x] [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html) enforce valid v-text directives

+ [x] [vue/attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html) enforce attribute naming style on custom components in template

+ [x] [vue/component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html) enforce specific casing for component definition name

+ [x] [vue/html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html) require or disallow a line break before tag&#39;s closing brackets

+ [x] [vue/html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html) require or disallow a space before tag&#39;s closing brackets

+ [x] [vue/html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html) enforce end tag style

+ [x] [vue/html-indent](https://eslint.vuejs.org/rules/html-indent.html) enforce consistent indentation in &lt;template&gt;

+ [x] [vue/html-quotes](https://eslint.vuejs.org/rules/html-quotes.html) enforce quotes style of HTML attributes

+ [x] [vue/html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html) enforce self-closing style

+ [x] [vue/max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html) enforce the maximum number of attributes per line

+ [x] [vue/multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html) require a line break before and after the contents of a multiline element

+ [x] [vue/mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html) enforce unified spacing in mustache interpolations

+ [x] [vue/no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html) disallow multiple spaces

+ [x] [vue/no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html) disallow spaces around equal signs in attribute

+ [x] [vue/no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html) disallow variable declarations from shadowing variables declared in the outer
 scope

+ [x] [vue/one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html) enforce that each component should be in its own file

+ [x] [vue/prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html) enforce specific casing for the Prop name in Vue components

+ [x] [vue/require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html) require default value for props

+ [x] [vue/require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html) require emits option with name triggered by $emit()
 

+ [x] [vue/require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html) require type definitions in props

+ [x] [vue/singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html) require a line break before and after the contents of a singleline element

+ [x] [vue/v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html) enforce v-bind directive style

+ [x] [vue/v-on-style](https://eslint.vuejs.org/rules/v-on-style.html) enforce v-on directive style

+ [x] [vue/v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html) enforce v-slot directive style

+ [x] [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order.html) enforce order of attributes

+ [x] [vue/component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html) enforce order of component top-level elements

+ [x] [vue/no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html) disallow unnecessary &lt;template&gt;

+ [x] [vue/no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html) disallow to pass multiple arguments to scoped slots

+ [x] [vue/no-v-html](https://eslint.vuejs.org/rules/no-v-html.html) disallow use of v-html to prevent XSS attack

+ [x] [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components.html) enforce order of properties in components

+ [x] [vue/this-in-template](https://eslint.vuejs.org/rules/this-in-template.html) disallow usage of this in template

+ [x] [vue/no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html) disallow custom modifiers on v-model used on the component

+ [x] [vue/no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html) disallow adding multiple root nodes to the template

+ [x] [vue/no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html) disallow key attribute on &lt;template v-for&gt;

+ [x] [vue/no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html) disallow adding an argument to v-model used in custom component
 

+ [x] [vue/valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html) enforce valid .sync modifier on v-bind directives

+ [x] [vue/block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html) enforce line breaks after opening and before closing block-level tags

+ [x] [vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html) enforce specific casing for the component naming style in template

+ [x] [vue/custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html) enforce specific casing for custom event name

+ [x] [vue/html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html) disallow usage of button without an explicit type attribute

+ [x] [vue/html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html) enforce unified line brake in HTML comments

+ [x] [vue/html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html) enforce unified spacing in HTML comments

+ [x] [vue/html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html) enforce consistent indentation in HTML comments

+ [x] [vue/match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html) require component name property to match its file name

+ [x] [vue/new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html) enforce new lines between multi-line properties in Vue components

+ [x] [vue/next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html) enforce Promise or callback style in nextTick

+ [x] [vue/no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html) disallow the use of bare strings in &lt;template&gt;

+ [x] [vue/no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html) disallow boolean defaults

+ [x] [vue/no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html) enforce inheritAttrs to be set to false when using
 v-bind=&quto;$attrs&quto;
 

+ [x] [vue/no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html) disallow the &lt;template&gt; &lt;script&gt;
 &lt;style&gt; block to be empty
 

+ [x] [vue/no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html) disallow to pass multiple objects into array to class

+ [x] [vue/no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html) disallow a potential typo in your component property

+ [x] [vue/no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html) disallow the use of reserved names in component definitions

+ [x] [vue/no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html) disallow specific block

+ [x] [vue/no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html) disallow asynchronously called restricted methods

+ [x] [vue/no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html) disallow specific component option

+ [x] [vue/no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html) disallow specific custom event

+ [x] [vue/no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html) disallow specific props

+ [x] [vue/no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html) disallow specific attribute

+ [x] [vue/no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html) disallow specific argument in v-bind

+ [x] [vue/no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html) disallow static inline style attributes

+ [x] [vue/no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html) disallow target=&quto;_blank&quto; attribute without rel=&quto;noopener noreferrer&quto;

+ [x] [vue/no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html) disallow using components that are not registered inside templates

+ [x] [vue/no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html) disallow unsupported Vue.js syntax on the specified version

+ [x] [vue/no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html) disallow unused properties

+ [x] [vue/no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html) disallow unnecessary mustache interpolations

+ [x] [vue/no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html) disallow unnecessary v-bind directives

+ [x] [vue/padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html) require or disallow padding lines between blocks

+ [x] [vue/require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html) require the component to be directly exported

+ [x] [vue/require-name-property](https://eslint.vuejs.org/rules/require-name-property.html) require a name property in Vue components

+ [x] [vue/script-indent](https://eslint.vuejs.org/rules/script-indent.html) enforce consistent indentation in &lt;script&gt;

+ [x] [vue/sort-keys](https://eslint.vuejs.org/rules/sort-keys.html) enforce sort-keys in a manner that is compatible with order-in-components

+ [x] [vue/static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html) enforce static class names order

+ [x] [vue/v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html) enforce v-for directive&#39;s delimiter style

+ [x] [vue/v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html) enforce v-on event naming style on custom components in template

+ [x] [vue/v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html) enforce or forbid parentheses after method calls without arguments in
 v-on directives
 

+ [x] [vue/valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html) enforce valid nextTick function calls

+ [x] [vue/array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html) enforce linebreaks after opening and before closing array brackets

+ [x] [vue/array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html) enforce consistent spacing inside array brackets

+ [x] [vue/arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html) enforce consistent spacing before and after the arrow in arrow functions

+ [x] [vue/block-spacing](https://eslint.vuejs.org/rules/block-spacing.html) disallow or enforce spaces inside of blocks after opening block and before
 closing
 block

+ [x] [vue/brace-style](https://eslint.vuejs.org/rules/brace-style.html) enforce consistent brace style for blocks

+ [x] [vue/camelcase](https://eslint.vuejs.org/rules/camelcase.html) enforce camelcase naming convention

+ [x] [vue/comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html) require or disallow trailing commas

+ [x] [vue/comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html) enforce consistent spacing before and after commas

+ [x] [vue/comma-style](https://eslint.vuejs.org/rules/comma-style.html) enforce consistent comma style

+ [x] [vue/dot-location](https://eslint.vuejs.org/rules/dot-location.html) enforce consistent newlines before and after dots

+ [x] [vue/dot-notation](https://eslint.vuejs.org/rules/dot-notation.html) enforce dot notation whenever possible

+ [x] [vue/eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html) require the use of === and !==

+ [x] [vue/func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html) require or disallow spacing between function identifiers and their invocations
 

+ [x] [vue/key-spacing](https://eslint.vuejs.org/rules/key-spacing.html) enforce consistent spacing between keys and values in object literal properties
 

+ [x] [vue/keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html) enforce consistent spacing before and after keywords

+ [x] [vue/max-len](https://eslint.vuejs.org/rules/max-len.html) enforce a maximum line length

+ [x] [vue/no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html) disallow constant expressions in conditions

+ [x] [vue/no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html) disallow empty destructuring patterns

+ [x] [vue/no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html) disallow unnecessary parentheses

+ [x] [vue/no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html) disallow irregular whitespace

+ [x] [vue/no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html) disallow specified syntax

+ [x] [vue/no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html) disallow sparse arrays

+ [x] [vue/no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html) disallow unnecessary concatenation of literals or template literals

+ [x] [vue/object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html) enforce consistent line breaks inside braces

+ [x] [vue/object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html) enforce consistent spacing inside braces

+ [x] [vue/object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html) enforce placing object properties on separate lines

+ [x] [vue/operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html) enforce consistent linebreak style for operators

+ [x] [vue/prefer-template](https://eslint.vuejs.org/rules/prefer-template.html) require template literals instead of string concatenation

+ [x] [vue/space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html) enforce consistent spacing inside parentheses

+ [x] [vue/space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html) require spacing around infix operators

+ [x] [vue/space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html) enforce consistent spacing before or after unary operators

+ [x] [vue/template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html) require or disallow spacing around embedded expressions of template strings
