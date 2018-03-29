(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ "../EVA Design System/node_modules/brace/mode/vala.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/vala_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar ValaHighlightRules = function() {\n\n    this.$rules = { start: \n       [ { token: \n            [ 'meta.using.vala',\n              'keyword.other.using.vala',\n              'meta.using.vala',\n              'storage.modifier.using.vala',\n              'meta.using.vala',\n              'punctuation.terminator.vala' ],\n           regex: '^(\\\\s*)(using)\\\\b(?:(\\\\s*)([^ ;$]+)(\\\\s*)((?:;)?))?' },\n         { include: '#code' } ],\n      '#all-types': \n       [ { include: '#primitive-arrays' },\n         { include: '#primitive-types' },\n         { include: '#object-types' } ],\n      '#annotations': \n       [ { token: \n            [ 'storage.type.annotation.vala',\n              'punctuation.definition.annotation-arguments.begin.vala' ],\n           regex: '(@[^ (]+)(\\\\()',\n           push: \n            [ { token: 'punctuation.definition.annotation-arguments.end.vala',\n                regex: '\\\\)',\n                next: 'pop' },\n              { token: \n                 [ 'constant.other.key.vala',\n                   'text',\n                   'keyword.operator.assignment.vala' ],\n                regex: '(\\\\w*)(\\\\s*)(=)' },\n              { include: '#code' },\n              { token: 'punctuation.seperator.property.vala', regex: ',' },\n              { defaultToken: 'meta.declaration.annotation.vala' } ] },\n         { token: 'storage.type.annotation.vala', regex: '@\\\\w*' } ],\n      '#anonymous-classes-and-new': \n       [ { token: 'keyword.control.new.vala',\n           regex: '\\\\bnew\\\\b',\n           push_disabled: \n            [ { token: 'text',\n                regex: '(?<=\\\\)|\\\\])(?!\\\\s*{)|(?<=})|(?=;)',\n                TODO: 'FIXME: regexp doesn\\'t have js equivalent',\n                originalRegex: '(?<=\\\\)|\\\\])(?!\\\\s*{)|(?<=})|(?=;)',\n                next: 'pop' },\n              { token: [ 'storage.type.vala', 'text' ],\n                regex: '(\\\\w+)(\\\\s*)(?=\\\\[)',\n                push: \n                 [ { token: 'text', regex: '}|(?=;|\\\\))', next: 'pop' },\n                   { token: 'text',\n                     regex: '\\\\[',\n                     push: \n                      [ { token: 'text', regex: '\\\\]', next: 'pop' },\n                        { include: '#code' } ] },\n                   { token: 'text',\n                     regex: '{',\n                     push: \n                      [ { token: 'text', regex: '(?=})', next: 'pop' },\n                        { include: '#code' } ] } ] },\n              { token: 'text',\n                regex: '(?=\\\\w.*\\\\()',\n                push: \n                 [ { token: 'text',\n                     regex: '(?<=\\\\))',\n                     TODO: 'FIXME: regexp doesn\\'t have js equivalent',\n                     originalRegex: '(?<=\\\\))',\n                     next: 'pop' },\n                   { include: '#object-types' },\n                   { token: 'text',\n                     regex: '\\\\(',\n                     push: \n                      [ { token: 'text', regex: '\\\\)', next: 'pop' },\n                        { include: '#code' } ] } ] },\n              { token: 'meta.inner-class.vala',\n                regex: '{',\n                push: \n                 [ { token: 'meta.inner-class.vala', regex: '}', next: 'pop' },\n                   { include: '#class-body' },\n                   { defaultToken: 'meta.inner-class.vala' } ] } ] } ],\n      '#assertions': \n       [ { token: \n            [ 'keyword.control.assert.vala',\n              'meta.declaration.assertion.vala' ],\n           regex: '\\\\b(assert|acequires|ensures)(\\\\s)',\n           push: \n            [ { token: 'meta.declaration.assertion.vala',\n                regex: '$',\n                next: 'pop' },\n              { token: 'keyword.operator.assert.expression-seperator.vala',\n                regex: ':' },\n              { include: '#code' },\n              { defaultToken: 'meta.declaration.assertion.vala' } ] } ],\n      '#class': \n       [ { token: 'meta.class.vala',\n           regex: '(?=\\\\w?[\\\\w\\\\s]*(?:class|(?:@)?interface|enum|struct|namespace)\\\\s+\\\\w+)',\n           push: \n            [ { token: 'paren.vala',\n                regex: '}',\n                next: 'pop' },\n              { include: '#storage-modifiers' },\n              { include: '#comments' },\n              { token: \n                 [ 'storage.modifier.vala',\n                   'meta.class.identifier.vala',\n                   'entity.name.type.class.vala' ],\n                regex: '(class|(?:@)?interface|enum|struct|namespace)(\\\\s+)([\\\\w\\\\.]+)' },\n              { token: 'storage.modifier.extends.vala',\n                regex: ':',\n                push: \n                 [ { token: 'meta.definition.class.inherited.classes.vala',\n                     regex: '(?={|,)',\n                     next: 'pop' },\n                   { include: '#object-types-inherited' },\n                   { include: '#comments' },\n                   { defaultToken: 'meta.definition.class.inherited.classes.vala' } ] },\n              { token: \n                 [ 'storage.modifier.implements.vala',\n                   'meta.definition.class.implemented.interfaces.vala' ],\n                regex: '(,)(\\\\s)',\n                push: \n                 [ { token: 'meta.definition.class.implemented.interfaces.vala',\n                     regex: '(?=\\\\{)',\n                     next: 'pop' },\n                   { include: '#object-types-inherited' },\n                   { include: '#comments' },\n                   { defaultToken: 'meta.definition.class.implemented.interfaces.vala' } ] },\n              { token: 'paren.vala',\n                regex: '{',\n                push: \n                 [ { token: 'paren.vala', regex: '(?=})', next: 'pop' },\n                   { include: '#class-body' },\n                   { defaultToken: 'meta.class.body.vala' } ] },\n              { defaultToken: 'meta.class.vala' } ],\n           comment: 'attempting to put namespace in here.' } ],\n      '#class-body': \n       [ { include: '#comments' },\n         { include: '#class' },\n         { include: '#enums' },\n         { include: '#methods' },\n         { include: '#annotations' },\n         { include: '#storage-modifiers' },\n         { include: '#code' } ],\n      '#code': \n       [ { include: '#comments' },\n         { include: '#class' },\n         { token: 'text',\n           regex: '{',\n           push: \n            [ { token: 'text', regex: '}', next: 'pop' },\n              { include: '#code' } ] },\n         { include: '#assertions' },\n         { include: '#parens' },\n         { include: '#constants-and-special-vars' },\n         { include: '#anonymous-classes-and-new' },\n         { include: '#keywords' },\n         { include: '#storage-modifiers' },\n         { include: '#strings' },\n         { include: '#all-types' } ],\n      '#comments': \n       [ { token: 'punctuation.definition.comment.vala',\n           regex: '/\\\\*\\\\*/' },\n         { include: 'text.html.javadoc' },\n         { include: '#comments-inline' } ],\n      '#comments-inline': \n       [ { token: 'punctuation.definition.comment.vala',\n           regex: '/\\\\*',\n           push: \n            [ { token: 'punctuation.definition.comment.vala',\n                regex: '\\\\*/',\n                next: 'pop' },\n              { defaultToken: 'comment.block.vala' } ] },\n         { token: \n            [ 'text',\n              'punctuation.definition.comment.vala',\n              'comment.line.double-slash.vala' ],\n           regex: '(\\\\s*)(//)(.*$)' } ],\n      '#constants-and-special-vars': \n       [ { token: 'constant.language.vala',\n           regex: '\\\\b(?:true|false|null)\\\\b' },\n         { token: 'variable.language.vala',\n           regex: '\\\\b(?:this|base)\\\\b' },\n         { token: 'constant.numeric.vala',\n           regex: '\\\\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\\\\.?[0-9]*|\\\\.[0-9]+)(?:(?:e|E)(?:\\\\+|-)?[0-9]+)?)(?:[LlFfUuDd]|UL|ul)?\\\\b' },\n         { token: [ 'keyword.operator.dereference.vala', 'constant.other.vala' ],\n           regex: '((?:\\\\.)?)\\\\b([A-Z][A-Z0-9_]+)(?!<|\\\\.class|\\\\s*\\\\w+\\\\s*=)\\\\b' } ],\n      '#enums': \n       [ { token: 'text',\n           regex: '^(?=\\\\s*[A-Z0-9_]+\\\\s*(?:{|\\\\(|,))',\n           push: \n            [ { token: 'text', regex: '(?=;|})', next: 'pop' },\n              { token: 'constant.other.enum.vala',\n                regex: '\\\\w+',\n                push: \n                 [ { token: 'meta.enum.vala', regex: '(?=,|;|})', next: 'pop' },\n                   { include: '#parens' },\n                   { token: 'text',\n                     regex: '{',\n                     push: \n                      [ { token: 'text', regex: '}', next: 'pop' },\n                        { include: '#class-body' } ] },\n                   { defaultToken: 'meta.enum.vala' } ] } ] } ],\n      '#keywords': \n       [ { token: 'keyword.control.catch-exception.vala',\n           regex: '\\\\b(?:try|catch|finally|throw)\\\\b' },\n         { token: 'keyword.control.vala', regex: '\\\\?|:|\\\\?\\\\?' },\n         { token: 'keyword.control.vala',\n           regex: '\\\\b(?:return|break|case|continue|default|do|while|for|foreach|switch|if|else|in|yield|get|set|value)\\\\b' },\n         { token: 'keyword.operator.vala',\n           regex: '\\\\b(?:typeof|is|as)\\\\b' },\n         { token: 'keyword.operator.comparison.vala',\n           regex: '==|!=|<=|>=|<>|<|>' },\n         { token: 'keyword.operator.assignment.vala', regex: '=' },\n         { token: 'keyword.operator.increment-decrement.vala',\n           regex: '\\\\-\\\\-|\\\\+\\\\+' },\n         { token: 'keyword.operator.arithmetic.vala',\n           regex: '\\\\-|\\\\+|\\\\*|\\\\/|%' },\n         { token: 'keyword.operator.logical.vala', regex: '!|&&|\\\\|\\\\|' },\n         { token: 'keyword.operator.dereference.vala',\n           regex: '\\\\.(?=\\\\S)',\n           originalRegex: '(?<=\\\\S)\\\\.(?=\\\\S)' },\n         { token: 'punctuation.terminator.vala', regex: ';' },\n         { token: 'keyword.operator.ownership', regex: 'owned|unowned' } ],\n      '#methods': \n       [ { token: 'meta.method.vala',\n           regex: '(?!new)(?=\\\\w.*\\\\s+)(?=[^=]+\\\\()',\n           push: \n            [ { token: 'paren.vala', regex: '}|(?=;)', next: 'pop' },\n              { include: '#storage-modifiers' },\n              { token: [ 'entity.name.function.vala', 'meta.method.identifier.vala' ],\n                regex: '([\\\\~\\\\w\\\\.]+)(\\\\s*\\\\()',\n                push: \n                 [ { token: 'meta.method.identifier.vala',\n                     regex: '\\\\)',\n                     next: 'pop' },\n                   { include: '#parameters' },\n                   { defaultToken: 'meta.method.identifier.vala' } ] },\n              { token: 'meta.method.return-type.vala',\n                regex: '(?=\\\\w.*\\\\s+\\\\w+\\\\s*\\\\()',\n                push: \n                 [ { token: 'meta.method.return-type.vala',\n                     regex: '(?=\\\\w+\\\\s*\\\\()',\n                     next: 'pop' },\n                   { include: '#all-types' },\n                   { defaultToken: 'meta.method.return-type.vala' } ] },\n              { include: '#throws' },\n              { token: 'paren.vala',\n                regex: '{',\n                push: \n                 [ { token: 'paren.vala', regex: '(?=})', next: 'pop' },\n                   { include: '#code' },\n                   { defaultToken: 'meta.method.body.vala' } ] },\n              { defaultToken: 'meta.method.vala' } ] } ],\n      '#namespace': \n       [ { token: 'text',\n           regex: '^(?=\\\\s*[A-Z0-9_]+\\\\s*(?:{|\\\\(|,))',\n           push: \n            [ { token: 'text', regex: '(?=;|})', next: 'pop' },\n              { token: 'constant.other.namespace.vala',\n                regex: '\\\\w+',\n                push: \n                 [ { token: 'meta.namespace.vala', regex: '(?=,|;|})', next: 'pop' },\n                   { include: '#parens' },\n                   { token: 'text',\n                     regex: '{',\n                     push: \n                      [ { token: 'text', regex: '}', next: 'pop' },\n                        { include: '#code' } ] },\n                   { defaultToken: 'meta.namespace.vala' } ] } ],\n           comment: 'This is not quite right. See the class grammar right now' } ],\n      '#object-types': \n       [ { token: 'storage.type.generic.vala',\n           regex: '\\\\b(?:[a-z]\\\\w*\\\\.)*[A-Z]+\\\\w*<',\n           push: \n            [ { token: 'storage.type.generic.vala',\n                regex: '>|[^\\\\w\\\\s,\\\\?<\\\\[()\\\\]]',\n                TODO: 'FIXME: regexp doesn\\'t have js equivalent',\n                originalRegex: '>|[^\\\\w\\\\s,\\\\?<\\\\[(?:[,]+)\\\\]]',\n                next: 'pop' },\n              { include: '#object-types' },\n              { token: 'storage.type.generic.vala',\n                regex: '<',\n                push: \n                 [ { token: 'storage.type.generic.vala',\n                     regex: '>|[^\\\\w\\\\s,\\\\[\\\\]<]',\n                     next: 'pop' },\n                   { defaultToken: 'storage.type.generic.vala' } ],\n                comment: 'This is just to support <>\\'s with no actual type prefix' },\n              { defaultToken: 'storage.type.generic.vala' } ] },\n         { token: 'storage.type.object.array.vala',\n           regex: '\\\\b(?:[a-z]\\\\w*\\\\.)*[A-Z]+\\\\w*(?=\\\\[)',\n           push: \n            [ { token: 'storage.type.object.array.vala',\n                regex: '(?=[^\\\\]\\\\s])',\n                next: 'pop' },\n              { token: 'text',\n                regex: '\\\\[',\n                push: \n                 [ { token: 'text', regex: '\\\\]', next: 'pop' },\n                   { include: '#code' } ] },\n              { defaultToken: 'storage.type.object.array.vala' } ] },\n         { token: \n            [ 'storage.type.vala',\n              'keyword.operator.dereference.vala',\n              'storage.type.vala' ],\n           regex: '\\\\b(?:([a-z]\\\\w*)(\\\\.))*([A-Z]+\\\\w*\\\\b)' } ],\n      '#object-types-inherited': \n       [ { token: 'entity.other.inherited-class.vala',\n           regex: '\\\\b(?:[a-z]\\\\w*\\\\.)*[A-Z]+\\\\w*<',\n           push: \n            [ { token: 'entity.other.inherited-class.vala',\n                regex: '>|[^\\\\w\\\\s,<]',\n                next: 'pop' },\n              { include: '#object-types' },\n              { token: 'storage.type.generic.vala',\n                regex: '<',\n                push: \n                 [ { token: 'storage.type.generic.vala',\n                     regex: '>|[^\\\\w\\\\s,<]',\n                     next: 'pop' },\n                   { defaultToken: 'storage.type.generic.vala' } ],\n                comment: 'This is just to support <>\\'s with no actual type prefix' },\n              { defaultToken: 'entity.other.inherited-class.vala' } ] },\n         { token: \n            [ 'entity.other.inherited-class.vala',\n              'keyword.operator.dereference.vala',\n              'entity.other.inherited-class.vala' ],\n           regex: '\\\\b(?:([a-z]\\\\w*)(\\\\.))*([A-Z]+\\\\w*)' } ],\n      '#parameters': \n       [ { token: 'storage.modifier.vala', regex: 'final' },\n         { include: '#primitive-arrays' },\n         { include: '#primitive-types' },\n         { include: '#object-types' },\n         { token: 'variable.parameter.vala', regex: '\\\\w+' } ],\n      '#parens': \n       [ { token: 'text',\n           regex: '\\\\(',\n           push: \n            [ { token: 'text', regex: '\\\\)', next: 'pop' },\n              { include: '#code' } ] } ],\n      '#primitive-arrays': \n       [ { token: 'storage.type.primitive.array.vala',\n           regex: '\\\\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|int8|int16|int32|int64|uint8|uint16|uint32|uint64)(?:\\\\[\\\\])*\\\\b' } ],\n      '#primitive-types': \n       [ { token: 'storage.type.primitive.vala',\n           regex: '\\\\b(?:var|bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void|signal|int8|int16|int32|int64|uint8|uint16|uint32|uint64)\\\\b',\n           comment: 'var is not really a primitive, but acts like one in most cases' } ],\n      '#storage-modifiers': \n       [ { token: 'storage.modifier.vala',\n           regex: '\\\\b(?:public|private|protected|internal|static|final|sealed|virtual|override|abstract|readonly|volatile|dynamic|async|unsafe|out|ref|weak|owned|unowned|const)\\\\b',\n           comment: 'Not sure about unsafe and readonly' } ],\n      '#strings': \n       [ { token: 'punctuation.definition.string.begin.vala',\n           regex: '@\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.vala',\n                regex: '\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.vala',\n                regex: '\\\\\\\\.|%[\\\\w\\\\.\\\\-]+|\\\\$(?:\\\\w+|\\\\([\\\\w\\\\s\\\\+\\\\-\\\\*\\\\/]+\\\\))' },\n              { defaultToken: 'string.quoted.interpolated.vala' } ] },\n         { token: 'punctuation.definition.string.begin.vala',\n           regex: '\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.vala',\n                regex: '\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.vala', regex: '\\\\\\\\.' },\n              { token: 'constant.character.escape.vala',\n                regex: '%[\\\\w\\\\.\\\\-]+' },\n              { defaultToken: 'string.quoted.double.vala' } ] },\n         { token: 'punctuation.definition.string.begin.vala',\n           regex: '\\'',\n           push: \n            [ { token: 'punctuation.definition.string.end.vala',\n                regex: '\\'',\n                next: 'pop' },\n              { token: 'constant.character.escape.vala', regex: '\\\\\\\\.' },\n              { defaultToken: 'string.quoted.single.vala' } ] },\n         { token: 'punctuation.definition.string.begin.vala',\n           regex: '\"\"\"',\n           push: \n            [ { token: 'punctuation.definition.string.end.vala',\n                regex: '\"\"\"',\n                next: 'pop' },\n              { token: 'constant.character.escape.vala',\n                regex: '%[\\\\w\\\\.\\\\-]+' },\n              { defaultToken: 'string.quoted.triple.vala' } ] } ],\n      '#throws': \n       [ { token: 'storage.modifier.vala',\n           regex: 'throws',\n           push: \n            [ { token: 'meta.throwables.vala', regex: '(?={|;)', next: 'pop' },\n              { include: '#object-types' },\n              { defaultToken: 'meta.throwables.vala' } ] } ],\n      '#values': \n       [ { include: '#strings' },\n         { include: '#object-types' },\n         { include: '#constants-and-special-vars' } ] };\n    \n    this.normalizeRules();\n};\n\nValaHighlightRules.metaData = { \n    comment: 'Based heavily on the Java bundle\\'s language syntax. TODO:\\n* Closures\\n* Delegates\\n* Properties: Better support for properties.\\n* Annotations\\n* Error domains\\n* Named arguments\\n* Array slicing, negative indexes, multidimensional\\n* construct blocks\\n* lock blocks?\\n* regex literals\\n* DocBlock syntax highlighting. (Currently importing javadoc)\\n* Folding rule for comments.\\n',\n      fileTypes: [ 'vala' ],\n      foldingStartMarker: '(\\\\{\\\\s*(//.*)?$|^\\\\s*// \\\\{\\\\{\\\\{)',\n      foldingStopMarker: '^\\\\s*(\\\\}|// \\\\}\\\\}\\\\}$)',\n      name: 'Vala',\n      scopeName: 'source.vala' };\n\n\noop.inherits(ValaHighlightRules, TextHighlightRules);\n\nexports.ValaHighlightRules = ValaHighlightRules;\n});\n\nace.define(\"ace/mode/folding/cstyle\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/range\",\"ace/mode/folding/fold_mode\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../../lib/oop\");\nvar Range = acequire(\"../../range\").Range;\nvar BaseFoldMode = acequire(\"./fold_mode\").FoldMode;\n\nvar FoldMode = exports.FoldMode = function(commentRegex) {\n    if (commentRegex) {\n        this.foldingStartMarker = new RegExp(\n            this.foldingStartMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.start)\n        );\n        this.foldingStopMarker = new RegExp(\n            this.foldingStopMarker.source.replace(/\\|[^|]*?$/, \"|\" + commentRegex.end)\n        );\n    }\n};\noop.inherits(FoldMode, BaseFoldMode);\n\n(function() {\n    \n    this.foldingStartMarker = /([\\{\\[\\(])[^\\}\\]\\)]*$|^\\s*(\\/\\*)/;\n    this.foldingStopMarker = /^[^\\[\\{\\(]*([\\}\\]\\)])|^[\\s\\*]*(\\*\\/)/;\n    this.singleLineBlockCommentRe= /^\\s*(\\/\\*).*\\*\\/\\s*$/;\n    this.tripleStarBlockCommentRe = /^\\s*(\\/\\*\\*\\*).*\\*\\/\\s*$/;\n    this.startRegionRe = /^\\s*(\\/\\*|\\/\\/)#?region\\b/;\n    this._getFoldWidgetBase = this.getFoldWidget;\n    this.getFoldWidget = function(session, foldStyle, row) {\n        var line = session.getLine(row);\n    \n        if (this.singleLineBlockCommentRe.test(line)) {\n            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))\n                return \"\";\n        }\n    \n        var fw = this._getFoldWidgetBase(session, foldStyle, row);\n    \n        if (!fw && this.startRegionRe.test(line))\n            return \"start\"; // lineCommentRegionStart\n    \n        return fw;\n    };\n\n    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {\n        var line = session.getLine(row);\n        \n        if (this.startRegionRe.test(line))\n            return this.getCommentRegionBlock(session, line, row);\n        \n        var match = line.match(this.foldingStartMarker);\n        if (match) {\n            var i = match.index;\n\n            if (match[1])\n                return this.openingBracketBlock(session, match[1], row, i);\n                \n            var range = session.getCommentFoldRange(row, i + match[0].length, 1);\n            \n            if (range && !range.isMultiLine()) {\n                if (forceMultiline) {\n                    range = this.getSectionRange(session, row);\n                } else if (foldStyle != \"all\")\n                    range = null;\n            }\n            \n            return range;\n        }\n\n        if (foldStyle === \"markbegin\")\n            return;\n\n        var match = line.match(this.foldingStopMarker);\n        if (match) {\n            var i = match.index + match[0].length;\n\n            if (match[1])\n                return this.closingBracketBlock(session, match[1], row, i);\n\n            return session.getCommentFoldRange(row, i, -1);\n        }\n    };\n    \n    this.getSectionRange = function(session, row) {\n        var line = session.getLine(row);\n        var startIndent = line.search(/\\S/);\n        var startRow = row;\n        var startColumn = line.length;\n        row = row + 1;\n        var endRow = row;\n        var maxRow = session.getLength();\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var indent = line.search(/\\S/);\n            if (indent === -1)\n                continue;\n            if  (startIndent > indent)\n                break;\n            var subRange = this.getFoldWidgetRange(session, \"all\", row);\n            \n            if (subRange) {\n                if (subRange.start.row <= startRow) {\n                    break;\n                } else if (subRange.isMultiLine()) {\n                    row = subRange.end.row;\n                } else if (startIndent == indent) {\n                    break;\n                }\n            }\n            endRow = row;\n        }\n        \n        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);\n    };\n    this.getCommentRegionBlock = function(session, line, row) {\n        var startColumn = line.search(/\\s*$/);\n        var maxRow = session.getLength();\n        var startRow = row;\n        \n        var re = /^\\s*(?:\\/\\*|\\/\\/|--)#?(end)?region\\b/;\n        var depth = 1;\n        while (++row < maxRow) {\n            line = session.getLine(row);\n            var m = re.exec(line);\n            if (!m) continue;\n            if (m[1]) depth--;\n            else depth++;\n\n            if (!depth) break;\n        }\n\n        var endRow = row;\n        if (endRow > startRow) {\n            return new Range(startRow, startColumn, endRow, line.length);\n        }\n    };\n\n}).call(FoldMode.prototype);\n\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/vala\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/tokenizer\",\"ace/mode/vala_highlight_rules\",\"ace/mode/folding/cstyle\",\"ace/mode/behaviour/cstyle\",\"ace/mode/folding/cstyle\",\"ace/mode/matching_brace_outdent\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar Tokenizer = acequire(\"../tokenizer\").Tokenizer;\nvar ValaHighlightRules = acequire(\"./vala_highlight_rules\").ValaHighlightRules;\nvar FoldMode = acequire(\"./folding/cstyle\").FoldMode;\nvar CstyleBehaviour = acequire(\"./behaviour/cstyle\").CstyleBehaviour;\nvar CStyleFoldMode = acequire(\"./folding/cstyle\").FoldMode;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\n\nvar Mode = function() {\n    this.HighlightRules = ValaHighlightRules;\n    \n    this.$outdent = new MatchingBraceOutdent();\n    this.$behaviour = new CstyleBehaviour();\n    this.foldingRules = new CStyleFoldMode();\n};\noop.inherits(Mode, TextMode);\n\n(function() {\n    this.lineCommentStart = \"//\";\n    this.blockComment = {start: \"/*\", end: \"*/\"};\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n\n        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);\n        var tokens = tokenizedLine.tokens;\n        var endState = tokenizedLine.state;\n\n        if (tokens.length && tokens[tokens.length-1].type == \"comment\") {\n            return indent;\n        }\n\n        if (state == \"start\" || state == \"no_regex\") {\n            var match = line.match(/^.*(?:\\bcase\\b.*:|[\\{\\(\\[])\\s*$/);\n            if (match) {\n                indent += tab;\n            }\n        } else if (state == \"doc-start\") {\n            if (endState == \"start\" || endState == \"no_regex\") {\n                return \"\";\n            }\n            var match = line.match(/^\\s*(\\/?)\\*/);\n            if (match) {\n                if (match[1]) {\n                    indent += \" \";\n                }\n                indent += \"* \";\n            }\n        }\n\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n    this.$id = \"ace/mode/vala\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/vala.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMDMuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=