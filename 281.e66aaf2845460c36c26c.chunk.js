(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[281],{

/***/ "../EVA Design System/node_modules/brace/mode/dot.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/doc_comment_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar DocCommentHighlightRules = function() {\n    this.$rules = {\n        \"start\" : [ {\n            token : \"comment.doc.tag\",\n            regex : \"@[\\\\w\\\\d_]+\" // TODO: fix email addresses\n        }, \n        DocCommentHighlightRules.getTagRule(),\n        {\n            defaultToken : \"comment.doc\",\n            caseInsensitive: true\n        }]\n    };\n};\n\noop.inherits(DocCommentHighlightRules, TextHighlightRules);\n\nDocCommentHighlightRules.getTagRule = function(start) {\n    return {\n        token : \"comment.doc.tag.storage.type\",\n        regex : \"\\\\b(?:TODO|FIXME|XXX|HACK)\\\\b\"\n    };\n};\n\nDocCommentHighlightRules.getStartRule = function(start) {\n    return {\n        token : \"comment.doc\", // doc comment\n        regex : \"\\\\/\\\\*(?=\\\\*)\",\n        next  : start\n    };\n};\n\nDocCommentHighlightRules.getEndRule = function (start) {\n    return {\n        token : \"comment.doc\", // closing comment\n        regex : \"\\\\*\\\\/\",\n        next  : start\n    };\n};\n\n\nexports.DocCommentHighlightRules = DocCommentHighlightRules;\n\n});\n\nace.define(\"ace/mode/dot_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/lang\",\"ace/mode/text_highlight_rules\",\"ace/mode/doc_comment_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar lang = acequire(\"../lib/lang\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\nvar DocCommentHighlightRules = acequire(\"./doc_comment_highlight_rules\").DocCommentHighlightRules;\n\nvar DotHighlightRules = function() {\n\n   var keywords = lang.arrayToMap(\n        (\"strict|node|edge|graph|digraph|subgraph\").split(\"|\")\n   );\n\n   var attributes = lang.arrayToMap(\n        (\"damping|k|url|area|arrowhead|arrowsize|arrowtail|aspect|bb|bgcolor|center|charset|clusterrank|color|colorscheme|comment|compound|concentrate|constraint|decorate|defaultdist|dim|dimen|dir|diredgeconstraints|distortion|dpi|edgeurl|edgehref|edgetarget|edgetooltip|epsilon|esep|fillcolor|fixedsize|fontcolor|fontname|fontnames|fontpath|fontsize|forcelabels|gradientangle|group|headurl|head_lp|headclip|headhref|headlabel|headport|headtarget|headtooltip|height|href|id|image|imagepath|imagescale|label|labelurl|label_scheme|labelangle|labeldistance|labelfloat|labelfontcolor|labelfontname|labelfontsize|labelhref|labeljust|labelloc|labeltarget|labeltooltip|landscape|layer|layerlistsep|layers|layerselect|layersep|layout|len|levels|levelsgap|lhead|lheight|lp|ltail|lwidth|margin|maxiter|mclimit|mindist|minlen|mode|model|mosek|nodesep|nojustify|normalize|nslimit|nslimit1|ordering|orientation|outputorder|overlap|overlap_scaling|pack|packmode|pad|page|pagedir|pencolor|penwidth|peripheries|pin|pos|quadtree|quantum|rank|rankdir|ranksep|ratio|rects|regular|remincross|repulsiveforce|resolution|root|rotate|rotation|samehead|sametail|samplepoints|scale|searchsize|sep|shape|shapefile|showboxes|sides|size|skew|smoothing|sortv|splines|start|style|stylesheet|tailurl|tail_lp|tailclip|tailhref|taillabel|tailport|tailtarget|tailtooltip|target|tooltip|truecolor|vertices|viewport|voro_margin|weight|width|xlabel|xlp|z\").split(\"|\")\n   );\n\n   this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : /\\/\\/.*$/\n            }, {\n                token : \"comment\",\n                regex : /#.*$/\n            }, {\n                token : \"comment\", // multi line comment\n                merge : true,\n                regex : /\\/\\*/,\n                next : \"comment\"\n            }, {\n                token : \"string\",\n                regex : \"'(?=.)\",\n                next  : \"qstring\"\n            }, {\n                token : \"string\",\n                regex : '\"(?=.)',\n                next  : \"qqstring\"\n            }, {\n                token : \"constant.numeric\",\n                regex : /[+\\-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)?\\b/\n            }, {\n                token : \"keyword.operator\",\n                regex : /\\+|=|\\->/\n            }, {\n                token : \"punctuation.operator\",\n                regex : /,|;/\n            }, {\n                token : \"paren.lparen\",\n                regex : /[\\[{]/\n            }, {\n                token : \"paren.rparen\",\n                regex : /[\\]}]/\n            }, {\n                token: \"comment\",\n                regex: /^#!.*$/\n            }, {\n                token: function(value) {\n                    if (keywords.hasOwnProperty(value.toLowerCase())) {\n                        return \"keyword\";\n                    }\n                    else if (attributes.hasOwnProperty(value.toLowerCase())) {\n                        return \"variable\";\n                    }\n                    else {\n                        return \"text\";\n                    }\n                },\n                regex: \"\\\\-?[a-zA-Z_][a-zA-Z0-9_\\\\-]*\"\n           }\n        ],\n        \"comment\" : [\n            {\n                token : \"comment\", // closing comment\n                regex : \"\\\\*\\\\/\",\n                next : \"start\"\n            }, {\n                defaultToken : \"comment\"\n            }\n        ],\n        \"qqstring\" : [\n            {\n                token : \"string\",\n                regex : '[^\"\\\\\\\\]+',\n                merge : true\n            }, {\n                token : \"string\",\n                regex : \"\\\\\\\\$\",\n                next  : \"qqstring\",\n                merge : true\n            }, {\n                token : \"string\",\n                regex : '\"|$',\n                next  : \"start\",\n                merge : true\n            }\n        ],\n        \"qstring\" : [\n            {\n                token : \"string\",\n                regex : \"[^'\\\\\\\\]+\",\n                merge : true\n            }, {\n                token : \"string\",\n                regex : \"\\\\\\\\$\",\n                next  : \"qstring\",\n                merge : true\n            }, {\n                token : \"string\",\n                regex : \"'|$\",\n                next  : \"start\",\n                merge : true\n            }\n        ]\n   };\n};\n\noop.inherits(DotHighlightRules, TextHighlightRules);\n\nexports.DotHighlightRules = DotHighlightRules;\n\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/dot\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/matching_brace_outdent\",\"ace/mode/dot_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar DotHighlightRules = acequire(\"./dot_highlight_rules\").DotHighlightRules;\nvar DotFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = DotHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.foldingRules = new DotFoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = [\"//\", \"#\"];\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n        var endState = tokenizedLine.state;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*(?:\\bcase\\b.*:|[\\{\\(\\[])\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/dot\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/dot.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyODEuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=