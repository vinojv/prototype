(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[292],{

/***/ "../EVA Design System/node_modules/brace/mode/c9search.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/c9search_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nfunction safeCreateRegexp(source, flag) {\n    try {\n        return new RegExp(source, flag);\n    } catch(e) {}\n}\n\nvar C9SearchHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [\n            {\n                tokenNames : [\"c9searchresults.constant.numeric\", \"c9searchresults.text\", \"c9searchresults.text\", \"c9searchresults.keyword\"],\n                regex : /(^\\s+[0-9]+)(:)(\\d*\\s?)([^\\r\\n]+)/,\n                onMatch : function(val, state, stack) {\n                    var values = this.splitRegex.exec(val);\n                    var types = this.tokenNames;\n                    var tokens = [{\n                        type: types[0],\n                        value: values[1]\n                    }, {\n                        type: types[1],\n                        value: values[2]\n                    }];\n                    \n                    if (values[3]) {\n                        if (values[3] == \" \")\n                            tokens[1] = { type: types[1], value: values[2] + \" \" };\n                        else\n                            tokens.push({ type: types[1], value: values[3] });\n                    }\n                    var regex = stack[1];\n                    var str = values[4];\n                    \n                    var m;\n                    var last = 0;\n                    if (regex && regex.exec) {\n                        regex.lastIndex = 0;\n                        while (m = regex.exec(str)) {\n                            var skipped = str.substring(last, m.index);\n                            last = regex.lastIndex;\n                            if (skipped)\n                                tokens.push({type: types[2], value: skipped});\n                            if (m[0])\n                                tokens.push({type: types[3], value: m[0]});\n                            else if (!skipped)\n                                break;\n                        }\n                    }\n                    if (last < str.length)\n                        tokens.push({type: types[2], value: str.substr(last)});\n                    return tokens;\n                }\n            },\n            {\n                regex : \"^Searching for [^\\\\r\\\\n]*$\",\n                onMatch: function(val, state, stack) {\n                    var parts = val.split(\"\\x01\");\n                    if (parts.length < 3)\n                        return \"text\";\n\n                    var options, search, replace;\n                    \n                    var i = 0;\n                    var tokens = [{\n                        value: parts[i++] + \"'\",\n                        type: \"text\"\n                    }, {\n                        value: search = parts[i++],\n                        type: \"text\" // \"c9searchresults.keyword\"\n                    }, {\n                        value: \"'\" + parts[i++],\n                        type: \"text\"\n                    }];\n                    if (parts[2] !== \" in\") {\n                        replace = parts[i];\n                        tokens.push({\n                            value: \"'\" + parts[i++] + \"'\",\n                            type: \"text\"\n                        }, {\n                            value: parts[i++],\n                            type: \"text\"\n                        });\n                    }\n                    tokens.push({\n                        value: \" \" + parts[i++] + \" \",\n                        type: \"text\"\n                    });\n                    if (parts[i+1]) {\n                        options = parts[i+1];\n                        tokens.push({\n                            value: \"(\" + parts[i+1] + \")\",\n                            type: \"text\"\n                        });\n                        i += 1;\n                    } else {\n                        i -= 1;\n                    }\n                    while (i++ < parts.length) {\n                        parts[i] && tokens.push({\n                            value: parts[i],\n                            type: \"text\"\n                        });\n                    }\n                    \n                    if (search) {\n                        if (!/regex/.test(options))\n                            search = lang.escapeRegExp(search);\n                        if (/whole/.test(options))\n                            search = \"\\\\b\" + search + \"\\\\b\";\n                    }\n                    \n                    var regex = search && safeCreateRegexp(\n                        \"(\" + search + \")\",\n                        / sensitive/.test(options) ? \"g\" : \"ig\"\n                    );\n                    if (regex) {\n                        stack[0] = state;\n                        stack[1] = regex;\n                    }\n                    \n                    return tokens;\n                }\n            },\n            {\n                regex : \"^(?=Found \\\\d+ matches)\",\n                token : \"text\",\n                next : \"numbers\"\n            },\n            {\n                token : \"string\", // single line\n                regex : \"^\\\\S:?[^:]+\",\n                next : \"numbers\"\n            }\n        ],\n        numbers:[{\n            regex : \"\\\\d+\",\n            token : \"constant.numeric\"\n        }, {\n            regex : \"$\",\n            token : \"text\",\n            next : \"start\"\n        }]\n    };\n    this.normalizeRules();\n};\n\noop.inherits(C9SearchHighlightRules, TextHighlightRules);\n\nexports.C9SearchHighlightRules = C9SearchHighlightRules;\n\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/folding/c9search\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function() {};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.foldingStartMarker = /^(\\S.*:|Searching for.*)$/;\n    this.foldingStopMarker = /^(\\s+|Found.*)$/;\n    \n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var lines = session.doc.getAllLines(row);\n        var line = lines[row];\n        var level1 = /^(Found.*|Searching for.*)$/;\n        var level2 = /^(\\S.*:|\\s*)$/;\n        var re = level1.test(line) ? level1 : level2;\n        \n        var startRow = row;\n        var endRow = row;\n\n        if (this.foldingStartMarker.test(line)) {\n            for (var i = row + 1, l = session.getLength(); i < l; i++) {\n                if (re.test(lines[i]))\n                    break;\n            }\n            endRow = i;\n        }\n        else if (this.foldingStopMarker.test(line)) {\n            for (var i = row - 1; i >= 0; i--) {\n                line = lines[i];\n                if (re.test(line))\n                    break;\n            }\n            startRow = i;\n        }\n        if (startRow != endRow) {\n            var col = line.length;\n            if (re === level1)\n                col = line.search(/\\(Found[^)]+\\)$|$/);\n            return new Range(startRow, col, endRow, 0);\n        }\n    };\n    \n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/c9search\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/c9search_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/mode/folding/c9search\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar C9SearchHighlightRules = acequire(\"./c9search_highlight_rules\").C9SearchHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar C9StyleFoldMode = acequire(\"./folding/c9search\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = C9SearchHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.foldingRules = new C9StyleFoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    \n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/c9search\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/c9search.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTIuM2ExNTcwZThhNjg4OTllYWM2MTMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=