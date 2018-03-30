(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ "../EVA Design System/node_modules/brace/mode/makefile.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/sh_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar reservedKeywords = exports.reservedKeywords = (\n        '!|{|}|case|do|done|elif|else|'+\n        'esac|fi|for|if|in|then|until|while|'+\n        '&|;|export|local|read|typeset|unset|'+\n        'elif|select|set|function|declare|readonly'\n    );\n\nvar languageConstructs = exports.languageConstructs = (\n    '[|]|alias|bg|bind|break|builtin|'+\n     'cd|command|compgen|complete|continue|'+\n     'dirs|disown|echo|enable|eval|exec|'+\n     'exit|fc|fg|getopts|hash|help|history|'+\n     'jobs|kill|let|logout|popd|printf|pushd|'+\n     'pwd|return|set|shift|shopt|source|'+\n     'suspend|test|times|trap|type|ulimit|'+\n     'umask|unalias|wait'\n);\n\nvar ShHighlightRules = function() {\n    var keywordMapper = this.createKeywordMapper({\n        \"keyword\": reservedKeywords,\n        \"support.function.builtin\": languageConstructs,\n        \"invalid.deprecated\": \"debugger\"\n    }, \"identifier\");\n\n    var integer = \"(?:(?:[1-9]\\\\d*)|(?:0))\";\n\n    var fraction = \"(?:\\\\.\\\\d+)\";\n    var intPart = \"(?:\\\\d+)\";\n    var pointFloat = \"(?:(?:\" + intPart + \"?\" + fraction + \")|(?:\" + intPart + \"\\\\.))\";\n    var exponentFloat = \"(?:(?:\" + pointFloat + \"|\" +  intPart + \")\" + \")\";\n    var floatNumber = \"(?:\" + exponentFloat + \"|\" + pointFloat + \")\";\n    var fileDescriptor = \"(?:&\" + intPart + \")\";\n\n    var variableName = \"[a-zA-Z_][a-zA-Z0-9_]*\";\n    var variable = \"(?:\" + variableName + \"(?==))\";\n\n    var builtinVariable = \"(?:\\\\$(?:SHLVL|\\\\$|\\\\!|\\\\?))\";\n\n    var func = \"(?:\" + variableName + \"\\\\s*\\\\(\\\\))\";\n\n    this.$rules = {\n        \"start\" : [{\n            token : \"constant\",\n            regex : /\\\\./\n        }, {\n            token : [\"text\", \"comment\"],\n            regex : /(^|\\s)(#.*)$/\n        }, {\n            token : \"string.start\",\n            regex : '\"',\n            push : [{\n                token : \"constant.language.escape\",\n                regex : /\\\\(?:[$`\"\\\\]|$)/\n            }, {\n                include : \"variables\"\n            }, {\n                token : \"keyword.operator\",\n                regex : /`/ // TODO highlight `\n            }, {\n                token : \"string.end\",\n                regex : '\"',\n                next: \"pop\"\n            }, {\n                defaultToken: \"string\"\n            }]\n        }, {\n            token : \"string\",\n            regex : \"\\\\$'\",\n            push : [{\n                token : \"constant.language.escape\",\n                regex : /\\\\(?:[abeEfnrtv\\\\'\"]|x[a-fA-F\\d]{1,2}|u[a-fA-F\\d]{4}([a-fA-F\\d]{4})?|c.|\\d{1,3})/\n            }, {\n                token : \"string\",\n                regex : \"'\",\n                next: \"pop\"\n            }, {\n                defaultToken: \"string\"\n            }]\n        }, {\n            regex : \"<<<\",\n            token : \"keyword.operator\"\n        }, {\n            stateName: \"heredoc\",\n            regex : \"(<<-?)(\\\\s*)(['\\\"`]?)([\\\\w\\\\-]+)(['\\\"`]?)\",\n            onMatch : function(value, currentState, stack) {\n                var next = value[2] == '-' ? \"indentedHeredoc\" : \"heredoc\";\n                var tokens = value.split(this.splitRegex);\n                stack.push(next, tokens[4]);\n                return [\n                    {type:\"constant\", value: tokens[1]},\n                    {type:\"text\", value: tokens[2]},\n                    {type:\"string\", value: tokens[3]},\n                    {type:\"support.class\", value: tokens[4]},\n                    {type:\"string\", value: tokens[5]}\n                ];\n            },\n            rules: {\n                heredoc: [{\n                    onMatch:  function(value, currentState, stack) {\n                        if (value === stack[1]) {\n                            stack.shift();\n                            stack.shift();\n                            this.next = stack[0] || \"start\";\n                            return \"support.class\";\n                        }\n                        this.next = \"\";\n                        return \"string\";\n                    },\n                    regex: \".*$\",\n                    next: \"start\"\n                }],\n                indentedHeredoc: [{\n                    token: \"string\",\n                    regex: \"^\\t+\"\n                }, {\n                    onMatch:  function(value, currentState, stack) {\n                        if (value === stack[1]) {\n                            stack.shift();\n                            stack.shift();\n                            this.next = stack[0] || \"start\";\n                            return \"support.class\";\n                        }\n                        this.next = \"\";\n                        return \"string\";\n                    },\n                    regex: \".*$\",\n                    next: \"start\"\n                }]\n            }\n        }, {\n            regex : \"$\",\n            token : \"empty\",\n            next : function(currentState, stack) {\n                if (stack[0] === \"heredoc\" || stack[0] === \"indentedHeredoc\")\n                    return stack[0];\n                return currentState;\n            }\n        }, {\n            token : [\"keyword\", \"text\", \"text\", \"text\", \"variable\"],\n            regex : /(declare|local|readonly)(\\s+)(?:(-[fixar]+)(\\s+))?([a-zA-Z_][a-zA-Z0-9_]*\\b)/\n        }, {\n            token : \"variable.language\",\n            regex : builtinVariable\n        }, {\n            token : \"variable\",\n            regex : variable\n        }, {\n            include : \"variables\"\n        }, {\n            token : \"support.function\",\n            regex : func\n        }, {\n            token : \"support.function\",\n            regex : fileDescriptor\n        }, {\n            token : \"string\",           // ' string\n            start : \"'\", end : \"'\"\n        }, {\n            token : \"constant.numeric\", // float\n            regex : floatNumber\n        }, {\n            token : \"constant.numeric\", // integer\n            regex : integer + \"\\\\b\"\n        }, {\n            token : keywordMapper,\n            regex : \"[a-zA-Z_][a-zA-Z0-9_]*\\\\b\"\n        }, {\n            token : \"keyword.operator\",\n            regex : \"\\\\+|\\\\-|\\\\*|\\\\*\\\\*|\\\\/|\\\\/\\\\/|~|<|>|<=|=>|=|!=|[%&|`]\"\n        }, {\n            token : \"punctuation.operator\",\n            regex : \";\"\n        }, {\n            token : \"paren.lparen\",\n            regex : \"[\\\\[\\\\(\\\\{]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\]]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\)\\\\}]\",\n            next : \"pop\"\n        }],\n        variables: [{\n            token : \"variable\",\n            regex : /(\\$)(\\w+)/\n        }, {\n            token : [\"variable\", \"paren.lparen\"],\n            regex : /(\\$)(\\()/,\n            push : \"start\"\n        }, {\n            token : [\"variable\", \"paren.lparen\", \"keyword.operator\", \"variable\", \"keyword.operator\"],\n            regex : /(\\$)(\\{)([#!]?)(\\w+|[*@#?\\-$!0_])(:[?+\\-=]?|##?|%%?|,,?\\/|\\^\\^?)?/,\n            push : \"start\"\n        }, {\n            token : \"variable\",\n            regex : /\\$[*@#?\\-$!0_]/\n        }, {\n            token : [\"variable\", \"paren.lparen\"],\n            regex : /(\\$)(\\{)/,\n            push : \"start\"\n        }]\n    };\n    \n    this.normalizeRules();\n};\n\noop.inherits(ShHighlightRules, TextHighlightRules);\n\nexports.ShHighlightRules = ShHighlightRules;\n});\n\nace.define(\"ace/mode/makefile_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\",\"ace/mode/sh_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar ShHighlightFile = acequire(\"./sh_highlight_rules\");\n\nvar MakefileHighlightRules = function() {\n\n    var keywordMapper = this.createKeywordMapper({\n        \"keyword\": ShHighlightFile.reservedKeywords,\n        \"support.function.builtin\": ShHighlightFile.languageConstructs,\n        \"invalid.deprecated\": \"debugger\"\n    }, \"string\");\n\n    this.$rules = \n        {\n    \"start\": [\n        {\n            token: \"string.interpolated.backtick.makefile\",\n            regex: \"`\",\n            next: \"shell-start\"\n        },\n        {\n            token: \"punctuation.definition.comment.makefile\",\n            regex: /#(?=.)/,\n            next: \"comment\"\n        },\n        {\n            token: [ \"keyword.control.makefile\"],\n            regex: \"^(?:\\\\s*\\\\b)(\\\\-??include|ifeq|ifneq|ifdef|ifndef|else|endif|vpath|export|unexport|define|endef|override)(?:\\\\b)\"\n        },\n        {// ^([^\\t ]+(\\s[^\\t ]+)*:(?!\\=))\\s*.*\n            token: [\"entity.name.function.makefile\", \"text\"],\n            regex: \"^([^\\\\t ]+(?:\\\\s[^\\\\t ]+)*:)(\\\\s*.*)\"\n        }\n    ],\n    \"comment\": [\n        {\n            token : \"punctuation.definition.comment.makefile\",\n            regex : /.+\\\\/\n        },\n        {\n            token : \"punctuation.definition.comment.makefile\",\n            regex : \".+\",\n            next  : \"start\"\n        }\n    ],\n    \"shell-start\": [\n        {\n            token: keywordMapper,\n            regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n        }, \n        {\n            token: \"string\",\n            regex : \"\\\\w+\"\n        }, \n        {\n            token : \"string.interpolated.backtick.makefile\",\n            regex : \"`\",\n            next  : \"start\"\n        }\n    ]\n};\n\n};\n\noop.inherits(MakefileHighlightRules, TextHighlightRules);\n\nexports.MakefileHighlightRules = MakefileHighlightRules;\n});\n\nace.define(\"ace/mode/folding/coffee\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/folding/fold_mode\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\nvar Range = acequire(\"../../range\").Range;\n\nvar FoldMode = exports.FoldMode = function() {};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var range = this.indentationBlock(session, row);\n        if (range)\n            return range;\n\n        var re = /\\S/;\n        var line = session.getLine(row);\n        var startLevel = line.search(re);\n        if (startLevel == -1 || line[startLevel] != \"#\")\n            return;\n\n        var startColumn = line.length;\n        var maxRow = session.getLength();\n        var startRow = row;\n        var endRow = row;\n\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var level = line.search(re);\n\n            if (level == -1)\n                continue;\n\n            if (line[level] != \"#\")\n                break;\n\n            endRow = row;\n        }\n\n        if (endRow > startRow) {\n            var endColumn = session.getLine(endRow).length;\n            return new Range(startRow, startColumn, endRow, endColumn);\n        }\n    };\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n        var indent = line.search(/\\S/);\n        var next = session.getLine(row + 1);\n        var prev = session.getLine(row - 1);\n        var prevIndent = prev.search(/\\S/);\n        var nextIndent = next.search(/\\S/);\n\n        if (indent == -1) {\n            session.foldWidgets[row - 1] = prevIndent!= -1 && prevIndent < nextIndent ? \"start\" : \"\";\n            return \"\";\n        }\n        if (prevIndent == -1) {\n            if (indent == nextIndent && line[indent] == \"#\" && next[indent] == \"#\") {\n                session.foldWidgets[row - 1] = \"\";\n                session.foldWidgets[row + 1] = \"\";\n                return \"start\";\n            }\n        } else if (prevIndent == indent && line[indent] == \"#\" && prev[indent] == \"#\") {\n            if (session.getLine(row - 2).search(/\\S/) == -1) {\n                session.foldWidgets[row - 1] = \"start\";\n                session.foldWidgets[row + 1] = \"\";\n                return \"\";\n            }\n        }\n\n        if (prevIndent!= -1 && prevIndent < indent)\n            session.foldWidgets[row - 1] = \"start\";\n        else\n            session.foldWidgets[row - 1] = \"\";\n\n        if (indent < nextIndent)\n            return \"start\";\n        else\n            return \"\";\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/makefile\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/makefile_highlight_rules\",\"ace/mode/folding/coffee\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar MakefileHighlightRules = acequire(\"./makefile_highlight_rules\").MakefileHighlightRules;\nvar FoldMode = acequire(\"./folding/coffee\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = MakefileHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n       \n    this.lineCommentStart = \"#\";    \n    this.$indentWithTabs = true;\n    \n    this.$id = \"ace/mode/makefile\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/makefile.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNDcuM2ExNTcwZThhNjg4OTllYWM2MTMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=