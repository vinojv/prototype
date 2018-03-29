(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[217],{

/***/ "../EVA Design System/node_modules/brace/mode/sh.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/sh_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar reservedKeywords = exports.reservedKeywords = (\n        '!|{|}|case|do|done|elif|else|'+\n        'esac|fi|for|if|in|then|until|while|'+\n        '&|;|export|local|read|typeset|unset|'+\n        'elif|select|set|function|declare|readonly'\n    );\n\nvar languageConstructs = exports.languageConstructs = (\n    '[|]|alias|bg|bind|break|builtin|'+\n     'cd|command|compgen|complete|continue|'+\n     'dirs|disown|echo|enable|eval|exec|'+\n     'exit|fc|fg|getopts|hash|help|history|'+\n     'jobs|kill|let|logout|popd|printf|pushd|'+\n     'pwd|return|set|shift|shopt|source|'+\n     'suspend|test|times|trap|type|ulimit|'+\n     'umask|unalias|wait'\n);\n\nvar ShHighlightRules = function() {\n    var keywordMapper = this.createKeywordMapper({\n        \"keyword\": reservedKeywords,\n        \"support.function.builtin\": languageConstructs,\n        \"invalid.deprecated\": \"debugger\"\n    }, \"identifier\");\n\n    var integer = \"(?:(?:[1-9]\\\\d*)|(?:0))\";\n\n    var fraction = \"(?:\\\\.\\\\d+)\";\n    var intPart = \"(?:\\\\d+)\";\n    var pointFloat = \"(?:(?:\" + intPart + \"?\" + fraction + \")|(?:\" + intPart + \"\\\\.))\";\n    var exponentFloat = \"(?:(?:\" + pointFloat + \"|\" +  intPart + \")\" + \")\";\n    var floatNumber = \"(?:\" + exponentFloat + \"|\" + pointFloat + \")\";\n    var fileDescriptor = \"(?:&\" + intPart + \")\";\n\n    var variableName = \"[a-zA-Z_][a-zA-Z0-9_]*\";\n    var variable = \"(?:\" + variableName + \"(?==))\";\n\n    var builtinVariable = \"(?:\\\\$(?:SHLVL|\\\\$|\\\\!|\\\\?))\";\n\n    var func = \"(?:\" + variableName + \"\\\\s*\\\\(\\\\))\";\n\n    this.$rules = {\n        \"start\" : [{\n            token : \"constant\",\n            regex : /\\\\./\n        }, {\n            token : [\"text\", \"comment\"],\n            regex : /(^|\\s)(#.*)$/\n        }, {\n            token : \"string.start\",\n            regex : '\"',\n            push : [{\n                token : \"constant.language.escape\",\n                regex : /\\\\(?:[$`\"\\\\]|$)/\n            }, {\n                include : \"variables\"\n            }, {\n                token : \"keyword.operator\",\n                regex : /`/ // TODO highlight `\n            }, {\n                token : \"string.end\",\n                regex : '\"',\n                next: \"pop\"\n            }, {\n                defaultToken: \"string\"\n            }]\n        }, {\n            token : \"string\",\n            regex : \"\\\\$'\",\n            push : [{\n                token : \"constant.language.escape\",\n                regex : /\\\\(?:[abeEfnrtv\\\\'\"]|x[a-fA-F\\d]{1,2}|u[a-fA-F\\d]{4}([a-fA-F\\d]{4})?|c.|\\d{1,3})/\n            }, {\n                token : \"string\",\n                regex : \"'\",\n                next: \"pop\"\n            }, {\n                defaultToken: \"string\"\n            }]\n        }, {\n            regex : \"<<<\",\n            token : \"keyword.operator\"\n        }, {\n            stateName: \"heredoc\",\n            regex : \"(<<-?)(\\\\s*)(['\\\"`]?)([\\\\w\\\\-]+)(['\\\"`]?)\",\n            onMatch : function(value, currentState, stack) {\n                var next = value[2] == '-' ? \"indentedHeredoc\" : \"heredoc\";\n                var tokens = value.split(this.splitRegex);\n                stack.push(next, tokens[4]);\n                return [\n                    {type:\"constant\", value: tokens[1]},\n                    {type:\"text\", value: tokens[2]},\n                    {type:\"string\", value: tokens[3]},\n                    {type:\"support.class\", value: tokens[4]},\n                    {type:\"string\", value: tokens[5]}\n                ];\n            },\n            rules: {\n                heredoc: [{\n                    onMatch:  function(value, currentState, stack) {\n                        if (value === stack[1]) {\n                            stack.shift();\n                            stack.shift();\n                            this.next = stack[0] || \"start\";\n                            return \"support.class\";\n                        }\n                        this.next = \"\";\n                        return \"string\";\n                    },\n                    regex: \".*$\",\n                    next: \"start\"\n                }],\n                indentedHeredoc: [{\n                    token: \"string\",\n                    regex: \"^\\t+\"\n                }, {\n                    onMatch:  function(value, currentState, stack) {\n                        if (value === stack[1]) {\n                            stack.shift();\n                            stack.shift();\n                            this.next = stack[0] || \"start\";\n                            return \"support.class\";\n                        }\n                        this.next = \"\";\n                        return \"string\";\n                    },\n                    regex: \".*$\",\n                    next: \"start\"\n                }]\n            }\n        }, {\n            regex : \"$\",\n            token : \"empty\",\n            next : function(currentState, stack) {\n                if (stack[0] === \"heredoc\" || stack[0] === \"indentedHeredoc\")\n                    return stack[0];\n                return currentState;\n            }\n        }, {\n            token : [\"keyword\", \"text\", \"text\", \"text\", \"variable\"],\n            regex : /(declare|local|readonly)(\\s+)(?:(-[fixar]+)(\\s+))?([a-zA-Z_][a-zA-Z0-9_]*\\b)/\n        }, {\n            token : \"variable.language\",\n            regex : builtinVariable\n        }, {\n            token : \"variable\",\n            regex : variable\n        }, {\n            include : \"variables\"\n        }, {\n            token : \"support.function\",\n            regex : func\n        }, {\n            token : \"support.function\",\n            regex : fileDescriptor\n        }, {\n            token : \"string\",           // ' string\n            start : \"'\", end : \"'\"\n        }, {\n            token : \"constant.numeric\", // float\n            regex : floatNumber\n        }, {\n            token : \"constant.numeric\", // integer\n            regex : integer + \"\\\\b\"\n        }, {\n            token : keywordMapper,\n            regex : \"[a-zA-Z_][a-zA-Z0-9_]*\\\\b\"\n        }, {\n            token : \"keyword.operator\",\n            regex : \"\\\\+|\\\\-|\\\\*|\\\\*\\\\*|\\\\/|\\\\/\\\\/|~|<|>|<=|=>|=|!=|[%&|`]\"\n        }, {\n            token : \"punctuation.operator\",\n            regex : \";\"\n        }, {\n            token : \"paren.lparen\",\n            regex : \"[\\\\[\\\\(\\\\{]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\]]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\)\\\\}]\",\n            next : \"pop\"\n        }],\n        variables: [{\n            token : \"variable\",\n            regex : /(\\$)(\\w+)/\n        }, {\n            token : [\"variable\", \"paren.lparen\"],\n            regex : /(\\$)(\\()/,\n            push : \"start\"\n        }, {\n            token : [\"variable\", \"paren.lparen\", \"keyword.operator\", \"variable\", \"keyword.operator\"],\n            regex : /(\\$)(\\{)([#!]?)(\\w+|[*@#?\\-$!0_])(:[?+\\-=]?|##?|%%?|,,?\\/|\\^\\^?)?/,\n            push : \"start\"\n        }, {\n            token : \"variable\",\n            regex : /\\$[*@#?\\-$!0_]/\n        }, {\n            token : [\"variable\", \"paren.lparen\"],\n            regex : /(\\$)(\\{)/,\n            push : \"start\"\n        }]\n    };\n    \n    this.normalizeRules();\n};\n\noop.inherits(ShHighlightRules, TextHighlightRules);\n\nexports.ShHighlightRules = ShHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/sh\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/sh_highlight_rules\",\"ace/range\",\"ace/mode/folding/cstyle\",\"ace/mode/behaviour/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar ShHighlightRules = acequire(\"./sh_highlight_rules\").ShHighlightRules;\nvar Range = acequire(\"../range\").Range;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\nvar CstyleBehaviour = acequire(\"./behaviour/cstyle\").CstyleBehaviour;\n\nvar Mode = function() {\n    this.HighlightRules = ShHighlightRules;\n    this.foldingRules = new CStyleFoldMode();\n    this.$behaviour = new CstyleBehaviour();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n   \n    this.lineCommentStart = \"#\";\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*[\\{\\(\\[:]\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        }\n\n        return indent;\n    };\n\n    var outdents = {\n        \"pass\": 1,\n        \"return\": 1,\n        \"raise\": 1,\n        \"break\": 1,\n        \"continue\": 1\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        if (input !== \"\\r\\n\" && input !== \"\\r\" && input !== \"\\n\")\n            return false;\n\n        var tokens = this.getTokenizer().getLineTokens(line.trim(), state).tokens;\n\n        if (!tokens)\n            return false;\n        do {\n            var last = tokens.pop();\n        } while (last && (last.type == \"comment\" || (last.type == \"text\" && last.value.match(/^\\s+$/))));\n\n        if (!last)\n            return false;\n\n        return (last.type == \"keyword\" && outdents[last.value]);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n\n        row += 1;\n        var indent = this.$getIndent(doc.getLine(row));\n        var tab = doc.getTabString();\n        if (indent.slice(-tab.length) == tab)\n            doc.remove(new Range(row, indent.length-tab.length, row, indent.length));\n    };\n\n    this.$id = \"ace/mode/sh\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/sh.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMTcuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=