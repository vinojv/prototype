(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[272],{

/***/ "../EVA Design System/node_modules/brace/mode/gherkin.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/gherkin_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar stringEscape =  \"\\\\\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\\\\\abfnrtv'\\\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})\";\n\nvar GherkinHighlightRules = function() {\n    var languages = [{\n        name: \"en\",\n        labels: \"Feature|Background|Scenario(?: Outline)?|Examples\",\n        keywords: \"Given|When|Then|And|But\"\n    }];\n    \n    var labels = languages.map(function(l) {\n        return l.labels;\n    }).join(\"|\");\n    var keywords = languages.map(function(l) {\n        return l.keywords;\n    }).join(\"|\");\n    this.$rules = {\n        start : [{\n            token: \"constant.numeric\",\n            regex: \"(?:(?:[1-9]\\\\d*)|(?:0))\"\n        }, {\n            token : \"comment\",\n            regex : \"#.*$\"\n        }, {\n            token : \"keyword\",\n            regex : \"(?:\" + labels + \"):|(?:\" + keywords + \")\\\\b\"\n        }, {\n            token : \"keyword\",\n            regex : \"\\\\*\"\n        }, {\n            token : \"string\",           // multi line \"\"\" string start\n            regex : '\"{3}',\n            next : \"qqstring3\"\n        }, {\n            token : \"string\",           // \" string\n            regex : '\"',\n            next : \"qqstring\"\n        }, {\n            token : \"text\",\n            regex : \"^\\\\s*(?=@[\\\\w])\",\n            next : [{\n                token : \"text\",\n                regex : \"\\\\s+\"\n            }, {\n                token : \"variable.parameter\",\n                regex : \"@[\\\\w]+\"\n            }, {\n                token : \"empty\",\n                regex : \"\",\n                next : \"start\"\n            }]\n        }, {\n            token : \"comment\",\n            regex : \"<[^>]+>\"\n        }, {\n            token : \"comment\",\n            regex : \"\\\\|(?=.)\",\n            next : \"table-item\"\n        }, {\n            token : \"comment\",\n            regex : \"\\\\|$\",\n            next : \"start\"\n        }],\n        \"qqstring3\" : [ {\n            token : \"constant.language.escape\",\n            regex : stringEscape\n        }, {\n            token : \"string\", // multi line \"\"\" string end\n            regex : '\"{3}',\n            next : \"start\"\n        }, {\n            defaultToken : \"string\"\n        }],\n        \"qqstring\" : [{\n            token : \"constant.language.escape\",\n            regex : stringEscape\n        }, {\n            token : \"string\",\n            regex : \"\\\\\\\\$\",\n            next  : \"qqstring\"\n        }, {\n            token : \"string\",\n            regex : '\"|$',\n            next  : \"start\"\n        }, {\n            defaultToken: \"string\"\n        }],\n        \"table-item\" : [{\n            token : \"comment\",\n            regex : /$/,\n            next : \"start\"\n        }, {\n            token : \"comment\",\n            regex : /\\|/\n        }, {\n            token : \"string\",\n            regex : /\\\\./\n        }, {\n            defaultToken : \"string\"\n        }]\n    };\n    this.normalizeRules();\n};\n\noop.inherits(GherkinHighlightRules, TextHighlightRules);\n\nexports.GherkinHighlightRules = GherkinHighlightRules;\n});\n\nace.define(\"ace/mode/gherkin\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/gherkin_highlight_rules\"], function(acequire, exports, module) {\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar GherkinHighlightRules = acequire(\"./gherkin_highlight_rules\").GherkinHighlightRules;\n\nvar Mode = function() {\n    this.HighlightRules = GherkinHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"#\";\n    this.$id = \"ace/mode/gherkin\";\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n        var space2 = \"  \";\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n        \n        console.log(state);\n        \n        if(line.match(\"[ ]*\\\\|\")) {\n            indent += \"| \";\n        }\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n        \n\n        if (state == \"start\") {\n            if (line.match(\"Scenario:|Feature:|Scenario Outline:|Background:\")) {\n                indent += space2;\n            } else if(line.match(\"(Given|Then).+(:)$|Examples:\")) {\n                indent += space2;\n            } else if(line.match(\"\\\\*.+\")) {\n                indent += \"* \";\n            } \n        }\n        \n\n        return indent;\n    };\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/gherkin.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNzIuN2IyYWEzYzk0NjdkZmZiNWZmNzIuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=