# eslint-plugin-vue

[rules](https://eslint.vuejs.org/rules/)

# rules

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
