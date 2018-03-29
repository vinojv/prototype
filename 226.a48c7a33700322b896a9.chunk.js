(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[226],{

/***/ "../EVA Design System/node_modules/brace/mode/r.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/tex_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar TexHighlightRules = function(textClass) {\n\n    if (!textClass)\n        textClass = \"text\";\n\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"%.*$\"\n            }, {\n                token : textClass, // non-command\n                regex : \"\\\\\\\\[$&%#\\\\{\\\\}]\"\n            }, {\n                token : \"keyword\", // command\n                regex : \"\\\\\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\\\b\",\n               next : \"nospell\"\n            }, {\n                token : \"keyword\", // command\n                regex : \"\\\\\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])\"\n            }, {\n               token : \"paren.keyword.operator\",\n                regex : \"[[({]\"\n            }, {\n               token : \"paren.keyword.operator\",\n                regex : \"[\\\\])}]\"\n            }, {\n                token : textClass,\n                regex : \"\\\\s+\"\n            }\n        ],\n        \"nospell\" : [\n           {\n               token : \"comment\",\n               regex : \"%.*$\",\n               next : \"start\"\n           }, {\n               token : \"nospell.\" + textClass, // non-command\n               regex : \"\\\\\\\\[$&%#\\\\{\\\\}]\"\n           }, {\n               token : \"keyword\", // command\n               regex : \"\\\\\\\\(?:documentclass|usepackage|newcounter|setcounter|addtocounter|value|arabic|stepcounter|newenvironment|renewenvironment|ref|vref|eqref|pageref|label|cite[a-zA-Z]*|tag|begin|end|bibitem)\\\\b\"\n           }, {\n               token : \"keyword\", // command\n               regex : \"\\\\\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])\",\n               next : \"start\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"[[({]\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"[\\\\])]\"\n           }, {\n               token : \"paren.keyword.operator\",\n               regex : \"}\",\n               next : \"start\"\n           }, {\n               token : \"nospell.\" + textClass,\n               regex : \"\\\\s+\"\n           }, {\n               token : \"nospell.\" + textClass,\n               regex : \"\\\\w+\"\n           }\n        ]\n    };\n};\n\noop.inherits(TexHighlightRules, TextHighlightRules);\n\nexports.TexHighlightRules = TexHighlightRules;\n});\n\nace.define(\"ace/mode/r_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\",\"ace/mode/tex_highlight_rules\"], function(acequire, exports, module)\n{\n\n   var oop = acequire(\"../lib/oop\");\n   var lang = acequire(\"../lib/lang\");\n   var TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n   var TexHighlightRules = acequire(\"./tex_highlight_rules\").TexHighlightRules;\n\n   var RHighlightRules = function()\n   {\n\n      var keywords = lang.arrayToMap(\n            (\"function|if|in|break|next|repeat|else|for|return|switch|while|try|tryCatch|stop|warning|acequire|library|attach|detach|source|setMethod|setGeneric|setGroupGeneric|setClass\")\n                  .split(\"|\")\n            );\n\n      var buildinConstants = lang.arrayToMap(\n            (\"NULL|NA|TRUE|FALSE|T|F|Inf|NaN|NA_integer_|NA_real_|NA_character_|\" +\n             \"NA_complex_\").split(\"|\")\n            );\n\n      this.$rules = {\n         \"start\" : [\n            {\n               token : \"comment.sectionhead\",\n               regex : \"#+(?!').*(?:----|====|####)\\\\s*$\"\n            },\n            {\n               token : \"comment\",\n               regex : \"#+'\",\n               next : \"rd-start\"\n            },\n            {\n               token : \"comment\",\n               regex : \"#.*$\"\n            },\n            {\n               token : \"string\", // multi line string start\n               regex : '[\"]',\n               next : \"qqstring\"\n            },\n            {\n               token : \"string\", // multi line string start\n               regex : \"[']\",\n               next : \"qstring\"\n            },\n            {\n               token : \"constant.numeric\", // hex\n               regex : \"0[xX][0-9a-fA-F]+[Li]?\\\\b\"\n            },\n            {\n               token : \"constant.numeric\", // explicit integer\n               regex : \"\\\\d+L\\\\b\"\n            },\n            {\n               token : \"constant.numeric\", // number\n               regex : \"\\\\d+(?:\\\\.\\\\d*)?(?:[eE][+\\\\-]?\\\\d*)?i?\\\\b\"\n            },\n            {\n               token : \"constant.numeric\", // number with leading decimal\n               regex : \"\\\\.\\\\d+(?:[eE][+\\\\-]?\\\\d*)?i?\\\\b\"\n            },\n            {\n               token : \"constant.language.boolean\",\n               regex : \"(?:TRUE|FALSE|T|F)\\\\b\"\n            },\n            {\n               token : \"identifier\",\n               regex : \"`.*?`\"\n            },\n            {\n               onMatch : function(value) {\n                  if (keywords[value])\n                     return \"keyword\";\n                  else if (buildinConstants[value])\n                     return \"constant.language\";\n                  else if (value == '...' || value.match(/^\\.\\.\\d+$/))\n                     return \"variable.language\";\n                  else\n                     return \"identifier\";\n               },\n               regex : \"[a-zA-Z.][a-zA-Z0-9._]*\\\\b\"\n            },\n            {\n               token : \"keyword.operator\",\n               regex : \"%%|>=|<=|==|!=|\\\\->|<\\\\-|\\\\|\\\\||&&|=|\\\\+|\\\\-|\\\\*|/|\\\\^|>|<|!|&|\\\\||~|\\\\$|:\"\n            },\n            {\n               token : \"keyword.operator\", // infix operators\n               regex : \"%.*?%\"\n            },\n            {\n               token : \"paren.keyword.operator\",\n               regex : \"[[({]\"\n            },\n            {\n               token : \"paren.keyword.operator\",\n               regex : \"[\\\\])}]\"\n            },\n            {\n               token : \"text\",\n               regex : \"\\\\s+\"\n            }\n         ],\n         \"qqstring\" : [\n            {\n               token : \"string\",\n               regex : '(?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?\"',\n               next : \"start\"\n            },\n            {\n               token : \"string\",\n               regex : '.+'\n            }\n         ],\n         \"qstring\" : [\n            {\n               token : \"string\",\n               regex : \"(?:(?:\\\\\\\\.)|(?:[^'\\\\\\\\]))*?'\",\n               next : \"start\"\n            },\n            {\n               token : \"string\",\n               regex : '.+'\n            }\n         ]\n      };\n\n      var rdRules = new TexHighlightRules(\"comment\").getRules();\n      for (var i = 0; i < rdRules[\"start\"].length; i++) {\n         rdRules[\"start\"][i].token += \".virtual-comment\";\n      }\n\n      this.addRules(rdRules, \"rd-\");\n      this.$rules[\"rd-start\"].unshift({\n          token: \"text\",\n          regex: \"^\",\n          next: \"start\"\n      });\n      this.$rules[\"rd-start\"].unshift({\n         token : \"keyword\",\n         regex : \"@(?!@)[^ ]*\"\n      });\n      this.$rules[\"rd-start\"].unshift({\n         token : \"comment\",\n         regex : \"@@\"\n      });\n      this.$rules[\"rd-start\"].push({\n         token : \"comment\",\n         regex : \"[^%\\\\\\\\[({\\\\])}]+\"\n      });\n   };\n\n   oop.inherits(RHighlightRules, TextHighlightRules);\n\n   exports.RHighlightRules = RHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/r\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/text_highlight_rules\",\"ace/mode/r_highlight_rules\",\"ace/mode/matching_brace_outdent\"], function(acequire, exports, module) {\n   \"use strict\";\n\n   var Range = acequire(\"../range\").Range;\n   var oop = acequire(\"../lib/oop\");\n   var TextMode = acequire(\"./text\").Mode;\n   var TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n   var RHighlightRules = acequire(\"./r_highlight_rules\").RHighlightRules;\n   var MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\n\n   var Mode = function(){\n      this.HighlightRules = RHighlightRules;\n      this.$outdent = new MatchingBraceOutdent();\n      this.$behaviour = this.$defaultBehaviour;\n   };\n   oop.inherits(Mode, TextMode);\n\n   (function()\n   {\n      this.lineCommentStart = \"#\";\n       this.$id = \"ace/mode/r\";\n   }).call(Mode.prototype);\n   exports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/r.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMjYuYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=