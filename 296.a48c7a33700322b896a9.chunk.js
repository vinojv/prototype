(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[296],{

/***/ "../EVA Design System/node_modules/brace/mode/asciidoc.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/asciidoc_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar AsciidocHighlightRules = function() {\n    var identifierRe = \"[a-zA-Z\\u00a1-\\uffff]+\\\\b\";\n\n    this.$rules = {\n        \"start\": [\n            {token: \"empty\",   regex: /$/},\n            {token: \"literal\", regex: /^\\.{4,}\\s*$/,  next: \"listingBlock\"},\n            {token: \"literal\", regex: /^-{4,}\\s*$/,   next: \"literalBlock\"},\n            {token: \"string\",  regex: /^\\+{4,}\\s*$/,  next: \"passthroughBlock\"},\n            {token: \"keyword\", regex: /^={4,}\\s*$/},\n            {token: \"text\",    regex: /^\\s*$/},\n            {token: \"empty\", regex: \"\", next: \"dissallowDelimitedBlock\"}\n        ],\n\n        \"dissallowDelimitedBlock\": [\n            {include: \"paragraphEnd\"},\n            {token: \"comment\", regex: '^//.+$'},\n            {token: \"keyword\", regex: \"^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):\"},\n\n            {include: \"listStart\"},\n            {token: \"literal\", regex: /^\\s+.+$/, next: \"indentedBlock\"},\n            {token: \"empty\",   regex: \"\", next: \"text\"}\n        ],\n\n        \"paragraphEnd\": [\n            {token: \"doc.comment\", regex: /^\\/{4,}\\s*$/,    next: \"commentBlock\"},\n            {token: \"tableBlock\",  regex: /^\\s*[|!]=+\\s*$/, next: \"tableBlock\"},\n            {token: \"keyword\",     regex: /^(?:--|''')\\s*$/, next: \"start\"},\n            {token: \"option\",      regex: /^\\[.*\\]\\s*$/,     next: \"start\"},\n            {token: \"pageBreak\",   regex: /^>{3,}$/,         next: \"start\"},\n            {token: \"literal\",     regex: /^\\.{4,}\\s*$/,     next: \"listingBlock\"},\n            {token: \"titleUnderline\",    regex: /^(?:={2,}|-{2,}|~{2,}|\\^{2,}|\\+{2,})\\s*$/, next: \"start\"},\n            {token: \"singleLineTitle\",   regex: /^={1,5}\\s+\\S.*$/, next: \"start\"},\n\n            {token: \"otherBlock\",    regex: /^(?:\\*{2,}|_{2,})\\s*$/, next: \"start\"},\n            {token: \"optionalTitle\", regex: /^\\.[^.\\s].+$/,  next: \"start\"}\n        ],\n\n        \"listStart\": [\n            {token: \"keyword\",  regex: /^\\s*(?:\\d+\\.|[a-zA-Z]\\.|[ixvmIXVM]+\\)|\\*{1,5}|-|\\.{1,5})\\s/, next: \"listText\"},\n            {token: \"meta.tag\", regex: /^.+(?::{2,4}|;;)(?: |$)/, next: \"listText\"},\n            {token: \"support.function.list.callout\", regex: /^(?:<\\d+>|\\d+>|>) /, next: \"text\"},\n            {token: \"keyword\",  regex: /^\\+\\s*$/, next: \"start\"}\n        ],\n\n        \"text\": [\n            {token: [\"link\", \"variable.language\"], regex: /((?:https?:\\/\\/|ftp:\\/\\/|file:\\/\\/|mailto:|callto:)[^\\s\\[]+)(\\[.*?\\])/},\n            {token: \"link\", regex: /(?:https?:\\/\\/|ftp:\\/\\/|file:\\/\\/|mailto:|callto:)[^\\s\\[]+/},\n            {token: \"link\", regex: /\\b[\\w\\.\\/\\-]+@[\\w\\.\\/\\-]+\\b/},\n            {include: \"macros\"},\n            {include: \"paragraphEnd\"},\n            {token: \"literal\", regex:/\\+{3,}/, next:\"smallPassthrough\"},\n            {token: \"escape\", regex: /\\((?:C|TM|R)\\)|\\.{3}|->|<-|=>|<=|&#(?:\\d+|x[a-fA-F\\d]+);|(?: |^)--(?=\\s+\\S)/},\n            {token: \"escape\", regex: /\\\\[_*'`+#]|\\\\{2}[_*'`+#]{2}/},\n            {token: \"keyword\", regex: /\\s\\+$/},\n            {token: \"text\", regex: identifierRe},\n            {token: [\"keyword\", \"string\", \"keyword\"],\n                regex: /(<<[\\w\\d\\-$]+,)(.*?)(>>|$)/},\n            {token: \"keyword\", regex: /<<[\\w\\d\\-$]+,?|>>/},\n            {token: \"constant.character\", regex: /\\({2,3}.*?\\){2,3}/},\n            {token: \"keyword\", regex: /\\[\\[.+?\\]\\]/},\n            {token: \"support\", regex: /^\\[{3}[\\w\\d =\\-]+\\]{3}/},\n\n            {include: \"quotes\"},\n            {token: \"empty\", regex: /^\\s*$/, next: \"start\"}\n        ],\n\n        \"listText\": [\n            {include: \"listStart\"},\n            {include: \"text\"}\n        ],\n\n        \"indentedBlock\": [\n            {token: \"literal\", regex: /^[\\s\\w].+$/, next: \"indentedBlock\"},\n            {token: \"literal\", regex: \"\", next: \"start\"}\n        ],\n\n        \"listingBlock\": [\n            {token: \"literal\", regex: /^\\.{4,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"constant.numeric\", regex: '<\\\\d+>'},\n            {token: \"literal\", regex: '[^<]+'},\n            {token: \"literal\", regex: '<'}\n        ],\n        \"literalBlock\": [\n            {token: \"literal\", regex: /^-{4,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"constant.numeric\", regex: '<\\\\d+>'},\n            {token: \"literal\", regex: '[^<]+'},\n            {token: \"literal\", regex: '<'}\n        ],\n        \"passthroughBlock\": [\n            {token: \"literal\", regex: /^\\+{4,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"literal\", regex: identifierRe + \"|\\\\d+\"},\n            {include: \"macros\"},\n            {token: \"literal\", regex: \".\"}\n        ],\n\n        \"smallPassthrough\": [\n            {token: \"literal\", regex: /[+]{3,}/, next: \"dissallowDelimitedBlock\"},\n            {token: \"literal\", regex: /^\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"literal\", regex: identifierRe + \"|\\\\d+\"},\n            {include: \"macros\"}\n        ],\n\n        \"commentBlock\": [\n            {token: \"doc.comment\", regex: /^\\/{4,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"doc.comment\", regex: '^.*$'}\n        ],\n        \"tableBlock\": [\n            {token: \"tableBlock\", regex: /^\\s*\\|={3,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"tableBlock\", regex: /^\\s*!={3,}\\s*$/, next: \"innerTableBlock\"},\n            {token: \"tableBlock\", regex: /\\|/},\n            {include: \"text\", noEscape: true}\n        ],\n        \"innerTableBlock\": [\n            {token: \"tableBlock\", regex: /^\\s*!={3,}\\s*$/, next: \"tableBlock\"},\n            {token: \"tableBlock\", regex: /^\\s*|={3,}\\s*$/, next: \"dissallowDelimitedBlock\"},\n            {token: \"tableBlock\", regex: /!/}\n        ],\n        \"macros\": [\n            {token: \"macro\", regex: /{[\\w\\-$]+}/},\n            {token: [\"text\", \"string\", \"text\", \"constant.character\", \"text\"], regex: /({)([\\w\\-$]+)(:)?(.+)?(})/},\n            {token: [\"text\", \"markup.list.macro\", \"keyword\", \"string\"], regex: /(\\w+)(footnote(?:ref)?::?)([^\\s\\[]+)?(\\[.*?\\])?/},\n            {token: [\"markup.list.macro\", \"keyword\", \"string\"], regex: /([a-zA-Z\\-][\\w\\.\\/\\-]*::?)([^\\s\\[]+)(\\[.*?\\])?/},\n            {token: [\"markup.list.macro\", \"keyword\"], regex: /([a-zA-Z\\-][\\w\\.\\/\\-]+::?)(\\[.*?\\])/},\n            {token: \"keyword\",     regex: /^:.+?:(?= |$)/}\n        ],\n\n        \"quotes\": [\n            {token: \"string.italic\", regex: /__[^_\\s].*?__/},\n            {token: \"string.italic\", regex: quoteRule(\"_\")},\n            \n            {token: \"keyword.bold\", regex: /\\*\\*[^*\\s].*?\\*\\*/},\n            {token: \"keyword.bold\", regex: quoteRule(\"\\\\*\")},\n            \n            {token: \"literal\", regex: quoteRule(\"\\\\+\")},\n            {token: \"literal\", regex: /\\+\\+[^+\\s].*?\\+\\+/},\n            {token: \"literal\", regex: /\\$\\$.+?\\$\\$/},\n            {token: \"literal\", regex: quoteRule(\"`\")},\n\n            {token: \"keyword\", regex: quoteRule(\"^\")},\n            {token: \"keyword\", regex: quoteRule(\"~\")},\n            {token: \"keyword\", regex: /##?/},\n            {token: \"keyword\", regex: /(?:\\B|^)``|\\b''/}\n        ]\n\n    };\n\n    function quoteRule(ch) {\n        var prefix = /\\w/.test(ch) ? \"\\\\b\" : \"(?:\\\\B|^)\";\n        return prefix + ch + \"[^\" + ch + \"].*?\" + ch + \"(?![\\\\w*])\";\n    }\n\n    var tokenMap = {\n        macro: \"constant.character\",\n        tableBlock: \"doc.comment\",\n        titleUnderline: \"markup.heading\",\n        singleLineTitle: \"markup.heading\",\n        pageBreak: \"string\",\n        option: \"string.regexp\",\n        otherBlock: \"markup.list\",\n        literal: \"support.function\",\n        optionalTitle: \"constant.numeric\",\n        escape: \"constant.language.escape\",\n        link: \"markup.underline.list\"\n    };\n\n    for (var state in this.$rules) {\n        var stateRules = this.$rules[state];\n        for (var i = stateRules.length; i--; ) {\n            var rule = stateRules[i];\n            if (rule.include || typeof rule == \"string\") {\n                var args = [i, 1].concat(this.$rules[rule.include || rule]);\n                if (rule.noEscape) {\n                    args = args.filter(function(x) {\n                        return !x.next;\n                    });\n                }\n                stateRules.splice.apply(stateRules, args);\n            } else if (rule.token in tokenMap) {\n                rule.token = tokenMap[rule.token];\n            }\n        }\n    }\n};\noop.inherits(AsciidocHighlightRules, TextHighlightRules);\n\nexports.AsciidocHighlightRules = AsciidocHighlightRules;\n});\n\nace.define(\"ace/mode/folding/asciidoc\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/folding/fold_mode\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\nvar Range = acequire(\"../../range\").Range;\n\nvar FoldMode = exports.FoldMode = function() {};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    this.foldingStartMarker = /^(?:\\|={10,}|[\\.\\/=\\-~^+]{4,}\\s*$|={1,5} )/;\n    this.singleLineHeadingRe = /^={1,5}(?=\\s+\\S)/;\n\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n        if (!this.foldingStartMarker.test(line))\n            return \"\";\n\n        if (line[0] == \"=\") {\n            if (this.singleLineHeadingRe.test(line))\n                return \"start\";\n            if (session.getLine(row - 1).length != session.getLine(row).length)\n                return \"\";\n            return \"start\";\n        }\n        if (session.bgTokenizer.getState(row) == \"dissallowDelimitedBlock\")\n            return \"end\";\n        return \"start\";\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n        var startColumn = line.length;\n        var maxRow = session.getLength();\n        var startRow = row;\n        var endRow = row;\n        if (!line.match(this.foldingStartMarker))\n            return;\n\n        var token;\n        function getTokenType(row) {\n            token = session.getTokens(row)[0];\n            return token && token.type;\n        }\n\n        var levels = [\"=\",\"-\",\"~\",\"^\",\"+\"];\n        var heading = \"markup.heading\";\n        var singleLineHeadingRe = this.singleLineHeadingRe;\n        function getLevel() {\n            var match = token.value.match(singleLineHeadingRe);\n            if (match)\n                return match[0].length;\n            var level = levels.indexOf(token.value[0]) + 1;\n            if (level == 1) {\n                if (session.getLine(row - 1).length != session.getLine(row).length)\n                    return Infinity;\n            }\n            return level;\n        }\n\n        if (getTokenType(row) == heading) {\n            var startHeadingLevel = getLevel();\n            while (++row < maxRow) {\n                if (getTokenType(row) != heading)\n                    continue;\n                var level = getLevel();\n                if (level <= startHeadingLevel)\n                    break;\n            }\n\n            var isSingleLineHeading = token && token.value.match(this.singleLineHeadingRe);\n            endRow = isSingleLineHeading ? row - 1 : row - 2;\n\n            if (endRow > startRow) {\n                while (endRow > startRow && (!getTokenType(endRow) || token.value[0] == \"[\"))\n                    endRow--;\n            }\n\n            if (endRow > startRow) {\n                var endColumn = session.getLine(endRow).length;\n                return new Range(startRow, startColumn, endRow, endColumn);\n            }\n        } else {\n            var state = session.bgTokenizer.getState(row);\n            if (state == \"dissallowDelimitedBlock\") {\n                while (row -- > 0) {\n                    if (session.bgTokenizer.getState(row).lastIndexOf(\"Block\") == -1)\n                        break;\n                }\n                endRow = row + 1;\n                if (endRow < startRow) {\n                    var endColumn = session.getLine(row).length;\n                    return new Range(endRow, 5, startRow, startColumn - 5);\n                }\n            } else {\n                while (++row < maxRow) {\n                    if (session.bgTokenizer.getState(row) == \"dissallowDelimitedBlock\")\n                        break;\n                }\n                endRow = row;\n                if (endRow > startRow) {\n                    var endColumn = session.getLine(row).length;\n                    return new Range(startRow, 5, endRow, endColumn - 5);\n                }\n            }\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/asciidoc\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/asciidoc_highlight_rules\",\"ace/mode/folding/asciidoc\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar AsciidocHighlightRules = acequire(\"./asciidoc_highlight_rules\").AsciidocHighlightRules;\nvar AsciidocFoldMode = acequire(\"./folding/asciidoc\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = AsciidocHighlightRules;\n    \n    this.foldingRules = new AsciidocFoldMode();    \n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.type = \"text\";\n    this.getNextLineIndent = function(state, line, tab) {\n        if (state == \"listblock\") {\n            var match = /^((?:.+)?)([-+*][ ]+)/.exec(line);\n            if (match) {\n                return new Array(match[1].length + 1).join(\" \") + match[2];\n            } else {\n                return \"\";\n            }\n        } else {\n            return this.$getIndent(line);\n        }\n    };\n    this.$id = \"ace/mode/asciidoc\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/asciidoc.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOTYuYTQ4YzdhMzM3MDAzMjJiODk2YTkuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=