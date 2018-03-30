(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[257],{

/***/ "../EVA Design System/node_modules/brace/mode/julia.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/julia_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar JuliaHighlightRules = function() {\n\n    this.$rules = { start: \n       [ { include: '#function_decl' },\n         { include: '#function_call' },\n         { include: '#type_decl' },\n         { include: '#keyword' },\n         { include: '#operator' },\n         { include: '#number' },\n         { include: '#string' },\n         { include: '#comment' } ],\n      '#bracket': \n       [ { token: 'keyword.bracket.julia',\n           regex: '\\\\(|\\\\)|\\\\[|\\\\]|\\\\{|\\\\}|,' } ],\n      '#comment': \n       [ { token: \n            [ 'punctuation.definition.comment.julia',\n              'comment.line.number-sign.julia' ],\n           regex: '(#)(?!\\\\{)(.*$)'} ],\n      '#function_call': \n       [ { token: [ 'support.function.julia', 'text' ],\n           regex: '([a-zA-Z0-9_]+!?)([\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]*\\\\()'} ],\n      '#function_decl': \n       [ { token: [ 'keyword.other.julia', 'meta.function.julia',\n               'entity.name.function.julia', 'meta.function.julia','text' ],\n           regex: '(function|macro)(\\\\s*)([a-zA-Z0-9_\\\\{]+!?)([\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]*)([(\\\\\\\\{])'} ],\n      '#keyword':\n       [ { token: 'keyword.other.julia',\n           regex: '\\\\b(?:function|type|immutable|macro|quote|abstract|bitstype|typealias|module|baremodule|new)\\\\b' },\n         { token: 'keyword.control.julia',\n           regex: '\\\\b(?:if|else|elseif|while|for|in|begin|let|end|do|try|catch|finally|return|break|continue)\\\\b' },\n         { token: 'storage.modifier.variable.julia',\n           regex: '\\\\b(?:global|local|const|export|import|importall|using)\\\\b' },\n         { token: 'variable.macro.julia', regex: '@[\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]+\\\\b' } ],\n      '#number': \n       [ { token: 'constant.numeric.julia',\n           regex: '\\\\b0(?:x|X)[0-9a-fA-F]*|(?:\\\\b[0-9]+\\\\.?[0-9]*|\\\\.[0-9]+)(?:(?:e|E)(?:\\\\+|-)?[0-9]*)?(?:im)?|\\\\bInf(?:32)?\\\\b|\\\\bNaN(?:32)?\\\\b|\\\\btrue\\\\b|\\\\bfalse\\\\b' } ],\n      '#operator': \n       [ { token: 'keyword.operator.update.julia',\n           regex: '=|:=|\\\\+=|-=|\\\\*=|/=|//=|\\\\.//=|\\\\.\\\\*=|\\\\\\\\=|\\\\.\\\\\\\\=|^=|\\\\.^=|%=|\\\\|=|&=|\\\\$=|<<=|>>=' },\n         { token: 'keyword.operator.ternary.julia', regex: '\\\\?|:' },\n         { token: 'keyword.operator.boolean.julia',\n           regex: '\\\\|\\\\||&&|!' },\n         { token: 'keyword.operator.arrow.julia', regex: '->|<-|-->' },\n         { token: 'keyword.operator.relation.julia',\n           regex: '>|<|>=|<=|==|!=|\\\\.>|\\\\.<|\\\\.>=|\\\\.>=|\\\\.==|\\\\.!=|\\\\.=|\\\\.!|<:|:>' },\n         { token: 'keyword.operator.range.julia', regex: ':' },\n         { token: 'keyword.operator.shift.julia', regex: '<<|>>' },\n         { token: 'keyword.operator.bitwise.julia', regex: '\\\\||\\\\&|~' },\n         { token: 'keyword.operator.arithmetic.julia',\n           regex: '\\\\+|-|\\\\*|\\\\.\\\\*|/|\\\\./|//|\\\\.//|%|\\\\.%|\\\\\\\\|\\\\.\\\\\\\\|\\\\^|\\\\.\\\\^' },\n         { token: 'keyword.operator.isa.julia', regex: '::' },\n         { token: 'keyword.operator.dots.julia',\n           regex: '\\\\.(?=[a-zA-Z])|\\\\.\\\\.+' },\n         { token: 'keyword.operator.interpolation.julia',\n           regex: '\\\\$#?(?=.)' },\n         { token: [ 'variable', 'keyword.operator.transposed-variable.julia' ],\n           regex: '([\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]+)((?:\\'|\\\\.\\')*\\\\.?\\')' },\n         { token: 'text',\n           regex: '\\\\[|\\\\('},\n         { token: [ 'text', 'keyword.operator.transposed-matrix.julia' ],\n            regex: \"([\\\\]\\\\)])((?:'|\\\\.')*\\\\.?')\"} ],\n      '#string': \n       [ { token: 'punctuation.definition.string.begin.julia',\n           regex: '\\'',\n           push: \n            [ { token: 'punctuation.definition.string.end.julia',\n                regex: '\\'',\n                next: 'pop' },\n              { include: '#string_escaped_char' },\n              { defaultToken: 'string.quoted.single.julia' } ] },\n         { token: 'punctuation.definition.string.begin.julia',\n           regex: '\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.julia',\n                regex: '\"',\n                next: 'pop' },\n              { include: '#string_escaped_char' },\n              { defaultToken: 'string.quoted.double.julia' } ] },\n         { token: 'punctuation.definition.string.begin.julia',\n           regex: '\\\\b[\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]+\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.julia',\n                regex: '\"[\\\\w\\\\xff-\\\\u218e\\\\u2455-\\\\uffff]*',\n                next: 'pop' },\n              { include: '#string_custom_escaped_char' },\n              { defaultToken: 'string.quoted.custom-double.julia' } ] },\n         { token: 'punctuation.definition.string.begin.julia',\n           regex: '`',\n           push: \n            [ { token: 'punctuation.definition.string.end.julia',\n                regex: '`',\n                next: 'pop' },\n              { include: '#string_escaped_char' },\n              { defaultToken: 'string.quoted.backtick.julia' } ] } ],\n      '#string_custom_escaped_char': [ { token: 'constant.character.escape.julia', regex: '\\\\\\\\\"' } ],\n      '#string_escaped_char': \n       [ { token: 'constant.character.escape.julia',\n           regex: '\\\\\\\\(?:\\\\\\\\|[0-3]\\\\d{,2}|[4-7]\\\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)' } ],\n      '#type_decl': \n       [ { token: \n            [ 'keyword.control.type.julia',\n              'meta.type.julia',\n              'entity.name.type.julia',\n              'entity.other.inherited-class.julia',\n              'punctuation.separator.inheritance.julia',\n              'entity.other.inherited-class.julia' ],\n           regex: '(type|immutable)(\\\\s+)([a-zA-Z0-9_]+)(?:(\\\\s*)(<:)(\\\\s*[.a-zA-Z0-9_:]+))?' },\n         { token: [ 'other.typed-variable.julia', 'support.type.julia' ],\n           regex: '([a-zA-Z0-9_]+)(::[a-zA-Z0-9_{}]+)' } ] };\n    \n    this.normalizeRules();\n};\n\nJuliaHighlightRules.metaData = { fileTypes: [ 'jl' ],\n      firstLineMatch: '^#!.*\\\\bjulia\\\\s*$',\n      foldingStartMarker: '^\\\\s*(?:if|while|for|begin|function|macro|module|baremodule|type|immutable|let)\\\\b(?!.*\\\\bend\\\\b).*$',\n      foldingStopMarker: '^\\\\s*(?:end)\\\\b.*$',\n      name: 'Julia',\n      scopeName: 'source.julia' };\n\n\noop.inherits(JuliaHighlightRules, TextHighlightRules);\n\nexports.JuliaHighlightRules = JuliaHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/julia\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/julia_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar JuliaHighlightRules = acequire(\"./julia_highlight_rules\").JuliaHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = JuliaHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"#\";\n    this.blockComment = \"\";\n    this.$id = \"ace/mode/julia\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/julia.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNTcuM2ExNTcwZThhNjg4OTllYWM2MTMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=