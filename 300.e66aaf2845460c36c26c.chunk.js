(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[300],{

/***/ "../EVA Design System/node_modules/brace/mode/ada.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/ada_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar AdaHighlightRules = function() {\nvar keywords = \"abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|\" +\n\"access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|\" +\n\"array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|\" +\n\"body|private|then|if|procedure|type|case|in|protected|constant|interface|until|\" +\n\"|is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor\";\n\n    var builtinConstants = (\n        \"true|false|null\"\n    );\n\n    var builtinFunctions = (\n        \"count|min|max|avg|sum|rank|now|coalesce|main\"\n    );\n\n    var keywordMapper = this.createKeywordMapper({\n        \"support.function\": builtinFunctions,\n        \"keyword\": keywords,\n        \"constant.language\": builtinConstants\n    }, \"identifier\", true);\n\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment\",\n            regex : \"--.*$\"\n        }, {\n            token : \"string\",           // \" string\n            regex : '\".*?\"'\n        }, {\n            token : \"string\",           // ' string\n            regex : \"'.*?'\"\n        }, {\n            token : \"constant.numeric\", // float\n            regex : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\\\\b\"\n        }, {\n            token : keywordMapper,\n            regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n        }, {\n            token : \"keyword.operator\",\n            regex : \"\\\\+|\\\\-|\\\\/|\\\\/\\\\/|%|<@>|@>|<@|&|\\\\^|~|<|>|<=|=>|==|!=|<>|=\"\n        }, {\n            token : \"paren.lparen\",\n            regex : \"[\\\\(]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\)]\"\n        }, {\n            token : \"text\",\n            regex : \"\\\\s+\"\n        } ]\n    };\n};\n\noop.inherits(AdaHighlightRules, TextHighlightRules);\n\nexports.AdaHighlightRules = AdaHighlightRules;\n});\n\nace.define(\"ace/mode/ada\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/ada_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar AdaHighlightRules = acequire(\"./ada_highlight_rules\").AdaHighlightRules;\n\nvar Mode = function() {\n    this.HighlightRules = AdaHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"--\";\n\n    this.$id = \"ace/mode/ada\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/ada.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzMDAuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=