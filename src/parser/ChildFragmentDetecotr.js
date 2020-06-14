var antlr4  = require('antlr4/index')
var sequenceParserListener = require('../generated-parser/sequenceParserListener')

const walker = antlr4.tree.ParseTreeWalker.DEFAULT

var ChildFragmentDetector = function () {
    sequenceParserListener.sequenceParserListener.call(this)
    return this
}

ChildFragmentDetector.prototype = Object.create(sequenceParserListener.sequenceParserListener.prototype)
ChildFragmentDetector.prototype.constructor = ChildFragmentDetector

var cursor = 0
var max = 0

ChildFragmentDetector.prototype.enterAlt = function (ctx) {
    cursor++
}
ChildFragmentDetector.prototype.enterLoop = function (ctx) {
    cursor++
}

ChildFragmentDetector.prototype.exitAlt = function (ctx) {
    max = Math.max(max, cursor)
    cursor--
}
ChildFragmentDetector.prototype.exitLoop = function (ctx) {
    max = Math.max(max, cursor)
    cursor--
}

ChildFragmentDetector.prototype.depth = function (me) {
    return function (context) {
        cursor = 0
        max = 0
        context.children.map(function(child) { walker.walk(me, child) })
        return max
    }
}

module.exports = ChildFragmentDetector
