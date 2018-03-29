(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[207],{

/***/ "../EVA Design System/node_modules/brace/mode/tex.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/tex_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar TexHighlightRules = function(textClass) {\n\n    if (!textClass)\n        textClass = \"text\";\n\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"%.*$\"\n            }, {\n                token : textClass, // non-command\n                regex : \"\\\\\\\\[$&%#\\\\{\\\\}]\"\n            }, {\n                token : \"keyword\", // command\n                regex : \"\\\\\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\\\b\",\n               next : \"nospell\"\n            }, {\n                token : \"keyword\", // command\n                regex : \"\\\\\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])\"\n            }, {\n               token : \"paren.keyword.operator\",\n                regex : \"[[({]\"\n            }, {\n               token : \"paren.keyword.operator\",\n                regex : \"[\\\\])}]\"\n            }, {\n                token : textClass,\n                regex : \"\\\\s+\"\n            }\n        ],\n        \"nospell\" : [\n           {\n               token : \"comment\",\n               regex : \"%.*$\",\n               next : \"start\"\n           }, {\n               token : \"nospell.\" + textClass, // non-command\n               regex : \"\\\\\\\\[$&%#\\\\{\\\\}]\"\n           }, {\n               token : \"keyword\", // command\n               regex : \"\\\\\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\\\b\"\n           }, {\n               token : \"keyword\", // command\n               regex : \"\\\\\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])\",\n               next : \"start\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"[[({]\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"[\\\\])]\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"}\",\n               next : \"start\"\n           }, {\n               token : \"nospell.\" + textClass,\n               regex : \"\\\\s+\"\n           }, {\n               token : \"nospell.\" + textClass,\n               regex : \"\\\\w+\"\n           }\n        ]\n    };\n};\n\noop.inherits(TexHighlightRules, TextHighlightRules);\n\nexports.TexHighlightRules = TexHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/tex\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/text_highlight_rules\",\"ace/mode/tex_highlight_rules\",\"ace/mode/matching_brace_outdent\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar TexHighlightRules = acequire(\"./tex_highlight_rules\").TexHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\n\nvar Mode = function(suppressHighlighting) {\n    if (suppressHighlighting)\n        this.HighlightRules = TextHighlightRules;\n    else\n        this.HighlightRules = TexHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n   this.lineCommentStart = \"%\";\n   this.getNextLineIndent = function(state, line, tab) {\n      return this.$getIndent(line);\n   };\n\n   this.allowAutoInsert = function() {\n      return false;\n   };\n    this.$id = \"ace/mode/tex\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/tex.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMDcuZTJmNmI3OTBjNmJhMGI4N2RmNzQuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=