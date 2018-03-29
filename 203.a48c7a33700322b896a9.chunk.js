(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ "../EVA Design System/node_modules/brace/mode/turtle.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/turtle_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar TurtleHighlightRules = function() {\n\n    this.$rules = {\n        start: [{\n            include: \"#comments\"\n        }, {\n            include: \"#strings\"\n        }, {\n            include: \"#base-prefix-declarations\"\n        }, {\n            include: \"#string-language-suffixes\"\n        }, {\n            include: \"#string-datatype-suffixes\"\n        }, {\n            include: \"#relative-urls\"\n        }, {\n            include: \"#xml-schema-types\"\n        }, {\n            include: \"#rdf-schema-types\"\n        }, {\n            include: \"#owl-types\"\n        }, {\n            include: \"#qnames\"\n        }, {\n            include: \"#punctuation-operators\"\n        }],\n        \"#base-prefix-declarations\": [{\n            token: \"keyword.other.prefix.turtle\",\n            regex: /@(?:base|prefix)/\n        }],\n        \"#comments\": [{\n            token: [\n                \"punctuation.definition.comment.turtle\",\n                \"comment.line.hash.turtle\"\n            ],\n            regex: /(#)(.*$)/\n        }],\n        \"#owl-types\": [{\n            token: \"support.type.datatype.owl.turtle\",\n            regex: /owl:[a-zA-Z]+/\n        }],\n        \"#punctuation-operators\": [{\n            token: \"keyword.operator.punctuation.turtle\",\n            regex: /;|,|\\.|\\(|\\)|\\[|\\]/\n        }],\n        \"#qnames\": [{\n            token: \"entity.name.other.qname.turtle\",\n            regex: /(?:[a-zA-Z][-_a-zA-Z0-9]*)?:(?:[_a-zA-Z][-_a-zA-Z0-9]*)?/\n        }],\n        \"#rdf-schema-types\": [{\n            token: \"support.type.datatype.rdf.schema.turtle\",\n            regex: /rdfs?:[a-zA-Z]+|(?:^|\\s)a(?:\\s|$)/\n        }],\n        \"#relative-urls\": [{\n            token: \"string.quoted.other.relative.url.turtle\",\n            regex: /</,\n            push: [{\n                token: \"string.quoted.other.relative.url.turtle\",\n                regex: />/,\n                next: \"pop\"\n            }, {\n                defaultToken: \"string.quoted.other.relative.url.turtle\"\n            }]\n        }],\n        \"#string-datatype-suffixes\": [{\n            token: \"keyword.operator.datatype.suffix.turtle\",\n            regex: /\\^\\^/\n        }],\n        \"#string-language-suffixes\": [{\n            token: [\n                \"keyword.operator.language.suffix.turtle\",\n                \"constant.language.suffix.turtle\"\n            ],\n            regex: /(?!\")(@)([a-z]+(?:\\-[a-z0-9]+)*)/\n        }],\n        \"#strings\": [{\n            token: \"string.quoted.triple.turtle\",\n            regex: /\"\"\"/,\n            push: [{\n                token: \"string.quoted.triple.turtle\",\n                regex: /\"\"\"/,\n                next: \"pop\"\n            }, {\n                defaultToken: \"string.quoted.triple.turtle\"\n            }]\n        }, {\n            token: \"string.quoted.double.turtle\",\n            regex: /\"/,\n            push: [{\n                token: \"string.quoted.double.turtle\",\n                regex: /\"/,\n                next: \"pop\"\n            }, {\n                token: \"invalid.string.newline\",\n                regex: /$/\n            }, {\n                token: \"constant.character.escape.turtle\",\n                regex: /\\\\./\n            }, {\n                defaultToken: \"string.quoted.double.turtle\"\n            }]\n        }],\n        \"#xml-schema-types\": [{\n            token: \"support.type.datatype.xml.schema.turtle\",\n            regex: /xsd?:[a-z][a-zA-Z]+/\n        }]\n    };\n\n    this.normalizeRules();\n};\n\nTurtleHighlightRules.metaData = {\n    fileTypes: [\"ttl\", \"nt\"],\n    name: \"Turtle\",\n    scopeName: \"source.turtle\"\n};\n\n\noop.inherits(TurtleHighlightRules, TextHighlightRules);\n\nexports.TurtleHighlightRules = TurtleHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n\n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n\n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n\n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n\n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n\n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n\n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n\n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n\n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n\n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n\n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n\n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n\n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n\n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n\n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/turtle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/turtle_highlight_rules\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar TurtleHighlightRules = acequire(\"./turtle_highlight_rules\").TurtleHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = TurtleHighlightRules;\n    this.foldingRules = new FoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.$id = \"ace/mode/turtle\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/turtle.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMDMuYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=