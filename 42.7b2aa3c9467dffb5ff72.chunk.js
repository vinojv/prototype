(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "../EVA Design System/node_modules/brace/mode/css.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/css_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar supportType = exports.supportType = \"align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index\";\nvar supportFunction = exports.supportFunction = \"rgb|rgba|url|attr|counter|counters\";\nvar supportConstant = exports.supportConstant = \"absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero\";\nvar supportConstantColor = exports.supportConstantColor = \"aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen\";\nvar supportConstantFonts = exports.supportConstantFonts = \"arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace\";\n\nvar numRe = exports.numRe = \"\\\\-?(?:(?:[0-9]+(?:\\\\.[0-9]+)?)|(?:\\\\.[0-9]+))\";\nvar pseudoElements = exports.pseudoElements = \"(\\\\:+)\\\\b(after|before|first-letter|first-line|moz-selection|selection)\\\\b\";\nvar pseudoClasses  = exports.pseudoClasses =  \"(:)\\\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|acequired|root|target|valid|visited)\\\\b\";\n\nvar CssHighlightRules = function() {\n\n    var keywordMapper = this.createKeywordMapper({\n        \"support.function\": supportFunction,\n        \"support.constant\": supportConstant,\n        \"support.type\": supportType,\n        \"support.constant.color\": supportConstantColor,\n        \"support.constant.fonts\": supportConstantFonts\n    }, \"text\", true);\n\n    this.$rules = {\n        \"start\" : [{\n            include : [\"strings\", \"url\", \"comments\"]\n        }, {\n            token: \"paren.lparen\",\n            regex: \"\\\\{\",\n            next:  \"ruleset\"\n        }, {\n            token: \"paren.rparen\",\n            regex: \"\\\\}\"\n        }, {\n            token: \"string\",\n            regex: \"@\",\n            next:  \"media\"\n        }, {\n            token: \"keyword\",\n            regex: \"#[a-z0-9-_]+\"\n        }, {\n            token: \"keyword\",\n            regex: \"%\"\n        }, {\n            token: \"variable\",\n            regex: \"\\\\.[a-z0-9-_]+\"\n        }, {\n            token: \"string\",\n            regex: \":[a-z0-9-_]+\"\n        }, {\n            token : \"constant.numeric\",\n            regex : numRe\n        }, {\n            token: \"constant\",\n            regex: \"[a-z0-9-_]+\"\n        }, {\n            caseInsensitive: true\n        }],\n\n        \"media\": [{\n            include : [\"strings\", \"url\", \"comments\"]\n        }, {\n            token: \"paren.lparen\",\n            regex: \"\\\\{\",\n            next:  \"start\"\n        }, {\n            token: \"paren.rparen\",\n            regex: \"\\\\}\",\n            next:  \"start\"\n        }, {\n            token: \"string\",\n            regex: \";\",\n            next:  \"start\"\n        }, {\n            token: \"keyword\",\n            regex: \"(?:media|supports|document|charset|import|namespace|media|supports|document\"\n                + \"|page|font|keyframes|viewport|counter-style|font-feature-values\"\n                + \"|swash|ornaments|annotation|stylistic|styleset|character-variant)\"\n        }],\n\n        \"comments\" : [{\n            token: \"comment\", // multi line comment\n            regex: \"\\\\/\\\\*\",\n            push: [{\n                token : \"comment\",\n                regex : \"\\\\*\\\\/\",\n                next : \"pop\"\n            }, {\n                defaultToken : \"comment\"\n            }]\n        }],\n\n        \"ruleset\" : [{\n            regex : \"-(webkit|ms|moz|o)-\",\n            token : \"text\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"\\\\}\",\n            next : \"start\"\n        }, {\n            include : [\"strings\", \"url\", \"comments\"]\n        }, {\n            token : [\"constant.numeric\", \"keyword\"],\n            regex : \"(\" + numRe + \")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)\"\n        }, {\n            token : \"constant.numeric\",\n            regex : numRe\n        }, {\n            token : \"constant.numeric\",  // hex6 color\n            regex : \"#[a-f0-9]{6}\"\n        }, {\n            token : \"constant.numeric\", // hex3 color\n            regex : \"#[a-f0-9]{3}\"\n        }, {\n            token : [\"punctuation\", \"entity.other.attribute-name.pseudo-element.css\"],\n            regex : pseudoElements\n        }, {\n            token : [\"punctuation\", \"entity.other.attribute-name.pseudo-class.css\"],\n            regex : pseudoClasses\n        }, {\n            include: \"url\"\n        }, {\n            token : keywordMapper,\n            regex : \"\\\\-?[a-zA-Z_][a-zA-Z0-9_\\\\-]*\"\n        }, {\n            caseInsensitive: true\n        }],\n\n        url: [{\n            token : \"support.function\",\n            regex : \"(?:url(:?-prefix)?|domain|regexp)\\\\(\",\n            push: [{\n                token : \"support.function\",\n                regex : \"\\\\)\",\n                next : \"pop\"\n            }, {\n                defaultToken: \"string\"\n            }]\n        }],\n\n        strings: [{\n            token : \"string.start\",\n            regex : \"'\",\n            push : [{\n                token : \"string.end\",\n                regex : \"'|$\",\n                next: \"pop\"\n            }, {\n                include : \"escapes\"\n            }, {\n                token : \"constant.language.escape\",\n                regex : /\\\\$/,\n                consumeLineEnd: true\n            }, {\n                defaultToken: \"string\"\n            }]\n        }, {\n            token : \"string.start\",\n            regex : '\"',\n            push : [{\n                token : \"string.end\",\n                regex : '\"|$',\n                next: \"pop\"\n            }, {\n                include : \"escapes\"\n            }, {\n                token : \"constant.language.escape\",\n                regex : /\\\\$/,\n                consumeLineEnd: true\n            }, {\n                defaultToken: \"string\"\n            }]\n        }],\n        escapes: [{\n            token : \"constant.language.escape\",\n            regex : /\\\\([a-fA-F\\d]{1,6}|[^a-fA-F\\d])/\n        }]\n\n    };\n\n    this.normalizeRules();\n};\n\noop.inherits(CssHighlightRules, TextHighlightRules);\n\nexports.CssHighlightRules = CssHighlightRules;\n\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/css_completions\",[\"require\",\"exports\",\"module\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar propertyMap = {\n    \"background\": {\"#$0\": 1},\n    \"background-color\": {\"#$0\": 1, \"transparent\": 1, \"fixed\": 1},\n    \"background-image\": {\"url('/$0')\": 1},\n    \"background-repeat\": {\"repeat\": 1, \"repeat-x\": 1, \"repeat-y\": 1, \"no-repeat\": 1, \"inherit\": 1},\n    \"background-position\": {\"bottom\":2, \"center\":2, \"left\":2, \"right\":2, \"top\":2, \"inherit\":2},\n    \"background-attachment\": {\"scroll\": 1, \"fixed\": 1},\n    \"background-size\": {\"cover\": 1, \"contain\": 1},\n    \"background-clip\": {\"border-box\": 1, \"padding-box\": 1, \"content-box\": 1},\n    \"background-origin\": {\"border-box\": 1, \"padding-box\": 1, \"content-box\": 1},\n    \"border\": {\"solid $0\": 1, \"dashed $0\": 1, \"dotted $0\": 1, \"#$0\": 1},\n    \"border-color\": {\"#$0\": 1},\n    \"border-style\": {\"solid\":2, \"dashed\":2, \"dotted\":2, \"double\":2, \"groove\":2, \"hidden\":2, \"inherit\":2, \"inset\":2, \"none\":2, \"outset\":2, \"ridged\":2},\n    \"border-collapse\": {\"collapse\": 1, \"separate\": 1},\n    \"bottom\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"clear\": {\"left\": 1, \"right\": 1, \"both\": 1, \"none\": 1},\n    \"color\": {\"#$0\": 1, \"rgb(#$00,0,0)\": 1},\n    \"cursor\": {\"default\": 1, \"pointer\": 1, \"move\": 1, \"text\": 1, \"wait\": 1, \"help\": 1, \"progress\": 1, \"n-resize\": 1, \"ne-resize\": 1, \"e-resize\": 1, \"se-resize\": 1, \"s-resize\": 1, \"sw-resize\": 1, \"w-resize\": 1, \"nw-resize\": 1},\n    \"display\": {\"none\": 1, \"block\": 1, \"inline\": 1, \"inline-block\": 1, \"table-cell\": 1},\n    \"empty-cells\": {\"show\": 1, \"hide\": 1},\n    \"float\": {\"left\": 1, \"right\": 1, \"none\": 1},\n    \"font-family\": {\"Arial\":2,\"Comic Sans MS\":2,\"Consolas\":2,\"Courier New\":2,\"Courier\":2,\"Georgia\":2,\"Monospace\":2,\"Sans-Serif\":2, \"Segoe UI\":2,\"Tahoma\":2,\"Times New Roman\":2,\"Trebuchet MS\":2,\"Verdana\": 1},\n    \"font-size\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"font-weight\": {\"bold\": 1, \"normal\": 1},\n    \"font-style\": {\"italic\": 1, \"normal\": 1},\n    \"font-variant\": {\"normal\": 1, \"small-caps\": 1},\n    \"height\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"left\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"letter-spacing\": {\"normal\": 1},\n    \"line-height\": {\"normal\": 1},\n    \"list-style-type\": {\"none\": 1, \"disc\": 1, \"circle\": 1, \"square\": 1, \"decimal\": 1, \"decimal-leading-zero\": 1, \"lower-roman\": 1, \"upper-roman\": 1, \"lower-greek\": 1, \"lower-latin\": 1, \"upper-latin\": 1, \"georgian\": 1, \"lower-alpha\": 1, \"upper-alpha\": 1},\n    \"margin\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"margin-right\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"margin-left\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"margin-top\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"margin-bottom\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"max-height\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"max-width\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"min-height\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"min-width\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"overflow\": {\"hidden\": 1, \"visible\": 1, \"auto\": 1, \"scroll\": 1},\n    \"overflow-x\": {\"hidden\": 1, \"visible\": 1, \"auto\": 1, \"scroll\": 1},\n    \"overflow-y\": {\"hidden\": 1, \"visible\": 1, \"auto\": 1, \"scroll\": 1},\n    \"padding\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"padding-top\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"padding-right\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"padding-bottom\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"padding-left\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"page-break-after\": {\"auto\": 1, \"always\": 1, \"avoid\": 1, \"left\": 1, \"right\": 1},\n    \"page-break-before\": {\"auto\": 1, \"always\": 1, \"avoid\": 1, \"left\": 1, \"right\": 1},\n    \"position\": {\"absolute\": 1, \"relative\": 1, \"fixed\": 1, \"static\": 1},\n    \"right\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"table-layout\": {\"fixed\": 1, \"auto\": 1},\n    \"text-decoration\": {\"none\": 1, \"underline\": 1, \"line-through\": 1, \"blink\": 1},\n    \"text-align\": {\"left\": 1, \"right\": 1, \"center\": 1, \"justify\": 1},\n    \"text-transform\": {\"capitalize\": 1, \"uppercase\": 1, \"lowercase\": 1, \"none\": 1},\n    \"top\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"vertical-align\": {\"top\": 1, \"bottom\": 1},\n    \"visibility\": {\"hidden\": 1, \"visible\": 1},\n    \"white-space\": {\"nowrap\": 1, \"normal\": 1, \"pre\": 1, \"pre-line\": 1, \"pre-wrap\": 1},\n    \"width\": {\"px\": 1, \"em\": 1, \"%\": 1},\n    \"word-spacing\": {\"normal\": 1},\n    \"filter\": {\"alpha(opacity=$0100)\": 1},\n\n    \"text-shadow\": {\"$02px 2px 2px #777\": 1},\n    \"text-overflow\": {\"ellipsis-word\": 1, \"clip\": 1, \"ellipsis\": 1},\n    \"-moz-border-radius\": 1,\n    \"-moz-border-radius-topright\": 1,\n    \"-moz-border-radius-bottomright\": 1,\n    \"-moz-border-radius-topleft\": 1,\n    \"-moz-border-radius-bottomleft\": 1,\n    \"-webkit-border-radius\": 1,\n    \"-webkit-border-top-right-radius\": 1,\n    \"-webkit-border-top-left-radius\": 1,\n    \"-webkit-border-bottom-right-radius\": 1,\n    \"-webkit-border-bottom-left-radius\": 1,\n    \"-moz-box-shadow\": 1,\n    \"-webkit-box-shadow\": 1,\n    \"transform\": {\"rotate($00deg)\": 1, \"skew($00deg)\": 1},\n    \"-moz-transform\": {\"rotate($00deg)\": 1, \"skew($00deg)\": 1},\n    \"-webkit-transform\": {\"rotate($00deg)\": 1, \"skew($00deg)\": 1 }\n};\n\nvar CssCompletions = function() {\n\n};\n\n(function() {\n\n    this.completionsDefined = false;\n\n    this.defineCompletions = function() {\n        if (document) {\n            var style = document.createElement('c').style;\n\n            for (var i in style) {\n                if (typeof style[i] !== 'string')\n                    continue;\n\n                var name = i.replace(/[A-Z]/g, function(x) {\n                    return '-' + x.toLowerCase();\n                });\n\n                if (!propertyMap.hasOwnProperty(name))\n                    propertyMap[name] = 1;\n            }\n        }\n\n        this.completionsDefined = true;\n    };\n\n    this.getCompletions = function(state, session, pos, prefix) {\n        if (!this.completionsDefined) {\n            this.defineCompletions();\n        }\n\n        var token = session.getTokenAt(pos.row, pos.column);\n\n        if (!token)\n            return [];\n        if (state==='ruleset'){\n            var line = session.getLine(pos.row).substr(0, pos.column);\n            if (/:[^;]+$/.test(line)) {\n                /([\\w\\-]+):[^:]*$/.test(line);\n\n                return this.getPropertyValueCompletions(state, session, pos, prefix);\n            } else {\n                return this.getPropertyCompletions(state, session, pos, prefix);\n            }\n        }\n\n        return [];\n    };\n\n    this.getPropertyCompletions = function(state, session, pos, prefix) {\n        var properties = Object.keys(propertyMap);\n        return properties.map(function(property){\n            return {\n                caption: property,\n                snippet: property + ': $0;',\n                meta: \"property\",\n                score: Number.MAX_VALUE\n            };\n        });\n    };\n\n    this.getPropertyValueCompletions = function(state, session, pos, prefix) {\n        var line = session.getLine(pos.row).substr(0, pos.column);\n        var property = (/([\\w\\-]+):[^:]*$/.exec(line) || {})[1];\n\n        if (!property)\n            return [];\n        var values = [];\n        if (property in propertyMap && typeof propertyMap[property] === \"object\") {\n            values = Object.keys(propertyMap[property]);\n        }\n        return values.map(function(value){\n            return {\n                caption: value,\n                snippet: value,\n                meta: \"property value\",\n                score: Number.MAX_VALUE\n            };\n        });\n    };\n\n}).call(CssCompletions.prototype);\n\nexports.CssCompletions = CssCompletions;\n});\n\nace.define(\"ace/mode/behaviour/css\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/behaviour\",\"ace/mode/behaviour/cstyle\",\"ace/token_iterator\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Behaviour = acequire(\"../behaviour\").Behaviour;\nvar CstyleBehaviour = acequire(\"./cstyle\").CstyleBehaviour;\nvar TokenIterator = acequire(\"../../token_iterator\").TokenIterator;\n\nvar CssBehaviour = function () {\n\n    this.inherit(CstyleBehaviour);\n\n    this.add(\"colon\", \"insertion\", function (state, action, editor, session, text) {\n        if (text === ':') {\n            var cursor = editor.getCursorPosition();\n            var iterator = new TokenIterator(session, cursor.row, cursor.column);\n            var token = iterator.getCurrentToken();\n            if (token && token.value.match(/\\s+/)) {\n                token = iterator.stepBackward();\n            }\n            if (token && token.type === 'support.type') {\n                var line = session.doc.getLine(cursor.row);\n                var rightChar = line.substring(cursor.column, cursor.column + 1);\n                if (rightChar === ':') {\n                    return {\n                       text: '',\n                       selection: [1, 1]\n                    };\n                }\n                if (!line.substring(cursor.column).match(/^\\s*;/)) {\n                    return {\n                       text: ':;',\n                       selection: [1, 1]\n                    };\n                }\n            }\n        }\n    });\n\n    this.add(\"colon\", \"deletion\", function (state, action, editor, session, range) {\n        var selected = session.doc.getTextRange(range);\n        if (!range.isMultiLine() && selected === ':') {\n            var cursor = editor.getCursorPosition();\n            var iterator = new TokenIterator(session, cursor.row, cursor.column);\n            var token = iterator.getCurrentToken();\n            if (token && token.value.match(/\\s+/)) {\n                token = iterator.stepBackward();\n            }\n            if (token && token.type === 'support.type') {\n                var line = session.doc.getLine(range.start.row);\n                var rightChar = line.substring(range.end.column, range.end.column + 1);\n                if (rightChar === ';') {\n                    range.end.column ++;\n                    return range;\n                }\n            }\n        }\n    });\n\n    this.add(\"semicolon\", \"insertion\", function (state, action, editor, session, text) {\n        if (text === ';') {\n            var cursor = editor.getCursorPosition();\n            var line = session.doc.getLine(cursor.row);\n            var rightChar = line.substring(cursor.column, cursor.column + 1);\n            if (rightChar === ';') {\n                return {\n                   text: '',\n                   selection: [1, 1]\n                };\n            }\n        }\n    });\n\n};\noop.inherits(CssBehaviour, CstyleBehaviour);\n\nexports.CssBehaviour = CssBehaviour;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/css\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/css_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/worker/worker_client\",\"ace/mode/css_completions\",\"ace/mode/behaviour/css\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar CssHighlightRules = acequire(\"./css_highlight_rules\").CssHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar WorkerClient = acequire(\"../worker/worker_client\").WorkerClient;\nvar CssCompletions = acequire(\"./css_completions\").CssCompletions;\nvar CssBehaviour = acequire(\"./behaviour/css\").CssBehaviour;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = CssHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = new CssBehaviour();\n    this.$completer = new CssCompletions();\n    this.foldingRules = new CStyleFoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.foldingRules = \"cStyle\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        var match = line.match(/^.*\\{\\s*$/);\n        if (match) {\n            indent += tab;\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.getCompletions = function(state, session, pos, prefix) {\n        return this.$completer.getCompletions(state, session, pos, prefix);\n    };\n\n    this.createWorker = function(session) {\n        var worker = new WorkerClient([\"ace\"], require(\"../worker/css\"), \"Worker\");\n        worker.attachToDocument(session.getDocument());\n\n        worker.on(\"annotate\", function(e) {\n            session.setAnnotations(e.data);\n        });\n\n        worker.on(\"terminate\", function() {\n            session.clearAnnotations();\n        });\n\n        return worker;\n    };\n\n    this.$id = \"ace/mode/css\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/css.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0Mi43YjJhYTNjOTQ2N2RmZmI1ZmY3Mi5jaHVuay5qcyIsInNvdXJjZVJvb3QiOiIifQ==