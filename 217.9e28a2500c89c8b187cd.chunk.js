(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[217],{

/***/ "../EVA Design System/node_modules/brace/mode/scss.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/scss_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar ScssHighlightRules = function() {\n    \n    var properties = lang.arrayToMap( (function () {\n\n        var browserPrefix = (\"-webkit-|-moz-|-o-|-ms-|-svg-|-pie-|-khtml-\").split(\"|\");\n        \n        var prefixProperties = (\"appearance|background-clip|background-inline-policy|background-origin|\" + \n             \"background-size|binding|border-bottom-colors|border-left-colors|\" + \n             \"border-right-colors|border-top-colors|border-end|border-end-color|\" + \n             \"border-end-style|border-end-width|border-image|border-start|\" + \n             \"border-start-color|border-start-style|border-start-width|box-align|\" + \n             \"box-direction|box-flex|box-flexgroup|box-ordinal-group|box-orient|\" + \n             \"box-pack|box-sizing|column-count|column-gap|column-width|column-rule|\" + \n             \"column-rule-width|column-rule-style|column-rule-color|float-edge|\" + \n             \"font-feature-settings|font-language-override|force-broken-image-icon|\" + \n             \"image-region|margin-end|margin-start|opacity|outline|outline-color|\" + \n             \"outline-offset|outline-radius|outline-radius-bottomleft|\" + \n             \"outline-radius-bottomright|outline-radius-topleft|outline-radius-topright|\" + \n             \"outline-style|outline-width|padding-end|padding-start|stack-sizing|\" + \n             \"tab-size|text-blink|text-decoration-color|text-decoration-line|\" + \n             \"text-decoration-style|transform|transform-origin|transition|\" + \n             \"transition-delay|transition-duration|transition-property|\" + \n             \"transition-timing-function|user-focus|user-input|user-modify|user-select|\" +\n             \"window-shadow|border-radius\").split(\"|\");\n        \n        var properties = (\"azimuth|background-attachment|background-color|background-image|\" +\n            \"background-position|background-repeat|background|border-bottom-color|\" +\n            \"border-bottom-style|border-bottom-width|border-bottom|border-collapse|\" +\n            \"border-color|border-left-color|border-left-style|border-left-width|\" +\n            \"border-left|border-right-color|border-right-style|border-right-width|\" +\n            \"border-right|border-spacing|border-style|border-top-color|\" +\n            \"border-top-style|border-top-width|border-top|border-width|border|bottom|\" +\n            \"box-shadow|box-sizing|caption-side|clear|clip|color|content|counter-increment|\" +\n            \"counter-reset|cue-after|cue-before|cue|cursor|direction|display|\" +\n            \"elevation|empty-cells|float|font-family|font-size-adjust|font-size|\" +\n            \"font-stretch|font-style|font-variant|font-weight|font|height|left|\" +\n            \"letter-spacing|line-height|list-style-image|list-style-position|\" +\n            \"list-style-type|list-style|margin-bottom|margin-left|margin-right|\" +\n            \"margin-top|marker-offset|margin|marks|max-height|max-width|min-height|\" +\n            \"min-width|opacity|orphans|outline-color|\" +\n            \"outline-style|outline-width|outline|overflow|overflow-x|overflow-y|padding-bottom|\" +\n            \"padding-left|padding-right|padding-top|padding|page-break-after|\" +\n            \"page-break-before|page-break-inside|page|pause-after|pause-before|\" +\n            \"pause|pitch-range|pitch|play-during|position|quotes|richness|right|\" +\n            \"size|speak-header|speak-numeral|speak-punctuation|speech-rate|speak|\" +\n            \"stress|table-layout|text-align|text-decoration|text-indent|\" +\n            \"text-shadow|text-transform|top|unicode-bidi|vertical-align|\" +\n            \"visibility|voice-family|volume|white-space|widows|width|word-spacing|\" +\n            \"z-index\").split(\"|\");\n        var ret = [];\n        for (var i=0, ln=browserPrefix.length; i<ln; i++) {\n            Array.prototype.push.apply(\n                ret,\n                (( browserPrefix[i] + prefixProperties.join(\"|\" + browserPrefix[i]) ).split(\"|\"))\n            );\n        }\n        Array.prototype.push.apply(ret, prefixProperties);\n        Array.prototype.push.apply(ret, properties);\n        \n        return ret;\n        \n    })() );\n    \n\n\n    var functions = lang.arrayToMap(\n        (\"hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|\" +\n         \"alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|\" + \n         \"floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|\" + \n         \"nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|\" +\n         \"scale_color|transparentize|type_of|unit|unitless|unquote\").split(\"|\")\n    );\n\n    var constants = lang.arrayToMap(\n        (\"absolute|all-scroll|always|armenian|auto|baseline|below|bidi-override|\" +\n        \"block|bold|bolder|border-box|both|bottom|break-all|break-word|capitalize|center|\" +\n        \"char|circle|cjk-ideographic|col-resize|collapse|content-box|crosshair|dashed|\" +\n        \"decimal-leading-zero|decimal|default|disabled|disc|\" +\n        \"distribute-all-lines|distribute-letter|distribute-space|\" +\n        \"distribute|dotted|double|e-resize|ellipsis|fixed|georgian|groove|\" +\n        \"hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|\" +\n        \"ideograph-alpha|ideograph-numeric|ideograph-parenthesis|\" +\n        \"ideograph-space|inactive|inherit|inline-block|inline|inset|inside|\" +\n        \"inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|\" +\n        \"keep-all|left|lighter|line-edge|line-through|line|list-item|loose|\" +\n        \"lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|\" +\n        \"medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|\" +\n        \"nw-resize|none|normal|not-allowed|nowrap|oblique|outset|outside|\" +\n        \"overline|pointer|progress|relative|repeat-x|repeat-y|repeat|right|\" +\n        \"ridge|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|\" +\n        \"solid|square|static|strict|super|sw-resize|table-footer-group|\" +\n        \"table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|\" +\n        \"transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|\" +\n        \"vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|\" +\n        \"zero\").split(\"|\")\n    );\n\n    var colors = lang.arrayToMap(\n        (\"aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|\" +\n        \"blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|\" +\n        \"chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|\" +\n        \"darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|\" +\n        \"darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|\" +\n        \"darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|\" +\n        \"darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|\" +\n        \"dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|\" +\n        \"ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|\" +\n        \"hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|\" +\n        \"lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|\" +\n        \"lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|\" +\n        \"lightsalmon|lightseagreen|lightskyblue|lightslategray|\" +\n        \"lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|\" +\n        \"magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|\" +\n        \"mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|\" +\n        \"mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|\" +\n        \"moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|\" +\n        \"orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|\" +\n        \"papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|\" +\n        \"red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|\" +\n        \"seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|\" +\n        \"springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|\" +\n        \"wheat|white|whitesmoke|yellow|yellowgreen\").split(\"|\")\n    );\n    \n    var keywords = lang.arrayToMap(\n        (\"@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare\").split(\"|\")\n    );\n    \n    var tags = lang.arrayToMap(\n        (\"a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|\" + \n         \"big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|\" + \n         \"command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|\" + \n         \"figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|\" + \n         \"header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|\" + \n         \"link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|\" + \n         \"option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|\" + \n         \"small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|\" + \n         \"textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp\").split(\"|\")\n    );\n\n    var numRe = \"\\\\-?(?:(?:[0-9]+)|(?:[0-9]*\\\\.[0-9]+))\";\n\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"\\\\/\\\\/.*$\"\n            },\n            {\n                token : \"comment\", // multi line comment\n                regex : \"\\\\/\\\\*\",\n                next : \"comment\"\n            }, {\n                token : \"string\", // single line\n                regex : '[\"](?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?[\"]'\n            }, {\n                token : \"string\", // multi line string start\n                regex : '[\"].*\\\\\\\\$',\n                next : \"qqstring\"\n            }, {\n                token : \"string\", // single line\n                regex : \"['](?:(?:\\\\\\\\.)|(?:[^'\\\\\\\\]))*?[']\"\n            }, {\n                token : \"string\", // multi line string start\n                regex : \"['].*\\\\\\\\$\",\n                next : \"qstring\"\n            }, {\n                token : \"constant.numeric\",\n                regex : numRe + \"(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)\"\n            }, {\n                token : \"constant.numeric\", // hex6 color\n                regex : \"#[a-f0-9]{6}\"\n            }, {\n                token : \"constant.numeric\", // hex3 color\n                regex : \"#[a-f0-9]{3}\"\n            }, {\n                token : \"constant.numeric\",\n                regex : numRe\n            }, {\n                token : [\"support.function\", \"string\", \"support.function\"],\n                regex : \"(url\\\\()(.*)(\\\\))\"\n            }, {\n                token : function(value) {\n                    if (properties.hasOwnProperty(value.toLowerCase()))\n                        return \"support.type\";\n                    if (keywords.hasOwnProperty(value))\n                        return \"keyword\";\n                    else if (constants.hasOwnProperty(value))\n                        return \"constant.language\";\n                    else if (functions.hasOwnProperty(value))\n                        return \"support.function\";\n                    else if (colors.hasOwnProperty(value.toLowerCase()))\n                        return \"support.constant.color\";\n                    else if (tags.hasOwnProperty(value.toLowerCase()))\n                        return \"variable.language\";\n                    else\n                        return \"text\";\n                },\n                regex : \"\\\\-?[@a-z_][@a-z0-9_\\\\-]*\"\n            }, {\n                token : \"variable\",\n                regex : \"[a-z_\\\\-$][a-z0-9_\\\\-$]*\\\\b\"\n            }, {\n                token: \"variable.language\",\n                regex: \"#[a-z0-9-_]+\"\n            }, {\n                token: \"variable.language\",\n                regex: \"\\\\.[a-z0-9-_]+\"\n            }, {\n                token: \"variable.language\",\n                regex: \":[a-z0-9-_]+\"\n            }, {\n                token: \"constant\",\n                regex: \"[a-z0-9-_]+\"\n            }, {\n                token : \"keyword.operator\",\n                regex : \"<|>|<=|>=|==|!=|-|%|#|\\\\+|\\\\$|\\\\+|\\\\*\"\n            }, {\n                token : \"paren.lparen\",\n                regex : \"[[({]\"\n            }, {\n                token : \"paren.rparen\",\n                regex : \"[\\\\])}]\"\n            }, {\n                token : \"text\",\n                regex : \"\\\\s+\"\n            }, {\n                caseInsensitive: true\n            }\n        ],\n        \"comment\" : [\n            {\n                token : \"comment\", // closing comment\n                regex : \"\\\\*\\\\/\",\n                next : \"start\"\n            }, {\n                defaultToken : \"comment\"\n            }\n        ],\n        \"qqstring\" : [\n            {\n                token : \"string\",\n                regex : '(?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?\"',\n                next : \"start\"\n            }, {\n                token : \"string\",\n                regex : '.+'\n            }\n        ],\n        \"qstring\" : [\n            {\n                token : \"string\",\n                regex : \"(?:(?:\\\\\\\\.)|(?:[^'\\\\\\\\]))*?'\",\n                next : \"start\"\n            }, {\n                token : \"string\",\n                regex : '.+'\n            }\n        ]\n    };\n};\n\noop.inherits(ScssHighlightRules, TextHighlightRules);\n\nexports.ScssHighlightRules = ScssHighlightRules;\n\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/behaviour/css\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/behaviour\",\"ace/mode/behaviour/cstyle\",\"ace/token_iterator\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Behaviour = acequire(\"../behaviour\").Behaviour;\nvar CstyleBehaviour = acequire(\"./cstyle\").CstyleBehaviour;\nvar TokenIterator = acequire(\"../../token_iterator\").TokenIterator;\n\nvar CssBehaviour = function () {\n\n    this.inherit(CstyleBehaviour);\n\n    this.add(\"colon\", \"insertion\", function (state, action, editor, session, text) {\n        if (text === ':') {\n            var cursor = editor.getCursorPosition();\n            var iterator = new TokenIterator(session, cursor.row, cursor.column);\n            var token = iterator.getCurrentToken();\n            if (token && token.value.match(/\\s+/)) {\n                token = iterator.stepBackward();\n            }\n            if (token && token.type === 'support.type') {\n                var line = session.doc.getLine(cursor.row);\n                var rightChar = line.substring(cursor.column, cursor.column + 1);\n                if (rightChar === ':') {\n                    return {\n                       text: '',\n                       selection: [1, 1]\n                    };\n                }\n                if (!line.substring(cursor.column).match(/^\\s*;/)) {\n                    return {\n                       text: ':;',\n                       selection: [1, 1]\n                    };\n                }\n            }\n        }\n    });\n\n    this.add(\"colon\", \"deletion\", function (state, action, editor, session, range) {\n        var selected = session.doc.getTextRange(range);\n        if (!range.isMultiLine() && selected === ':') {\n            var cursor = editor.getCursorPosition();\n            var iterator = new TokenIterator(session, cursor.row, cursor.column);\n            var token = iterator.getCurrentToken();\n            if (token && token.value.match(/\\s+/)) {\n                token = iterator.stepBackward();\n            }\n            if (token && token.type === 'support.type') {\n                var line = session.doc.getLine(range.start.row);\n                var rightChar = line.substring(range.end.column, range.end.column + 1);\n                if (rightChar === ';') {\n                    range.end.column ++;\n                    return range;\n                }\n            }\n        }\n    });\n\n    this.add(\"semicolon\", \"insertion\", function (state, action, editor, session, text) {\n        if (text === ';') {\n            var cursor = editor.getCursorPosition();\n            var line = session.doc.getLine(cursor.row);\n            var rightChar = line.substring(cursor.column, cursor.column + 1);\n            if (rightChar === ';') {\n                return {\n                   text: '',\n                   selection: [1, 1]\n                };\n            }\n        }\n    });\n\n};\noop.inherits(CssBehaviour, CstyleBehaviour);\n\nexports.CssBehaviour = CssBehaviour;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/scss\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/scss_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/mode/behaviour/css\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar ScssHighlightRules = acequire(\"./scss_highlight_rules\").ScssHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar CssBehaviour = acequire(\"./behaviour/css\").CssBehaviour;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = ScssHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = new CssBehaviour();\n    this.foldingRules = new CStyleFoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n   \n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        var match = line.match(/^.*\\{\\s*$/);\n        if (match) {\n            indent += tab;\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/scss\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/scss.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMTcuOWUyOGEyNTAwYzg5YzhiMTg3Y2QuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=