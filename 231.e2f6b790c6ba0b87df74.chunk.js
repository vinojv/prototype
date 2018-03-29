(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[231],{

/***/ "../EVA Design System/node_modules/brace/mode/praat.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/praat_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar PraatHighlightRules = function() {\n\n    var keywords = (\n        \"if|then|else|elsif|elif|endif|fi|\" +\n        \"endfor|endproc|\" + // related keywords specified below\n        \"while|endwhile|\" +\n        \"repeat|until|\" +\n        \"select|plus|minus|\" +\n        \"assert|asserterror\"\n    );\n\n    var predefinedVariables = (\n        \"macintosh|windows|unix|\" +\n        \"praatVersion|praatVersion\\\\$\" +\n        \"pi|undefined|\" +\n        \"newline\\\\$|tab\\\\$|\" +\n        \"shellDirectory\\\\$|homeDirectory\\\\$|preferencesDirectory\\\\$|\" +\n        \"temporaryDirectory\\\\$|defaultDirectory\\\\$\"\n    );\n    var directives = (\n        \"clearinfo|endSendPraat\"\n    );\n\n    var functions = (\n        \"writeInfo|writeInfoLine|appendInfo|appendInfoLine|info\\\\$|\" +\n        \"writeFile|writeFileLine|appendFile|appendFileLine|\" +\n        \"abs|round|floor|ceiling|min|max|imin|imax|\" +\n        \"sqrt|sin|cos|tan|arcsin|arccos|arctan|arctan2|sinc|sincpi|\" +\n        \"exp|ln|lnBeta|lnGamma|log10|log2|\" +\n        \"sinh|cosh|tanh|arcsinh|arccosh|arctanh|\" +\n        \"sigmoid|invSigmoid|erf|erfc|\" +\n        \"random(?:Uniform|Integer|Gauss|Poisson|Binomial)|\" +\n        \"gaussP|gaussQ|invGaussQ|incompleteGammaP|incompleteBeta|\" +\n        \"chiSquareP|chiSquareQ|invChiSquareQ|studentP|studentQ|invStudentQ|\" +\n        \"fisherP|fisherQ|invFisherQ|\" +\n        \"binomialP|binomialQ|invBinomialP|invBinomialQ|\" +\n        \"hertzToBark|barkToHerz|\" +\n        \"hertzToMel|melToHertz|\" +\n        \"hertzToSemitones|semitonesToHerz|\" +\n        \"erb|hertzToErb|erbToHertz|\" +\n        \"phonToDifferenceLimens|differenceLimensToPhon|\" +\n        \"soundPressureToPhon|\" +\n        \"beta|beta2|besselI|besselK|\" +\n        \"numberOfColumns|numberOfRows|\" +\n        \"selected|selected\\\\$|numberOfSelected|variableExists|\"+\n        \"index|rindex|startsWith|endsWith|\"+\n        \"index_regex|rindex_regex|replace_regex\\\\$|\"+\n        \"length|extractWord\\\\$|extractLine\\\\$|extractNumber|\" +\n        \"left\\\\$|right\\\\$|mid\\\\$|replace\\\\$|\" +\n        \"date\\\\$|fixed\\\\$|percent\\\\$|\" +\n        \"zero#|linear#|randomUniform#|randomInteger#|randomGauss#|\" +\n        \"beginPause|endPause|\" +\n        \"demoShow|demoWindowTitle|demoInput|demoWaitForInput|\" +\n        \"demoClicked|demoClickedIn|demoX|demoY|\" +\n        \"demoKeyPressed|demoKey\\\\$|\" +\n        \"demoExtraControlKeyPressed|demoShiftKeyPressed|\"+\n        \"demoCommandKeyPressed|demoOptionKeyPressed|\" +\n        \"environment\\\\$|chooseReadFile\\\\$|\" +\n        \"chooseDirectory\\\\$|createDirectory|fileReadable|deleteFile|\" +\n        \"selectObject|removeObject|plusObject|minusObject|\" +\n        \"runScript|exitScript|\" +\n        \"beginSendPraat|endSendPraat|\" +\n        \"objectsAreIdentical\"\n    );\n\n    var objectTypes = (\n        \"Activation|AffineTransform|AmplitudeTier|Art|Artword|Autosegment|\"  +\n        \"BarkFilter|CCA|Categories|Cepstrum|Cepstrumc|ChebyshevSeries|\"      +\n        \"ClassificationTable|Cochleagram|Collection|Configuration|\"          +\n        \"Confusion|ContingencyTable|Corpus|Correlation|Covariance|\"          +\n        \"CrossCorrelationTable|CrossCorrelationTables|DTW|Diagonalizer|\"     +\n        \"Discriminant|Dissimilarity|Distance|Distributions|DurationTier|\"    +\n        \"EEG|ERP|ERPTier|Eigen|Excitation|Excitations|ExperimentMFC|FFNet|\"  +\n        \"FeatureWeights|Formant|FormantFilter|FormantGrid|FormantPoint|\"     +\n        \"FormantTier|GaussianMixture|HMM|HMM_Observation|\"                   +\n        \"HMM_ObservationSequence|HMM_State|HMM_StateSequence|Harmonicity|\"   +\n        \"ISpline|Index|Intensity|IntensityTier|IntervalTier|KNN|KlattGrid|\"  +\n        \"KlattTable|LFCC|LPC|Label|LegendreSeries|LinearRegression|\"         +\n        \"LogisticRegression|LongSound|Ltas|MFCC|MSpline|ManPages|\"           +\n        \"Manipulation|Matrix|MelFilter|MixingMatrix|Movie|Network|\"          +\n        \"OTGrammar|OTHistory|OTMulti|PCA|PairDistribution|ParamCurve|\"       +\n        \"Pattern|Permutation|Pitch|PitchTier|PointProcess|Polygon|\"          +\n        \"Polynomial|Procrustes|RealPoint|RealTier|ResultsMFC|Roots|SPINET|\"  +\n        \"SSCP|SVD|Salience|ScalarProduct|Similarity|SimpleString|\"           +\n        \"SortedSetOfString|Sound|Speaker|Spectrogram|Spectrum|SpectrumTier|\" +\n        \"SpeechSynthesizer|SpellingChecker|Strings|StringsIndex|Table|\"      +\n        \"TableOfReal|TextGrid|TextInterval|TextPoint|TextTier|Tier|\"         +\n        \"Transition|VocalTract|Weight|WordList\"\n    );\n\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"string.interpolated\",\n                regex : /'((?:[a-z][a-zA-Z0-9_]*)(?:\\$|#|:[0-9]+)?)'/\n            }, {\n                token : [\"text\", \"text\", \"keyword.operator\", \"text\", \"keyword\"],\n                regex : /(^\\s*)(?:([a-z][a-zA-Z0-9_]*\\$?\\s+)(=)(\\s+))?(stopwatch)/\n            }, {\n                token : [\"text\", \"keyword\", \"text\", \"string\"],\n                regex : /(^\\s*)(print(?:line|tab)?|echo|exit|pause|send(?:praat|socket)|include|execute|system(?:_nocheck)?)(\\s+)(.*)/\n            }, {\n                token : [\"text\", \"keyword\"],\n                regex : \"(^\\\\s*)(\" + directives + \")$\"\n            }, {\n                token : [\"text\", \"keyword.operator\", \"text\"],\n                regex : /(\\s+)((?:\\+|-|\\/|\\*|<|>)=?|==?|!=|%|\\^|\\||and|or|not)(\\s+)/\n            }, {\n                token : [\"text\", \"text\", \"keyword.operator\", \"text\", \"keyword\", \"text\", \"keyword\"],\n                regex : /(^\\s*)(?:([a-z][a-zA-Z0-9_]*\\$?\\s+)(=)(\\s+))?(?:((?:no)?warn|(?:unix_)?nocheck|noprogress)(\\s+))?((?:[A-Z][^.:\"]+)(?:$|(?:\\.{3}|:)))/\n            }, {\n                token : [\"text\", \"keyword\", \"text\", \"keyword\"],\n                regex : /(^\\s*)(?:(demo)?(\\s+))((?:[A-Z][^.:\"]+)(?:$|(?:\\.{3}|:)))/\n            }, {\n                token : [\"text\", \"keyword\", \"text\", \"keyword\"],\n                regex : /^(\\s*)(?:(demo)(\\s+))?(10|12|14|16|24)$/\n            }, {\n                token : [\"text\", \"support.function\", \"text\"],\n                regex : /(\\s*)(do\\$?)(\\s*:\\s*|\\s*\\(\\s*)/\n            }, {\n                token : \"entity.name.type\",\n                regex : \"(\" + objectTypes + \")\"\n            }, {\n                token : \"variable.language\",\n                regex : \"(\" + predefinedVariables + \")\"\n            }, {\n                token : [\"support.function\", \"text\"],\n                regex : \"((?:\" + functions + \")\\\\$?)(\\\\s*(?::|\\\\())\"\n            }, {\n                token : \"keyword\",\n                regex : /(\\bfor\\b)/,\n                next : \"for\"\n            }, {\n                token : \"keyword\",\n                regex : \"(\\\\b(?:\" + keywords + \")\\\\b)\"\n            }, {\n                token : \"string\",\n                regex : /\"[^\"]*\"/\n            }, {\n                token : \"string\",\n                regex : /\"[^\"]*$/,\n                next : \"brokenstring\"\n            }, {\n                token : [\"text\", \"keyword\", \"text\", \"entity.name.section\"],\n                regex : /(^\\s*)(\\bform\\b)(\\s+)(.*)/,\n                next : \"form\"\n            }, {\n                token : \"constant.numeric\",\n                regex : /\\b[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b/\n            }, {\n                token : [\"keyword\", \"text\", \"entity.name.function\"],\n                regex : /(procedure)(\\s+)(\\S+)/\n            }, {\n                token : [\"entity.name.function\", \"text\"],\n                regex : /(@\\S+)(:|\\s*\\()/\n            }, {\n                token : [\"text\", \"keyword\", \"text\", \"entity.name.function\"],\n                regex : /(^\\s*)(call)(\\s+)(\\S+)/\n            }, {\n                token : \"comment\",\n                regex : /(^\\s*#|;).*$/\n            }, {\n                token : \"text\",\n                regex : /\\s+/\n            }\n        ],\n        \"form\" : [\n            {\n                token : [\"keyword\", \"text\", \"constant.numeric\"],\n                regex : /((?:optionmenu|choice)\\s+)(\\S+:\\s+)([0-9]+)/\n            }, {\n                token : [\"keyword\", \"constant.numeric\"],\n                regex : /((?:option|button)\\s+)([+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b)/\n            }, {\n                token : [\"keyword\", \"string\"],\n                regex : /((?:option|button)\\s+)(.*)/\n            }, {\n                token : [\"keyword\", \"text\", \"string\"],\n                regex : /((?:sentence|text)\\s+)(\\S+\\s*)(.*)/\n            }, {\n                token : [\"keyword\", \"text\", \"string\", \"invalid.illegal\"],\n                regex : /(word\\s+)(\\S+\\s*)(\\S+)?(\\s.*)?/\n            }, {\n                token : [\"keyword\", \"text\", \"constant.language\"],\n                regex : /(boolean\\s+)(\\S+\\s*)(0|1|\"?(?:yes|no)\"?)/\n            }, {\n                token : [\"keyword\", \"text\", \"constant.numeric\"],\n                regex : /((?:real|natural|positive|integer)\\s+)(\\S+\\s*)([+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b)/\n            }, {\n                token : [\"keyword\", \"string\"],\n                regex : /(comment\\s+)(.*)/\n            }, {\n                token : \"keyword\",\n                regex : 'endform',\n                next : \"start\"\n            }\n        ],\n        \"for\" : [\n            {\n                token : [\"keyword\", \"text\", \"constant.numeric\", \"text\"],\n                regex : /(from|to)(\\s+)([+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?)(\\s*)/\n            }, {\n                token : [\"keyword\", \"text\"],\n                regex : /(from|to)(\\s+\\S+\\s*)/\n            }, {\n                token : \"text\",\n                regex : /$/,\n                next : \"start\"\n            }\n        ],\n        \"brokenstring\" : [\n            {\n                token : [\"text\", \"string\"],\n                regex : /(\\s*\\.{3})([^\"]*)/\n            }, {\n                token : \"string\",\n                regex : /\"/,\n                next : \"start\"\n            }\n        ]\n    };\n};\n\noop.inherits(PraatHighlightRules, TextHighlightRules);\n\nexports.PraatHighlightRules = PraatHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/praat\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/praat_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/mode/folding/cstyle\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar PraatHighlightRules = acequire(\"./praat_highlight_rules\").PraatHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\n\nvar Mode = function() {\n    this.HighlightRules = PraatHighlightRules;\n    this.$outdent = new MatchingBraceOutdent();\n    this.foldingRules = new CStyleFoldMode();\n    this.$behaviour = this.$defaultBehaviour;\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n\n    this.lineCommentStart = \"#\";\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\") {\n            var match = line.match(/^.*[\\{\\(\\[:]\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/praat\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/praat.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMzEuZTJmNmI3OTBjNmJhMGI4N2RmNzQuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=