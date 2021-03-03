const typescriptRulesTransform = {
	"@typescript-eslint/adjacent-overload-signatures": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md",
		desc: "Require that member overloads be consecutive",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/array-type": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/array-type.md",
		desc: "Requires using either T[] or Array<T> for arrays",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/await-thenable": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/await-thenable.md",
		desc: "Disallows awaiting a value that is not a Thenable",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/ban-ts-comment": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-ts-comment.md",
		desc:
			"Bans @ts-<directive> comments from being used or requires descriptions after directive\n ",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/ban-tslint-comment": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-tslint-comment.md",
		desc: "Bans // tslint:<rule-flag> comments from being used",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/ban-types": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/ban-types.md",
		desc: "Bans specific types from being used",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/class-literal-property-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/class-literal-property-style.md",
		desc: "Ensures that literals on classes are exposed in a consistent style",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/consistent-indexed-object-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md",
		desc: "Enforce or disallow the use of the record type",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/consistent-type-assertions": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-assertions.md",
		desc: "Enforces consistent usage of type assertions",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/consistent-type-definitions": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-definitions.md",
		desc: "Consistent with type definition either interface or type\n ",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/consistent-type-imports": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-imports.md",
		desc: "Enforces consistent usage of type imports",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/explicit-function-return-type": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md",
		desc: "Require explicit return types on functions and class methods",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/explicit-member-accessibility": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md",
		desc:
			"Require explicit accessibility modifiers on class properties and methods",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/explicit-module-boundary-types": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md",
		desc:
			"Require explicit return and argument types on exported functions' and classes' public class methods",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/member-delimiter-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-delimiter-style.md",
		desc:
			"Require a specific member delimiter style for interfaces and type literals",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/member-ordering": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-ordering.md",
		desc: "Require a consistent member declaration order",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/method-signature-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/method-signature-style.md",
		desc: "Enforces using a particular method signature syntax.",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/naming-convention": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/naming-convention.md",
		desc: "Enforces naming conventions for everything across a codebase",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-base-to-string": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-base-to-string.md",
		desc:
			"Requires that .toString() is only called on objects which provide useful information when\n stringified",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-confusing-non-null-assertion": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md",
		desc: "Disallow non-null assertion in locations that may be confusing",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-confusing-void-expression": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md",
		desc: "Requires expressions of type void to appear in statement position",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-dynamic-delete": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dynamic-delete.md",
		desc: "Disallow the delete operator with computed key expressions",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-empty-interface": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-empty-interface.md",
		desc: "Disallow the declaration of empty interfaces",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-explicit-any": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-explicit-any.md",
		desc: "Disallow usage of the any type",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-extra-non-null-assertion": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md",
		desc: "Disallow extra non-null assertion",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-extraneous-class": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extraneous-class.md",
		desc: "Forbids the use of classes as namespaces",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-floating-promises": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-floating-promises.md",
		desc: "Requires Promise-like values to be handled appropriately",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-for-in-array": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-for-in-array.md",
		desc: "Disallow iterating over an array with a for-in loop",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-implicit-any-catch": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md",
		desc: "Disallow usage of the implicit any type in catch clauses",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-inferrable-types": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-inferrable-types.md",
		desc:
			"Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean\n ",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-invalid-void-type": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-void-type.md",
		desc: "Disallows usage of void type outside of generic or return types",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-misused-new": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-misused-new.md",
		desc: "Enforce valid definition of new and constructor\n ",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-misused-promises": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-misused-promises.md",
		desc: "Avoid using promises in places not designed to handle them",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-namespace": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-namespace.md",
		desc: "Disallow the use of custom TypeScript modules and namespaces",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-non-null-asserted-optional-chain": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md",
		desc:
			"Disallows using a non-null assertion after an optional chain expression",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-non-null-assertion": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-non-null-assertion.md",
		desc: "Disallows non-null assertions using the ! postfix operator",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-parameter-properties": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-parameter-properties.md",
		desc: "Disallow the use of parameter properties in class constructors",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-require-imports": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-require-imports.md",
		desc: "Disallows invocation of require()\n ",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-this-alias": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-this-alias.md",
		desc: "Disallow aliasing this\n ",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-type-alias": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-type-alias.md",
		desc: "Disallow the use of type aliases",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md",
		desc: "Flags unnecessary equality comparisons against boolean literals",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unnecessary-condition": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md",
		desc:
			"Prevents conditionals where the type is always truthy or always falsy",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unnecessary-qualifier": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md",
		desc: "Warns when a namespace qualifier is unnecessary",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unnecessary-type-arguments": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md",
		desc: "Enforces that type arguments will not be used if not required",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unnecessary-type-assertion": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md",
		desc: "Warns if a type assertion does not change the type of an expression",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unnecessary-type-constraint": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md",
		desc: "Disallows unnecessary constraints on generic types",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-unsafe-assignment": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md",
		desc: "Disallows assigning any to variables and properties",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-unsafe-call": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-call.md",
		desc: "Disallows calling an any type value",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-unsafe-member-access": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md",
		desc: "Disallows member access on any typed variables",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-unsafe-return": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unsafe-return.md",
		desc: "Disallows returning any from a function",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-var-requires": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-var-requires.md",
		desc: "Disallows the use of require statements except in import statements",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/non-nullable-type-assertion-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md",
		desc: "Prefers a non-null assertion over explicit type cast when possible",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-as-const": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-as-const.md",
		desc: "Prefer usage of as const over literal type",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-enum-initializers": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md",
		desc: "Prefer initializing each enums member value",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-for-of": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-for-of.md",
		desc:
			"Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being\n iterated\n ",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-function-type": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-function-type.md",
		desc: "Use function types instead of interfaces with call signatures",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-includes": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-includes.md",
		desc: "Enforce includes method over indexOf method",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-literal-enum-member": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md",
		desc:
			"Require that all enum members be literal values to prevent unintended enum member name shadow issues",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-namespace-keyword": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md",
		desc:
			"Require the use of the namespace keyword instead of the module keyword to declare\n custom TypeScript modules",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-nullish-coalescing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md",
		desc:
			"Enforce the usage of the nullish coalescing operator instead of logical chaining",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-optional-chain": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md",
		desc:
			"Prefer using concise optional chain expressions instead of chained logical ands",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-readonly": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-readonly.md",
		desc:
			"Requires that private members are marked as readonly if they're never modified outside of the\n constructor",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-readonly-parameter-types": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md",
		desc:
			"Requires that function parameters are typed as readonly to prevent accidental mutation of inputs",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/prefer-reduce-type-parameter": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md",
		desc:
			"Prefer using type parameter when calling Array#reduce instead of casting",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-regexp-exec": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md",
		desc:
			"Enforce that RegExp#exec is used instead of String#match if no global flag is\n provided",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/prefer-string-starts-ends-with": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md",
		desc:
			"Enforce the use of String#startsWith and String#endsWith instead of other\n equivalent\n methods of checking substrings",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/prefer-ts-expect-error": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md",
		desc: "Recommends using @ts-expect-error over @ts-ignore\n ",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/promise-function-async": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md",
		desc:
			"Requires any function or method that returns a Promise to be marked async",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/require-array-sort-compare": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/require-array-sort-compare.md",
		desc: "Requires Array#sort calls to always provide a compareFunction\n ",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/restrict-plus-operands": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/restrict-plus-operands.md",
		desc:
			"When adding two variables, operands must both be of type number or of type string",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/restrict-template-expressions": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/restrict-template-expressions.md",
		desc: "Enforce template literal expressions to be of string type",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/sort-type-union-intersection-members": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md",
		desc:
			"Enforces that members of a type union/intersection are sorted alphabetically",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/strict-boolean-expressions": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md",
		desc: "Restricts the types allowed in boolean expressions",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/switch-exhaustiveness-check": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md",
		desc: "Exhaustiveness checking in switch with union type",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/triple-slash-reference": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/triple-slash-reference.md",
		desc:
			"Sets preference level for triple slash directives versus ES6-style import declarations",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/type-annotation-spacing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/type-annotation-spacing.md",
		desc: "Require consistent spacing around type annotations",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/typedef": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/typedef.md",
		desc: "Requires type annotations to exist",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/unbound-method": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unbound-method.md",
		desc: "Enforces unbound methods are called with their expected scope",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/unified-signatures": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unified-signatures.md",
		desc:
			"Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter\n ",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/brace-style": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/brace-style.md",
		desc: "Enforce consistent brace style for blocks",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/comma-dangle": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-dangle.md",
		desc: "Require or disallow trailing comma",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/comma-spacing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-spacing.md",
		desc: "Enforces consistent spacing before and after commas",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/default-param-last": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/default-param-last.md",
		desc: "Enforce default parameters to be last",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/dot-notation": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/dot-notation.md",
		desc: "enforce dot notation whenever possible",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/func-call-spacing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/func-call-spacing.md",
		desc:
			"Require or disallow spacing between function identifiers and their invocations",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/indent": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/indent.md",
		desc: "Enforce consistent indentation",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/init-declarations": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/init-declarations.md",
		desc: "require or disallow initialization in variable declarations",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/keyword-spacing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/keyword-spacing.md",
		desc: "Enforce consistent spacing before and after keywords",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/lines-between-class-members": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/lines-between-class-members.md",
		desc: "Require or disallow an empty line between class members",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-array-constructor": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-array-constructor.md",
		desc: "Disallow generic Array constructors",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-dupe-class-members": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dupe-class-members.md",
		desc: "Disallow duplicate class members",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-duplicate-imports": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-duplicate-imports.md",
		desc: "Disallow duplicate imports",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-empty-function": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-empty-function.md",
		desc: "Disallow empty functions",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-extra-parens": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-parens.md",
		desc: "Disallow unnecessary parentheses",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/no-extra-semi": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-semi.md",
		desc: "Disallow unnecessary semicolons",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "fixable",
	},
	"@typescript-eslint/no-implied-eval": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-implied-eval.md",
		desc: "Disallow the use of eval()-like methods",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-invalid-this": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-this.md",
		desc: "Disallow this keywords outside of classes or class-like objects",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-loop-func": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loop-func.md",
		desc:
			"Disallow function declarations that contain unsafe references inside loop statements",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-loss-of-precision": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loss-of-precision.md",
		desc: "Disallow literal numbers that lose precision",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-magic-numbers": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-magic-numbers.md",
		desc: "Disallow magic numbers",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-redeclare": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-redeclare.md",
		desc: "Disallow variable redeclaration",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-shadow": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-shadow.md",
		desc:
			"Disallow variable declarations from shadowing variables declared in the outer scope",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-throw-literal": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-throw-literal.md",
		desc: "Disallow throwing literals as exceptions",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-unused-expressions": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-expressions.md",
		desc: "Disallow unused expressions",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-unused-vars": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-vars.md",
		desc: "Disallow unused variables",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/no-use-before-define": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-use-before-define.md",
		desc: "Disallow the use of variables before they are defined",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/no-useless-constructor": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md",
		desc: "Disallow unnecessary constructors",
		recommended: "",
		fixable: "",
	},
	"@typescript-eslint/object-curly-spacing": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/object-curly-spacing.md",
		desc: "Enforce consistent spacing inside braces",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/quotes": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/quotes.md",
		desc:
			"Enforce the consistent use of either backticks, double, or single quotes",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/require-await": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/require-await.md",
		desc: "Disallow async functions which have no await expression",
		recommended: "recommended",
		isRecommended: "recommended",
		fixable: "",
	},
	"@typescript-eslint/return-await": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/return-await.md",
		desc: "Enforces consistent returning of awaited values",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/semi": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/semi.md",
		desc: "Require or disallow semicolons instead of ASI",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/space-before-function-paren": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-before-function-paren.md",
		desc: "Enforces consistent spacing before function parenthesis",
		recommended: "",
		fixable: "fixable",
	},
	"@typescript-eslint/space-infix-ops": {
		href:
			"https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-infix-ops.md",
		desc:
			"This rule is aimed at ensuring there are spaces around infix operators.",
		recommended: "",
		fixable: "fixable",
	},
};

module.exports = typescriptRulesTransform;
