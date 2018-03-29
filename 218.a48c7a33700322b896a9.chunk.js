(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[218],{

/***/ "../EVA Design System/node_modules/brace/mode/scheme.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/scheme_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar SchemeHighlightRules = function() {\n    var keywordControl = \"case|do|let|loop|if|else|when\";\n    var keywordOperator = \"eq?|eqv?|equal?|and|or|not|null?\";\n    var constantLanguage = \"#t|#f\";\n    var supportFunctions = \"cons|car|cdr|cond|lambda|lambda*|syntax-rules|format|set!|quote|eval|append|list|list?|member?|load\";\n\n    var keywordMapper = this.createKeywordMapper({\n        \"keyword.control\": keywordControl,\n        \"keyword.operator\": keywordOperator,\n        \"constant.language\": constantLanguage,\n        \"support.function\": supportFunctions\n    }, \"identifier\", true);\n\n    this.$rules = \n        {\n    \"start\": [\n        {\n            token : \"comment\",\n            regex : \";.*$\"\n        },\n        {\n            \"token\": [\"storage.type.function-type.scheme\", \"text\", \"entity.name.function.scheme\"],\n            \"regex\": \"(?:\\\\b(?:(define|define-syntax|define-macro))\\\\b)(\\\\s+)((?:\\\\w|\\\\-|\\\\!|\\\\?)*)\"\n        },\n        {\n            \"token\": \"punctuation.definition.constant.character.scheme\",\n            \"regex\": \"#:\\\\S+\"\n        },\n        {\n            \"token\": [\"punctuation.definition.variable.scheme\", \"variable.other.global.scheme\", \"punctuation.definition.variable.scheme\"],\n            \"regex\": \"(\\\\*)(\\\\S*)(\\\\*)\"\n        },\n        {\n            \"token\" : \"constant.numeric\", // hex\n            \"regex\" : \"#[xXoObB][0-9a-fA-F]+\"\n        }, \n        {\n            \"token\" : \"constant.numeric\", // float\n            \"regex\" : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\"\n        },\n        {\n                \"token\" : keywordMapper,\n                \"regex\" : \"[a-zA-Z_#][a-zA-Z0-9_\\\\-\\\\?\\\\!\\\\*]*\"\n        },\n        {\n            \"token\" : \"string\",\n            \"regex\" : '\"(?=.)',\n            \"next\"  : \"qqstring\"\n        }\n    ],\n    \"qqstring\": [\n        {\n            \"token\": \"constant.character.escape.scheme\",\n            \"regex\": \"\\\\\\\\.\"\n        },\n        {\n            \"token\" : \"string\",\n            \"regex\" : '[^\"\\\\\\\\]+',\n            \"merge\" : true\n        }, {\n            \"token\" : \"string\",\n            \"regex\" : \"\\\\\\\\$\",\n            \"next\"  : \"qqstring\",\n            \"merge\" : true\n        }, {\n            \"token\" : \"string\",\n            \"regex\" : '\"|$',\n            \"next\"  : \"start\",\n            \"merge\" : true\n        }\n    ]\n};\n\n};\n\noop.inherits(SchemeHighlightRules, TextHighlightRules);\n\nexports.SchemeHighlightRules = SchemeHighlightRules;\n});\n\nace.define(\"ace/mode/matching_parens_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingParensOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\)/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\))/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        var match = line.match(/^(\\s+)/);\n        if (match) {\n            return match[1];\n        }\n\n        return \"\";\n    };\n\n}).call(MatchingParensOutdent.prototype);\n\nexports.MatchingParensOutdent = MatchingParensOutdent;\n});\n\nace.define(\"ace/mode/scheme\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/scheme_highlight_rules\",\"ace/mode/matching_parens_outdent\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar SchemeHighlightRules = acequire(\"./scheme_highlight_rules\").SchemeHighlightRules;\nvar MatchingParensOutdent = acequire(\"./matching_parens_outdent\").MatchingParensOutdent;\n\nvar Mode = function() {\n    this.HighlightRules = SchemeHighlightRules;\n\tthis.$outdent = new MatchingParensOutdent();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n       \n    this.lineCommentStart = \";\";\n    this.minorIndentFunctions = [\"define\", \"lambda\", \"define-macro\", \"define-syntax\", \"syntax-rules\", \"define-record-type\", \"define-structure\"];\n\n    this.$toIndent = function(str) {\n        return str.split('').map(function(ch) {\n            if (/\\s/.exec(ch)) {\n                return ch;\n            } else {\n                return ' ';\n            }\n        }).join('');\n    };\n\n    this.$calculateIndent = function(line, tab) {\n        var baseIndent = this.$getIndent(line);\n        var delta = 0;\n        var isParen, ch;\n        for (var i = line.length - 1; i >= 0; i--) {\n            ch = line[i];\n            if (ch === '(') {\n                delta--;\n                isParen = true;\n            } else if (ch === '(' || ch === '[' || ch === '{') {\n                delta--;\n                isParen = false;\n            } else if (ch === ')' || ch === ']' || ch === '}') {\n                delta++;\n            }\n            if (delta < 0) {\n                break;\n            }\n        }\n        if (delta < 0 && isParen) {\n            i += 1;\n            var iBefore = i;\n            var fn = '';\n            while (true) {\n                ch = line[i];\n                if (ch === ' ' || ch === '\\t') {\n                    if(this.minorIndentFunctions.indexOf(fn) !== -1) {\n                        return this.$toIndent(line.substring(0, iBefore - 1) + tab);\n                    } else {\n                        return this.$toIndent(line.substring(0, i + 1));\n                    }\n                } else if (ch === undefined) {\n                    return this.$toIndent(line.substring(0, iBefore - 1) + tab);\n                }\n                fn += line[i];\n                i++;\n            }\n        } else if(delta < 0 && !isParen) {\n            return this.$toIndent(line.substring(0, i+1));\n        } else if(delta > 0) {\n            baseIndent = baseIndent.substring(0, baseIndent.length - tab.length);\n            return baseIndent;\n        } else {\n            return baseIndent;\n        }\n    };\n\n    this.getNextLineIndent = function(state, line, tab) {\n        return this.$calculateIndent(line, tab);\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n    \n    this.$id = \"ace/mode/scheme\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/scheme.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMTguYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=