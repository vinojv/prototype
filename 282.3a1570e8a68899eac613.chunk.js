(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[282],{

/***/ "../EVA Design System/node_modules/brace/mode/diff.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/diff_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar DiffHighlightRules = function() {\n\n    this.$rules = {\n        \"start\" : [{\n                regex: \"^(?:\\\\*{15}|={67}|-{3}|\\\\+{3})$\",\n                token: \"punctuation.definition.separator.diff\",\n                \"name\": \"keyword\"\n            }, { //diff.range.unified\n                regex: \"^(@@)(\\\\s*.+?\\\\s*)(@@)(.*)$\",\n                token: [\n                    \"constant\",\n                    \"constant.numeric\",\n                    \"constant\",\n                    \"comment.doc.tag\"\n                ]\n            }, { //diff.range.normal\n                regex: \"^(\\\\d+)([,\\\\d]+)(a|d|c)(\\\\d+)([,\\\\d]+)(.*)$\",\n                token: [\n                    \"constant.numeric\",\n                    \"punctuation.definition.range.diff\",\n                    \"constant.function\",\n                    \"constant.numeric\",\n                    \"punctuation.definition.range.diff\",\n                    \"invalid\"\n                ],\n                \"name\": \"meta.\"\n            }, {\n                regex: \"^(\\\\-{3}|\\\\+{3}|\\\\*{3})( .+)$\",\n                token: [\n                    \"constant.numeric\",\n                    \"meta.tag\"\n                ]\n            }, { // added\n                regex: \"^([!+>])(.*?)(\\\\s*)$\",\n                token: [\n                    \"support.constant\",\n                    \"text\",\n                    \"invalid\"\n                ]\n            }, { // removed\n                regex: \"^([<\\\\-])(.*?)(\\\\s*)$\",\n                token: [\n                    \"support.function\",\n                    \"string\",\n                    \"invalid\"\n                ]\n            }, {\n                regex: \"^(diff)(\\\\s+--\\\\w+)?(.+?)( .+)?$\",\n                token: [\"variable\", \"variable\", \"keyword\", \"variable\"]\n            }, {\n                regex: \"^Index.+$\",\n                token: \"variable\"\n            }, {\n                regex: \"^\\\\s+$\",\n                token: \"text\"\n            }, {\n                regex: \"\\\\s*$\",\n                token: \"invalid\"\n            }, {\n                defaultToken: \"invisible\",\n                caseInsensitive: true\n            }\n        ]\n    };\n};\n\noop.inherits(DiffHighlightRules, TextHighlightRules);\n\nexports.DiffHighlightRules = DiffHighlightRules;\n});\n\nace.define(\"ace/mode/folding/diff\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/folding/fold_mode\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\nvar Range = acequire(\"../../range\").Range;\n\nvar FoldMode = exports.FoldMode = function(levels, flag) {\n\tthis.regExpList = levels;\n\tthis.flag = flag;\n\tthis.foldingStartMarker = RegExp(\"^(\" + levels.join(\"|\") + \")\", this.flag);\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n        var start = {row: row, column: line.length};\n\n        var regList = this.regExpList;\n        for (var i = 1; i <= regList.length; i++) {\n            var re = RegExp(\"^(\" + regList.slice(0, i).join(\"|\") + \")\", this.flag);\n            if (re.test(line))\n                break;\n        }\n\n        for (var l = session.getLength(); ++row < l; ) {\n            line = session.getLine(row);\n            if (re.test(line))\n                break;\n        }\n        if (row == start.row + 1)\n            return;\n        return  Range.fromPoints(start, {row: row - 1, column: line.length});\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/diff\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/diff_highlight_rules\",\"ace/mode/folding/diff\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar HighlightRules = acequire(\"./diff_highlight_rules\").DiffHighlightRules;\nvar FoldMode = acequire(\"./folding/diff\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = HighlightRules;\n    this.foldingRules = new FoldMode([\"diff\", \"index\", \"\\\\+{3}\", \"@@|\\\\*{5}\"], \"i\");\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.$id = \"ace/mode/diff\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/diff.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyODIuM2ExNTcwZThhNjg4OTllYWM2MTMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=