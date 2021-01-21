const antlr4 = require('antlr4/index');
const sequenceParserListener = require('../generated-parser/sequenceParserListener');

let descendantTos = undefined;
let isBlind = false;
const ToCollector = function () {
    descendantTos = {}
    sequenceParserListener.sequenceParserListener.call(this)
    return this
};

ToCollector.prototype = Object.create(sequenceParserListener.sequenceParserListener.prototype)

let onTo = function (ctx) {
    if (isBlind) return;
    let participant = ctx.getText();
    // remove leading and trailing quotes (e.g. "a:A" becomes a:A
    participant = participant.replace(/^"(.*)"$/, '$1');
    descendantTos[participant] = { width: 0 };
};

let onParticipant = function (ctx) {
    if (isBlind) return;
    let participant = ctx.name().getText();
    let interfase = ctx.interfase().getText();
    let width = (ctx.width && ctx.width()) ? Number.parseInt(ctx.width().getText()) : 0;
    descendantTos[participant] = { width: width, interface: interfase};
};
ToCollector.prototype.enterParticipant = onParticipant

ToCollector.prototype.enterFrom = onTo
ToCollector.prototype.enterTo = onTo

ToCollector.prototype.enterSource = onTo
ToCollector.prototype.enterTarget = onTo

ToCollector.prototype.enterCreation = function (ctx) {
    if (isBlind) return;
    const assignee = ctx.assignment() && ctx.assignment().assignee().getText();
    const type = ctx.constructor().getText();
    const participant = assignee ? assignee + ':' + type : type;
    descendantTos[participant] = { width: 0 };
}

ToCollector.prototype.enterParameters = function () {
    isBlind = true;
}

ToCollector.prototype.exitParameters = function () {
    isBlind = false;
}

const walker = antlr4.tree.ParseTreeWalker.DEFAULT

ToCollector.prototype.getAllTos = function (me) {
    return function (context) {
        walker.walk(me, context)
        return Object.keys(descendantTos)
    }
}

ToCollector.prototype.getAllTos2 = function (me) {
    return function (context) {
        walker.walk(me, context)
        return descendantTos
    }
}

module.exports = ToCollector;
