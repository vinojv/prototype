(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[228],{

/***/ "../EVA Design System/node_modules/brace/mode/protobuf.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/doc_comment_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar DocCommentHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment.doc.tag\",\n            regex : \"@[\\\\w\\\\d_]+\" // TODO: fix email addresses\n        }, \n        DocCommentHighlightRules.getTagRule(),\n        {\n            defaultToken : \"comment.doc\",\n            caseInsensitive: true\n        }]\n    };\n};\n\noop.inherits(DocCommentHighlightRules, TextHighlightRules);\n\nDocCommentHighlightRules.getTagRule = function(start) {\n    return {\n        token : \"comment.doc.tag.storage.type\",\n        regex : \"\\\\b(?:TODO|FIXME|XXX|HACK)\\\\b\"\n    };\n};\n\nDocCommentHighlightRules.getStartRule = function(start) {\n    return {\n        token : \"comment.doc\", // doc comment\n        regex : \"\\\\/\\\\*(?=\\\\*)\",\n        next  : start\n    };\n};\n\nDocCommentHighlightRules.getEndRule = function (start) {\n    return {\n        token : \"comment.doc\", // closing comment\n        regex : \"\\\\*\\\\/\",\n        next  : start\n    };\n};\n\n\nexports.DocCommentHighlightRules = DocCommentHighlightRules;\n\n});\n\nace.define(\"ace/mode/c_cpp_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/doc_comment_highlight_rules\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar DocCommentHighlightRules = acequire(\"./doc_comment_highlight_rules\").DocCommentHighlightRules;\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar cFunctions = exports.cFunctions = \"\\\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\\\b\";\n\nvar c_cppHighlightRules = function() {\n\n    var keywordControls = (\n        \"break|case|continue|default|do|else|for|goto|if|_Pragma|\" +\n        \"return|switch|while|catch|operator|try|throw|using\"\n    );\n    \n    var storageType = (\n        \"asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|\" +\n        \"_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|\" +\n        \"class|wchar_t|template|char16_t|char32_t\"\n    );\n\n    var storageModifiers = (\n        \"const|extern|register|restrict|static|volatile|inline|private|\" +\n        \"protected|public|friend|explicit|virtual|export|mutable|typename|\" +\n        \"constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local\"\n    );\n\n    var keywordOperators = (\n        \"and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq\" +\n        \"const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace\"\n    );\n\n    var builtinConstants = (\n        \"NULL|true|false|TRUE|FALSE|nullptr\"\n    );\n\n    var keywordMapper = this.$keywords = this.createKeywordMapper({\n        \"keyword.control\" : keywordControls,\n        \"storage.type\" : storageType,\n        \"storage.modifier\" : storageModifiers,\n        \"keyword.operator\" : keywordOperators,\n        \"variable.language\": \"this\",\n        \"constant.language\": builtinConstants\n    }, \"identifier\");\n\n    var identifierRe = \"[a-zA-Z\\\\$_\\u00a1-\\uffff][a-zA-Z\\\\d\\\\$_\\u00a1-\\uffff]*\\\\b\";\n    var escapeRe = /\\\\(?:['\"?\\\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\\d]{2}|u[a-fA-F\\d]{4}U[a-fA-F\\d]{8}|.)/.source;\n    var formatRe = \"%\"\n          + /(\\d+\\$)?/.source // field (argument #)\n          + /[#0\\- +']*/.source // flags\n          + /[,;:_]?/.source // separator character (AltiVec)\n          + /((-?\\d+)|\\*(-?\\d+\\$)?)?/.source // minimum field width\n          + /(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?/.source // precision\n          + /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source // length modifier\n          + /(\\[[^\"\\]]+\\]|[diouxXDOUeEfFgGaACcSspn%])/.source; // conversion type\n\n    this.$rules = { \n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : \"//$\",\n                next : \"start\"\n            }, {\n                token : \"comment\",\n                regex : \"//\",\n                next : \"singleLineComment\"\n            },\n            DocCommentHighlightRules.getStartRule(\"doc-start\"),\n            {\n                token : \"comment\", // multi line comment\n                regex : \"\\\\/\\\\*\",\n                next : \"comment\"\n            }, {\n                token : \"string\", // character\n                regex : \"'(?:\" + escapeRe + \"|.)?'\"\n            }, {\n                token : \"string.start\",\n                regex : '\"', \n                stateName: \"qqstring\",\n                next: [\n                    { token: \"string\", regex: /\\\\\\s*$/, next: \"qqstring\" },\n                    { token: \"constant.language.escape\", regex: escapeRe },\n                    { token: \"constant.language.escape\", regex: formatRe },\n                    { token: \"string.end\", regex: '\"|$', next: \"start\" },\n                    { defaultToken: \"string\"}\n                ]\n            }, {\n                token : \"string.start\",\n                regex : 'R\"\\\\(', \n                stateName: \"rawString\",\n                next: [\n                    { token: \"string.end\", regex: '\\\\)\"', next: \"start\" },\n                    { defaultToken: \"string\"}\n                ]\n            }, {\n                token : \"constant.numeric\", // hex\n                regex : \"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\\\b\"\n            }, {\n                token : \"constant.numeric\", // float\n                regex : \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\\\b\"\n            }, {\n                token : \"keyword\", // pre-compiler directives\n                regex : \"#\\\\s*(?:include|import|pragma|line|define|undef)\\\\b\",\n                next  : \"directive\"\n            }, {\n                token : \"keyword\", // special case pre-compiler directive\n                regex : \"#\\\\s*(?:endif|if|ifdef|else|elif|ifndef)\\\\b\"\n            }, {\n                token : \"support.function.C99.c\",\n                regex : cFunctions\n            }, {\n                token : keywordMapper,\n                regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\"\n            }, {\n                token : \"keyword.operator\",\n                regex : /--|\\+\\+|<<=|>>=|>>>=|<>|&&|\\|\\||\\?:|[*%\\/+\\-&\\^|~!<>=]=?/\n            }, {\n              token : \"punctuation.operator\",\n              regex : \"\\\\?|\\\\:|\\\\,|\\\\;|\\\\.\"\n            }, {\n                token : \"paren.lparen\",\n                regex : \"[[({]\"\n            }, {\n                token : \"paren.rparen\",\n                regex : \"[\\\\])}]\"\n            }, {\n                token : \"text\",\n                regex : \"\\\\s+\"\n            }\n        ],\n        \"comment\" : [\n            {\n                token : \"comment\", // closing comment\n                regex : \"\\\\*\\\\/\",\n                next : \"start\"\n            }, {\n                defaultToken : \"comment\"\n            }\n        ],\n        \"singleLineComment\" : [\n            {\n                token : \"comment\",\n                regex : /\\\\$/,\n                next : \"singleLineComment\"\n            }, {\n                token : \"comment\",\n                regex : /$/,\n                next : \"start\"\n            }, {\n                defaultToken: \"comment\"\n            }\n        ],\n        \"directive\" : [\n            {\n                token : \"constant.other.multiline\",\n                regex : /\\\\/\n            },\n            {\n                token : \"constant.other.multiline\",\n                regex : /.*\\\\/\n            },\n            {\n                token : \"constant.other\",\n                regex : \"\\\\s*<.+?>\",\n                next : \"start\"\n            },\n            {\n                token : \"constant.other\", // single line\n                regex : '\\\\s*[\"](?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?[\"]',\n                next : \"start\"\n            }, \n            {\n                token : \"constant.other\", // single line\n                regex : \"\\\\s*['](?:(?:\\\\\\\\.)|(?:[^'\\\\\\\\]))*?[']\",\n                next : \"start\"\n            },\n            {\n                token : \"constant.other\",\n                regex : /[^\\\\\\/]+/,\n                next : \"start\"\n            }\n        ]\n    };\n\n    this.embedRules(DocCommentHighlightRules, \"doc-\",\n        [ DocCommentHighlightRules.getEndRule(\"start\") ]);\n    this.normalizeRules();\n};\n\noop.inherits(c_cppHighlightRules, TextHighlightRules);\n\nexports.c_cppHighlightRules = c_cppHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/c_cpp\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/c_cpp_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/range\",\"ace/mode/behaviour/cstyle\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar c_cppHighlightRules = acequire(\"./c_cpp_highlight_rules\").c_cppHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar Range = acequire(\"../range\").Range;\nvar CstyleBehaviour = acequire(\"./behaviour/cstyle\").CstyleBehaviour;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = c_cppHighlightRules;\n\n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = new CstyleBehaviour();\n\n    this.foldingRules = new CStyleFoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n        var endState = tokenizedLine.state;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*[\\{\\(\\[]\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        } else if (state == \"doc-start\") {\n            if (endState == \"start\") {\n                return \"\";\n            }\n            var match = line.match(/^\\s*(\\/?)\\*/);\n            if (match) {\n                if (match[1]) {\n                    indent += \" \";\n                }\n                indent += \"* \";\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/c_cpp\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\nace.define(\"ace/mode/protobuf_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n    \"use strict\";\n\n    var oop = acequire(\"../lib/oop\");\n    var TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\n    var ProtobufHighlightRules = function() {\n\n        var builtinTypes = \"double|float|int32|int64|uint32|uint64|sint32|\" +\n                           \"sint64|fixed32|fixed64|sfixed32|sfixed64|bool|\" +\n                           \"string|bytes\";\n        var keywordDeclaration = \"message|acequired|optional|repeated|package|\" +\n                                 \"import|option|enum\";\n\n        var keywordMapper = this.createKeywordMapper({\n            \"keyword.declaration.protobuf\": keywordDeclaration,\n            \"support.type\": builtinTypes\n        }, \"identifier\");\n\n        this.$rules = {\n            \"start\": [{\n                    token: \"comment\",\n                    regex: /\\/\\/.*$/\n                }, {\n                    token: \"comment\",\n                    regex: /\\/\\*/,\n                    next: \"comment\"\n                }, {\n                    token: \"constant\",\n                    regex: \"<[^>]+>\"\n                }, {\n                    regex: \"=\",\n                    token: \"keyword.operator.assignment.protobuf\"\n                }, {\n                    token : \"string\", // single line\n                    regex : '[\"](?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?[\"]'\n                }, {\n                    token : \"string\", // single line\n                    regex : '[\\'](?:(?:\\\\\\\\.)|(?:[^\\'\\\\\\\\]))*?[\\']'\n                }, {\n                    token: \"constant.numeric\", // hex\n                    regex: \"0[xX][0-9a-fA-F]+\\\\b\"\n                }, {\n                    token: \"constant.numeric\", // float\n                    regex: \"[+-]?\\\\d+(?:(?:\\\\.\\\\d*)?(?:[eE][+-]?\\\\d+)?)?\\\\b\"\n                }, {\n                    token: keywordMapper,\n                    regex: \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n                }],\n            \"comment\": [{\n                    token : \"comment\", // closing comment\n                    regex : \"\\\\*\\\\/\",\n                    next : \"start\"\n                }, {\n                    defaultToken : \"comment\"\n                }]\n        };\n\n        this.normalizeRules();\n    };\n\n    oop.inherits(ProtobufHighlightRules, TextHighlightRules);\n\n    exports.ProtobufHighlightRules = ProtobufHighlightRules;\n});\n\nace.define(\"ace/mode/protobuf\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/c_cpp\",\"ace/mode/protobuf_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar CMode = acequire(\"./c_cpp\").Mode;\nvar ProtobufHighlightRules = acequire(\"./protobuf_highlight_rules\").ProtobufHighlightRules;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    CMode.call(this);\n    this.foldingRules = new CStyleFoldMode();\n    this.HighlightRules = ProtobufHighlightRules;\n};\noop.inherits(Mode, CMode);\n\n(function() {\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n    this.$id = \"ace/mode/protobuf\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/protobuf.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMjguZTJmNmI3OTBjNmJhMGI4N2RmNzQuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=