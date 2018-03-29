(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[258],{

/***/ "../EVA Design System/node_modules/brace/mode/jsx.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/doc_comment_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar DocCommentHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment.doc.tag\",\n            regex : \"@[\\\\w\\\\d_]+\" // TODO: fix email addresses\n        }, \n        DocCommentHighlightRules.getTagRule(),\n        {\n            defaultToken : \"comment.doc\",\n            caseInsensitive: true\n        }]\n    };\n};\n\noop.inherits(DocCommentHighlightRules, TextHighlightRules);\n\nDocCommentHighlightRules.getTagRule = function(start) {\n    return {\n        token : \"comment.doc.tag.storage.type\",\n        regex : \"\\\\b(?:TODO|FIXME|XXX|HACK)\\\\b\"\n    };\n};\n\nDocCommentHighlightRules.getStartRule = function(start) {\n    return {\n        token : \"comment.doc\", // doc comment\n        regex : \"\\\\/\\\\*(?=\\\\*)\",\n        next  : start\n    };\n};\n\nDocCommentHighlightRules.getEndRule = function (start) {\n    return {\n        token : \"comment.doc\", // closing comment\n        regex : \"\\\\*\\\\/\",\n        next  : start\n    };\n};\n\n\nexports.DocCommentHighlightRules = DocCommentHighlightRules;\n\n});\n\nace.define(\"ace/mode/jsx_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/doc_comment_highlight_rules\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar DocCommentHighlightRules = acequire(\"./doc_comment_highlight_rules\").DocCommentHighlightRules;\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar JsxHighlightRules = function() {\n    var keywords = lang.arrayToMap(\n        (\"break|do|instanceof|typeof|case|else|new|var|catch|finally|return|void|continue|for|switch|default|while|function|this|\" +\n         \"if|throw|\" +\n         \"delete|in|try|\" +\n         \"class|extends|super|import|from|into|implements|interface|static|mixin|override|abstract|final|\" +\n         \"number|int|string|boolean|variant|\" +\n         \"log|assert\").split(\"|\")\n    );\n    \n    var buildinConstants = lang.arrayToMap(\n        (\"null|true|false|NaN|Infinity|__FILE__|__LINE__|undefined\").split(\"|\")\n    );\n    \n    var reserved = lang.arrayToMap(\n        (\"debugger|with|\" +\n         \"const|export|\" +\n         \"let|private|public|yield|protected|\" +\n         \"extern|native|as|operator|__fake__|__readonly__\").split(\"|\")\n    );\n    \n    var identifierRe = \"[a-zA-Z_][a-zA-Z0-9_]*\\\\b\";\n    \n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"\\\\/\\\\/.*$\"\n            },\n            DocCommentHighlightRules.getStartRule(\"doc-start\"),\n            {\n                token : \"comment\", // multi line comment\n                regex : \"\\\\/\\\\*\",\n                next : \"comment\"\n            }, {\n                token : \"string.regexp\",\n                regex : \"[/](?:(?:\\\\[(?:\\\\\\\\]|[^\\\\]])+\\\\])|(?:\\\\\\\\/|[^\\\\]/]))*[/]\\\\w*\\\\s*(?=[).,;]|$)\"\n            }, {\n                token : \"string\", // single line\n                regex : '[\"](?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?[\"]'\n            }, {\n                token : \"string\", // single line\n                regex : \"['](?:(?:\\\\\\\\.)|(?:[^'\\\\\\\\]))*?[']\"\n            }, {\n                token : \"constant.numeric\", // hex\n                regex : \"0[xX][0-9a-fA-F]+\\\\b\"\n            }, {\n                token : \"constant.numeric\", // float\n                regex : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\\\\b\"\n            }, {\n                token : \"constant.language.boolean\",\n                regex : \"(?:true|false)\\\\b\"\n            }, {\n                token : [\n                    \"storage.type\",\n                    \"text\",\n                    \"entity.name.function\"\n                ],\n                regex : \"(function)(\\\\s+)(\" + identifierRe + \")\"\n            }, {\n                token : function(value) {\n                    if (value == \"this\")\n                        return \"variable.language\";\n                    else if (value == \"function\")\n                        return \"storage.type\";\n                    else if (keywords.hasOwnProperty(value) || reserved.hasOwnProperty(value))\n                        return \"keyword\";\n                    else if (buildinConstants.hasOwnProperty(value))\n                        return \"constant.language\";\n                    else if (/^_?[A-Z][a-zA-Z0-9_]*$/.test(value))\n                        return \"language.support.class\";\n                    else\n                        return \"identifier\";\n                },\n                regex : identifierRe\n            }, {\n                token : \"keyword.operator\",\n                regex : \"!|%|&|\\\\*|\\\\-\\\\-|\\\\-|\\\\+\\\\+|\\\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\\\|\\\\||\\\\?\\\\:|\\\\*=|%=|\\\\+=|\\\\-=|&=|\\\\^=|\\\\b(?:in|instanceof|new|delete|typeof|void)\"\n            }, {\n                token : \"punctuation.operator\",\n                regex : \"\\\\?|\\\\:|\\\\,|\\\\;|\\\\.\"\n            }, {\n                token : \"paren.lparen\",\n                regex : \"[[({<]\"\n            }, {\n                token : \"paren.rparen\",\n                regex : \"[\\\\])}>]\"\n            }, {\n                token : \"text\",\n                regex : \"\\\\s+\"\n            }\n        ],\n        \"comment\" : [\n            {\n                token : \"comment\", // closing comment\n                regex : \"\\\\*\\\\/\",\n                next : \"start\"\n            }, {\n                defaultToken : \"comment\"\n            }\n        ]\n    };\n    \n    this.embedRules(DocCommentHighlightRules, \"doc-\",\n        [ DocCommentHighlightRules.getEndRule(\"start\") ]);\n};\n\noop.inherits(JsxHighlightRules, TextHighlightRules);\n\nexports.JsxHighlightRules = JsxHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/jsx\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/jsx_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/mode/behaviour/cstyle\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar JsxHighlightRules = acequire(\"./jsx_highlight_rules\").JsxHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar CstyleBehaviour = acequire(\"./behaviour/cstyle\").CstyleBehaviour;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nfunction Mode() {\n    this.HighlightRules = JsxHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = new CstyleBehaviour();\n    this.foldingRules = new CStyleFoldMode();\n}\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*[\\{\\(\\[]\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/jsx\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/jsx.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNTguYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=