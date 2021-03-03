const {
	exportGenerateMd,
	eslintRules,
	vueRules,
	typescriptTransformRules,
	eslintWithPrettier,
	typescriptWithPrettier,
	// exportEslintRelationship,
	// exportEslintTypescriptRelationship,
	// eslintTypescriptRelationship,
} = require("./rulesManage.js");

exportGenerateMd("eslint", eslintRules);
exportGenerateMd("prettier", eslintWithPrettier);
exportGenerateMd("typescriptWithPrettier", typescriptTransformRules);
exportGenerateMd("typescriptWithPrettier", typescriptWithPrettier);
exportGenerateMd("vue", vueRules);

// exportEslintPrettierRelationship();
// exportEslintTypescriptRelationship();
// eslintTypescriptRelationship();
