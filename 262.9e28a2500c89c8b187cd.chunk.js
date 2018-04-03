(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[262],{

/***/ "../EVA Design System/node_modules/brace/mode/io.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/io_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar IoHighlightRules = function() {\n\n    this.$rules = { start: \n       [ { token: [ 'text', 'meta.empty-parenthesis.io' ],\n           regex: '(\\\\()(\\\\))',\n           comment: 'we match this to overload return inside () --Allan; scoping rules for what gets the scope have changed, so we now group the ) instead of the ( -- Rob' },\n         { token: [ 'text', 'meta.comma-parenthesis.io' ],\n           regex: '(\\\\,)(\\\\))',\n           comment: 'We want to do the same for ,) -- Seckar; same as above -- Rob' },\n         { token: 'keyword.control.io',\n           regex: '\\\\b(?:if|ifTrue|ifFalse|ifTrueIfFalse|for|loop|reverseForeach|foreach|map|continue|break|while|do|return)\\\\b' },\n         { token: 'punctuation.definition.comment.io',\n           regex: '/\\\\*',\n           push: \n            [ { token: 'punctuation.definition.comment.io',\n                regex: '\\\\*/',\n                next: 'pop' },\n              { defaultToken: 'comment.block.io' } ] },\n         { token: 'punctuation.definition.comment.io',\n           regex: '//',\n           push: \n            [ { token: 'comment.line.double-slash.io',\n                regex: '$',\n                next: 'pop' },\n              { defaultToken: 'comment.line.double-slash.io' } ] },\n         { token: 'punctuation.definition.comment.io',\n           regex: '#',\n           push: \n            [ { token: 'comment.line.number-sign.io', regex: '$', next: 'pop' },\n              { defaultToken: 'comment.line.number-sign.io' } ] },\n         { token: 'variable.language.io',\n           regex: '\\\\b(?:self|sender|target|proto|protos|parent)\\\\b',\n           comment: 'I wonder if some of this isn\\'t variable.other.language? --Allan; scoping this as variable.language to match Objective-C\\'s handling of \\'self\\', which is inconsistent with C++\\'s handling of \\'this\\' but perhaps intentionally so -- Rob' },\n         { token: 'keyword.operator.io',\n           regex: '<=|>=|=|:=|\\\\*|\\\\||\\\\|\\\\||\\\\+|-|/|&|&&|>|<|\\\\?|@|@@|\\\\b(?:and|or)\\\\b' },\n         { token: 'constant.other.io', regex: '\\\\bGL[\\\\w_]+\\\\b' },\n         { token: 'support.class.io', regex: '\\\\b[A-Z](?:\\\\w+)?\\\\b' },\n         { token: 'support.function.io',\n           regex: '\\\\b(?:clone|call|init|method|list|vector|block|\\\\w+(?=\\\\s*\\\\())\\\\b' },\n         { token: 'support.function.open-gl.io',\n           regex: '\\\\bgl(?:u|ut)?[A-Z]\\\\w+\\\\b' },\n         { token: 'punctuation.definition.string.begin.io',\n           regex: '\"\"\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.io',\n                regex: '\"\"\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.io', regex: '\\\\\\\\.' },\n              { defaultToken: 'string.quoted.triple.io' } ] },\n         { token: 'punctuation.definition.string.begin.io',\n           regex: '\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.io',\n                regex: '\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.io', regex: '\\\\\\\\.' },\n              { defaultToken: 'string.quoted.double.io' } ] },\n         { token: 'constant.numeric.io',\n           regex: '\\\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\\\.?[0-9]*|\\\\.[0-9]+)(?:(?:e|E)(?:\\\\+|-)?[0-9]+)?)(?:L|l|UL|ul|u|U|F|f)?\\\\b' },\n         { token: 'variable.other.global.io', regex: 'Lobby\\\\b' },\n         { token: 'constant.language.io',\n           regex: '\\\\b(?:TRUE|true|FALSE|false|NULL|null|Null|Nil|nil|YES|NO)\\\\b' } ] };\n    \n    this.normalizeRules();\n};\n\nIoHighlightRules.metaData = { fileTypes: [ 'io' ],\n      keyEquivalent: '^~I',\n      name: 'Io',\n      scopeName: 'source.io' };\n\n\noop.inherits(IoHighlightRules, TextHighlightRules);\n\nexports.IoHighlightRules = IoHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/io\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/io_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar IoHighlightRules = acequire(\"./io_highlight_rules\").IoHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = IoHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n    this.$id = \"ace/mode/io\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/io.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNjIuOWUyOGEyNTAwYzg5YzhiMTg3Y2QuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=