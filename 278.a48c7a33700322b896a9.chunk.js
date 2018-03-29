(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[278],{

/***/ "../EVA Design System/node_modules/brace/mode/eiffel.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/eiffel_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar EiffelHighlightRules = function() {\n    var keywords = \"across|agent|alias|all|attached|as|assign|attribute|check|\" +\n        \"class|convert|create|debug|deferred|detachable|do|else|elseif|end|\" +\n        \"ensure|expanded|export|external|feature|from|frozen|if|inherit|\" +\n        \"inspect|invariant|like|local|loop|not|note|obsolete|old|once|\" +\n        \"Precursor|redefine|rename|acequire|rescue|retry|select|separate|\" +\n        \"some|then|undefine|until|variant|when\";\n\n    var operatorKeywords = \"and|implies|or|xor\";\n\n    var languageConstants = \"Void\";\n\n    var booleanConstants = \"True|False\";\n\n    var languageVariables = \"Current|Result\";\n\n    var keywordMapper = this.createKeywordMapper({\n        \"constant.language\": languageConstants,\n        \"constant.language.boolean\": booleanConstants,\n        \"variable.language\": languageVariables,\n        \"keyword.operator\": operatorKeywords,\n        \"keyword\": keywords\n    }, \"identifier\", true);\n\n    var simpleString = /(?:[^\"%\\b\\f\\v]|%[A-DFHLNQR-V%'\"()<>]|%\\/(?:0[xX][\\da-fA-F](?:_*[\\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\\d(?:_*\\d)*)\\/)+?/;\n\n    this.$rules = {\n        \"start\": [{\n                token : \"string.quoted.other\", // Aligned-verbatim-strings (verbatim option not supported)\n                regex : /\"\\[/,\n                next: \"aligned_verbatim_string\"\n            }, {\n                token : \"string.quoted.other\", // Non-aligned-verbatim-strings (verbatim option not supported)\n                regex : /\"\\{/,\n                next: \"non-aligned_verbatim_string\"\n            }, {\n                token : \"string.quoted.double\",\n                regex : /\"(?:[^%\\b\\f\\n\\r\\v]|%[A-DFHLNQR-V%'\"()<>]|%\\/(?:0[xX][\\da-fA-F](?:_*[\\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\\d(?:_*\\d)*)\\/)*?\"/\n            }, {\n                token : \"comment.line.double-dash\",\n                regex : /--.*/\n            }, {\n                token : \"constant.character\",\n                regex : /'(?:[^%\\b\\f\\n\\r\\t\\v]|%[A-DFHLNQR-V%'\"()<>]|%\\/(?:0[xX][\\da-fA-F](?:_*[\\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\\d(?:_*\\d)*)\\/)'/\n            }, {\n                token : \"constant.numeric\", // hexa | octal | bin\n                regex : /\\b0(?:[xX][\\da-fA-F](?:_*[\\da-fA-F])*|[cC][0-7](?:_*[0-7])*|[bB][01](?:_*[01])*)\\b/\n            }, {\n                token : \"constant.numeric\",\n                regex : /(?:\\d(?:_*\\d)*)?\\.(?:(?:\\d(?:_*\\d)*)?[eE][+-]?)?\\d(?:_*\\d)*|\\d(?:_*\\d)*\\.?/\n            }, {\n                token : \"paren.lparen\",\n                regex : /[\\[({]|<<|\\|\\(/\n            }, {\n                token : \"paren.rparen\",\n                regex : /[\\])}]|>>|\\|\\)/\n            }, {\n                token : \"keyword.operator\", // punctuation\n                regex : /:=|->|\\.(?=\\w)|[;,:?]/\n            }, {\n                token : \"keyword.operator\",\n                regex : /\\\\\\\\|\\|\\.\\.\\||\\.\\.|\\/[~\\/]?|[><\\/]=?|[-+*^=~]/\n            }, {\n                token : function (v) {\n                    var result = keywordMapper(v);\n                    if (result === \"identifier\" && v === v.toUpperCase()) {\n                        result =  \"entity.name.type\";\n                    }\n                    return result;\n                },\n                regex : /[a-zA-Z][a-zA-Z\\d_]*\\b/\n            }, {\n                token : \"text\",\n                regex : /\\s+/\n            }\n        ],\n        \"aligned_verbatim_string\" : [{\n                token : \"string\",\n                regex : /]\"/,\n                next : \"start\"\n            }, {\n                token : \"string\",\n                regex : simpleString\n            }\n        ],\n        \"non-aligned_verbatim_string\" : [{\n                token : \"string.quoted.other\",\n                regex : /}\"/,\n                next : \"start\"\n            }, {\n                token : \"string.quoted.other\",\n                regex : simpleString\n            }\n        ]};\n};\n\noop.inherits(EiffelHighlightRules, TextHighlightRules);\n\nexports.EiffelHighlightRules = EiffelHighlightRules;\n});\n\nace.define(\"ace/mode/eiffel\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/eiffel_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar EiffelHighlightRules = acequire(\"./eiffel_highlight_rules\").EiffelHighlightRules;\n\nvar Mode = function() {\n    this.HighlightRules = EiffelHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"--\";\n    this.$id = \"ace/mode/eiffel\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/eiffel.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNzguYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=