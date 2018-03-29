(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ "../EVA Design System/node_modules/brace/mode/red.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/red_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar RedHighlightRules = function() {\n\n    var compoundKeywords = \"\";\n\n    this.$rules = {\n        \"start\" : [\n            {token : \"keyword.operator\",\n                regex: /\\s([\\-+%/=<>*]|(?:\\*\\*\\|\\/\\/|==|>>>?|<>|<<|=>|<=|=\\?))(\\s|(?=:))/},\n            {token : \"string.email\", regex : /\\w[-\\w._]*\\@\\w[-\\w._]*/},\n            {token : \"value.time\", regex : /\\b\\d+:\\d+(:\\d+)?/},\n            {token : \"string.url\", regex : /\\w[-\\w_]*\\:(\\/\\/)?\\w[-\\w._]*(:\\d+)?/},\n            {token : \"value.date\", regex : /(\\b\\d{1,4}[-/]\\d{1,2}[-/]\\d{1,2}|\\d{1,2}[-/]\\d{1,2}[-/]\\d{1,4})\\b/},\n            {token : \"value.tuple\", regex : /\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(\\.\\d{1,3}){0,9}/},\n            {token : \"value.pair\", regex: /[+-]?\\d+x[-+]?\\d+/},\n            {token : \"value.binary\", regex : /\\b2#{([01]{8})+}/},\n            {token : \"value.binary\", regex : /\\b64#{([\\w/=+])+}/},\n            {token : \"value.binary\", regex : /(16)?#{([\\dabcdefABCDEF][\\dabcdefABCDEF])*}/},\n            {token : \"value.issue\", regex : /#\\w[-\\w'*.]*/},\n            {token : \"value.numeric\", regex: /[+-]?\\d['\\d]*(?:\\.\\d+)?e[-+]?\\d{1,3}\\%?(?!\\w)/},\n            {token : \"invalid.illegal\", regex: /[+-]?\\d['\\d]*(?:\\.\\d+)?\\%?[a-zA-Z]/},\n            {token : \"value.numeric\", regex: /[+-]?\\d['\\d]*(?:\\.\\d+)?\\%?(?![a-zA-Z])/},\n            {token : \"value.character\", regex : /#\"(\\^[-@/_~^\"HKLM\\[]|.)\"/},\n            {token : \"string.file\", regex : /%[-\\w\\.\\/]+/},\n            {token : \"string.tag\", regex : /</, next : \"tag\"},\n            {token : \"string\", regex : /\"/, next  : \"string\"},\n            {token : \"string.other\", regex : \"{\", next  : \"string.other\"},\n            {token : \"comment\", regex : \"comment [[{]\", next : \"comment\"},\n            {token : \"comment\",  regex : /;.+$/},\n            {token : \"paren.map-start\", regex : \"#\\\\(\"},\n            {token : \"paren.block-start\", regex : \"[\\\\[]\"},\n            {token : \"paren.block-end\", regex : \"[\\\\]]\"},\n            {token : \"paren.parens-start\", regex : \"[(]\"},\n            {token : \"paren.parens-end\", regex : \"\\\\)\"},\n            {token : \"keyword\", regex : \"/local|/external\"},\n            {token : \"keyword.preprocessor\", regex : \"#(if|either|\" +\n                \"switch|case|include|do|macrolocal|reset|process|trace)\"},\n            {token : \"constant.datatype!\", regex :\n                \"(?:datatype|unset|none|logic|block|paren|string|\" +\n                \"file|url|char|integer|float|word|set-word|lit-word|\" +\n                \"get-word|refinement|issue|native|action|op|function|\" +\n                \"path|lit-path|set-path|get-path|routine|bitset|point|\" +\n                \"object|typeset|error|vector|hash|pair|percent|tuple|\" +\n                \"map|binary|time|tag|email|handle|date|image|event|\" +\n                \"series|any-type|number|any-object|scalar|\" +\n                \"any-string|any-word|any-function|any-block|any-list|\" +\n                \"any-path|immediate|all-word|internal|external|default)!(?![-!?\\\\w~])\"},\n            {token : \"keyword.function\", regex :\n                \"\\\\b(?:collect|quote|on-parse-event|math|last|source|expand|\" +\n                \"show|context|object|input|quit|dir|make-dir|cause-error|\" +\n                \"error\\\\?|none\\\\?|block\\\\?|any-list\\\\?|word\\\\?|char\\\\?|\" +\n                \"any-string\\\\?|series\\\\?|binary\\\\?|attempt|url\\\\?|\" +\n                \"string\\\\?|suffix\\\\?|file\\\\?|object\\\\?|body-of|first|\" +\n                \"second|third|mod|clean-path|dir\\\\?|to-red-file|\" +\n                \"normalize-dir|list-dir|pad|empty\\\\?|dirize|offset\\\\?|\" +\n                \"what-dir|expand-directives|load|split-path|change-dir|\" +\n                \"to-file|path-thru|save|load-thru|View|float\\\\?|to-float|\" +\n                \"charset|\\\\?|probe|set-word\\\\?|q|words-of|replace|repend|\" +\n                \"react|function\\\\?|spec-of|unset\\\\?|halt|op\\\\?|\" +\n                \"any-function\\\\?|to-paren|tag\\\\?|routine|class-of|\" +\n                \"size-text|draw|handle\\\\?|link-tabs-to-parent|\" +\n                \"link-sub-to-parent|on-face-deep-change*|\" +\n                \"update-font-faces|do-actor|do-safe|do-events|pair\\\\?|\" +\n                \"foreach-face|hex-to-rgb|issue\\\\?|alter|path\\\\?|\" +\n                \"typeset\\\\?|datatype\\\\?|set-flag|layout|extract|image\\\\?|\" +\n                \"get-word\\\\?|to-logic|to-set-word|to-block|center-face|\" +\n                \"dump-face|request-font|request-file|request-dir|rejoin|\" +\n                \"ellipsize-at|any-block\\\\?|any-object\\\\?|map\\\\?|keys-of|\" +\n                \"a-an|also|parse-func-spec|help-string|what|routine\\\\?|\" +\n                \"action\\\\?|native\\\\?|refinement\\\\?|common-substr|\" +\n                \"red-complete-file|red-complete-path|unview|comment|\\\\?\\\\?|\" +\n                \"fourth|fifth|values-of|bitset\\\\?|email\\\\?|get-path\\\\?|\" +\n                \"hash\\\\?|integer\\\\?|lit-path\\\\?|lit-word\\\\?|logic\\\\?|\" +\n                \"paren\\\\?|percent\\\\?|set-path\\\\?|time\\\\?|tuple\\\\?|date\\\\?|\" +\n                \"vector\\\\?|any-path\\\\?|any-word\\\\?|number\\\\?|immediate\\\\?|\" +\n                \"scalar\\\\?|all-word\\\\?|to-bitset|to-binary|to-char|to-email|\" +\n                \"to-get-path|to-get-word|to-hash|to-integer|to-issue|\" +\n                \"to-lit-path|to-lit-word|to-map|to-none|to-pair|to-path|\" +\n                \"to-percent|to-refinement|to-set-path|to-string|to-tag|\" +\n                \"to-time|to-typeset|to-tuple|to-unset|to-url|to-word|\" +\n                \"to-image|to-date|parse-trace|modulo|eval-set-path|\" +\n                \"extract-boot-args|flip-exe-flag|split|do-file|\" +\n                \"exists-thru\\\\?|read-thru|do-thru|cos|sin|tan|acos|asin|\" +\n                \"atan|atan2|sqrt|clear-reactions|dump-reactions|react\\\\?|\" +\n                \"within\\\\?|overlap\\\\?|distance\\\\?|face\\\\?|metrics\\\\?|\" +\n                \"get-scroller|insert-event-func|remove-event-func|\" +\n                \"set-focus|help|fetch-help|about|ls|ll|pwd|cd|\" +\n                \"red-complete-input|matrix)(?![-!?\\\\w~])\"},\n            {token : \"keyword.action\", regex :\n                \"\\\\b(?:to|remove|copy|insert|change|clear|move|poke|put|\" +\n                \"random|reverse|sort|swap|take|trim|add|subtract|\" +\n                \"divide|multiply|make|reflect|form|mold|modify|\" +\n                \"absolute|negate|power|remainder|round|even\\\\?|odd\\\\?|\" +\n                \"and~|complement|or~|xor~|append|at|back|find|skip|\" +\n                \"tail|head|head\\\\?|index\\\\?|length\\\\?|next|pick|\" +\n                \"select|tail\\\\?|delete|read|write)(?![-_!?\\\\w~])\"\n            },\n            {token : \"keyword.native\", regex :\n                \"\\\\b(?:not|any|set|uppercase|lowercase|checksum|\" +\n                \"try|catch|browse|throw|all|as|\" +\n                \"remove-each|func|function|does|has|do|reduce|\" +\n                \"compose|get|print|prin|equal\\\\?|not-equal\\\\?|\" +\n                \"strict-equal\\\\?|lesser\\\\?|greater\\\\?|lesser-or-equal\\\\?|\" +\n                \"greater-or-equal\\\\?|same\\\\?|type\\\\?|stats|bind|in|parse|\" +\n                \"union|unique|intersect|difference|exclude|\" +\n                \"complement\\\\?|dehex|negative\\\\?|positive\\\\?|max|min|\" +\n                \"shift|to-hex|sine|cosine|tangent|arcsine|arccosine|\" +\n                \"arctangent|arctangent2|NaN\\\\?|zero\\\\?|log-2|log-10|log-e|\" +\n                \"exp|square-root|construct|value\\\\?|as-pair|\" +\n                \"extend|debase|enbase|to-local-file|\" +\n                \"wait|unset|new-line|new-line\\\\?|context\\\\?|set-env|\" +\n                \"get-env|list-env|now|sign\\\\?|call|size\\\\?)(?![-!?\\\\w~])\"\n            },\n            {token : \"keyword\", regex :\n                \"\\\\b(?:Red(?=\\\\s+\\\\[)|object|context|make|self|keep)(?![-!?\\\\w~])\"\n            },\n            {token: \"variable.language\", regex : \"this\"},\n            {token: \"keyword.control\", regex :\n                \"(?:while|if|return|case|unless|either|until|loop|repeat|\" +\n                \"forever|foreach|forall|switch|break|continue|exit)(?![-!?\\\\w~])\"},\n            {token: \"constant.language\", regex :\n                \"\\\\b(?:true|false|on|off|yes|none|no)(?![-!?\\\\w~])\"},\n            {token: \"constant.numeric\", regex : /\\bpi(?![^-_])/},\n            {token: \"constant.character\", regex : \"\\\\b(space|tab|newline|cr|lf)(?![-!?\\\\w~])\"},\n            {token: \"keyword.operator\", regex : \"\\s(or|and|xor|is)\\s\"},\n            {token : \"variable.get-path\", regex : /:\\w[-\\w'*.?!]*(\\/\\w[-\\w'*.?!]*)(\\/\\w[-\\w'*.?!]*)*/},\n            {token : \"variable.set-path\", regex : /\\w[-\\w'*.?!]*(\\/\\w[-\\w'*.?!]*)(\\/\\w[-\\w'*.?!]*)*:/},\n            {token : \"variable.lit-path\", regex : /'\\w[-\\w'*.?!]*(\\/\\w[-\\w'*.?!]*)(\\/\\w[-\\w'*.?!]*)*/},\n            {token : \"variable.path\", regex : /\\w[-\\w'*.?!]*(\\/\\w[-\\w'*.?!]*)(\\/\\w[-\\w'*.?!]*)*/},\n            {token : \"variable.refinement\", regex : /\\/\\w[-\\w'*.?!]*/},\n            {token : \"keyword.view.style\", regex :\n                \"\\\\b(?:window|base|button|text|field|area|check|\" +\n                \"radio|progress|slider|camera|text-list|\" +\n                \"drop-list|drop-down|panel|group-box|\" +\n                \"tab-panel|h1|h2|h3|h4|h5|box|image|init)(?![-!?\\\\w~])\"},\n            {token : \"keyword.view.event\", regex :\n                \"\\\\b(?:detect|on-detect|time|on-time|drawing|on-drawing|\" +\n                \"scroll|on-scroll|down|on-down|up|on-up|mid-down|\" +\n                \"on-mid-down|mid-up|on-mid-up|alt-down|on-alt-down|\" +\n                \"alt-up|on-alt-up|aux-down|on-aux-down|aux-up|\" +\n                \"on-aux-up|wheel|on-wheel|drag-start|on-drag-start|\" +\n                \"drag|on-drag|drop|on-drop|click|on-click|dbl-click|\" +\n                \"on-dbl-click|over|on-over|key|on-key|key-down|\" +\n                \"on-key-down|key-up|on-key-up|ime|on-ime|focus|\" +\n                \"on-focus|unfocus|on-unfocus|select|on-select|\" +\n                \"change|on-change|enter|on-enter|menu|on-menu|close|\" +\n                \"on-close|move|on-move|resize|on-resize|moving|\" +\n                \"on-moving|resizing|on-resizing|zoom|on-zoom|pan|\" +\n                \"on-pan|rotate|on-rotate|two-tap|on-two-tap|\" +\n                \"press-tap|on-press-tap|create|on-create|created|on-created)(?![-!?\\\\w~])\"},\n            {token : \"keyword.view.option\", regex :\n                \"\\\\b(?:all-over|center|color|default|disabled|down|\" +\n                \"flags|focus|font|font-color|font-name|\" +\n                \"font-size|hidden|hint|left|loose|name|\" +\n                \"no-border|now|rate|react|select|size|space)(?![-!?\\\\w~])\"},\n            {token : \"constant.other.colour\", regex : \"\\\\b(?:Red|white|transparent|\" +\n                \"black|gray|aqua|beige|blue|brick|brown|coal|coffee|\" +\n                \"crimson|cyan|forest|gold|green|ivory|khaki|leaf|linen|\" +\n                \"magenta|maroon|mint|navy|oldrab|olive|orange|papaya|\" +\n                \"pewter|pink|purple|reblue|rebolor|sienna|silver|sky|\" +\n                \"snow|tanned|teal|violet|water|wheat|yello|yellow|glass)(?![-!?\\\\w~])\"},\n            {token : \"variable.get-word\", regex : /\\:\\w[-\\w'*.?!]*/},\n            {token : \"variable.set-word\", regex : /\\w[-\\w'*.?!]*\\:/},\n            {token : \"variable.lit-word\", regex : /'\\w[-\\w'*.?!]*/},\n            {token : \"variable.word\", regex : /\\b\\w+[-\\w'*.!?]*/},\n            {caseInsensitive: true}\n        ],\n        \"string\" : [\n            {token : \"string\", regex : /\"/, next : \"start\"},\n            {defaultToken : \"string\"}\n        ],\n        \"string.other\" : [\n            {token : \"string.other\", regex : /}/, next : \"start\"},\n            {defaultToken : \"string.other\"}\n        ],\n        \"tag\" : [\n            {token : \"string.tag\", regex : />/, next : \"start\"},\n            {defaultToken : \"string.tag\"}\n        ],\n        \"comment\" : [\n            {token : \"comment\", regex : /}/, next : \"start\"},\n            {defaultToken : \"comment\"}\n        ]\n    };\n};\noop.inherits(RedHighlightRules, TextHighlightRules);\n\nexports.RedHighlightRules = RedHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n\n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n\n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n\n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n\n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n\n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n\n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n\n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n\n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n\n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n\n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n\n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n\n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n\n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/red\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/red_highlight_rules\",\"ace/mode/folding/cstyle\",\"ace/mode/matching_brace_outdent\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar RedHighlightRules = acequire(\"./red_highlight_rules\").RedHighlightRules;\nvar RedFoldMode = acequire(\"./folding/cstyle\").FoldMode;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar Range = acequire(\"../range\").Range;\n\nvar Mode = function() {\n    this.HighlightRules = RedHighlightRules;\n    this.foldingRules = new RedFoldMode();\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \";\";\n\tthis.blockCommentStart = \"comment {\";\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n        var endState = tokenizedLine.state;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*[\\{\\[\\(]\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        } else if (state == \"doc-start\") {\n            if (endState == \"start\") {\n                return \"\";\n            }\n            var match = line.match(/^\\s*(\\/?)\\*/);\n            if (match) {\n                if (match[1]) {\n                    indent += \" \";\n                }\n                indent += \"* \";\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/red\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/red.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMjUuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=