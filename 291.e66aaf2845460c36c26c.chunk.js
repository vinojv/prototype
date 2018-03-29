(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[291],{

/***/ "../EVA Design System/node_modules/brace/mode/cirru.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/cirru_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar CirruHighlightRules = function() {\n    this.$rules = {\n        start: [{\n            token: 'constant.numeric',\n            regex: /[\\d\\.]+/\n        }, {\n            token: 'comment.line.double-dash',\n            regex: /--/,\n            next: 'comment'\n        }, {\n            token: 'storage.modifier',\n            regex: /\\(/\n        }, {\n            token: 'storage.modifier',\n            regex: /,/,\n            next: 'line'\n        }, {\n            token: 'support.function',\n            regex: /[^\\(\\)\"\\s]+/,\n            next: 'line'\n        }, {\n            token: 'string.quoted.double',\n            regex: /\"/,\n            next: 'string'\n        }, {\n            token: 'storage.modifier',\n            regex: /\\)/\n        }],\n        comment: [{\n            token: 'comment.line.double-dash',\n            regex: / +[^\\n]+/,\n            next: 'start'\n        }],\n        string: [{\n            token: 'string.quoted.double',\n            regex: /\"/,\n            next: 'line'\n        }, {\n            token: 'constant.character.escape',\n            regex: /\\\\/,\n            next: 'escape'\n        }, {\n            token: 'string.quoted.double',\n            regex: /[^\\\\\"]+/\n        }],\n        escape: [{\n            token: 'constant.character.escape',\n            regex: /./,\n            next: 'string'\n        }],\n        line: [{\n            token: 'constant.numeric',\n            regex: /[\\d\\.]+/\n        }, {\n            token: 'markup.raw',\n            regex: /^\\s*/,\n            next: 'start'\n        }, {\n            token: 'storage.modifier',\n            regex: /\\$/,\n            next: 'start'\n        }, {\n            token: 'variable.parameter',\n            regex: /[^\\(\\)\"\\s]+/\n        }, {\n            token: 'storage.modifier',\n            regex: /\\(/,\n            next: 'start'\n        }, {\n            token: 'storage.modifier',\n            regex: /\\)/\n        }, {\n            token: 'markup.raw',\n            regex: /^ */,\n            next: 'start'\n        }, {\n            token: 'string.quoted.double',\n            regex: /\"/,\n            next: 'string'\n        }]\n    };\n\n};\n\noop.inherits(CirruHighlightRules, TextHighlightRules);\n\nexports.CirruHighlightRules = CirruHighlightRules;\n});\n\nace.define(\"ace/mode/folding/coffee\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/folding/fold_mode\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\nvar Range = acequire(\"../../range\").Range;\n\nvar FoldMode = exports.FoldMode = function() {};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var range = this.indentationBlock(session, row);\n        if (range)\n            return range;\n\n        var re = /\\S/;\n        var line = session.getLine(row);\n        var startLevel = line.search(re);\n        if (startLevel == -1 || line[startLevel] != \"#\")\n            return;\n\n        var startColumn = line.length;\n        var maxRow = session.getLength();\n        var startRow = row;\n        var endRow = row;\n\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var level = line.search(re);\n\n            if (level == -1)\n                continue;\n\n            if (line[level] != \"#\")\n                break;\n\n            endRow = row;\n        }\n\n        if (endRow > startRow) {\n            var endColumn = session.getLine(endRow).length;\n            return new Range(startRow, startColumn, endRow, endColumn);\n        }\n    };\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n        var indent = line.search(/\\S/);\n        var next = session.getLine(row + 1);\n        var prev = session.getLine(row - 1);\n        var prevIndent = prev.search(/\\S/);\n        var nextIndent = next.search(/\\S/);\n\n        if (indent == -1) {\n            session.foldWidgets[row - 1] = prevIndent!= -1 && prevIndent < nextIndent ? \"start\" : \"\";\n            return \"\";\n        }\n        if (prevIndent == -1) {\n            if (indent == nextIndent && line[indent] == \"#\" && next[indent] == \"#\") {\n                session.foldWidgets[row - 1] = \"\";\n                session.foldWidgets[row + 1] = \"\";\n                return \"start\";\n            }\n        } else if (prevIndent == indent && line[indent] == \"#\" && prev[indent] == \"#\") {\n            if (session.getLine(row - 2).search(/\\S/) == -1) {\n                session.foldWidgets[row - 1] = \"start\";\n                session.foldWidgets[row + 1] = \"\";\n                return \"\";\n            }\n        }\n\n        if (prevIndent!= -1 && prevIndent < indent)\n            session.foldWidgets[row - 1] = \"start\";\n        else\n            session.foldWidgets[row - 1] = \"\";\n\n        if (indent < nextIndent)\n            return \"start\";\n        else\n            return \"\";\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/cirru\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/cirru_highlight_rules\",\"ace/mode/folding/coffee\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar CirruHighlightRules = acequire(\"./cirru_highlight_rules\").CirruHighlightRules;\nvar CoffeeFoldMode = acequire(\"./folding/coffee\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = CirruHighlightRules;\n    this.foldingRules = new CoffeeFoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"--\";\n    this.$id = \"ace/mode/cirru\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/cirru.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTEuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=