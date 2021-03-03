const vueRules = {
	"vue/comment-directive": {
		href: "https://eslint.vuejs.org/rules/comment-directive.html",
		desc: "support comment-directives in <template>",
	},
	"vue/experimental-script-setup-vars": {
		href: "https://eslint.vuejs.org/rules/experimental-script-setup-vars.html",
		desc:
			"prevent variables defined in <script setup> to be marked as\n undefined",
	},
	"vue/jsx-uses-vars": {
		href: "https://eslint.vuejs.org/rules/jsx-uses-vars.html",
		desc: "prevent variables used in JSX to be marked as unused",
	},
	"vue/no-arrow-functions-in-watch": {
		href: "https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html",
		desc: "disallow using arrow functions to define watcher",
	},
	"vue/no-async-in-computed-properties": {
		href: "https://eslint.vuejs.org/rules/no-async-in-computed-properties.html",
		desc: "disallow asynchronous actions in computed properties",
	},
	"vue/no-deprecated-data-object-declaration": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html",
		desc:
			"disallow using deprecated object declaration on data (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-destroyed-lifecycle": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",
		desc:
			"disallow using deprecated destroyed and beforeDestroy\n lifecycle hooks (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-dollar-listeners-api": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html",
		desc: "disallow using deprecated $listeners (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-dollar-scopedslots-api": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html",
		desc: "disallow using deprecated $scopedSlots (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-events-api": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-events-api.html",
		desc: "disallow using deprecated events api (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-filter": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-filter.html",
		desc: "disallow using deprecated filters syntax (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-functional-template": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-functional-template.html",
		desc:
			"disallow using deprecated the functional template (in Vue.js\n 3.0.0+)\n ",
	},
	"vue/no-deprecated-html-element-is": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html",
		desc:
			"disallow using deprecated the is attribute on HTML elements (in\n Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-inline-template": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-inline-template.html",
		desc:
			"disallow using deprecated inline-template attribute (in Vue.js\n 3.0.0+)",
	},
	"vue/no-deprecated-props-default-this": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html",
		desc: "disallow props default function this access",
	},
	"vue/no-deprecated-scope-attribute": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html",
		desc: "disallow deprecated scope attribute (in Vue.js 2.5.0+)",
	},
	"vue/no-deprecated-slot-attribute": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html",
		desc: "disallow deprecated slot attribute (in Vue.js 2.6.0+)",
	},
	"vue/no-deprecated-slot-scope-attribute": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html",
		desc: "disallow deprecated slot-scope attribute (in Vue.js 2.6.0+)",
	},
	"vue/no-deprecated-v-bind-sync": {
		href: "https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html",
		desc:
			"disallow use of deprecated .sync modifier on v-bind\n directive (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-v-on-native-modifier": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html",
		desc: "disallow using deprecated .native modifiers (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-v-on-number-modifiers": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html",
		desc:
			"disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)",
	},
	"vue/no-deprecated-vue-config-keycodes": {
		href:
			"https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html",
		desc: "disallow using deprecated Vue.config.keyCodes (in Vue.js 3.0.0+)\n ",
	},
	"vue/no-dupe-keys": {
		href: "https://eslint.vuejs.org/rules/no-dupe-keys.html",
		desc: "disallow duplication of field names",
	},
	"vue/no-dupe-v-else-if": {
		href: "https://eslint.vuejs.org/rules/no-dupe-v-else-if.html",
		desc: "disallow duplicate conditions in v-if / v-else-if\n chains\n ",
	},
	"vue/no-duplicate-attributes": {
		href: "https://eslint.vuejs.org/rules/no-duplicate-attributes.html",
		desc: "disallow duplication of attributes",
	},
	"vue/no-lifecycle-after-await": {
		href: "https://eslint.vuejs.org/rules/no-lifecycle-after-await.html",
		desc: "disallow asynchronously registered lifecycle hooks",
	},
	"vue/no-mutating-props": {
		href: "https://eslint.vuejs.org/rules/no-mutating-props.html",
		desc: "disallow mutation of component props",
	},
	"vue/no-parsing-error": {
		href: "https://eslint.vuejs.org/rules/no-parsing-error.html",
		desc: "disallow parsing errors in <template>",
	},
	"vue/no-ref-as-operand": {
		href: "https://eslint.vuejs.org/rules/no-ref-as-operand.html",
		desc:
			"disallow use of value wrapped by ref() (Composition API) as an\n operand",
	},
	"vue/no-reserved-keys": {
		href: "https://eslint.vuejs.org/rules/no-reserved-keys.html",
		desc: "disallow overwriting reserved keys",
	},
	"vue/no-setup-props-destructure": {
		href: "https://eslint.vuejs.org/rules/no-setup-props-destructure.html",
		desc: "disallow destructuring of props passed to setup",
	},
	"vue/no-shared-component-data": {
		href: "https://eslint.vuejs.org/rules/no-shared-component-data.html",
		desc: "enforce component's data property to be a function",
	},
	"vue/no-side-effects-in-computed-properties": {
		href:
			"https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html",
		desc: "disallow side effects in computed properties",
	},
	"vue/no-template-key": {
		href: "https://eslint.vuejs.org/rules/no-template-key.html",
		desc: "disallow key attribute on <template>",
	},
	"vue/no-textarea-mustache": {
		href: "https://eslint.vuejs.org/rules/no-textarea-mustache.html",
		desc: "disallow mustaches in <textarea>",
	},
	"vue/no-unused-components": {
		href: "https://eslint.vuejs.org/rules/no-unused-components.html",
		desc: "disallow registering components that are not used inside templates",
	},
	"vue/no-unused-vars": {
		href: "https://eslint.vuejs.org/rules/no-unused-vars.html",
		desc:
			"disallow unused variable definitions of v-for directives or scope attributes\n ",
	},
	"vue/no-use-v-if-with-v-for": {
		href: "https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html",
		desc: "disallow use v-if on the same element as v-for",
	},
	"vue/no-v-for-template-key-on-child": {
		href: "https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html",
		desc: "disallow key of <template v-for> placed on child elements\n ",
	},
	"vue/no-watch-after-await": {
		href: "https://eslint.vuejs.org/rules/no-watch-after-await.html",
		desc: "disallow asynchronously registered watch",
	},
	"vue/require-component-is": {
		href: "https://eslint.vuejs.org/rules/require-component-is.html",
		desc: "require v-bind:is of <component> elements",
	},
	"vue/require-prop-type-constructor": {
		href: "https://eslint.vuejs.org/rules/require-prop-type-constructor.html",
		desc: "require prop type to be a constructor",
	},
	"vue/require-render-return": {
		href: "https://eslint.vuejs.org/rules/require-render-return.html",
		desc: "enforce render function to always return value",
	},
	"vue/require-slots-as-functions": {
		href: "https://eslint.vuejs.org/rules/require-slots-as-functions.html",
		desc: "enforce properties of $slots to be used as a function",
	},
	"vue/require-toggle-inside-transition": {
		href:
			"https://eslint.vuejs.org/rules/require-toggle-inside-transition.html",
		desc: "require control the display of the content inside\n <transition>\n ",
	},
	"vue/require-v-for-key": {
		href: "https://eslint.vuejs.org/rules/require-v-for-key.html",
		desc: "require v-bind:key with v-for directives",
	},
	"vue/require-valid-default-prop": {
		href: "https://eslint.vuejs.org/rules/require-valid-default-prop.html",
		desc: "enforce props default values to be valid",
	},
	"vue/return-in-computed-property": {
		href: "https://eslint.vuejs.org/rules/return-in-computed-property.html",
		desc: "enforce that a return statement is present in computed property",
	},
	"vue/return-in-emits-validator": {
		href: "https://eslint.vuejs.org/rules/return-in-emits-validator.html",
		desc: "enforce that a return statement is present in emits validator",
	},
	"vue/use-v-on-exact": {
		href: "https://eslint.vuejs.org/rules/use-v-on-exact.html",
		desc: "enforce usage of exact modifier on v-on",
	},
	"vue/valid-template-root": {
		href: "https://eslint.vuejs.org/rules/valid-template-root.html",
		desc: "enforce valid template root",
	},
	"vue/valid-v-bind": {
		href: "https://eslint.vuejs.org/rules/valid-v-bind.html",
		desc: "enforce valid v-bind directives",
	},
	"vue/valid-v-cloak": {
		href: "https://eslint.vuejs.org/rules/valid-v-cloak.html",
		desc: "enforce valid v-cloak directives",
	},
	"vue/valid-v-else-if": {
		href: "https://eslint.vuejs.org/rules/valid-v-else-if.html",
		desc: "enforce valid v-else-if directives",
	},
	"vue/valid-v-else": {
		href: "https://eslint.vuejs.org/rules/valid-v-else.html",
		desc: "enforce valid v-else directives",
	},
	"vue/valid-v-for": {
		href: "https://eslint.vuejs.org/rules/valid-v-for.html",
		desc: "enforce valid v-for directives",
	},
	"vue/valid-v-html": {
		href: "https://eslint.vuejs.org/rules/valid-v-html.html",
		desc: "enforce valid v-html directives",
	},
	"vue/valid-v-if": {
		href: "https://eslint.vuejs.org/rules/valid-v-if.html",
		desc: "enforce valid v-if directives",
	},
	"vue/valid-v-is": {
		href: "https://eslint.vuejs.org/rules/valid-v-is.html",
		desc: "enforce valid v-is directives",
	},
	"vue/valid-v-model": {
		href: "https://eslint.vuejs.org/rules/valid-v-model.html",
		desc: "enforce valid v-model directives",
	},
	"vue/valid-v-on": {
		href: "https://eslint.vuejs.org/rules/valid-v-on.html",
		desc: "enforce valid v-on directives",
	},
	"vue/valid-v-once": {
		href: "https://eslint.vuejs.org/rules/valid-v-once.html",
		desc: "enforce valid v-once directives",
	},
	"vue/valid-v-pre": {
		href: "https://eslint.vuejs.org/rules/valid-v-pre.html",
		desc: "enforce valid v-pre directives",
	},
	"vue/valid-v-show": {
		href: "https://eslint.vuejs.org/rules/valid-v-show.html",
		desc: "enforce valid v-show directives",
	},
	"vue/valid-v-slot": {
		href: "https://eslint.vuejs.org/rules/valid-v-slot.html",
		desc: "enforce valid v-slot directives",
	},
	"vue/valid-v-text": {
		href: "https://eslint.vuejs.org/rules/valid-v-text.html",
		desc: "enforce valid v-text directives",
	},
	"vue/attribute-hyphenation": {
		href: "https://eslint.vuejs.org/rules/attribute-hyphenation.html",
		desc: "enforce attribute naming style on custom components in template",
	},
	"vue/component-definition-name-casing": {
		href:
			"https://eslint.vuejs.org/rules/component-definition-name-casing.html",
		desc: "enforce specific casing for component definition name",
	},
	"vue/html-closing-bracket-newline": {
		href: "https://eslint.vuejs.org/rules/html-closing-bracket-newline.html",
		desc: "require or disallow a line break before tag's closing brackets",
	},
	"vue/html-closing-bracket-spacing": {
		href: "https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html",
		desc: "require or disallow a space before tag's closing brackets",
	},
	"vue/html-end-tags": {
		href: "https://eslint.vuejs.org/rules/html-end-tags.html",
		desc: "enforce end tag style",
	},
	"vue/html-indent": {
		href: "https://eslint.vuejs.org/rules/html-indent.html",
		desc: "enforce consistent indentation in <template>",
	},
	"vue/html-quotes": {
		href: "https://eslint.vuejs.org/rules/html-quotes.html",
		desc: "enforce quotes style of HTML attributes",
	},
	"vue/html-self-closing": {
		href: "https://eslint.vuejs.org/rules/html-self-closing.html",
		desc: "enforce self-closing style",
	},
	"vue/max-attributes-per-line": {
		href: "https://eslint.vuejs.org/rules/max-attributes-per-line.html",
		desc: "enforce the maximum number of attributes per line",
	},
	"vue/multiline-html-element-content-newline": {
		href:
			"https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html",
		desc:
			"require a line break before and after the contents of a multiline element",
	},
	"vue/mustache-interpolation-spacing": {
		href: "https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html",
		desc: "enforce unified spacing in mustache interpolations",
	},
	"vue/no-multi-spaces": {
		href: "https://eslint.vuejs.org/rules/no-multi-spaces.html",
		desc: "disallow multiple spaces",
	},
	"vue/no-spaces-around-equal-signs-in-attribute": {
		href:
			"https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html",
		desc: "disallow spaces around equal signs in attribute",
	},
	"vue/no-template-shadow": {
		href: "https://eslint.vuejs.org/rules/no-template-shadow.html",
		desc:
			"disallow variable declarations from shadowing variables declared in the outer\n scope",
	},
	"vue/one-component-per-file": {
		href: "https://eslint.vuejs.org/rules/one-component-per-file.html",
		desc: "enforce that each component should be in its own file",
	},
	"vue/prop-name-casing": {
		href: "https://eslint.vuejs.org/rules/prop-name-casing.html",
		desc: "enforce specific casing for the Prop name in Vue components",
	},
	"vue/require-default-prop": {
		href: "https://eslint.vuejs.org/rules/require-default-prop.html",
		desc: "require default value for props",
	},
	"vue/require-explicit-emits": {
		href: "https://eslint.vuejs.org/rules/require-explicit-emits.html",
		desc: "require emits option with name triggered by $emit()\n ",
	},
	"vue/require-prop-types": {
		href: "https://eslint.vuejs.org/rules/require-prop-types.html",
		desc: "require type definitions in props",
	},
	"vue/singleline-html-element-content-newline": {
		href:
			"https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html",
		desc:
			"require a line break before and after the contents of a singleline element",
	},
	"vue/v-bind-style": {
		href: "https://eslint.vuejs.org/rules/v-bind-style.html",
		desc: "enforce v-bind directive style",
	},
	"vue/v-on-style": {
		href: "https://eslint.vuejs.org/rules/v-on-style.html",
		desc: "enforce v-on directive style",
	},
	"vue/v-slot-style": {
		href: "https://eslint.vuejs.org/rules/v-slot-style.html",
		desc: "enforce v-slot directive style",
	},
	"vue/attributes-order": {
		href: "https://eslint.vuejs.org/rules/attributes-order.html",
		desc: "enforce order of attributes",
	},
	"vue/component-tags-order": {
		href: "https://eslint.vuejs.org/rules/component-tags-order.html",
		desc: "enforce order of component top-level elements",
	},
	"vue/no-lone-template": {
		href: "https://eslint.vuejs.org/rules/no-lone-template.html",
		desc: "disallow unnecessary <template>",
	},
	"vue/no-multiple-slot-args": {
		href: "https://eslint.vuejs.org/rules/no-multiple-slot-args.html",
		desc: "disallow to pass multiple arguments to scoped slots",
	},
	"vue/no-v-html": {
		href: "https://eslint.vuejs.org/rules/no-v-html.html",
		desc: "disallow use of v-html to prevent XSS attack",
	},
	"vue/order-in-components": {
		href: "https://eslint.vuejs.org/rules/order-in-components.html",
		desc: "enforce order of properties in components",
	},
	"vue/this-in-template": {
		href: "https://eslint.vuejs.org/rules/this-in-template.html",
		desc: "disallow usage of this in template",
	},
	"vue/no-custom-modifiers-on-v-model": {
		href: "https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html",
		desc: "disallow custom modifiers on v-model used on the component",
	},
	"vue/no-multiple-template-root": {
		href: "https://eslint.vuejs.org/rules/no-multiple-template-root.html",
		desc: "disallow adding multiple root nodes to the template",
	},
	"vue/no-v-for-template-key": {
		href: "https://eslint.vuejs.org/rules/no-v-for-template-key.html",
		desc: "disallow key attribute on <template v-for>",
	},
	"vue/no-v-model-argument": {
		href: "https://eslint.vuejs.org/rules/no-v-model-argument.html",
		desc: "disallow adding an argument to v-model used in custom component\n ",
	},
	"vue/valid-v-bind-sync": {
		href: "https://eslint.vuejs.org/rules/valid-v-bind-sync.html",
		desc: "enforce valid .sync modifier on v-bind directives",
	},
	"vue/block-tag-newline": {
		href: "https://eslint.vuejs.org/rules/block-tag-newline.html",
		desc:
			"enforce line breaks after opening and before closing block-level tags",
	},
	"vue/component-name-in-template-casing": {
		href:
			"https://eslint.vuejs.org/rules/component-name-in-template-casing.html",
		desc: "enforce specific casing for the component naming style in template",
	},
	"vue/custom-event-name-casing": {
		href: "https://eslint.vuejs.org/rules/custom-event-name-casing.html",
		desc: "enforce specific casing for custom event name",
	},
	"vue/html-button-has-type": {
		href: "https://eslint.vuejs.org/rules/html-button-has-type.html",
		desc: "disallow usage of button without an explicit type attribute",
	},
	"vue/html-comment-content-newline": {
		href: "https://eslint.vuejs.org/rules/html-comment-content-newline.html",
		desc: "enforce unified line brake in HTML comments",
	},
	"vue/html-comment-content-spacing": {
		href: "https://eslint.vuejs.org/rules/html-comment-content-spacing.html",
		desc: "enforce unified spacing in HTML comments",
	},
	"vue/html-comment-indent": {
		href: "https://eslint.vuejs.org/rules/html-comment-indent.html",
		desc: "enforce consistent indentation in HTML comments",
	},
	"vue/match-component-file-name": {
		href: "https://eslint.vuejs.org/rules/match-component-file-name.html",
		desc: "require component name property to match its file name",
	},
	"vue/new-line-between-multi-line-property": {
		href:
			"https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html",
		desc: "enforce new lines between multi-line properties in Vue components",
	},
	"vue/next-tick-style": {
		href: "https://eslint.vuejs.org/rules/next-tick-style.html",
		desc: "enforce Promise or callback style in nextTick",
	},
	"vue/no-bare-strings-in-template": {
		href: "https://eslint.vuejs.org/rules/no-bare-strings-in-template.html",
		desc: "disallow the use of bare strings in <template>",
	},
	"vue/no-boolean-default": {
		href: "https://eslint.vuejs.org/rules/no-boolean-default.html",
		desc: "disallow boolean defaults",
	},
	"vue/no-duplicate-attr-inheritance": {
		href: "https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html",
		desc:
			'enforce inheritAttrs to be set to false when using\n v-bind="$attrs"\n ',
	},
	"vue/no-empty-component-block": {
		href: "https://eslint.vuejs.org/rules/no-empty-component-block.html",
		desc: "disallow the <template> <script>\n <style> block to be empty\n ",
	},
	"vue/no-multiple-objects-in-class": {
		href: "https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html",
		desc: "disallow to pass multiple objects into array to class",
	},
	"vue/no-potential-component-option-typo": {
		href:
			"https://eslint.vuejs.org/rules/no-potential-component-option-typo.html",
		desc: "disallow a potential typo in your component property",
	},
	"vue/no-reserved-component-names": {
		href: "https://eslint.vuejs.org/rules/no-reserved-component-names.html",
		desc: "disallow the use of reserved names in component definitions",
	},
	"vue/no-restricted-block": {
		href: "https://eslint.vuejs.org/rules/no-restricted-block.html",
		desc: "disallow specific block",
	},
	"vue/no-restricted-call-after-await": {
		href: "https://eslint.vuejs.org/rules/no-restricted-call-after-await.html",
		desc: "disallow asynchronously called restricted methods",
	},
	"vue/no-restricted-component-options": {
		href: "https://eslint.vuejs.org/rules/no-restricted-component-options.html",
		desc: "disallow specific component option",
	},
	"vue/no-restricted-custom-event": {
		href: "https://eslint.vuejs.org/rules/no-restricted-custom-event.html",
		desc: "disallow specific custom event",
	},
	"vue/no-restricted-props": {
		href: "https://eslint.vuejs.org/rules/no-restricted-props.html",
		desc: "disallow specific props",
	},
	"vue/no-restricted-static-attribute": {
		href: "https://eslint.vuejs.org/rules/no-restricted-static-attribute.html",
		desc: "disallow specific attribute",
	},
	"vue/no-restricted-v-bind": {
		href: "https://eslint.vuejs.org/rules/no-restricted-v-bind.html",
		desc: "disallow specific argument in v-bind",
	},
	"vue/no-static-inline-styles": {
		href: "https://eslint.vuejs.org/rules/no-static-inline-styles.html",
		desc: "disallow static inline style attributes",
	},
	"vue/no-template-target-blank": {
		href: "https://eslint.vuejs.org/rules/no-template-target-blank.html",
		desc:
			'disallow target="_blank" attribute without rel="noopener noreferrer"',
	},
	"vue/no-unregistered-components": {
		href: "https://eslint.vuejs.org/rules/no-unregistered-components.html",
		desc: "disallow using components that are not registered inside templates",
	},
	"vue/no-unsupported-features": {
		href: "https://eslint.vuejs.org/rules/no-unsupported-features.html",
		desc: "disallow unsupported Vue.js syntax on the specified version",
	},
	"vue/no-unused-properties": {
		href: "https://eslint.vuejs.org/rules/no-unused-properties.html",
		desc: "disallow unused properties",
	},
	"vue/no-useless-mustaches": {
		href: "https://eslint.vuejs.org/rules/no-useless-mustaches.html",
		desc: "disallow unnecessary mustache interpolations",
	},
	"vue/no-useless-v-bind": {
		href: "https://eslint.vuejs.org/rules/no-useless-v-bind.html",
		desc: "disallow unnecessary v-bind directives",
	},
	"vue/padding-line-between-blocks": {
		href: "https://eslint.vuejs.org/rules/padding-line-between-blocks.html",
		desc: "require or disallow padding lines between blocks",
	},
	"vue/require-direct-export": {
		href: "https://eslint.vuejs.org/rules/require-direct-export.html",
		desc: "require the component to be directly exported",
	},
	"vue/require-name-property": {
		href: "https://eslint.vuejs.org/rules/require-name-property.html",
		desc: "require a name property in Vue components",
	},
	"vue/script-indent": {
		href: "https://eslint.vuejs.org/rules/script-indent.html",
		desc: "enforce consistent indentation in <script>",
	},
	"vue/sort-keys": {
		href: "https://eslint.vuejs.org/rules/sort-keys.html",
		desc:
			"enforce sort-keys in a manner that is compatible with order-in-components",
	},
	"vue/static-class-names-order": {
		href: "https://eslint.vuejs.org/rules/static-class-names-order.html",
		desc: "enforce static class names order",
	},
	"vue/v-for-delimiter-style": {
		href: "https://eslint.vuejs.org/rules/v-for-delimiter-style.html",
		desc: "enforce v-for directive's delimiter style",
	},
	"vue/v-on-event-hyphenation": {
		href: "https://eslint.vuejs.org/rules/v-on-event-hyphenation.html",
		desc: "enforce v-on event naming style on custom components in template",
	},
	"vue/v-on-function-call": {
		href: "https://eslint.vuejs.org/rules/v-on-function-call.html",
		desc:
			"enforce or forbid parentheses after method calls without arguments in\n v-on directives\n ",
	},
	"vue/valid-next-tick": {
		href: "https://eslint.vuejs.org/rules/valid-next-tick.html",
		desc: "enforce valid nextTick function calls",
	},
	"vue/array-bracket-newline": {
		href: "https://eslint.vuejs.org/rules/array-bracket-newline.html",
		desc: "enforce linebreaks after opening and before closing array brackets",
	},
	"vue/array-bracket-spacing": {
		href: "https://eslint.vuejs.org/rules/array-bracket-spacing.html",
		desc: "enforce consistent spacing inside array brackets",
	},
	"vue/arrow-spacing": {
		href: "https://eslint.vuejs.org/rules/arrow-spacing.html",
		desc:
			"enforce consistent spacing before and after the arrow in arrow functions",
	},
	"vue/block-spacing": {
		href: "https://eslint.vuejs.org/rules/block-spacing.html",
		desc:
			"disallow or enforce spaces inside of blocks after opening block and before\n closing\n block",
	},
	"vue/brace-style": {
		href: "https://eslint.vuejs.org/rules/brace-style.html",
		desc: "enforce consistent brace style for blocks",
	},
	"vue/camelcase": {
		href: "https://eslint.vuejs.org/rules/camelcase.html",
		desc: "enforce camelcase naming convention",
	},
	"vue/comma-dangle": {
		href: "https://eslint.vuejs.org/rules/comma-dangle.html",
		desc: "require or disallow trailing commas",
	},
	"vue/comma-spacing": {
		href: "https://eslint.vuejs.org/rules/comma-spacing.html",
		desc: "enforce consistent spacing before and after commas",
	},
	"vue/comma-style": {
		href: "https://eslint.vuejs.org/rules/comma-style.html",
		desc: "enforce consistent comma style",
	},
	"vue/dot-location": {
		href: "https://eslint.vuejs.org/rules/dot-location.html",
		desc: "enforce consistent newlines before and after dots",
	},
	"vue/dot-notation": {
		href: "https://eslint.vuejs.org/rules/dot-notation.html",
		desc: "enforce dot notation whenever possible",
	},
	"vue/eqeqeq": {
		href: "https://eslint.vuejs.org/rules/eqeqeq.html",
		desc: "require the use of === and !==",
	},
	"vue/func-call-spacing": {
		href: "https://eslint.vuejs.org/rules/func-call-spacing.html",
		desc:
			"require or disallow spacing between function identifiers and their invocations\n ",
	},
	"vue/key-spacing": {
		href: "https://eslint.vuejs.org/rules/key-spacing.html",
		desc:
			"enforce consistent spacing between keys and values in object literal properties\n ",
	},
	"vue/keyword-spacing": {
		href: "https://eslint.vuejs.org/rules/keyword-spacing.html",
		desc: "enforce consistent spacing before and after keywords",
	},
	"vue/max-len": {
		href: "https://eslint.vuejs.org/rules/max-len.html",
		desc: "enforce a maximum line length",
	},
	"vue/no-constant-condition": {
		href: "https://eslint.vuejs.org/rules/no-constant-condition.html",
		desc: "disallow constant expressions in conditions",
	},
	"vue/no-empty-pattern": {
		href: "https://eslint.vuejs.org/rules/no-empty-pattern.html",
		desc: "disallow empty destructuring patterns",
	},
	"vue/no-extra-parens": {
		href: "https://eslint.vuejs.org/rules/no-extra-parens.html",
		desc: "disallow unnecessary parentheses",
	},
	"vue/no-irregular-whitespace": {
		href: "https://eslint.vuejs.org/rules/no-irregular-whitespace.html",
		desc: "disallow irregular whitespace",
	},
	"vue/no-restricted-syntax": {
		href: "https://eslint.vuejs.org/rules/no-restricted-syntax.html",
		desc: "disallow specified syntax",
	},
	"vue/no-sparse-arrays": {
		href: "https://eslint.vuejs.org/rules/no-sparse-arrays.html",
		desc: "disallow sparse arrays",
	},
	"vue/no-useless-concat": {
		href: "https://eslint.vuejs.org/rules/no-useless-concat.html",
		desc: "disallow unnecessary concatenation of literals or template literals",
	},
	"vue/object-curly-newline": {
		href: "https://eslint.vuejs.org/rules/object-curly-newline.html",
		desc: "enforce consistent line breaks inside braces",
	},
	"vue/object-curly-spacing": {
		href: "https://eslint.vuejs.org/rules/object-curly-spacing.html",
		desc: "enforce consistent spacing inside braces",
	},
	"vue/object-property-newline": {
		href: "https://eslint.vuejs.org/rules/object-property-newline.html",
		desc: "enforce placing object properties on separate lines",
	},
	"vue/operator-linebreak": {
		href: "https://eslint.vuejs.org/rules/operator-linebreak.html",
		desc: "enforce consistent linebreak style for operators",
	},
	"vue/prefer-template": {
		href: "https://eslint.vuejs.org/rules/prefer-template.html",
		desc: "require template literals instead of string concatenation",
	},
	"vue/space-in-parens": {
		href: "https://eslint.vuejs.org/rules/space-in-parens.html",
		desc: "enforce consistent spacing inside parentheses",
	},
	"vue/space-infix-ops": {
		href: "https://eslint.vuejs.org/rules/space-infix-ops.html",
		desc: "require spacing around infix operators",
	},
	"vue/space-unary-ops": {
		href: "https://eslint.vuejs.org/rules/space-unary-ops.html",
		desc: "enforce consistent spacing before or after unary operators",
	},
	"vue/template-curly-spacing": {
		href: "https://eslint.vuejs.org/rules/template-curly-spacing.html",
		desc:
			"require or disallow spacing around embedded expressions of template strings",
	},
};

module.exports = vueRules;
