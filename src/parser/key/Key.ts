import {antlr4} from "@/positioning/ParticipantListener";

antlr4.ParserRuleContext.prototype.Key = function() {
    return `${this.start.start}:${this.stop.stop}`;
};
