(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[288],{

/***/ "../EVA Design System/node_modules/brace/mode/cobol.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/cobol_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar CobolHighlightRules = function() {\nvar keywords = \"ACCEPT|MERGE|SUM|ADD||MESSAGE|TABLE|ADVANCING|MODE|TAPE|\" +\n\"AFTER|MULTIPLY|TEST|ALL|NEGATIVE|TEXT|ALPHABET|NEXT|THAN|\" +\n\"ALSO|NO|THEN|ALTERNATE|NOT|THROUGH|AND|NUMBER|THRU|ANY|OCCURS|\" +\n\"TIME|ARE|OF|TO|AREA|OFF|TOP||ASCENDING|OMITTED|TRUE|ASSIGN|ON|TYPE|AT|OPEN|\" +\n\"UNIT|AUTHOR|OR|UNTIL|BEFORE|OTHER|UP|BLANK|OUTPUT|USE|BLOCK|PAGE|USING|BOTTOM|\" +\n\"PERFORM|VALUE|BY|PIC|VALUES|CALL|PICTURE|WHEN|CANCEL|PLUS|WITH|CD|POINTER|WRITE|\" +\n\"CHARACTER|POSITION||ZERO|CLOSE|POSITIVE|ZEROS|COLUMN|PROCEDURE|ZEROES|COMMA|PROGRAM|\" +\n\"COMMON|PROGRAM-ID|COMMUNICATION|QUOTE|COMP|RANDOM|COMPUTE|READ|CONTAINS|RECEIVE|CONFIGURATION|\" +\n\"RECORD|CONTINUE|REDEFINES|CONTROL|REFERENCE|COPY|REMAINDER|COUNT|REPLACE|DATA|REPORT|DATE|RESERVE|\" +\n\"DAY|RESET|DELETE|RETURN|DESTINATION|REWIND|DISABLE|REWRITE|DISPLAY|RIGHT|DIVIDE|RUN|DOWN|SAME|\" +\n\"ELSE|SEARCH|ENABLE|SECTION|END|SELECT|ENVIRONMENT|SENTENCE|EQUAL|SET|ERROR|SIGN|EXIT|SEQUENTIAL|\" +\n\"EXTERNAL|SIZE|FLASE|SORT|FILE|SOURCE|LENGTH|SPACE|LESS|STANDARD|LIMIT|START|LINE|STOP|LOCK|STRING|LOW-VALUE|SUBTRACT\";\n\n    var builtinConstants = (\n        \"true|false|null\"\n    );\n\n    var builtinFunctions = (\n        \"count|min|max|avg|sum|rank|now|coalesce|main\"\n    );\n\n    var keywordMapper = this.createKeywordMapper({\n        \"support.function\": builtinFunctions,\n        \"keyword\": keywords,\n        \"constant.language\": builtinConstants\n    }, \"identifier\", true);\n\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment\",\n            regex : \"\\\\*.*$\"\n        }, {\n            token : \"string\",           // \" string\n            regex : '\".*?\"'\n        }, {\n            token : \"string\",           // ' string\n            regex : \"'.*?'\"\n        }, {\n            token : \"constant.numeric\", // float\n            regex : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\\\\b\"\n        }, {\n            token : keywordMapper,\n            regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n        }, {\n            token : \"keyword.operator\",\n            regex : \"\\\\+|\\\\-|\\\\/|\\\\/\\\\/|%|<@>|@>|<@|&|\\\\^|~|<|>|<=|=>|==|!=|<>|=\"\n        }, {\n            token : \"paren.lparen\",\n            regex : \"[\\\\(]\"\n        }, {\n            token : \"paren.rparen\",\n            regex : \"[\\\\)]\"\n        }, {\n            token : \"text\",\n            regex : \"\\\\s+\"\n        } ]\n    };\n};\n\noop.inherits(CobolHighlightRules, TextHighlightRules);\n\nexports.CobolHighlightRules = CobolHighlightRules;\n});\n\nace.define(\"ace/mode/cobol\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/cobol_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar CobolHighlightRules = acequire(\"./cobol_highlight_rules\").CobolHighlightRules;\n\nvar Mode = function() {\n    this.HighlightRules = CobolHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"*\";\n\n    this.$id = \"ace/mode/cobol\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/cobol.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyODguYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=