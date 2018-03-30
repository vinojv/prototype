(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[297],{

/***/ "../EVA Design System/node_modules/brace/mode/applescript.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/applescript_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar AppleScriptHighlightRules = function() {\n    var keywords = (\n        \"about|above|after|against|and|around|as|at|back|before|beginning|\" +\n        \"behind|below|beneath|beside|between|but|by|considering|\" +\n        \"contain|contains|continue|copy|div|does|eighth|else|end|equal|\" +\n        \"equals|error|every|exit|fifth|first|for|fourth|from|front|\" +\n        \"get|given|global|if|ignoring|in|into|is|it|its|last|local|me|\" +\n        \"middle|mod|my|ninth|not|of|on|onto|or|over|prop|property|put|ref|\" +\n        \"reference|repeat|returning|script|second|set|seventh|since|\" +\n        \"sixth|some|tell|tenth|that|the|then|third|through|thru|\" +\n        \"timeout|times|to|transaction|try|until|where|while|whose|with|without\"\n    );\n\n    var builtinConstants = (\n        \"AppleScript|false|linefeed|return|pi|quote|result|space|tab|true\"\n    );\n\n    var builtinFunctions = (\n        \"activate|beep|count|delay|launch|log|offset|read|round|run|say|\" +\n        \"summarize|write\"\n    );\n\n    var builtinTypes = (\n        \"alias|application|boolean|class|constant|date|file|integer|list|\" +\n        \"number|real|record|string|text|character|characters|contents|day|\" +\n        \"frontmost|id|item|length|month|name|paragraph|paragraphs|rest|\" +\n        \"reverse|running|time|version|weekday|word|words|year\"\n    );\n\n    var keywordMapper = this.createKeywordMapper({\n        \"support.function\": builtinFunctions,\n        \"constant.language\": builtinConstants,\n        \"support.type\": builtinTypes,\n        \"keyword\": keywords\n    }, \"identifier\");\n\n    this.$rules = {\n        \"start\": [\n            {\n                token: \"comment\",\n                regex: \"--.*$\"\n            },\n            {\n                token : \"comment\", // multi line comment\n                regex : \"\\\\(\\\\*\",\n                next : \"comment\"\n            },\n            {\n                token: \"string\",           // \" string\n                regex: '\".*?\"'\n            },\n            {\n                token: \"support.type\",\n                regex: '\\\\b(POSIX file|POSIX path|(date|time) string|quoted form)\\\\b'\n            },\n            {\n                token: \"support.function\",\n                regex: '\\\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +\n          'mount volume|path to|(close|open for) access|(get|set) eof|' +\n          'current date|do shell script|get volume settings|random number|' +\n          'set volume|system attribute|system info|time to GMT|' +\n          '(load|run|store) script|scripting components|' +\n          'ASCII (character|number)|localized string|' +\n          'choose (application|color|file|file name|' +\n          'folder|from list|remote application|URL)|' +\n          'display (alert|dialog))\\\\b|^\\\\s*return\\\\b'\n            },\n            {\n                token: \"constant.language\",\n                regex: '\\\\b(text item delimiters|current application|missing value)\\\\b'\n            },\n            {\n                token: \"keyword\",\n                regex: '\\\\b(apart from|aside from|instead of|out of|greater than|' +\n          \"isn't|(doesn't|does not) (equal|come before|come after|contain)|\" +\n          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +\n          'contained by|comes (before|after)|a (ref|reference))\\\\b'\n            },\n            {\n                token: keywordMapper,\n                regex: \"[a-zA-Z][a-zA-Z0-9_]*\\\\b\"\n            }\n        ],\n        \"comment\": [\n            {\n                token: \"comment\", // closing comment\n                regex: \"\\\\*\\\\)\",\n                next: \"start\"\n            }, {\n                defaultToken: \"comment\"\n            }\n        ]\n    };\n\n    this.normalizeRules();\n};\n\noop.inherits(AppleScriptHighlightRules, TextHighlightRules);\n\nexports.AppleScriptHighlightRules = AppleScriptHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/applescript\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/applescript_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar AppleScriptHighlightRules = acequire(\"./applescript_highlight_rules\").AppleScriptHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = AppleScriptHighlightRules;\n    this.foldingRules = new FoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"--\";\n    this.blockComment = {start: \"(*\", end: \"*)\"};\n    this.$id = \"ace/mode/applescript\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/applescript.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTcuM2ExNTcwZThhNjg4OTllYWM2MTMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=