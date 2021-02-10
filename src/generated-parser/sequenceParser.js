// Generated from sequenceParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sequenceParserListener = require('./sequenceParserListener').sequenceParserListener;
var grammarFileName = "sequenceParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u01d8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002d\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002i\n\u0002\u0003\u0003\u0003\u0003\u0006\u0003",
    "m\n\u0003\r\u0003\u000e\u0003n\u0003\u0003\u0003\u0003\u0007\u0003s",
    "\n\u0003\f\u0003\u000e\u0003v\u000b\u0003\u0003\u0003\u0005\u0003y\n",
    "\u0003\u0003\u0004\u0003\u0004\u0005\u0004}\n\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004\u0081\n\u0004\f\u0004\u000e\u0004\u0084\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0089\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008e\n\u0004\u0005\u0004",
    "\u0090\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u0096\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0005\u0007\u009d\n\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u00a1\n\u0007\u0003\u0007\u0005\u0007\u00a4\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u00a9\n\u0007\u0005\u0007\u00ab",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00bc",
    "\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u00c1\n\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0006\f\u00c8\n\f\r\f\u000e\f\u00c9\u0003",
    "\f\u0005\f\u00cd\n\f\u0003\r\u0003\r\u0003\r\u0005\r\u00d2\n\r\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00d6\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00e3\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e8\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00ed\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0005\u0013\u00f2\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00f8\n\u0013\u0003\u0013\u0005",
    "\u0013\u00fb\n\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00ff\n\u0013",
    "\u0003\u0014\u0005\u0014\u0102\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0107\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u010c\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0116",
    "\n\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u011a\n\u0015\f\u0015\u000e",
    "\u0015\u011d\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0005\u0017\u0123\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u0128\n\u0018\u0003\u0018\u0005\u0018\u012b\n\u0018\u0003\u0019",
    "\u0005\u0019\u012e\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0136\n\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u013e\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0007",
    " \u014b\n \f \u000e \u014e\u000b \u0003 \u0005 \u0151\n \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0007#\u015a\n#\f#\u000e#\u015d",
    "\u000b#\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u0164\n$\u0003%\u0003",
    "%\u0003%\u0003&\u0003&\u0007&\u016b\n&\f&\u000e&\u016e\u000b&\u0003",
    "&\u0005&\u0171\n&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0005\'\u017a\n\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0005(\u0186\n(\u0003)\u0003)\u0003)\u0005)\u018b",
    "\n)\u0003*\u0003*\u0005*\u018f\n*\u0003*\u0003*\u0005*\u0193\n*\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u019c\n+\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u01a6\n,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0007",
    ",\u01bd\n,\f,\u000e,\u01c0\u000b,\u0003-\u0003-\u0003-\u0003-\u0003",
    "-\u0005-\u01c7\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0005.\u01d2\n.\u0003/\u0003/\u0005/\u01d6\n/\u0003/\u0002",
    "\u0003V0\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0002\t\u0004\u0002",
    "--00\u0003\u0002\u0012\u0014\u0003\u0002\u0010\u0011\u0003\u0002\f\u000f",
    "\u0003\u0002\n\u000b\u0003\u0002./\u0003\u0002\u001e\u001f\u0002\u020a",
    "\u0002h\u0003\u0002\u0002\u0002\u0004x\u0003\u0002\u0002\u0002\u0006",
    "\u008f\u0003\u0002\u0002\u0002\b\u0091\u0003\u0002\u0002\u0002\n\u0099",
    "\u0003\u0002\u0002\u0002\f\u00aa\u0003\u0002\u0002\u0002\u000e\u00bb",
    "\u0003\u0002\u0002\u0002\u0010\u00c0\u0003\u0002\u0002\u0002\u0012\u00c2",
    "\u0003\u0002\u0002\u0002\u0014\u00c4\u0003\u0002\u0002\u0002\u0016\u00c7",
    "\u0003\u0002\u0002\u0002\u0018\u00ce\u0003\u0002\u0002\u0002\u001a\u00d5",
    "\u0003\u0002\u0002\u0002\u001c\u00e2\u0003\u0002\u0002\u0002\u001e\u00e7",
    "\u0003\u0002\u0002\u0002 \u00ec\u0003\u0002\u0002\u0002\"\u00ee\u0003",
    "\u0002\u0002\u0002$\u00f1\u0003\u0002\u0002\u0002&\u0101\u0003\u0002",
    "\u0002\u0002(\u0115\u0003\u0002\u0002\u0002*\u011e\u0003\u0002\u0002",
    "\u0002,\u0120\u0003\u0002\u0002\u0002.\u012a\u0003\u0002\u0002\u0002",
    "0\u012d\u0003\u0002\u0002\u00022\u0135\u0003\u0002\u0002\u00024\u013b",
    "\u0003\u0002\u0002\u00026\u013f\u0003\u0002\u0002\u00028\u0141\u0003",
    "\u0002\u0002\u0002:\u0143\u0003\u0002\u0002\u0002<\u0145\u0003\u0002",
    "\u0002\u0002>\u0150\u0003\u0002\u0002\u0002@\u0152\u0003\u0002\u0002",
    "\u0002B\u0154\u0003\u0002\u0002\u0002D\u0156\u0003\u0002\u0002\u0002",
    "F\u0163\u0003\u0002\u0002\u0002H\u0165\u0003\u0002\u0002\u0002J\u0168",
    "\u0003\u0002\u0002\u0002L\u0179\u0003\u0002\u0002\u0002N\u0185\u0003",
    "\u0002\u0002\u0002P\u018a\u0003\u0002\u0002\u0002R\u0192\u0003\u0002",
    "\u0002\u0002T\u019b\u0003\u0002\u0002\u0002V\u01a5\u0003\u0002\u0002",
    "\u0002X\u01c6\u0003\u0002\u0002\u0002Z\u01d1\u0003\u0002\u0002\u0002",
    "\\\u01d5\u0003\u0002\u0002\u0002^i\u0007\u0002\u0002\u0003_`\u0005\u0004",
    "\u0003\u0002`a\u0007\u0002\u0002\u0003ai\u0003\u0002\u0002\u0002bd\u0005",
    "\u0004\u0003\u0002cb\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "de\u0003\u0002\u0002\u0002ef\u0005\u0016\f\u0002fg\u0007\u0002\u0002",
    "\u0003gi\u0003\u0002\u0002\u0002h^\u0003\u0002\u0002\u0002h_\u0003\u0002",
    "\u0002\u0002hc\u0003\u0002\u0002\u0002i\u0003\u0003\u0002\u0002\u0002",
    "jm\u0005\u0006\u0004\u0002km\u0005\f\u0007\u0002lj\u0003\u0002\u0002",
    "\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002oy\u0003\u0002\u0002\u0002ps\u0005",
    "\u0006\u0004\u0002qs\u0005\f\u0007\u0002rp\u0003\u0002\u0002\u0002r",
    "q\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002wy\u0005\b\u0005\u0002xl\u0003\u0002\u0002\u0002xt\u0003",
    "\u0002\u0002\u0002y\u0005\u0003\u0002\u0002\u0002z|\u0007)\u0002\u0002",
    "{}\u0005\u0012\n\u0002|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}~\u0003\u0002\u0002\u0002~\u0082\u0007\u001c\u0002\u0002\u007f",
    "\u0081\u0005\f\u0007\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081",
    "\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0003\u0002\u0002\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084",
    "\u0082\u0003\u0002\u0002\u0002\u0085\u0090\u0007\u001d\u0002\u0002\u0086",
    "\u0088\u0007)\u0002\u0002\u0087\u0089\u0005\u0012\n\u0002\u0088\u0087",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0003\u0002\u0002\u0002\u008a\u0090\u0007\u001c\u0002\u0002\u008b\u008d",
    "\u0007)\u0002\u0002\u008c\u008e\u0005\u0012\n\u0002\u008d\u008c\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0003",
    "\u0002\u0002\u0002\u008fz\u0003\u0002\u0002\u0002\u008f\u0086\u0003",
    "\u0002\u0002\u0002\u008f\u008b\u0003\u0002\u0002\u0002\u0090\u0007\u0003",
    "\u0002\u0002\u0002\u0091\u0092\u0007\u0007\u0002\u0002\u0092\u0093\u0007",
    "&\u0002\u0002\u0093\u0095\u0007\u001a\u0002\u0002\u0094\u0096\u0005",
    "\n\u0006\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "\u001b\u0002\u0002\u0098\t\u0003\u0002\u0002\u0002\u0099\u009a\u0007",
    "-\u0002\u0002\u009a\u000b\u0003\u0002\u0002\u0002\u009b\u009d\u0005",
    "\u000e\b\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0005",
    "\u0012\n\u0002\u009f\u00a1\u0005\u0014\u000b\u0002\u00a0\u009f\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003",
    "\u0002\u0002\u0002\u00a2\u00a4\u0005\u0010\t\u0002\u00a3\u00a2\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00ab\u0003",
    "\u0002\u0002\u0002\u00a5\u00ab\u0005\u000e\b\u0002\u00a6\u00a8\u0005",
    "\u0012\n\u0002\u00a7\u00a9\u0005\u0014\u000b\u0002\u00a8\u00a7\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ab\u0003",
    "\u0002\u0002\u0002\u00aa\u009c\u0003\u0002\u0002\u0002\u00aa\u00a5\u0003",
    "\u0002\u0002\u0002\u00aa\u00a6\u0003\u0002\u0002\u0002\u00ab\r\u0003",
    "\u0002\u0002\u0002\u00ac\u00bc\u0007\u0004\u0002\u0002\u00ad\u00ae\u0007",
    "\u0004\u0002\u0002\u00ae\u00bc\u0005\u0012\n\u0002\u00af\u00b0\u0007",
    "\u0004\u0002\u0002\u00b0\u00b1\u0005\u0012\n\u0002\u00b1\u00b2\u0007",
    "\f\u0002\u0002\u00b2\u00bc\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "\u0004\u0002\u0002\u00b4\u00bc\u0007\f\u0002\u0002\u00b5\u00b6\u0007",
    "\u0004\u0002\u0002\u00b6\u00bc\u0007\u0005\u0002\u0002\u00b7\u00b8\u0007",
    "\u0004\u0002\u0002\u00b8\u00b9\u0005\u0012\n\u0002\u00b9\u00ba\u0007",
    "\u0005\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00ac\u0003",
    "\u0002\u0002\u0002\u00bb\u00ad\u0003\u0002\u0002\u0002\u00bb\u00af\u0003",
    "\u0002\u0002\u0002\u00bb\u00b3\u0003\u0002\u0002\u0002\u00bb\u00b5\u0003",
    "\u0002\u0002\u0002\u00bb\u00b7\u0003\u0002\u0002\u0002\u00bc\u000f\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007+\u0002\u0002\u00be\u00c1\u0005",
    "\u0012\n\u0002\u00bf\u00c1\u0007+\u0002\u0002\u00c0\u00bd\u0003\u0002",
    "\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c1\u0011\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\t\u0002\u0002\u0002\u00c3\u0013\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0007.\u0002\u0002\u00c5\u0015\u0003\u0002",
    "\u0002\u0002\u00c6\u00c8\u0005\u001c\u000f\u0002\u00c7\u00c6\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002",
    "\u0002\u0002\u00cb\u00cd\u0005\u0018\r\u0002\u00cc\u00cb\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u0017\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0007$\u0002\u0002\u00cf\u00d1\u0005\u001a",
    "\u000e\u0002\u00d0\u00d2\u0007\u0017\u0002\u0002\u00d1\u00d0\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u0019\u0003\u0002",
    "\u0002\u0002\u00d3\u00d6\u0005X-\u0002\u00d4\u00d6\u0007-\u0002\u0002",
    "\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002",
    "\u00d6\u001b\u0003\u0002\u0002\u0002\u00d7\u00e3\u0005J&\u0002\u00d8",
    "\u00e3\u0005\u001e\u0010\u0002\u00d9\u00e3\u0005 \u0011\u0002\u00da",
    "\u00e3\u0005T+\u0002\u00db\u00e3\u0005$\u0013\u0002\u00dc\u00e3\u0005",
    "2\u001a\u0002\u00dd\u00e3\u0005&\u0014\u0002\u00de\u00e3\u0005\"\u0012",
    "\u0002\u00df\u00e3\u0005\u0018\r\u0002\u00e0\u00e1\u00074\u0002\u0002",
    "\u00e1\u00e3\b\u000f\u0001\u0002\u00e2\u00d7\u0003\u0002\u0002\u0002",
    "\u00e2\u00d8\u0003\u0002\u0002\u0002\u00e2\u00d9\u0003\u0002\u0002\u0002",
    "\u00e2\u00da\u0003\u0002\u0002\u0002\u00e2\u00db\u0003\u0002\u0002\u0002",
    "\u00e2\u00dc\u0003\u0002\u0002\u0002\u00e2\u00dd\u0003\u0002\u0002\u0002",
    "\u00e2\u00de\u0003\u0002\u0002\u0002\u00e2\u00df\u0003\u0002\u0002\u0002",
    "\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3\u001d\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u0007(\u0002\u0002\u00e5\u00e8\u0005R*\u0002\u00e6\u00e8",
    "\u0007(\u0002\u0002\u00e7\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e6",
    "\u0003\u0002\u0002\u0002\u00e8\u001f\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u0007*\u0002\u0002\u00ea\u00ed\u0005R*\u0002\u00eb\u00ed\u0007*\u0002",
    "\u0002\u00ec\u00e9\u0003\u0002\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002",
    "\u0002\u00ed!\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005R*\u0002\u00ef",
    "#\u0003\u0002\u0002\u0002\u00f0\u00f2\u00050\u0019\u0002\u00f1\u00f0",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007%\u0002\u0002\u00f4\u00fa",
    "\u0005:\u001e\u0002\u00f5\u00f7\u0007\u001a\u0002\u0002\u00f6\u00f8",
    "\u0005D#\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fb\u0007",
    "\u001b\u0002\u0002\u00fa\u00f5\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003",
    "\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00ff\u0007",
    "\u0017\u0002\u0002\u00fd\u00ff\u0005R*\u0002\u00fe\u00fc\u0003\u0002",
    "\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002",
    "\u0002\u0002\u00ff%\u0003\u0002\u0002\u0002\u0100\u0102\u00050\u0019",
    "\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0106\u0005(\u0015",
    "\u0002\u0104\u0107\u0007\u0017\u0002\u0002\u0105\u0107\u0005R*\u0002",
    "\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0003\u0002\u0002\u0002\u0107\'\u0003\u0002\u0002\u0002",
    "\u0108\u0109\u0005*\u0016\u0002\u0109\u010a\u0007\u0006\u0002\u0002",
    "\u010a\u010c\u0003\u0002\u0002\u0002\u010b\u0108\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0005@!\u0002\u010e\u010f\u0007,\u0002\u0002\u010f\u0110",
    "\u0005,\u0017\u0002\u0110\u0116\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0005@!\u0002\u0112\u0113\u0007,\u0002\u0002\u0113\u0116\u0003\u0002",
    "\u0002\u0002\u0114\u0116\u0005,\u0017\u0002\u0115\u010b\u0003\u0002",
    "\u0002\u0002\u0115\u0111\u0003\u0002\u0002\u0002\u0115\u0114\u0003\u0002",
    "\u0002\u0002\u0116\u011b\u0003\u0002\u0002\u0002\u0117\u0118\u0007,",
    "\u0002\u0002\u0118\u011a\u0005,\u0017\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c)\u0003\u0002",
    "\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u011f\u0007-",
    "\u0002\u0002\u011f+\u0003\u0002\u0002\u0002\u0120\u0122\u0005B\"\u0002",
    "\u0121\u0123\u0005.\u0018\u0002\u0122\u0121\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0003\u0002\u0002\u0002\u0123-\u0003\u0002\u0002\u0002",
    "\u0124\u012b\u0007\u001a\u0002\u0002\u0125\u0127\u0007\u001a\u0002\u0002",
    "\u0126\u0128\u0005D#\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127",
    "\u0128\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129",
    "\u012b\u0007\u001b\u0002\u0002\u012a\u0124\u0003\u0002\u0002\u0002\u012a",
    "\u0125\u0003\u0002\u0002\u0002\u012b/\u0003\u0002\u0002\u0002\u012c",
    "\u012e\u0005<\u001f\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012d",
    "\u012e\u0003\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f",
    "\u0130\u0005> \u0002\u0130\u0131\u0007\u0019\u0002\u0002\u01311\u0003",
    "\u0002\u0002\u0002\u0132\u0133\u00056\u001c\u0002\u0133\u0134\u0007",
    "\u0006\u0002\u0002\u0134\u0136\u0003\u0002\u0002\u0002\u0135\u0132\u0003",
    "\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u0137\u0003",
    "\u0002\u0002\u0002\u0137\u0138\u00058\u001d\u0002\u0138\u0139\u0007",
    "\u0003\u0002\u0002\u0139\u013a\u00054\u001b\u0002\u013a3\u0003\u0002",
    "\u0002\u0002\u013b\u013d\u00075\u0002\u0002\u013c\u013e\u00076\u0002",
    "\u0002\u013d\u013c\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002",
    "\u0002\u013e5\u0003\u0002\u0002\u0002\u013f\u0140\u0007-\u0002\u0002",
    "\u01407\u0003\u0002\u0002\u0002\u0141\u0142\t\u0002\u0002\u0002\u0142",
    "9\u0003\u0002\u0002\u0002\u0143\u0144\u0007-\u0002\u0002\u0144;\u0003",
    "\u0002\u0002\u0002\u0145\u0146\u0007-\u0002\u0002\u0146=\u0003\u0002",
    "\u0002\u0002\u0147\u014c\u0007-\u0002\u0002\u0148\u0149\u0007\u0018",
    "\u0002\u0002\u0149\u014b\u0007-\u0002\u0002\u014a\u0148\u0003\u0002",
    "\u0002\u0002\u014b\u014e\u0003\u0002\u0002\u0002\u014c\u014a\u0003\u0002",
    "\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u0151\u0003\u0002",
    "\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014f\u0151\u00070",
    "\u0002\u0002\u0150\u0147\u0003\u0002\u0002\u0002\u0150\u014f\u0003\u0002",
    "\u0002\u0002\u0151?\u0003\u0002\u0002\u0002\u0152\u0153\t\u0002\u0002",
    "\u0002\u0153A\u0003\u0002\u0002\u0002\u0154\u0155\t\u0002\u0002\u0002",
    "\u0155C\u0003\u0002\u0002\u0002\u0156\u015b\u0005F$\u0002\u0157\u0158",
    "\u0007\u0018\u0002\u0002\u0158\u015a\u0005F$\u0002\u0159\u0157\u0003",
    "\u0002\u0002\u0002\u015a\u015d\u0003\u0002\u0002\u0002\u015b\u0159\u0003",
    "\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002\u015cE\u0003",
    "\u0002\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015e\u0164\u0005",
    "H%\u0002\u015f\u0164\u0007-\u0002\u0002\u0160\u0164\u0005X-\u0002\u0161",
    "\u0164\u0005V,\u0002\u0162\u0164\u0005$\u0013\u0002\u0163\u015e\u0003",
    "\u0002\u0002\u0002\u0163\u015f\u0003\u0002\u0002\u0002\u0163\u0160\u0003",
    "\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0162\u0003",
    "\u0002\u0002\u0002\u0164G\u0003\u0002\u0002\u0002\u0165\u0166\u0005",
    "<\u001f\u0002\u0166\u0167\u0007-\u0002\u0002\u0167I\u0003\u0002\u0002",
    "\u0002\u0168\u016c\u0005L\'\u0002\u0169\u016b\u0005N(\u0002\u016a\u0169",
    "\u0003\u0002\u0002\u0002\u016b\u016e\u0003\u0002\u0002\u0002\u016c\u016a",
    "\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u0170",
    "\u0003\u0002\u0002\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016f\u0171",
    "\u0005P)\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0170\u0171\u0003",
    "\u0002\u0002\u0002\u0171K\u0003\u0002\u0002\u0002\u0172\u0173\u0007",
    "!\u0002\u0002\u0173\u0174\u0005Z.\u0002\u0174\u0175\u0005R*\u0002\u0175",
    "\u017a\u0003\u0002\u0002\u0002\u0176\u0177\u0007!\u0002\u0002\u0177",
    "\u017a\u0005Z.\u0002\u0178\u017a\u0007!\u0002\u0002\u0179\u0172\u0003",
    "\u0002\u0002\u0002\u0179\u0176\u0003\u0002\u0002\u0002\u0179\u0178\u0003",
    "\u0002\u0002\u0002\u017aM\u0003\u0002\u0002\u0002\u017b\u017c\u0007",
    "\"\u0002\u0002\u017c\u017d\u0007!\u0002\u0002\u017d\u017e\u0005Z.\u0002",
    "\u017e\u017f\u0005R*\u0002\u017f\u0186\u0003\u0002\u0002\u0002\u0180",
    "\u0181\u0007\"\u0002\u0002\u0181\u0182\u0007!\u0002\u0002\u0182\u0186",
    "\u0005Z.\u0002\u0183\u0184\u0007\"\u0002\u0002\u0184\u0186\u0007!\u0002",
    "\u0002\u0185\u017b\u0003\u0002\u0002\u0002\u0185\u0180\u0003\u0002\u0002",
    "\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0186O\u0003\u0002\u0002",
    "\u0002\u0187\u0188\u0007\"\u0002\u0002\u0188\u018b\u0005R*\u0002\u0189",
    "\u018b\u0007\"\u0002\u0002\u018a\u0187\u0003\u0002\u0002\u0002\u018a",
    "\u0189\u0003\u0002\u0002\u0002\u018bQ\u0003\u0002\u0002\u0002\u018c",
    "\u018e\u0007\u001c\u0002\u0002\u018d\u018f\u0005\u0016\f\u0002\u018e",
    "\u018d\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f",
    "\u0190\u0003\u0002\u0002\u0002\u0190\u0193\u0007\u001d\u0002\u0002\u0191",
    "\u0193\u0007\u001c\u0002\u0002\u0192\u018c\u0003\u0002\u0002\u0002\u0192",
    "\u0191\u0003\u0002\u0002\u0002\u0193S\u0003\u0002\u0002\u0002\u0194",
    "\u0195\u0007#\u0002\u0002\u0195\u0196\u0005Z.\u0002\u0196\u0197\u0005",
    "R*\u0002\u0197\u019c\u0003\u0002\u0002\u0002\u0198\u0199\u0007#\u0002",
    "\u0002\u0199\u019c\u0005Z.\u0002\u019a\u019c\u0007#\u0002\u0002\u019b",
    "\u0194\u0003\u0002\u0002\u0002\u019b\u0198\u0003\u0002\u0002\u0002\u019b",
    "\u019a\u0003\u0002\u0002\u0002\u019cU\u0003\u0002\u0002\u0002\u019d",
    "\u019e\b,\u0001\u0002\u019e\u019f\u0007\u0011\u0002\u0002\u019f\u01a6",
    "\u0005V,\u000e\u01a0\u01a1\u0007\u0016\u0002\u0002\u01a1\u01a6\u0005",
    "V,\r\u01a2\u01a6\u0005(\u0015\u0002\u01a3\u01a6\u0005$\u0013\u0002\u01a4",
    "\u01a6\u0005X-\u0002\u01a5\u019d\u0003\u0002\u0002\u0002\u01a5\u01a0",
    "\u0003\u0002\u0002\u0002\u01a5\u01a2\u0003\u0002\u0002\u0002\u01a5\u01a3",
    "\u0003\u0002\u0002\u0002\u01a5\u01a4\u0003\u0002\u0002\u0002\u01a6\u01be",
    "\u0003\u0002\u0002\u0002\u01a7\u01a8\f\f\u0002\u0002\u01a8\u01a9\t\u0003",
    "\u0002\u0002\u01a9\u01bd\u0005V,\r\u01aa\u01ab\f\u000b\u0002\u0002\u01ab",
    "\u01ac\t\u0004\u0002\u0002\u01ac\u01bd\u0005V,\f\u01ad\u01ae\f\n\u0002",
    "\u0002\u01ae\u01af\t\u0005\u0002\u0002\u01af\u01bd\u0005V,\u000b\u01b0",
    "\u01b1\f\t\u0002\u0002\u01b1\u01b2\t\u0006\u0002\u0002\u01b2\u01bd\u0005",
    "V,\n\u01b3\u01b4\f\b\u0002\u0002\u01b4\u01b5\u0007\t\u0002\u0002\u01b5",
    "\u01bd\u0005V,\t\u01b6\u01b7\f\u0007\u0002\u0002\u01b7\u01b8\u0007\b",
    "\u0002\u0002\u01b8\u01bd\u0005V,\b\u01b9\u01ba\f\u0006\u0002\u0002\u01ba",
    "\u01bb\u0007\u0010\u0002\u0002\u01bb\u01bd\u0005V,\u0007\u01bc\u01a7",
    "\u0003\u0002\u0002\u0002\u01bc\u01aa\u0003\u0002\u0002\u0002\u01bc\u01ad",
    "\u0003\u0002\u0002\u0002\u01bc\u01b0\u0003\u0002\u0002\u0002\u01bc\u01b3",
    "\u0003\u0002\u0002\u0002\u01bc\u01b6\u0003\u0002\u0002\u0002\u01bc\u01b9",
    "\u0003\u0002\u0002\u0002\u01bd\u01c0\u0003\u0002\u0002\u0002\u01be\u01bc",
    "\u0003\u0002\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002\u01bfW",
    "\u0003\u0002\u0002\u0002\u01c0\u01be\u0003\u0002\u0002\u0002\u01c1\u01c7",
    "\t\u0007\u0002\u0002\u01c2\u01c7\t\b\u0002\u0002\u01c3\u01c7\u0007-",
    "\u0002\u0002\u01c4\u01c7\u00070\u0002\u0002\u01c5\u01c7\u0007 \u0002",
    "\u0002\u01c6\u01c1\u0003\u0002\u0002\u0002\u01c6\u01c2\u0003\u0002\u0002",
    "\u0002\u01c6\u01c3\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002",
    "\u0002\u01c6\u01c5\u0003\u0002\u0002\u0002\u01c7Y\u0003\u0002\u0002",
    "\u0002\u01c8\u01c9\u0007\u001a\u0002\u0002\u01c9\u01ca\u0005\\/\u0002",
    "\u01ca\u01cb\u0007\u001b\u0002\u0002\u01cb\u01d2\u0003\u0002\u0002\u0002",
    "\u01cc\u01cd\u0007\u001a\u0002\u0002\u01cd\u01d2\u0005\\/\u0002\u01ce",
    "\u01cf\u0007\u001a\u0002\u0002\u01cf\u01d2\u0007\u001b\u0002\u0002\u01d0",
    "\u01d2\u0007\u001a\u0002\u0002\u01d1\u01c8\u0003\u0002\u0002\u0002\u01d1",
    "\u01cc\u0003\u0002\u0002\u0002\u01d1\u01ce\u0003\u0002\u0002\u0002\u01d1",
    "\u01d0\u0003\u0002\u0002\u0002\u01d2[\u0003\u0002\u0002\u0002\u01d3",
    "\u01d6\u0005X-\u0002\u01d4\u01d6\u0005V,\u0002\u01d5\u01d3\u0003\u0002",
    "\u0002\u0002\u01d5\u01d4\u0003\u0002\u0002\u0002\u01d6]\u0003\u0002",
    "\u0002\u0002>chlnrtx|\u0082\u0088\u008d\u008f\u0095\u009c\u00a0\u00a3",
    "\u00a8\u00aa\u00bb\u00c0\u00c9\u00cc\u00d1\u00d5\u00e2\u00e7\u00ec\u00f1",
    "\u00f7\u00fa\u00fe\u0101\u0106\u010b\u0115\u011b\u0122\u0127\u012a\u012d",
    "\u0135\u013d\u014c\u0150\u015b\u0163\u016c\u0170\u0179\u0185\u018a\u018e",
    "\u0192\u019b\u01a5\u01bc\u01be\u01c6\u01d1\u01d5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'<<'", "'>>'", "'->'", "'@'", "'||'", 
                     "'&&'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                     "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'!'", "';'", 
                     "','", "'='", "'('", "')'", "'{'", "'}'", "'true'", 
                     "'false'", "'nil'", "'if'", "'else'", null, "'return'", 
                     "'new'", "'Starter'", "'Theme'", "'par'", "'group'", 
                     "'opt'", "'as'", "'.'" ];

var symbolicNames = [ null, "COL", "SOPEN", "SCLOSE", "ARROW", "AT", "OR", 
                      "AND", "EQ", "NEQ", "GT", "LT", "GTEQ", "LTEQ", "PLUS", 
                      "MINUS", "MULT", "DIV", "MOD", "POW", "NOT", "SCOL", 
                      "COMMA", "ASSIGN", "OPAR", "CPAR", "OBRACE", "CBRACE", 
                      "TRUE", "FALSE", "NIL", "IF", "ELSE", "WHILE", "RETURN", 
                      "NEW", "STARTER_LXR", "THEME_LXR", "PAR", "GROUP", 
                      "OPT", "AS", "DOT", "ID", "INT", "FLOAT", "STRING", 
                      "CR", "SPACE", "COMMENT", "OTHER", "EVENT_PAYLOAD_LXR", 
                      "EVENT_END", "WS" ];

var ruleNames =  [ "prog", "head", "group", "starterExp", "starter", "participant", 
                   "stereotype", "label", "name", "width", "block", "ret", 
                   "value", "stat", "par", "opt", "anonymousBlock", "creation", 
                   "message", "func", "from", "signature", "invocation", 
                   "assignment", "asyncMessage", "content", "source", "target", 
                   "construct", "type", "assignee", "to", "methodName", 
                   "parameters", "parameter", "declaration", "alt", "ifBlock", 
                   "elseIfBlock", "elseBlock", "braceBlock", "loop", "expr", 
                   "atom", "parExpr", "condition" ];

function sequenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sequenceParser.prototype = Object.create(antlr4.Parser.prototype);
sequenceParser.prototype.constructor = sequenceParser;

Object.defineProperty(sequenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sequenceParser.EOF = antlr4.Token.EOF;
sequenceParser.COL = 1;
sequenceParser.SOPEN = 2;
sequenceParser.SCLOSE = 3;
sequenceParser.ARROW = 4;
sequenceParser.AT = 5;
sequenceParser.OR = 6;
sequenceParser.AND = 7;
sequenceParser.EQ = 8;
sequenceParser.NEQ = 9;
sequenceParser.GT = 10;
sequenceParser.LT = 11;
sequenceParser.GTEQ = 12;
sequenceParser.LTEQ = 13;
sequenceParser.PLUS = 14;
sequenceParser.MINUS = 15;
sequenceParser.MULT = 16;
sequenceParser.DIV = 17;
sequenceParser.MOD = 18;
sequenceParser.POW = 19;
sequenceParser.NOT = 20;
sequenceParser.SCOL = 21;
sequenceParser.COMMA = 22;
sequenceParser.ASSIGN = 23;
sequenceParser.OPAR = 24;
sequenceParser.CPAR = 25;
sequenceParser.OBRACE = 26;
sequenceParser.CBRACE = 27;
sequenceParser.TRUE = 28;
sequenceParser.FALSE = 29;
sequenceParser.NIL = 30;
sequenceParser.IF = 31;
sequenceParser.ELSE = 32;
sequenceParser.WHILE = 33;
sequenceParser.RETURN = 34;
sequenceParser.NEW = 35;
sequenceParser.STARTER_LXR = 36;
sequenceParser.THEME_LXR = 37;
sequenceParser.PAR = 38;
sequenceParser.GROUP = 39;
sequenceParser.OPT = 40;
sequenceParser.AS = 41;
sequenceParser.DOT = 42;
sequenceParser.ID = 43;
sequenceParser.INT = 44;
sequenceParser.FLOAT = 45;
sequenceParser.STRING = 46;
sequenceParser.CR = 47;
sequenceParser.SPACE = 48;
sequenceParser.COMMENT = 49;
sequenceParser.OTHER = 50;
sequenceParser.EVENT_PAYLOAD_LXR = 51;
sequenceParser.EVENT_END = 52;
sequenceParser.WS = 53;

sequenceParser.RULE_prog = 0;
sequenceParser.RULE_head = 1;
sequenceParser.RULE_group = 2;
sequenceParser.RULE_starterExp = 3;
sequenceParser.RULE_starter = 4;
sequenceParser.RULE_participant = 5;
sequenceParser.RULE_stereotype = 6;
sequenceParser.RULE_label = 7;
sequenceParser.RULE_name = 8;
sequenceParser.RULE_width = 9;
sequenceParser.RULE_block = 10;
sequenceParser.RULE_ret = 11;
sequenceParser.RULE_value = 12;
sequenceParser.RULE_stat = 13;
sequenceParser.RULE_par = 14;
sequenceParser.RULE_opt = 15;
sequenceParser.RULE_anonymousBlock = 16;
sequenceParser.RULE_creation = 17;
sequenceParser.RULE_message = 18;
sequenceParser.RULE_func = 19;
sequenceParser.RULE_from = 20;
sequenceParser.RULE_signature = 21;
sequenceParser.RULE_invocation = 22;
sequenceParser.RULE_assignment = 23;
sequenceParser.RULE_asyncMessage = 24;
sequenceParser.RULE_content = 25;
sequenceParser.RULE_source = 26;
sequenceParser.RULE_target = 27;
sequenceParser.RULE_construct = 28;
sequenceParser.RULE_type = 29;
sequenceParser.RULE_assignee = 30;
sequenceParser.RULE_to = 31;
sequenceParser.RULE_methodName = 32;
sequenceParser.RULE_parameters = 33;
sequenceParser.RULE_parameter = 34;
sequenceParser.RULE_declaration = 35;
sequenceParser.RULE_alt = 36;
sequenceParser.RULE_ifBlock = 37;
sequenceParser.RULE_elseIfBlock = 38;
sequenceParser.RULE_elseBlock = 39;
sequenceParser.RULE_braceBlock = 40;
sequenceParser.RULE_loop = 41;
sequenceParser.RULE_expr = 42;
sequenceParser.RULE_atom = 43;
sequenceParser.RULE_parExpr = 44;
sequenceParser.RULE_condition = 45;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(sequenceParser.EOF, 0);
};

ProgContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

ProgContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitProg(this);
	}
};




sequenceParser.ProgContext = ProgContext;

sequenceParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sequenceParser.RULE_prog);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.match(sequenceParser.EOF);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.head();
            this.state = 94;
            this.match(sequenceParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            if(la_===1) {
                this.state = 96;
                this.head();

            }
            this.state = 99;
            this.block();
            this.state = 100;
            this.match(sequenceParser.EOF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

HeadContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

HeadContext.prototype.starterExp = function() {
    return this.getTypedRuleContext(StarterExpContext,0);
};

HeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitHead(this);
	}
};




sequenceParser.HeadContext = HeadContext;

sequenceParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sequenceParser.RULE_head);
    var _la = 0; // Token type
    try {
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 106;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case sequenceParser.GROUP:
            		    this.state = 104;
            		    this.group();
            		    break;
            		case sequenceParser.SOPEN:
            		case sequenceParser.ID:
            		case sequenceParser.STRING:
            		    this.state = 105;
            		    this.participant();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 108; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (sequenceParser.GROUP - 39)) | (1 << (sequenceParser.ID - 39)) | (1 << (sequenceParser.STRING - 39)))) !== 0)) {
                this.state = 112;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case sequenceParser.GROUP:
                    this.state = 110;
                    this.group();
                    break;
                case sequenceParser.SOPEN:
                case sequenceParser.ID:
                case sequenceParser.STRING:
                    this.state = 111;
                    this.participant();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 117;
            this.starterExp();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.GROUP = function() {
    return this.getToken(sequenceParser.GROUP, 0);
};

GroupContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

GroupContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

GroupContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

GroupContext.prototype.participant = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParticipantContext);
    } else {
        return this.getTypedRuleContext(ParticipantContext,i);
    }
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitGroup(this);
	}
};




sequenceParser.GroupContext = GroupContext;

sequenceParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sequenceParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(sequenceParser.GROUP);
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 121;
                this.name();
            }

            this.state = 124;
            this.match(sequenceParser.OBRACE);
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || _la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 125;
                this.participant();
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 131;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(sequenceParser.GROUP);
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 133;
                this.name();
            }

            this.state = 136;
            this.match(sequenceParser.OBRACE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 137;
            this.match(sequenceParser.GROUP);
            this.state = 139;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 138;
                this.name();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StarterExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starterExp;
    return this;
}

StarterExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterExpContext.prototype.constructor = StarterExpContext;

StarterExpContext.prototype.AT = function() {
    return this.getToken(sequenceParser.AT, 0);
};

StarterExpContext.prototype.STARTER_LXR = function() {
    return this.getToken(sequenceParser.STARTER_LXR, 0);
};

StarterExpContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

StarterExpContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

StarterExpContext.prototype.starter = function() {
    return this.getTypedRuleContext(StarterContext,0);
};

StarterExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarterExp(this);
	}
};

StarterExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarterExp(this);
	}
};




sequenceParser.StarterExpContext = StarterExpContext;

sequenceParser.prototype.starterExp = function() {

    var localctx = new StarterExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sequenceParser.RULE_starterExp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(sequenceParser.AT);
        this.state = 144;
        this.match(sequenceParser.STARTER_LXR);
        this.state = 145;
        this.match(sequenceParser.OPAR);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ID) {
            this.state = 146;
            this.starter();
        }

        this.state = 149;
        this.match(sequenceParser.CPAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StarterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_starter;
    return this;
}

StarterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StarterContext.prototype.constructor = StarterContext;

StarterContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

StarterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStarter(this);
	}
};

StarterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStarter(this);
	}
};




sequenceParser.StarterContext = StarterContext;

sequenceParser.prototype.starter = function() {

    var localctx = new StarterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sequenceParser.RULE_starter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParticipantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_participant;
    return this;
}

ParticipantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

ParticipantContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ParticipantContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
};

ParticipantContext.prototype.width = function() {
    return this.getTypedRuleContext(WidthContext,0);
};

ParticipantContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

ParticipantContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParticipant(this);
	}
};

ParticipantContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParticipant(this);
	}
};




sequenceParser.ParticipantContext = ParticipantContext;

sequenceParser.prototype.participant = function() {

    var localctx = new ParticipantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sequenceParser.RULE_participant);
    var _la = 0; // Token type
    try {
        this.state = 168;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SOPEN) {
                this.state = 153;
                this.stereotype();
            }

            this.state = 156;
            this.name();
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.INT) {
                this.state = 157;
                this.width();
            }

            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.AS) {
                this.state = 160;
                this.label();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.stereotype();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 164;
            this.name();
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.INT) {
                this.state = 165;
                this.width();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StereotypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stereotype;
    return this;
}

StereotypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StereotypeContext.prototype.constructor = StereotypeContext;

StereotypeContext.prototype.SOPEN = function() {
    return this.getToken(sequenceParser.SOPEN, 0);
};

StereotypeContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

StereotypeContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};

StereotypeContext.prototype.SCLOSE = function() {
    return this.getToken(sequenceParser.SCLOSE, 0);
};

StereotypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStereotype(this);
	}
};

StereotypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStereotype(this);
	}
};




sequenceParser.StereotypeContext = StereotypeContext;

sequenceParser.prototype.stereotype = function() {

    var localctx = new StereotypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sequenceParser.RULE_stereotype);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(sequenceParser.SOPEN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.match(sequenceParser.SOPEN);
            this.state = 172;
            this.name();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 173;
            this.match(sequenceParser.SOPEN);
            this.state = 174;
            this.name();
            this.state = 175;
            this.match(sequenceParser.GT);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 177;
            this.match(sequenceParser.SOPEN);
            this.state = 178;
            this.match(sequenceParser.GT);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 179;
            this.match(sequenceParser.SOPEN);
            this.state = 180;
            this.match(sequenceParser.SCLOSE);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 181;
            this.match(sequenceParser.SOPEN);
            this.state = 182;
            this.name();
            this.state = 183;
            this.match(sequenceParser.SCLOSE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.AS = function() {
    return this.getToken(sequenceParser.AS, 0);
};

LabelContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLabel(this);
	}
};




sequenceParser.LabelContext = LabelContext;

sequenceParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sequenceParser.RULE_label);
    try {
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.match(sequenceParser.AS);
            this.state = 188;
            this.name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 189;
            this.match(sequenceParser.AS);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

NameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitName(this);
	}
};




sequenceParser.NameContext = NameContext;

sequenceParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sequenceParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WidthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_width;
    return this;
}

WidthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WidthContext.prototype.constructor = WidthContext;

WidthContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

WidthContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterWidth(this);
	}
};

WidthContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitWidth(this);
	}
};




sequenceParser.WidthContext = WidthContext;

sequenceParser.prototype.width = function() {

    var localctx = new WidthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sequenceParser.RULE_width);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(sequenceParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.ret = function() {
    return this.getTypedRuleContext(RetContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBlock(this);
	}
};




sequenceParser.BlockContext = BlockContext;

sequenceParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, sequenceParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 196;
        		this.stat();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 199; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.RETURN) {
            this.state = 201;
            this.ret();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ret;
    return this;
}

RetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetContext.prototype.constructor = RetContext;

RetContext.prototype.RETURN = function() {
    return this.getToken(sequenceParser.RETURN, 0);
};

RetContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

RetContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

RetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRet(this);
	}
};

RetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRet(this);
	}
};




sequenceParser.RetContext = RetContext;

sequenceParser.prototype.ret = function() {

    var localctx = new RetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, sequenceParser.RULE_ret);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(sequenceParser.RETURN);
        this.state = 205;
        this.value();
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.SCOL) {
            this.state = 206;
            this.match(sequenceParser.SCOL);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ValueContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitValue(this);
	}
};




sequenceParser.ValueContext = ValueContext;

sequenceParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, sequenceParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.state = 209;
            this.atom();
            break;

        case 2:
            this.state = 210;
            this.match(sequenceParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_stat;
    this._OTHER = null; // Token
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.alt = function() {
    return this.getTypedRuleContext(AltContext,0);
};

StatContext.prototype.par = function() {
    return this.getTypedRuleContext(ParContext,0);
};

StatContext.prototype.opt = function() {
    return this.getTypedRuleContext(OptContext,0);
};

StatContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StatContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};

StatContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

StatContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

StatContext.prototype.anonymousBlock = function() {
    return this.getTypedRuleContext(AnonymousBlockContext,0);
};

StatContext.prototype.ret = function() {
    return this.getTypedRuleContext(RetContext,0);
};

StatContext.prototype.OTHER = function() {
    return this.getToken(sequenceParser.OTHER, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStat(this);
	}
};




sequenceParser.StatContext = StatContext;

sequenceParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, sequenceParser.RULE_stat);
    try {
        this.state = 224;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 213;
            this.alt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.par();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 215;
            this.opt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 216;
            this.loop();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 217;
            this.creation();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 218;
            this.asyncMessage();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 219;
            this.message();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 220;
            this.anonymousBlock();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 221;
            this.ret();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 222;
            localctx._OTHER = this.match(sequenceParser.OTHER);
            console.log("unknown char: " + (localctx._OTHER===null ? null : localctx._OTHER.text));
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_par;
    return this;
}

ParContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParContext.prototype.constructor = ParContext;

ParContext.prototype.PAR = function() {
    return this.getToken(sequenceParser.PAR, 0);
};

ParContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ParContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPar(this);
	}
};

ParContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPar(this);
	}
};




sequenceParser.ParContext = ParContext;

sequenceParser.prototype.par = function() {

    var localctx = new ParContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sequenceParser.RULE_par);
    try {
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.match(sequenceParser.PAR);
            this.state = 227;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 228;
            this.match(sequenceParser.PAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_opt;
    return this;
}

OptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptContext.prototype.constructor = OptContext;

OptContext.prototype.OPT = function() {
    return this.getToken(sequenceParser.OPT, 0);
};

OptContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

OptContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOpt(this);
	}
};

OptContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOpt(this);
	}
};




sequenceParser.OptContext = OptContext;

sequenceParser.prototype.opt = function() {

    var localctx = new OptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, sequenceParser.RULE_opt);
    try {
        this.state = 234;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.match(sequenceParser.OPT);
            this.state = 232;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.match(sequenceParser.OPT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AnonymousBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_anonymousBlock;
    return this;
}

AnonymousBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnonymousBlockContext.prototype.constructor = AnonymousBlockContext;

AnonymousBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

AnonymousBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAnonymousBlock(this);
	}
};

AnonymousBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAnonymousBlock(this);
	}
};




sequenceParser.AnonymousBlockContext = AnonymousBlockContext;

sequenceParser.prototype.anonymousBlock = function() {

    var localctx = new AnonymousBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, sequenceParser.RULE_anonymousBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.braceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CreationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creation;
    return this;
}

CreationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationContext.prototype.constructor = CreationContext;

CreationContext.prototype.NEW = function() {
    return this.getToken(sequenceParser.NEW, 0);
};

CreationContext.prototype.construct = function() {
    return this.getTypedRuleContext(ConstructContext,0);
};

CreationContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

CreationContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

CreationContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

CreationContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

CreationContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

CreationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

CreationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreation(this);
	}
};

CreationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreation(this);
	}
};




sequenceParser.CreationContext = CreationContext;

sequenceParser.prototype.creation = function() {

    var localctx = new CreationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, sequenceParser.RULE_creation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
            this.state = 238;
            this.assignment();
        }

        this.state = 241;
        this.match(sequenceParser.NEW);
        this.state = 242;
        this.construct();
        this.state = 248;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        if(la_===1) {
            this.state = 243;
            this.match(sequenceParser.OPAR);
            this.state = 245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (sequenceParser.MINUS - 15)) | (1 << (sequenceParser.NOT - 15)) | (1 << (sequenceParser.TRUE - 15)) | (1 << (sequenceParser.FALSE - 15)) | (1 << (sequenceParser.NIL - 15)) | (1 << (sequenceParser.NEW - 15)) | (1 << (sequenceParser.ID - 15)) | (1 << (sequenceParser.INT - 15)) | (1 << (sequenceParser.FLOAT - 15)) | (1 << (sequenceParser.STRING - 15)))) !== 0)) {
                this.state = 244;
                this.parameters();
            }

            this.state = 247;
            this.match(sequenceParser.CPAR);

        }
        this.state = 252;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 250;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 251;
            this.braceBlock();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

MessageContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

MessageContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

MessageContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessage(this);
	}
};




sequenceParser.MessageContext = MessageContext;

sequenceParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, sequenceParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        if(la_===1) {
            this.state = 254;
            this.assignment();

        }
        this.state = 257;
        this.func();
        this.state = 260;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 258;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 259;
            this.braceBlock();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.DOT);
    } else {
        return this.getToken(sequenceParser.DOT, i);
    }
};


FuncContext.prototype.signature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignatureContext);
    } else {
        return this.getTypedRuleContext(SignatureContext,i);
    }
};

FuncContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

FuncContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

FuncContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFunc(this);
	}
};




sequenceParser.FuncContext = FuncContext;

sequenceParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sequenceParser.RULE_func);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.state = 265;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            if(la_===1) {
                this.state = 262;
                this.from();
                this.state = 263;
                this.match(sequenceParser.ARROW);

            }
            this.state = 267;
            this.to();
            this.state = 268;
            this.match(sequenceParser.DOT);
            this.state = 269;
            this.signature();
            break;

        case 2:
            this.state = 271;
            this.to();
            this.state = 272;
            this.match(sequenceParser.DOT);
            break;

        case 3:
            this.state = 274;
            this.signature();
            break;

        }
        this.state = 281;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 277;
                this.match(sequenceParser.DOT);
                this.state = 278;
                this.signature(); 
            }
            this.state = 283;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_from;
    return this;
}

FromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromContext.prototype.constructor = FromContext;

FromContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

FromContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFrom(this);
	}
};

FromContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFrom(this);
	}
};




sequenceParser.FromContext = FromContext;

sequenceParser.prototype.from = function() {

    var localctx = new FromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, sequenceParser.RULE_from);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_signature;
    return this;
}

SignatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignatureContext.prototype.constructor = SignatureContext;

SignatureContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

SignatureContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

SignatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterSignature(this);
	}
};

SignatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitSignature(this);
	}
};




sequenceParser.SignatureContext = SignatureContext;

sequenceParser.prototype.signature = function() {

    var localctx = new SignatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sequenceParser.RULE_signature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.methodName();
        this.state = 288;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        if(la_===1) {
            this.state = 287;
            this.invocation();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

InvocationContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

InvocationContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitInvocation(this);
	}
};




sequenceParser.InvocationContext = InvocationContext;

sequenceParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, sequenceParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.state = 296;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 290;
            this.match(sequenceParser.OPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
            this.match(sequenceParser.OPAR);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (sequenceParser.MINUS - 15)) | (1 << (sequenceParser.NOT - 15)) | (1 << (sequenceParser.TRUE - 15)) | (1 << (sequenceParser.FALSE - 15)) | (1 << (sequenceParser.NIL - 15)) | (1 << (sequenceParser.NEW - 15)) | (1 << (sequenceParser.ID - 15)) | (1 << (sequenceParser.INT - 15)) | (1 << (sequenceParser.FLOAT - 15)) | (1 << (sequenceParser.STRING - 15)))) !== 0)) {
                this.state = 292;
                this.parameters();
            }

            this.state = 295;
            this.match(sequenceParser.CPAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.assignee = function() {
    return this.getTypedRuleContext(AssigneeContext,0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(sequenceParser.ASSIGN, 0);
};

AssignmentContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignment(this);
	}
};




sequenceParser.AssignmentContext = AssignmentContext;

sequenceParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, sequenceParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 298;
            this.type();

        }
        this.state = 301;
        this.assignee();
        this.state = 302;
        this.match(sequenceParser.ASSIGN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AsyncMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_asyncMessage;
    return this;
}

AsyncMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsyncMessageContext.prototype.constructor = AsyncMessageContext;

AsyncMessageContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

AsyncMessageContext.prototype.COL = function() {
    return this.getToken(sequenceParser.COL, 0);
};

AsyncMessageContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

AsyncMessageContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

AsyncMessageContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

AsyncMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAsyncMessage(this);
	}
};

AsyncMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAsyncMessage(this);
	}
};




sequenceParser.AsyncMessageContext = AsyncMessageContext;

sequenceParser.prototype.asyncMessage = function() {

    var localctx = new AsyncMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, sequenceParser.RULE_asyncMessage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        if(la_===1) {
            this.state = 304;
            this.source();
            this.state = 305;
            this.match(sequenceParser.ARROW);

        }
        this.state = 309;
        this.target();
        this.state = 310;
        this.match(sequenceParser.COL);
        this.state = 311;
        this.content();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.EVENT_PAYLOAD_LXR = function() {
    return this.getToken(sequenceParser.EVENT_PAYLOAD_LXR, 0);
};

ContentContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
};

ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitContent(this);
	}
};




sequenceParser.ContentContext = ContentContext;

sequenceParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, sequenceParser.RULE_content);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.match(sequenceParser.EVENT_PAYLOAD_LXR);
        this.state = 315;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.EVENT_END) {
            this.state = 314;
            this.match(sequenceParser.EVENT_END);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitSource(this);
	}
};




sequenceParser.SourceContext = SourceContext;

sequenceParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, sequenceParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

TargetContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTarget(this);
	}
};




sequenceParser.TargetContext = TargetContext;

sequenceParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, sequenceParser.RULE_target);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_construct;
    return this;
}

ConstructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstructContext.prototype.constructor = ConstructContext;

ConstructContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ConstructContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterConstruct(this);
	}
};

ConstructContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitConstruct(this);
	}
};




sequenceParser.ConstructContext = ConstructContext;

sequenceParser.prototype.construct = function() {

    var localctx = new ConstructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, sequenceParser.RULE_construct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitType(this);
	}
};




sequenceParser.TypeContext = TypeContext;

sequenceParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, sequenceParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssigneeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_assignee;
    return this;
}

AssigneeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssigneeContext.prototype.constructor = AssigneeContext;

AssigneeContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.ID);
    } else {
        return this.getToken(sequenceParser.ID, i);
    }
};


AssigneeContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


AssigneeContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

AssigneeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignee(this);
	}
};

AssigneeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignee(this);
	}
};




sequenceParser.AssigneeContext = AssigneeContext;

sequenceParser.prototype.assignee = function() {

    var localctx = new AssigneeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, sequenceParser.RULE_assignee);
    var _la = 0; // Token type
    try {
        this.state = 334;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 325;
            this.match(sequenceParser.ID);
            this.state = 330;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.COMMA) {
                this.state = 326;
                this.match(sequenceParser.COMMA);
                this.state = 327;
                this.match(sequenceParser.ID);
                this.state = 332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case sequenceParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 333;
            this.match(sequenceParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_to;
    return this;
}

ToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToContext.prototype.constructor = ToContext;

ToContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ToContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

ToContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTo(this);
	}
};

ToContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTo(this);
	}
};




sequenceParser.ToContext = ToContext;

sequenceParser.prototype.to = function() {

    var localctx = new ToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, sequenceParser.RULE_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;

MethodNameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

MethodNameContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};

MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMethodName(this);
	}
};




sequenceParser.MethodNameContext = MethodNameContext;

sequenceParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, sequenceParser.RULE_methodName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        _la = this._input.LA(1);
        if(!(_la===sequenceParser.ID || _la===sequenceParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.COMMA);
    } else {
        return this.getToken(sequenceParser.COMMA, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameters(this);
	}
};




sequenceParser.ParametersContext = ParametersContext;

sequenceParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, sequenceParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.parameter();
        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.COMMA) {
            this.state = 341;
            this.match(sequenceParser.COMMA);
            this.state = 342;
            this.parameter();
            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

ParameterContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ParameterContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ParameterContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParameterContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParameter(this);
	}
};




sequenceParser.ParameterContext = ParameterContext;

sequenceParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, sequenceParser.RULE_parameter);
    try {
        this.state = 353;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 348;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 349;
            this.match(sequenceParser.ID);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 350;
            this.atom();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 351;
            this.expr(0);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 352;
            this.creation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitDeclaration(this);
	}
};




sequenceParser.DeclarationContext = DeclarationContext;

sequenceParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, sequenceParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.type();
        this.state = 356;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AltContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_alt;
    return this;
}

AltContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AltContext.prototype.constructor = AltContext;

AltContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

AltContext.prototype.elseIfBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfBlockContext);
    } else {
        return this.getTypedRuleContext(ElseIfBlockContext,i);
    }
};

AltContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

AltContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAlt(this);
	}
};

AltContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAlt(this);
	}
};




sequenceParser.AltContext = AltContext;

sequenceParser.prototype.alt = function() {

    var localctx = new AltContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, sequenceParser.RULE_alt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.ifBlock();
        this.state = 362;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 359;
                this.elseIfBlock(); 
            }
            this.state = 364;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
        }

        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ELSE) {
            this.state = 365;
            this.elseBlock();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_ifBlock;
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

IfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

IfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIfBlock(this);
	}
};




sequenceParser.IfBlockContext = IfBlockContext;

sequenceParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, sequenceParser.RULE_ifBlock);
    try {
        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 368;
            this.match(sequenceParser.IF);
            this.state = 369;
            this.parExpr();
            this.state = 370;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 372;
            this.match(sequenceParser.IF);
            this.state = 373;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 374;
            this.match(sequenceParser.IF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseIfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseIfBlock;
    return this;
}

ElseIfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfBlockContext.prototype.constructor = ElseIfBlockContext;

ElseIfBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseIfBlockContext.prototype.IF = function() {
    return this.getToken(sequenceParser.IF, 0);
};

ElseIfBlockContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

ElseIfBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseIfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseIfBlock(this);
	}
};

ElseIfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseIfBlock(this);
	}
};




sequenceParser.ElseIfBlockContext = ElseIfBlockContext;

sequenceParser.prototype.elseIfBlock = function() {

    var localctx = new ElseIfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, sequenceParser.RULE_elseIfBlock);
    try {
        this.state = 387;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 377;
            this.match(sequenceParser.ELSE);
            this.state = 378;
            this.match(sequenceParser.IF);
            this.state = 379;
            this.parExpr();
            this.state = 380;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 382;
            this.match(sequenceParser.ELSE);
            this.state = 383;
            this.match(sequenceParser.IF);
            this.state = 384;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 385;
            this.match(sequenceParser.ELSE);
            this.state = 386;
            this.match(sequenceParser.IF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_elseBlock;
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.ELSE = function() {
    return this.getToken(sequenceParser.ELSE, 0);
};

ElseBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitElseBlock(this);
	}
};




sequenceParser.ElseBlockContext = ElseBlockContext;

sequenceParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, sequenceParser.RULE_elseBlock);
    try {
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 389;
            this.match(sequenceParser.ELSE);
            this.state = 390;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 391;
            this.match(sequenceParser.ELSE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_braceBlock;
    return this;
}

BraceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceBlockContext.prototype.constructor = BraceBlockContext;

BraceBlockContext.prototype.OBRACE = function() {
    return this.getToken(sequenceParser.OBRACE, 0);
};

BraceBlockContext.prototype.CBRACE = function() {
    return this.getToken(sequenceParser.CBRACE, 0);
};

BraceBlockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

BraceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBraceBlock(this);
	}
};

BraceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBraceBlock(this);
	}
};




sequenceParser.BraceBlockContext = BraceBlockContext;

sequenceParser.prototype.braceBlock = function() {

    var localctx = new BraceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, sequenceParser.RULE_braceBlock);
    var _la = 0; // Token type
    try {
        this.state = 400;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 394;
            this.match(sequenceParser.OBRACE);
            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (sequenceParser.OBRACE - 26)) | (1 << (sequenceParser.IF - 26)) | (1 << (sequenceParser.WHILE - 26)) | (1 << (sequenceParser.RETURN - 26)) | (1 << (sequenceParser.NEW - 26)) | (1 << (sequenceParser.PAR - 26)) | (1 << (sequenceParser.OPT - 26)) | (1 << (sequenceParser.ID - 26)) | (1 << (sequenceParser.STRING - 26)) | (1 << (sequenceParser.OTHER - 26)))) !== 0)) {
                this.state = 395;
                this.block();
            }

            this.state = 398;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
            this.match(sequenceParser.OBRACE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(sequenceParser.WHILE, 0);
};

LoopContext.prototype.parExpr = function() {
    return this.getTypedRuleContext(ParExprContext,0);
};

LoopContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitLoop(this);
	}
};




sequenceParser.LoopContext = LoopContext;

sequenceParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, sequenceParser.RULE_loop);
    try {
        this.state = 409;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 402;
            this.match(sequenceParser.WHILE);
            this.state = 403;
            this.parExpr();
            this.state = 404;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 406;
            this.match(sequenceParser.WHILE);
            this.state = 407;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 408;
            this.match(sequenceParser.WHILE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExprContext.prototype = Object.create(ExprContext.prototype);
NotExprContext.prototype.constructor = NotExprContext;

sequenceParser.NotExprContext = NotExprContext;

NotExprContext.prototype.NOT = function() {
    return this.getToken(sequenceParser.NOT, 0);
};

NotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNotExpr(this);
	}
};

NotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNotExpr(this);
	}
};


function FuncExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExprContext.prototype = Object.create(ExprContext.prototype);
FuncExprContext.prototype.constructor = FuncExprContext;

sequenceParser.FuncExprContext = FuncExprContext;

FuncExprContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};
FuncExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFuncExpr(this);
	}
};

FuncExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFuncExpr(this);
	}
};


function UnaryMinusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExprContext.prototype = Object.create(ExprContext.prototype);
UnaryMinusExprContext.prototype.constructor = UnaryMinusExprContext;

sequenceParser.UnaryMinusExprContext = UnaryMinusExprContext;

UnaryMinusExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};

UnaryMinusExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryMinusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterUnaryMinusExpr(this);
	}
};

UnaryMinusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitUnaryMinusExpr(this);
	}
};


function CreationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CreationExprContext.prototype = Object.create(ExprContext.prototype);
CreationExprContext.prototype.constructor = CreationExprContext;

sequenceParser.CreationExprContext = CreationExprContext;

CreationExprContext.prototype.creation = function() {
    return this.getTypedRuleContext(CreationContext,0);
};
CreationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationExpr(this);
	}
};

CreationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationExpr(this);
	}
};


function MultiplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExprContext.prototype = Object.create(ExprContext.prototype);
MultiplicationExprContext.prototype.constructor = MultiplicationExprContext;

sequenceParser.MultiplicationExprContext = MultiplicationExprContext;

MultiplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MultiplicationExprContext.prototype.MULT = function() {
    return this.getToken(sequenceParser.MULT, 0);
};

MultiplicationExprContext.prototype.DIV = function() {
    return this.getToken(sequenceParser.DIV, 0);
};

MultiplicationExprContext.prototype.MOD = function() {
    return this.getToken(sequenceParser.MOD, 0);
};
MultiplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMultiplicationExpr(this);
	}
};

MultiplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMultiplicationExpr(this);
	}
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

sequenceParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAtomExpr(this);
	}
};


function OrExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExprContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

sequenceParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

OrExprContext.prototype.OR = function() {
    return this.getToken(sequenceParser.OR, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitOrExpr(this);
	}
};


function AdditiveExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExprContext.prototype = Object.create(ExprContext.prototype);
AdditiveExprContext.prototype.constructor = AdditiveExprContext;

sequenceParser.AdditiveExprContext = AdditiveExprContext;

AdditiveExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditiveExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};

AdditiveExprContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
};
AdditiveExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAdditiveExpr(this);
	}
};

AdditiveExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAdditiveExpr(this);
	}
};


function RelationalExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(ExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

sequenceParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelationalExprContext.prototype.LTEQ = function() {
    return this.getToken(sequenceParser.LTEQ, 0);
};

RelationalExprContext.prototype.GTEQ = function() {
    return this.getToken(sequenceParser.GTEQ, 0);
};

RelationalExprContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
};

RelationalExprContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};
RelationalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterRelationalExpr(this);
	}
};

RelationalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitRelationalExpr(this);
	}
};


function EqualityExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(ExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

sequenceParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EqualityExprContext.prototype.EQ = function() {
    return this.getToken(sequenceParser.EQ, 0);
};

EqualityExprContext.prototype.NEQ = function() {
    return this.getToken(sequenceParser.NEQ, 0);
};
EqualityExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterEqualityExpr(this);
	}
};

EqualityExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitEqualityExpr(this);
	}
};


function PlusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PlusExprContext.prototype = Object.create(ExprContext.prototype);
PlusExprContext.prototype.constructor = PlusExprContext;

sequenceParser.PlusExprContext = PlusExprContext;

PlusExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PlusExprContext.prototype.PLUS = function() {
    return this.getToken(sequenceParser.PLUS, 0);
};
PlusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterPlusExpr(this);
	}
};

PlusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitPlusExpr(this);
	}
};


function AndExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExprContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

sequenceParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AndExprContext.prototype.AND = function() {
    return this.getToken(sequenceParser.AND, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAndExpr(this);
	}
};



sequenceParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 84;
    this.enterRecursionRule(localctx, 84, sequenceParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 412;
            this.match(sequenceParser.MINUS);
            this.state = 413;
            this.expr(12);
            break;

        case 2:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 414;
            this.match(sequenceParser.NOT);
            this.state = 415;
            this.expr(11);
            break;

        case 3:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 416;
            this.func();
            break;

        case 4:
            localctx = new CreationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 417;
            this.creation();
            break;

        case 5:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 418;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 444;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 442;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 421;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 422;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MULT) | (1 << sequenceParser.DIV) | (1 << sequenceParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 423;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new AdditiveExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 424;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 425;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.PLUS || _la===sequenceParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 426;
                    this.expr(10);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 427;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 428;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.GT) | (1 << sequenceParser.LT) | (1 << sequenceParser.GTEQ) | (1 << sequenceParser.LTEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 429;
                    this.expr(9);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 430;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 431;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.EQ || _la===sequenceParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 432;
                    this.expr(8);
                    break;

                case 5:
                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 433;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 434;
                    this.match(sequenceParser.AND);
                    this.state = 435;
                    this.expr(7);
                    break;

                case 6:
                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 436;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 437;
                    this.match(sequenceParser.OR);
                    this.state = 438;
                    this.expr(6);
                    break;

                case 7:
                    localctx = new PlusExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 439;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 440;
                    this.match(sequenceParser.PLUS);
                    this.state = 441;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 446;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;


 
AtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BooleanAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanAtomContext.prototype = Object.create(AtomContext.prototype);
BooleanAtomContext.prototype.constructor = BooleanAtomContext;

sequenceParser.BooleanAtomContext = BooleanAtomContext;

BooleanAtomContext.prototype.TRUE = function() {
    return this.getToken(sequenceParser.TRUE, 0);
};

BooleanAtomContext.prototype.FALSE = function() {
    return this.getToken(sequenceParser.FALSE, 0);
};
BooleanAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterBooleanAtom(this);
	}
};

BooleanAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitBooleanAtom(this);
	}
};


function IdAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdAtomContext.prototype = Object.create(AtomContext.prototype);
IdAtomContext.prototype.constructor = IdAtomContext;

sequenceParser.IdAtomContext = IdAtomContext;

IdAtomContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};
IdAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterIdAtom(this);
	}
};

IdAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitIdAtom(this);
	}
};


function StringAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringAtomContext.prototype = Object.create(AtomContext.prototype);
StringAtomContext.prototype.constructor = StringAtomContext;

sequenceParser.StringAtomContext = StringAtomContext;

StringAtomContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
};
StringAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterStringAtom(this);
	}
};

StringAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitStringAtom(this);
	}
};


function NilAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NilAtomContext.prototype = Object.create(AtomContext.prototype);
NilAtomContext.prototype.constructor = NilAtomContext;

sequenceParser.NilAtomContext = NilAtomContext;

NilAtomContext.prototype.NIL = function() {
    return this.getToken(sequenceParser.NIL, 0);
};
NilAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNilAtom(this);
	}
};

NilAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNilAtom(this);
	}
};


function NumberAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberAtomContext.prototype = Object.create(AtomContext.prototype);
NumberAtomContext.prototype.constructor = NumberAtomContext;

sequenceParser.NumberAtomContext = NumberAtomContext;

NumberAtomContext.prototype.INT = function() {
    return this.getToken(sequenceParser.INT, 0);
};

NumberAtomContext.prototype.FLOAT = function() {
    return this.getToken(sequenceParser.FLOAT, 0);
};
NumberAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterNumberAtom(this);
	}
};

NumberAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitNumberAtom(this);
	}
};



sequenceParser.AtomContext = AtomContext;

sequenceParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, sequenceParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 452;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
            localctx = new NumberAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 447;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.INT || _la===sequenceParser.FLOAT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.TRUE:
        case sequenceParser.FALSE:
            localctx = new BooleanAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 448;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.TRUE || _la===sequenceParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sequenceParser.ID:
            localctx = new IdAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 449;
            this.match(sequenceParser.ID);
            break;
        case sequenceParser.STRING:
            localctx = new StringAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 450;
            this.match(sequenceParser.STRING);
            break;
        case sequenceParser.NIL:
            localctx = new NilAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 451;
            this.match(sequenceParser.NIL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parExpr;
    return this;
}

ParExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExprContext.prototype.constructor = ParExprContext;

ParExprContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

ParExprContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ParExprContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

ParExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParExpr(this);
	}
};

ParExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParExpr(this);
	}
};




sequenceParser.ParExprContext = ParExprContext;

sequenceParser.prototype.parExpr = function() {

    var localctx = new ParExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, sequenceParser.RULE_parExpr);
    try {
        this.state = 463;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 454;
            this.match(sequenceParser.OPAR);
            this.state = 455;
            this.condition();
            this.state = 456;
            this.match(sequenceParser.CPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 458;
            this.match(sequenceParser.OPAR);
            this.state = 459;
            this.condition();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 460;
            this.match(sequenceParser.OPAR);
            this.state = 461;
            this.match(sequenceParser.CPAR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 462;
            this.match(sequenceParser.OPAR);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ConditionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCondition(this);
	}
};




sequenceParser.ConditionContext = ConditionContext;

sequenceParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, sequenceParser.RULE_condition);
    try {
        this.state = 467;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 465;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 466;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


sequenceParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 42:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sequenceParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sequenceParser = sequenceParser;
