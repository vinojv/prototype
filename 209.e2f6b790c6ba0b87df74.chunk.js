(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[209],{

/***/ "../EVA Design System/node_modules/brace/mode/swift.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/doc_comment_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar DocCommentHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment.doc.tag\",\n            regex : \"@[\\\\w\\\\d_]+\" // TODO: fix email addresses\n        }, \n        DocCommentHighlightRules.getTagRule(),\n        {\n            defaultToken : \"comment.doc\",\n            caseInsensitive: true\n        }]\n    };\n};\n\noop.inherits(DocCommentHighlightRules, TextHighlightRules);\n\nDocCommentHighlightRules.getTagRule = function(start) {\n    return {\n        token : \"comment.doc.tag.storage.type\",\n        regex : \"\\\\b(?:TODO|FIXME|XXX|HACK)\\\\b\"\n    };\n};\n\nDocCommentHighlightRules.getStartRule = function(start) {\n    return {\n        token : \"comment.doc\", // doc comment\n        regex : \"\\\\/\\\\*(?=\\\\*)\",\n        next  : start\n    };\n};\n\nDocCommentHighlightRules.getEndRule = function (start) {\n    return {\n        token : \"comment.doc\", // closing comment\n        regex : \"\\\\*\\\\/\",\n        next  : start\n    };\n};\n\n\nexports.DocCommentHighlightRules = DocCommentHighlightRules;\n\n});\n\nace.define(\"ace/mode/swift_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/doc_comment_highlight_rules\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar DocCommentHighlightRules = acequire(\"./doc_comment_highlight_rules\").DocCommentHighlightRules;\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar SwiftHighlightRules = function() {\n   var keywordMapper = this.createKeywordMapper({\n        \"variable.language\": \"\",\n        \"keyword\": \"__COLUMN__|__FILE__|__FUNCTION__|__LINE__\"\n            + \"|as|associativity|break|case|class|continue|default|deinit|didSet\"\n            + \"|do|dynamicType|else|enum|extension|fallthrough|for|func|get|if|import\"\n            + \"|in|infix|init|inout|is|left|let|let|mutating|new|none|nonmutating\"\n            + \"|operator|override|postfix|precedence|prefix|protocol|return|right\"\n            + \"|safe|Self|self|set|struct|subscript|switch|Type|typealias\"\n            + \"|unowned|unsafe|var|weak|where|while|willSet\"\n            + \"|convenience|dynamic|final|infix|lazy|mutating|nonmutating|optional|override|postfix\"\n            + \"|prefix|acequired|static|guard|defer\",\n        \"storage.type\": \"bool|double|Double\"\n            + \"|extension|float|Float|int|Int|private|public|string|String\",\n        \"constant.language\":\n            \"false|Infinity|NaN|nil|no|null|null|off|on|super|this|true|undefined|yes\",\n        \"support.function\":\n            \"\"\n    }, \"identifier\");\n    \n    function string(start, options) {\n        var nestable = options.nestable || options.interpolation;\n        var interpStart = options.interpolation && options.interpolation.nextState || \"start\";\n        var mainRule = {\n            regex: start + (options.multiline ? \"\" : \"(?=.)\"),\n            token: \"string.start\"\n        };\n        var nextState = [\n            options.escape && {\n                regex: options.escape,\n                token: \"character.escape\"\n            },\n            options.interpolation && {\n                token : \"paren.quasi.start\",\n                regex : lang.escapeRegExp(options.interpolation.lead + options.interpolation.open),\n                push  : interpStart\n            },\n            options.error && {\n                regex: options.error,\n                token: \"error.invalid\"\n            }, \n            {\n                regex: start + (options.multiline ? \"\" : \"|$\"),\n                token: \"string.end\",\n                next: nestable ? \"pop\" : \"start\"\n            }, {\n                defaultToken: \"string\"\n            }\n        ].filter(Boolean);\n        \n        if (nestable)\n            mainRule.push = nextState;\n        else\n            mainRule.next = nextState;\n        \n        if (!options.interpolation)\n            return mainRule;\n        \n        var open = options.interpolation.open;\n        var close = options.interpolation.close;\n        var counter = {\n            regex: \"[\" + lang.escapeRegExp(open + close) + \"]\",\n            onMatch: function(val, state, stack) {\n                this.next = val == open ? this.nextState : \"\";\n                if (val == open && stack.length) {\n                    stack.unshift(\"start\", state);\n                    return \"paren\";\n                }\n                if (val == close && stack.length) {\n                    stack.shift();\n                    this.next = stack.shift();\n                    if (this.next.indexOf(\"string\") != -1)\n                        return \"paren.quasi.end\";\n                }\n                return val == open ? \"paren.lparen\" : \"paren.rparen\";\n            },\n            nextState: interpStart\n        };\n        return [counter, mainRule];\n    }\n    \n    function comments() {\n        return [{\n                token : \"comment\",\n                regex : \"\\\\/\\\\/(?=.)\",\n                next : [\n                    DocCommentHighlightRules.getTagRule(),\n                    {token : \"comment\", regex : \"$|^\", next: \"start\"},\n                    {defaultToken : \"comment\", caseInsensitive: true}\n                ]\n            },\n            DocCommentHighlightRules.getStartRule(\"doc-start\"),\n            {\n                token : \"comment.start\",\n                regex : /\\/\\*/,\n                stateName: \"nested_comment\",\n                push : [\n                    DocCommentHighlightRules.getTagRule(),\n                    {token : \"comment.start\", regex : /\\/\\*/, push: \"nested_comment\"},\n                    {token : \"comment.end\", regex : \"\\\\*\\\\/\", next : \"pop\"},\n                    {defaultToken : \"comment\", caseInsensitive: true}\n                ]\n            }\n        ];\n    }\n    \n\n    this.$rules = {\n        start: [\n            string('\"', {\n                escape: /\\\\(?:[0\\\\tnr\"']|u{[a-fA-F1-9]{0,8}})/,\n                interpolation: {lead: \"\\\\\", open: \"(\", close: \")\"},\n                error: /\\\\./,\n                multiline: false\n            }),\n            comments({type: \"c\", nestable: true}),\n            {\n                 regex: /@[a-zA-Z_$][a-zA-Z_$\\d\\u0080-\\ufffe]*/,\n                 token: \"variable.parameter\"\n            },\n            {\n                regex: /[a-zA-Z_$][a-zA-Z_$\\d\\u0080-\\ufffe]*/,\n                token: keywordMapper\n            },  \n            {\n                token : \"constant.numeric\", \n                regex : /[+-]?(?:0(?:b[01]+|o[0-7]+|x[\\da-fA-F])|\\d+(?:(?:\\.\\d*)?(?:[PpEe][+-]?\\d+)?)\\b)/\n            }, {\n                token : \"keyword.operator\",\n                regex : /--|\\+\\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?:|[!$%&*+\\-~\\/^]=?/,\n                next  : \"start\"\n            }, {\n                token : \"punctuation.operator\",\n                regex : /[?:,;.]/,\n                next  : \"start\"\n            }, {\n                token : \"paren.lparen\",\n                regex : /[\\[({]/,\n                next  : \"start\"\n            }, {\n                token : \"paren.rparen\",\n                regex : /[\\])}]/\n            } \n            \n        ]\n    };\n    this.embedRules(DocCommentHighlightRules, \"doc-\",\n        [ DocCommentHighlightRules.getEndRule(\"start\") ]);\n    \n    this.normalizeRules();\n};\n\n\noop.inherits(SwiftHighlightRules, TextHighlightRules);\n\nexports.HighlightRules = SwiftHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/swift\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/swift_highlight_rules\",\"ace/mode/behaviour/cstyle\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar HighlightRules = acequire(\"./swift_highlight_rules\").HighlightRules;\nvar CstyleBehaviour = acequire(\"./behaviour/cstyle\").CstyleBehaviour;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = HighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = new CstyleBehaviour();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\", nestable: true};\n    \n    this.$id = \"ace/mode/swift\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/swift.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMDkuZTJmNmI3OTBjNmJhMGI4N2RmNzQuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=