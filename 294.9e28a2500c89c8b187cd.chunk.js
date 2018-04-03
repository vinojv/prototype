(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[294],{

/***/ "../EVA Design System/node_modules/brace/mode/batchfile.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/batchfile_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar BatchFileHighlightRules = function() {\n\n    this.$rules = { start: \n       [ { token: 'keyword.command.dosbatch',\n           regex: '\\\\b(?:append|assoc|at|attrib|break|cacls|cd|chcp|chdir|chkdsk|chkntfs|cls|cmd|color|comp|compact|convert|copy|date|del|dir|diskcomp|diskcopy|doskey|echo|endlocal|erase|fc|find|findstr|format|ftype|graftabl|help|keyb|label|md|mkdir|mode|more|move|path|pause|popd|print|prompt|pushd|rd|recover|ren|rename|replace|restore|rmdir|set|setlocal|shift|sort|start|subst|time|title|tree|type|ver|verify|vol|xcopy)\\\\b',\n           caseInsensitive: true },\n         { token: 'keyword.control.statement.dosbatch',\n           regex: '\\\\b(?:goto|call|exit)\\\\b',\n           caseInsensitive: true },\n         { token: 'keyword.control.conditional.if.dosbatch',\n           regex: '\\\\bif\\\\s+not\\\\s+(?:exist|defined|errorlevel|cmdextversion)\\\\b',\n           caseInsensitive: true },\n         { token: 'keyword.control.conditional.dosbatch',\n           regex: '\\\\b(?:if|else)\\\\b',\n           caseInsensitive: true },\n         { token: 'keyword.control.repeat.dosbatch',\n           regex: '\\\\bfor\\\\b',\n           caseInsensitive: true },\n         { token: 'keyword.operator.dosbatch',\n           regex: '\\\\b(?:EQU|NEQ|LSS|LEQ|GTR|GEQ)\\\\b' },\n         { token: ['doc.comment', 'comment'],\n           regex: '(?:^|\\\\b)(rem)($|\\\\s.*$)',\n           caseInsensitive: true },\n         { token: 'comment.line.colons.dosbatch',\n           regex: '::.*$' },\n         { include: 'variable' },\n         { token: 'punctuation.definition.string.begin.shell',\n           regex: '\"',\n           push: [ \n              { token: 'punctuation.definition.string.end.shell', regex: '\"', next: 'pop' },\n              { include: 'variable' },\n              { defaultToken: 'string.quoted.double.dosbatch' } ] },\n         { token: 'keyword.operator.pipe.dosbatch', regex: '[|]' },\n         { token: 'keyword.operator.redirect.shell',\n           regex: '&>|\\\\d*>&\\\\d*|\\\\d*(?:>>|>|<)|\\\\d*<&|\\\\d*<>' } ],\n        variable: [\n         { token: 'constant.numeric', regex: '%%\\\\w+|%[*\\\\d]|%\\\\w+%'},\n         { token: 'constant.numeric', regex: '%~\\\\d+'},\n         { token: ['markup.list', 'constant.other', 'markup.list'],\n            regex: '(%)(\\\\w+)(%?)' }]};\n    \n    this.normalizeRules();\n};\n\nBatchFileHighlightRules.metaData = { name: 'Batch File',\n      scopeName: 'source.dosbatch',\n      fileTypes: [ 'bat' ] };\n\n\noop.inherits(BatchFileHighlightRules, TextHighlightRules);\n\nexports.BatchFileHighlightRules = BatchFileHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/batchfile\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/batchfile_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar BatchFileHighlightRules = acequire(\"./batchfile_highlight_rules\").BatchFileHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = BatchFileHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"::\";\n    this.blockComment = \"\";\n    this.$id = \"ace/mode/batchfile\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/batchfile.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTQuOWUyOGEyNTAwYzg5YzhiMTg3Y2QuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=