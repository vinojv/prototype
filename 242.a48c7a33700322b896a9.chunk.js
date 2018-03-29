(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[242],{

/***/ "../EVA Design System/node_modules/brace/mode/mips_assembler.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/mips_assembler_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar MIPSAssemblerHighlightRules = function() {\n\n    this.$rules = { start: \n       [ { token: 'support.function.pseudo.mips',\n           regex: '\\\\b(?:mul|abs|div|divu|mulo|mulou|neg|negu|not|rem|remu|rol|ror|li|seq|sge|sgeu|sgt|sgtu|sle|sleu|sne|b|beqz|bge|bgeu|bgt|bgtu|ble|bleu|blt|bltu|bnez|la|ld|ulh|ulhu|ulw|sd|ush|usw|move|mfc1\\\\.d|l\\\\.d|l\\\\.s|s\\\\.d|s\\\\.s)\\\\b',\n           comment: 'ok actually this are instructions, but one also could call them funtions…' },\n         { token: 'support.function.mips',\n           regex: '\\\\b(?:abs\\\\.d|abs\\\\.s|add|add\\\\.d|add\\\\.s|addi|addiu|addu|and|andi|bc1f|bc1t|beq|bgez|bgezal|bgtz|blez|bltz|bltzal|bne|break|c\\\\.eq\\\\.d|c\\\\.eq\\\\.s|c\\\\.le\\\\.d|c\\\\.le\\\\.s|c\\\\.lt\\\\.d|c\\\\.lt\\\\.s|ceil\\\\.w\\\\.d|ceil\\\\.w\\\\.s|clo|clz|cvt\\\\.d\\\\.s|cvt\\\\.d\\\\.w|cvt\\\\.s\\\\.d|cvt\\\\.s\\\\.w|cvt\\\\.w\\\\.d|cvt\\\\.w\\\\.s|div|div\\\\.d|div\\\\.s|divu|eret|floor\\\\.w\\\\.d|floor\\\\.w\\\\.s|j|jal|jalr|jr|lb|lbu|lh|lhu|ll|lui|lw|lwc1|lwl|lwr|madd|maddu|mfc0|mfc1|mfhi|mflo|mov\\\\.d|mov\\\\.s|movf|movf\\\\.d|movf\\\\.s|movn|movn\\\\.d|movn\\\\.s|movt|movt\\\\.d|movt\\\\.s|movz|movz\\\\.d|movz\\\\.s|msub|mtc0|mtc1|mthi|mtlo|mul|mul\\\\.d|mul\\\\.s|mult|multu|neg\\\\.d|neg\\\\.s|nop|nor|or|ori|round\\\\.w\\\\.d|round\\\\.w\\\\.s|sb|sc|sdc1|sh|sll|sllv|slt|slti|sltiu|sltu|sqrt\\\\.d|sqrt\\\\.s|sra|srav|srl|srlv|sub|sub\\\\.d|sub\\\\.s|subu|sw|swc1|swl|swr|syscall|teq|teqi|tge|tgei|tgeiu|tgeu|tlt|tlti|tltiu|tltu|trunc\\\\.w\\\\.d|trunc\\\\.w\\\\.s|xor|xori)\\\\b' },\n         { token: 'storage.type.mips',\n           regex: '\\\\.(?:ascii|asciiz|byte|data|double|float|half|kdata|ktext|space|text|word|set\\\\s*(?:noat|at))\\\\b' },\n         { token: 'storage.modifier.mips',\n           regex: '\\\\.(?:align|extern||globl)\\\\b' },\n         { token: \n            [ 'entity.name.function.label.mips',\n              'meta.function.label.mips' ],\n           regex: '\\\\b([A-Za-z0-9_]+)(:)' },\n         { token: \n            [ 'punctuation.definition.variable.mips',\n              'variable.other.register.usable.by-number.mips' ],\n           regex: '(\\\\$)(0|[2-9]|1[0-9]|2[0-5]|2[89]|3[0-1])\\\\b' },\n         { token: \n            [ 'punctuation.definition.variable.mips',\n              'variable.other.register.usable.by-name.mips' ],\n           regex: '(\\\\$)(zero|v[01]|a[0-3]|t[0-9]|s[0-7]|gp|sp|fp|ra)\\\\b' },\n         { token: \n            [ 'punctuation.definition.variable.mips',\n              'variable.other.register.reserved.mips' ],\n           regex: '(\\\\$)(at|k[01]|1|2[67])\\\\b' },\n         { token: \n            [ 'punctuation.definition.variable.mips',\n              'variable.other.register.usable.floating-point.mips',\n              'variable.other.register.usable.floating-point.mips' ],\n           regex: '(\\\\$)(f)([0-9]|1[0-9]|2[0-9]|3[0-1])\\\\b' },\n         { token: 'constant.numeric.float.mips',\n           regex: '\\\\b\\\\d+\\\\.\\\\d+\\\\b' },\n         { token: 'constant.numeric.integer.mips',\n           regex: '\\\\b(?:\\\\d+|0(?:x|X)[a-fA-F0-9]+)\\\\b' },\n         { token: 'punctuation.definition.string.begin.mips',\n           regex: '\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.mips',\n                regex: '\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.mips',\n                regex: '\\\\\\\\[rnt\\\\\\\\\"]' },\n              { defaultToken: 'string.quoted.double.mips' } ] },\n         { token: 'punctuation.definition.comment.mips',\n           regex: '#',\n           push: \n            [ { token: 'comment.line.number-sign.mips',\n                regex: '$',\n                next: 'pop' },\n              { defaultToken: 'comment.line.number-sign.mips' } ] } ] }\n    \n    this.normalizeRules();\n};\n\nMIPSAssemblerHighlightRules.metaData = { fileTypes: [ 's', 'mips', 'spim', 'asm' ],\n      keyEquivalent: '^~M',\n      name: 'MIPS Assembler',\n      scopeName: 'source.mips' }\n\n\noop.inherits(MIPSAssemblerHighlightRules, TextHighlightRules);\n\nexports.MIPSAssemblerHighlightRules = MIPSAssemblerHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /(\\{|\\[)[^\\}\\]]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{]*(\\}|\\])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    \n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/)#(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/mips_assembler\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/mips_assembler_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar MIPSAssemblerHighlightRules = acequire(\"./mips_assembler_highlight_rules\").MIPSAssemblerHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = MIPSAssemblerHighlightRules;\n    this.foldingRules = new FoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.$id = \"ace/mode/mips_assembler\"\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/mips_assembler.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyNDIuYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=