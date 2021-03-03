const filePath = "./aa.json";
const fileMdPath = "./eslint.md";

const eslintRules = require("./data/eslintRules");
const prettierRules = require("./data/prettierRules");
const typescriptTransformRules = require("./data/typescriptTransformRules");
const eslintWithPrettier = require("./data/eslintWithPrettier");
const typescriptWithPrettier = require("./data/typescriptWithPrettier");
const vueRules = require("./data/vueRules");

function generateEslintRules() {
	const arr = [];
	document.querySelectorAll(".inuse-rules").forEach((dom) => {
		const desc = dom.previousElementSibling.innerHTML;
		const obg = { desc, rules: {} };
		dom.querySelectorAll(".rule-zh").forEach((doms) => {
			const innerHTML0 = doms.children[0].innerHTML;
			const innerHTML1 = doms.children[1].innerHTML;
			const innerHTML2 = doms.children[2].innerHTML;
			const innerHTML3 = doms.children[3].innerHTML;
			const aa = innerHTML2.match(/href="(.+)"/)[1];
			const bb = innerHTML3.match(/<p>(.+)<\/p>/)[1];
			const cc =
				innerHTML0.match(/title="([\s\S]*?)"\s/) &&
				innerHTML0.match(/title="([\s\S]*?)"\s/)[1];
			const dd =
				innerHTML1.match(/title="([\s\S]*?)"\s/) &&
				innerHTML1.match(/title="([\s\S]*?)"\s/)[1];
			obg["rules"][`${aa}`] = {};
			obg["rules"][`${aa}`]["value"] = bb;
			obg["rules"][`${aa}`]["recommended"] = cc;
			cc && (obg["rules"][`${aa}`]["isRecommended"] = cc);
			obg["rules"][`${aa}`]["fixable"] = dd;
			obg["rules"][`${aa}`][
				"href"
			] = `https://eslint.bootcss.com/docs/rules/${aa}`;
		});
		arr.push(obg);
	});
	document.write(JSON.stringify(arr));
}

let relationshipState = {
	eslint: function (rules) {
		eslintRules.forEach((eslintRule) => {
			Object.keys(eslintRule.rules).forEach((key1) => {
				let flag = false;
				let isConfig = false;
				Object.keys(rules).forEach((key2) => {
					if (key1 === key2) {
						flag = true;
						if (rules[key2] === 0) {
							isConfig = true;
						}
					}
				});
				if (!flag) {
					delete eslintRule.rules[key1];
					return;
				}
				eslintRule.rules[key1].isConfig = isConfig;
			});
		});
		return JSON.stringify(eslintRules);
	},
	typescript: function (rules) {
		Object.keys(typescriptTransformRules).forEach((key1) => {
			let flag = false;
			let isConfig = false;
			Object.keys(rules).forEach((key2) => {
				if (key1 === key2) {
					flag = true;
					if (rules[key2] === 0) {
						isConfig = true;
					}
				}
			});
			if (!flag) {
				delete typescriptTransformRules[key1];
				return;
			}
			typescriptTransformRules[key1].isConfig = isConfig;
		});
		return JSON.stringify(typescriptTransformRules);
	},
};

function eslintRelationship(key, rules) {
	return relationshipState[key](rules);
}

function exportEslintRelationship(state, rules) {
	const fs = require("fs");
	const content = eslintRelationship(state, rules);
	// w 是覆盖写入  a 是追加写入
	// 参数说明。第一个：路径  第二个：写入的内容  第三个：option（写入方式，编码），第四个，回调函数
	fs.writeFile(
		filePath,
		content,
		{ flag: "a", encoding: "utf-8" },
		function (err) {
			if (err) {
				console.log("写入失败");
			} else {
				console.log("成功");
			}
		}
	);
}

let state = {
	eslint: function (rulesObj) {
		let str = "";
		str += `> ${rulesObj.desc}\n\r`;
		Object.keys(rulesObj.rules).forEach((key) => {
			const { value, href, isRecommended } = rulesObj.rules[key];
			if (isRecommended) {
				str += `+ [x] `;
			} else {
				str += `+ [ ] `;
			}

			str += `[${key}](${href}) ${value}\n\r`;
		});

		return str;
	},
	prettier: function (rulesObj) {
		let str = "";
		str += `> ${rulesObj.desc}\n\r`;
		Object.keys(rulesObj.rules).forEach((key) => {
			const { value, href, isConfig } = rulesObj.rules[key];
			if (isConfig) {
				str += `+ [x] `;
			} else {
				str += `+ [ ] `;
			}

			str += `[${key}](${href}) ${value}\n\r`;
		});

		return str;
	},
	typescript: function (rulesObj) {
		let str = "";
		Object.keys(rulesObj).forEach((key) => {
			const { desc, href, isRecommended } = rulesObj[key];
			if (isRecommended) {
				str += `+ [x] `;
			} else {
				str += `+ [ ] `;
			}

			str += `[${key}](${href}) ${desc}\n\r`;
		});

		return str;
	},
	typescriptWithPrettier: function (rulesObj) {
		let str = "";
		Object.keys(rulesObj).forEach((key) => {
			const { desc, href, isConfig } = rulesObj[key];
			if (isConfig) {
				str += `+ [x] `;
			} else {
				str += `+ [ ] `;
			}

			str += `[${key}](${href}) ${desc}\n\r`;
		});

		return str;
	},
	vue: function (rulesObj) {
		let str = "";
		Object.keys(rulesObj).forEach((key) => {
			const { desc, href } = rulesObj[key];
			str += `+ [x] `;
			str += `[${key}](${href}) ${escape(desc)}\n\r`;
		});

		return str;
	},
};

function generateMd(title, arr) {
	let str = "";
	str += `## ${title}\n\r`;

	if (Array.isArray(arr)) {
		arr.forEach((eslintRule) => {
			str += state[title](eslintRule);
		});
	} else if (typeof arr === "object" && arr !== null) {
		str += state[title](arr);
	}

	return str;
}

function exportGenerateMd(title, arr) {
	const fs = require("fs");
	const content = generateMd(title, arr);
	// w 是覆盖写入  a 是追加写入
	// 参数说明。第一个：路径  第二个：写入的内容  第三个：option（写入方式，编码），第四个，回调函数
	fs.writeFile(
		fileMdPath,
		content,
		{ flag: "a", encoding: "utf-8" },
		function (err) {
			if (err) {
				console.log("写入失败");
			} else {
				console.log("成功");
			}
		}
	);
}

function escape(str) {
	str = str.replace(/&/g, "&amp;");
	str = str.replace(/</g, "&lt;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/"/g, "&quto;");
	str = str.replace(/'/g, "&#39;");
	str = str.replace(/`/g, "&#96;");
	str = str.replace(/\//g, "&#x2F;");
	return str;
}

module.exports = {
	eslintRules,
	prettierRules,
	vueRules,
	typescriptTransformRules,
	generateEslintRules,
	eslintRelationship,
	eslintWithPrettier,
	typescriptWithPrettier,
	exportEslintRelationship,
	generateMd,
	exportGenerateMd,
};
