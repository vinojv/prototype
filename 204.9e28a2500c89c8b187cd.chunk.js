(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "../EVA Design System/node_modules/brace/mode/toml.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/toml_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar TomlHighlightRules = function() {\n    var keywordMapper = this.createKeywordMapper({\n        \"constant.language.boolean\": \"true|false\"\n    }, \"identifier\");\n\n    var identifierRe = \"[a-zA-Z\\\\$_\\u00a1-\\uffff][a-zA-Z\\\\d\\\\$_\\u00a1-\\uffff]*\\\\b\";\n\n    this.$rules = {\n    \"start\": [\n        {\n            token: \"comment.toml\",\n            regex: /#.*$/\n        },\n        {\n            token : \"string\",\n            regex : '\"(?=.)',\n            next  : \"qqstring\"\n        },\n        {\n            token: [\"variable.keygroup.toml\"],\n            regex: \"(?:^\\\\s*)(\\\\[\\\\[([^\\\\]]+)\\\\]\\\\])\"\n        },\n        {\n            token: [\"variable.keygroup.toml\"],\n            regex: \"(?:^\\\\s*)(\\\\[([^\\\\]]+)\\\\])\"\n        },\n        {\n            token : keywordMapper,\n            regex : identifierRe\n        },\n        {\n           token : \"support.date.toml\",\n           regex: \"\\\\d{4}-\\\\d{2}-\\\\d{2}(T)\\\\d{2}:\\\\d{2}:\\\\d{2}(Z)\"\n        },\n        {\n           token: \"constant.numeric.toml\",\n           regex: \"-?\\\\d+(\\\\.?\\\\d+)?\"\n        }\n    ],\n    \"qqstring\" : [\n        {\n            token : \"string\",\n            regex : \"\\\\\\\\$\",\n            next  : \"qqstring\"\n        },\n        {\n            token : \"constant.language.escape\",\n            regex : '\\\\\\\\[0tnr\"\\\\\\\\]'\n        },\n        {\n            token : \"string\",\n            regex : '\"|$',\n            next  : \"start\"\n        },\n        {\n            defaultToken: \"string\"\n        }\n    ]\n    };\n\n};\n\noop.inherits(TomlHighlightRules, TextHighlightRules);\n\nexports.TomlHighlightRules = TomlHighlightRules;\n});\n\nace.define(\"ace/mode/folding/ini\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function() {\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.foldingStartMarker = /^\\s*\\[([^\\])]*)]\\s*(?:$|[;#])/;\n\n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var re = this.foldingStartMarker;\n        var line = session.getLine(row);\n        \n        var m = line.match(re);\n        \n        if (!m) return;\n        \n        var startName = m[1] + \".\";\n        \n        var startColumn = line.length;\n        var maxRow = session.getLength();\n        var startRow = row;\n        var endRow = row;\n\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            if (/^\\s*$/.test(line))\n                continue;\n            m = line.match(re);\n            if (m && m[1].lastIndexOf(startName, 0) !== 0)\n                break;\n\n            endRow = row;\n        }\n\n        if (endRow > startRow) {\n            var endColumn = session.getLine(endRow).length;\n            return new Range(startRow, startColumn, endRow, endColumn);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/toml\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/toml_highlight_rules\",\"ace/mode/folding/ini\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar TomlHighlightRules = acequire(\"./toml_highlight_rules\").TomlHighlightRules;\nvar FoldMode = acequire(\"./folding/ini\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = TomlHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"#\";\n    this.$id = \"ace/mode/toml\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/toml.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMDQuOWUyOGEyNTAwYzg5YzhiMTg3Y2QuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=