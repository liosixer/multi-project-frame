module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    'globals': {

    },
    env: {
        browser: true, // 浏览器全局变量
        node: true, // Node.js 全局变量和 Node.js 作用域
        es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        jquery: true, // jQuery 全局变量
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    // add your custom rules here
    /**
     * “off” 或 0 - 关闭规则
     * “warn” 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
     * “error” 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     * never:(默认)禁用
     * always:要求
     * */

    rules: {
        // 不需要
        'no-extra-semi': 0, // 可以多余的冒号
        'no-empty-label': 0, // 无标签
        'camelcase': [0, { // 不检查属性名称
            'properties': 'always', // （默认 always）为属性名称强制执行
        }],
        'no-useless-escape': 0, // 此规则标志可以在不改变行为的情况下安全地移除。

        // 警告
        'radix': 1, // 使用parseInt时强制使用基数来指定是十进制还是其他进制
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }], // 允许不使用全等() 排除null

        // 错误
        'vue/max-attributes-per-line': [2, {
            'singleline': 5,
            'multiline': {
                'max': 1,
                'allowFirstLine': false,
            },
        }],
        'vue/html-indent': [2, 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': [],
        }],
        'vue/script-indent': [2, 4, {
            'baseIndent': 1,
            'switchCase': 1,
            'ignores': [],
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/no-v-html': 'off',

        'arrow-body-style': 2, // 要求箭头函数体使用大括号
        'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
        'arrow-spacing': [2, {
            'before': true,
            'after': true,
        }], // 强制箭头函数的箭头前后使用一致的空格
        'accessor-pairs': 2, // 规则警告设置者是否在没有获取者的情况下定义。

        'block-spacing': [2, 'always'], // 打开的块令牌内和同一行上的下一个令牌内强制执行一致的间距。
        'brace-style': [2, '1tbs', { // "1tbs" （默认）强制执行一个真正的大括号风格 ,"stroustrup" 强制执行Stroustrup风格 ,"allman" 强制Allman风格
            'allowSingleLine': true, // （默认false）允许一个块打开和关闭括号在同一行上
        }], // Brace风格与编程中的缩进风格密切相关

        'comma-dangle': [2, 'always-multiline'], // 强制在对象和数组文字中一致地使用尾随逗号。
        'comma-spacing': [2, {
            'before': false,
            'after': true,
        }], // 在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距。
        'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
        'constructor-super': 2, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
        'curly': [2, 'all'], // 强制所有控制语句使用一致的括号风格(必须使用 if(){} 中的{}) all,multi,multi-line,multi-or-nest,multi-or-nest
        'dot-location': [2, 'property'], // 强制执行成员表达式中的换行符一致性。此规则防止在成员表达式中围绕点使用混合换行符。 property:成员表达式中的点应与属性部分位于同一行。 object:成员表达式中的点应该与对象部分位于同一行。默认是"object"
        'eol-last': 2, // 在非空文件的末尾至少执行一个换行符（或不存在）
        'generator-star-spacing': [2, {
            'before': true,
            'after': true,
        }], // 强制 generator 函数中 * 号周围使用一致的空格
        'handle-callback-err': [2, '^(err|error)$'], // nodejs 处理错误

        'jsx-quotes': [2, 'prefer-single'], // JSX 属性值可以包含字符串文字，用单引号或双引号分隔。
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true,
        }], // 强制在对象字面量属性中的键和值之间保持一致的间距。
        'keyword-spacing': [2, {
            'before': true,
            'after': true,
        }], // 强制在对象字面量的属性中键和值之间使用一致的间距
        'new-cap': [2, {
            'newIsCap': true, // 使用大写启动函数调用所有操作符。
            'capIsNew': false, // 允许在没有new操作符的情况下调用大写启动的函数。
        }], // 求构造函数名以大写字母开头。某些内置标识符可免除此规则。
        'new-parens': 2, // 在使用new关键字调用不带参数的构造函数时需要括号，以便提高代码清晰度。
        'no-console': 'off', // 允许出现console语句
        'no-class-assign': 2, // 标记修改类声明的变量。
        'no-const-assign': 2, // 标记修改使用const关键字声明的变量。
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-control-regex': 0, // 正则表达式中允许出现控制字符
        'no-delete-var': 2, // 不允许在变量上使用delete操作符。
        'no-dupe-args': 2, // 不允许在函数声明或表达式中使用重复的参数名称。它不适用于箭头函数或类方法，因为解析器报告错误。
        'no-dupe-class-members': 2, // 此规则旨在标记在级别成员中使用重复名称。
        'no-dupe-keys': 2, // 此规则不允许在对象文字中使用重复键。
        'no-duplicate-case': 2, // 此规则不允许在switch语句的case子句中使用重复的测试表达式。
        'no-empty-character-class': 2, // 此规则不允许在正则表达式中使用空字符类。
        'no-empty-pattern': 2, // 此规则旨在标记解构结构对象和数组中的任何空模式，因此，只要遇到问题就会报告问题。
        'no-eval': 2, // (不允许使用eval())该规则旨在通过禁止使用eval()函数来防止潜在的危险，不必要的和慢速的代码。因此，无论何时使用该eval()功能，它都会发出警告。
        'no-ex-assign': 2, // 不允许在catch子句中重新分配例外。
        'no-extend-native': 2, // //不允许扩展原生对象
        'no-extra-bind': 2, // 不允许不必要的函数绑定
        'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换。
        'no-extra-parens': [2, 'functions'], // 仅在必要时限制使用括号。(仅在函数表达式附近禁止不必要的括号)
        'no-fallthrough': 2, // 不允许switch按顺序全部执行所有case
        'no-floating-decimal': 2, // 不允许浮点数缺失数字
        'no-func-assign': 2, // 不允许重新分配function声明
        'no-implied-eval': 2, // //不允许使用隐式eval()
        'no-inner-declarations': [2, 'functions'], // 要求函数声明和可选的变量声明位于程序的根节点或函数的主体中。
        'no-invalid-regexp': 2, // 不允许RegExp构造函数中的无效正则表达式字符串。
        'no-irregular-whitespace': 2, // 不允许出现不规则的空格
        'no-iterator': 2, // 不允许使用__iterator__属性
        'no-label-var': 2, // 不允许标签和变量同名
        'no-labels': [2, {
            'allowLoop': false,
            'allowSwitch': false,
        }], // 不允许标签语句
        'no-shadow': 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-undefined': 2, // 不允许把undefined当做标识符使用
        'no-use-before-define': [2, 'nofunc'], // 不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
        'no-lone-blocks': 2, // 不允许不必要的嵌套代码块
        'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 不允许混用tab和空格
        'no-multi-spaces': 2, // 不允许出现多余的空格
        'no-multi-str': 2, // 不允许用\来让字符串换行
        'no-multiple-empty-lines': [2, {
            'max': 1,
        }], // 空行最多不能超过两行
        'no-native-reassign': 2, // 不能重写native对象
        'no-negated-in-lhs': 2, // 不允许在in表达式语句中对最左边的运算数使用取反操作
        'no-nested-ternary': 2, // 不允许使用嵌套的三目运算符
        'no-new-object': 2, // 禁止使用new Object()
        'no-new-require': 2, // 禁止 new require表达的使用。 正确写法-->var AppHeader = require('app-header'); var appHeader = new AppHeader();
        'no-new-symbol': 2,
        'no-new-wrappers': 2, // 不允许使用new String，Number和Boolean对象
        'no-new-func': 2, // 不允许使用new Function
        'no-obj-calls': 2, // 不允许把全局对象属性当做函数来调用
        'no-octal': 2, // 不允许使用八进制字面值
        'no-octal-escape': 2, // 不允许使用八进制转义序列
        'no-path-concat': 2, // 这个规则旨在防止 Node.js 中的目录路径字符串连接
        'no-param-reassign': 0, // 不允许重新分配函数参数
        'no-proto': 2, // 不允许使用__proto__属性
        'no-redeclare': 2, // 不允许变量重复声明
        'no-regex-spaces': 2, // 正则表达式中不允许出现多个连续空格
        'no-return-assign': [2, 'always'], // return 语句中不能有赋值表达式 (except-parens 默认选项 它不允许分配，除非它们被括在圆括号中。) always：选项不允许return语句中的所有分配。所有的作业都被视为问题。
        'no-self-assign': 2, // 这条规则旨在消除自我分配。
        'no-self-compare': 2, // 不允许自己和自己比较
        'no-sequences': 2, // 不允许使用逗号表达式
        'no-shadow-restricted-names': 2, // js关键字和保留字不能作为函数名或者变量名
        'no-spaced-func': 2, // 不允许功能标识符与其应用程序之间的间距。
        'no-sparse-arrays': 2, // 数组中不允许出现空位置
        'no-this-before-super': 2, // 这条规则的目的是在呼叫前标记 this/super关键字 super()。
        'no-throw-literal': 2, // 不允许抛出字面量错误 throw "error"
        'no-trailing-spaces': 2, // 一行最后不允许有空格
        'no-undef': 2, // 不允许未声明的变量
        'no-undef-init': 2, // 不允许初始化变量时给变量赋值undefined
        'no-unexpected-multiline': 2, // 避免多行表达式
        'no-unmodified-loop-condition': 2, // 该规则查找循环条件内的引用，然后检查这些引用的变量是否在循环中被修改。
        'no-unneeded-ternary': [2, {
            'defaultAssignment': false, // true（默认）允许条件表达式作为默认分配模式, false不允许将条件表达式作为默认的分配模式
        }], // 更简单的选择时，此规则不允许三元运算符。
        'no-unreachable': 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
        'no-unsafe-finally': 2, // 不允许return，throw，break，和continue里面的语句finally块。它允许间接使用，如in function或class定义。
        'no-unused-expressions': 2, // 不允许无用的表达式
        'no-unused-vars': [2, {
            'vars': 'all', // all检查所有变量的使用情况，包括全局范围内的变量。这是默认设置。 local 只检查使用本地声明的变量，但将允许全局变量未被使用。
            'args': 'none', // after-used - 只有最后一个参数必须使用。例如，这允许您为函数使用两个命名参数，并且只要您使用第二个参数，ESLint 就不会警告您第一个参数。这是默认设置。 all-必须使用所有命名的参数。 none-不检查参数。
        }], // 不能有声明后未被使用的变量或参数
        'no-useless-call': 2, // 禁止不必要的call和apply
        'no-useless-computed-key': 2, // 禁止不必要地使用计算属性键。
        'no-useless-constructor': 2, // 标记了可以在不改变类的工作方式的情况下安全地移除的类构造函数。
        'no-whitespace-before-property': 2,
        'no-void': 2, // 不允许void操作符
        'no-with': 2, // 不允许使用with语句
        'one-var': [2, {
            'initialized': 'never',
        }], // 连续声明
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '?': 'before',
                ':': 'before',
            },
        }], // 此规则为运营商实施一致的换行样式。
        'padded-blocks': [2, 'never'], // 块内行首行尾是否空行
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true,
        }], // 引号风格

        'semi': [2, 'never'], // 语句分号结尾
        'semi-spacing': [2, {
            'before': false,
            'after': true,
        }], // 分后前后空格
        'space-before-blocks': [2, 'always'], // 块前的空格
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }], // 函数定义时括号前的空格
        'space-in-parens': [2, 'never'], // 强制直接在括号内进行间隔的一致性，即禁止或要求右侧(和左侧有一个或多个空格)。无论如何，()仍然会被允许。
        'space-infix-ops': 2, // 中缀操作符周围要不要有空格
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false,
        }], // 一元运算符前后不要加空格
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
        }], // 注释开始后，此规则将强制间距的一致性//或/*。它还为各种文档样式提供了一些例外。
        'strict': [2, 'function'], // 使用严格模式
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
        'valid-typeof': 2, // 强制JSDoc注释
        'wrap-iife': [2, 'any'], // 立即执行函数表达式的括号风格
        'yield-star-spacing': [2, 'both'],
        'yoda': [2, 'never'], // 要求或不允许“Yoda”条件
        'prefer-const': 2, // 需要对声明后永远不会重新赋值的变量使用常量声明
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, /* 关闭　debugger规则*/
        'object-curly-spacing': [2, 'always', {
            objectsInObjects: false,
        }], // 在大括号内强制执行一致的间距
        'array-bracket-spacing': [2, 'never'], // 强制数组括号内的一致间距
    },
}
