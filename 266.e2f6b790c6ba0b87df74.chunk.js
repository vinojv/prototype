(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[266],{

/***/ "../EVA Design System/node_modules/brace/mode/haskell_cabal.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/haskell_cabal_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar CabalHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"^\\\\s*--.*$\"\n            }, {\n                token: [\"keyword\"],\n                regex: /^(\\s*\\w.*?)(:(?:\\s+|$))/\n            }, {\n                token : \"constant.numeric\", // float\n                regex : /[\\d_]+(?:(?:[\\.\\d_]*)?)/\n            }, {\n                token : \"constant.language.boolean\",\n                regex : \"(?:true|false|TRUE|FALSE|True|False|yes|no)\\\\b\"\n            }, {\n                token : \"markup.heading\",\n                regex : /^(\\w.*)$/\n            }\n        ]};\n\n};\n\noop.inherits(CabalHighlightRules, TextHighlightRules);\n\nexports.CabalHighlightRules = CabalHighlightRules;\n});\n\nace.define(\"ace/mode/folding/haskell_cabal\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/folding/fold_mode\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\nvar Range = acequire(\"../../range\").Range;\n\nvar FoldMode = exports.FoldMode = function() {};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n  this.isHeading = function (session,row) {\n      var heading = \"markup.heading\";\n      var token = session.getTokens(row)[0];\n      return row==0 || (token && token.type.lastIndexOf(heading, 0) === 0);\n  };\n\n  this.getFoldWidget = function(session, foldStyle, row) {\n      if (this.isHeading(session,row)){\n        return \"start\";\n      } else if (foldStyle === \"markbeginend\" && !(/^\\s*$/.test(session.getLine(row)))){\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n          if (!(/^\\s*$/.test(session.getLine(row)))){\n              break;\n          }\n        }\n        if (row==maxRow || this.isHeading(session,row)){\n          return \"end\";\n        }\n      }\n      return \"\";\n  };\n\n\n  this.getFoldWidgetRange = function(session, foldStyle, row) {\n      var line = session.getLine(row);\n      var startColumn = line.length;\n      var maxRow = session.getLength();\n      var startRow = row;\n      var endRow = row;\n      if (this.isHeading(session,row)) {\n          while (++row < maxRow) {\n              if (this.isHeading(session,row)){\n                row--;\n                break;\n              }\n          }\n\n          endRow = row;\n          if (endRow > startRow) {\n              while (endRow > startRow && /^\\s*$/.test(session.getLine(endRow)))\n                  endRow--;\n          }\n\n          if (endRow > startRow) {\n              var endColumn = session.getLine(endRow).length;\n              return new Range(startRow, startColumn, endRow, endColumn);\n          }\n      } else if (this.getFoldWidget(session, foldStyle, row)===\"end\"){\n        var endRow = row;\n        var endColumn = session.getLine(endRow).length;\n        while (--row>=0){\n          if (this.isHeading(session,row)){\n            break;\n          }\n        }\n        var line = session.getLine(row);\n        var startColumn = line.length;\n        return new Range(row, startColumn, endRow, endColumn);\n      }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/haskell_cabal\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/haskell_cabal_highlight_rules\",\"ace/mode/folding/haskell_cabal\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar CabalHighlightRules = acequire(\"./haskell_cabal_highlight_rules\").CabalHighlightRules;\nvar FoldMode = acequire(\"./folding/haskell_cabal\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = CabalHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"--\";\n    this.blockComment = null;\n    this.$id = \"ace/mode/haskell_cabal\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/haskell_cabal.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNjYuZTJmNmI3OTBjNmJhMGI4N2RmNzQuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=