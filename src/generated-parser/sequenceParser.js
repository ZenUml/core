// Generated from sequenceParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sequenceParserListener = require('./sequenceParserListener').sequenceParserListener;
var grammarFileName = "sequenceParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003>\u0224\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u0003\u0002\u0005\u0002j\n\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002n\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002t\n\u0002\u0003\u0002\u0005\u0002w\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002|\n\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0081\n\u0003\u0003\u0004\u0003\u0004\u0006\u0004",
    "\u0085\n\u0004\r\u0004\u000e\u0004\u0086\u0003\u0004\u0003\u0004\u0007",
    "\u0004\u008b\n\u0004\f\u0004\u000e\u0004\u008e\u000b\u0004\u0003\u0004",
    "\u0005\u0004\u0091\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005\u0095",
    "\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u0099\n\u0005\f\u0005\u000e",
    "\u0005\u009c\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u00a1\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u00a6",
    "\n\u0005\u0005\u0005\u00a8\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u00ad\n\u0006\u0003\u0006\u0005\u0006\u00b0\n\u0006\u0003",
    "\u0006\u0005\u0006\u00b3\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0005",
    "\b\u00b8\n\b\u0003\b\u0005\b\u00bb\n\b\u0003\b\u0003\b\u0005\b\u00bf",
    "\n\b\u0003\b\u0005\b\u00c2\n\b\u0003\b\u0005\b\u00c5\n\b\u0003\b\u0003",
    "\b\u0005\b\u00c9\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u00d2\n\t\u0003\t\u0003\t\u0005\t\u00d6\n\t\u0005\t",
    "\u00d8\n\t\u0003\n\u0003\n\u0003\n\u0005\n\u00dd\n\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0006\u000e\u00e6",
    "\n\u000e\r\u000e\u000e\u000e\u00e7\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00ec\n\u000f\u0003\u000f\u0005\u000f\u00ef\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00f4\n\u000f\u0005\u000f\u00f6\n\u000f",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u00fa\n\u0010\f\u0010\u000e\u0010",
    "\u00fd\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0102",
    "\n\u0010\f\u0010\u000e\u0010\u0105\u000b\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u010f\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0116\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u011b\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u0120\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u0125\n\u0014\u0003\u0015\u0005\u0015\u0128\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u012e\n\u0015",
    "\u0003\u0015\u0005\u0015\u0131\n\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u0136\n\u0016\u0003\u0017\u0005\u0017\u0139\n\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u013e\n\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0143\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u014a\n",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u014f\n\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0154\n\u0018\f\u0018",
    "\u000e\u0018\u0157\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0005\u001b\u015f\n\u001b\u0003\u001c",
    "\u0003\u001c\u0005\u001c\u0163\n\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0005\u001d\u0168\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u0170\n\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u0179\n\u001e\u0005\u001e\u017b\n\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0007\"\u0187\n\"\f\"\u000e\"\u018a\u000b\"\u0003\"\u0005\"\u018d",
    "\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0007$\u0194\n$\f$\u000e$\u0197",
    "\u000b$\u0003$\u0005$\u019a\n$\u0003%\u0003%\u0005%\u019e\n%\u0003&",
    "\u0003&\u0003&\u0003\'\u0003\'\u0007\'\u01a5\n\'\f\'\u000e\'\u01a8\u000b",
    "\'\u0003\'\u0005\'\u01ab\n\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0005",
    ")\u01b2\n)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003+\u0003+\u0007+\u01bb",
    "\n+\f+\u000e+\u01be\u000b+\u0003+\u0005+\u01c1\n+\u0003,\u0003,\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003",
    "/\u0003/\u0005/\u01d1\n/\u0003/\u0003/\u00030\u00030\u00030\u00030\u0003",
    "0\u00030\u00030\u00050\u01dc\n0\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00051\u01e6\n1\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00051\u01f2\n1\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u00071\u0209\n1\f",
    "1\u000e1\u020c\u000b1\u00032\u00032\u00032\u00032\u00032\u00052\u0213",
    "\n2\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u00033\u0005",
    "3\u021e\n3\u00034\u00034\u00054\u0222\n4\u00034\u0002\u0003`5\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdf\u0002\r\u0004\u00022255\u0004",
    "\u0002\u0005\u0005\u000e\u000e\u0004\u0002\u0006\u0006\r\r\u0004\u0002",
    "\u000b\u000b\u001a\u001a\u0004\u0002\u0007\u0007\u0012\u0012\u0003\u0002",
    "\u0013\u0015\u0003\u0002\u0011\u0012\u0003\u0002\r\u0010\u0003\u0002",
    "\u000b\f\u0003\u000234\u0003\u0002\u001f \u0002\u025d\u0002{\u0003\u0002",
    "\u0002\u0002\u0004}\u0003\u0002\u0002\u0002\u0006\u0090\u0003\u0002",
    "\u0002\u0002\b\u00a7\u0003\u0002\u0002\u0002\n\u00b2\u0003\u0002\u0002",
    "\u0002\f\u00b4\u0003\u0002\u0002\u0002\u000e\u00c8\u0003\u0002\u0002",
    "\u0002\u0010\u00d7\u0003\u0002\u0002\u0002\u0012\u00dc\u0003\u0002\u0002",
    "\u0002\u0014\u00de\u0003\u0002\u0002\u0002\u0016\u00e0\u0003\u0002\u0002",
    "\u0002\u0018\u00e2\u0003\u0002\u0002\u0002\u001a\u00e5\u0003\u0002\u0002",
    "\u0002\u001c\u00f5\u0003\u0002\u0002\u0002\u001e\u00f7\u0003\u0002\u0002",
    "\u0002 \u0115\u0003\u0002\u0002\u0002\"\u011a\u0003\u0002\u0002\u0002",
    "$\u011f\u0003\u0002\u0002\u0002&\u0121\u0003\u0002\u0002\u0002(\u0127",
    "\u0003\u0002\u0002\u0002*\u0132\u0003\u0002\u0002\u0002,\u014e\u0003",
    "\u0002\u0002\u0002.\u0150\u0003\u0002\u0002\u00020\u0158\u0003\u0002",
    "\u0002\u00022\u015a\u0003\u0002\u0002\u00024\u015c\u0003\u0002\u0002",
    "\u00026\u0160\u0003\u0002\u0002\u00028\u0167\u0003\u0002\u0002\u0002",
    ":\u017a\u0003\u0002\u0002\u0002<\u017c\u0003\u0002\u0002\u0002>\u017e",
    "\u0003\u0002\u0002\u0002@\u0180\u0003\u0002\u0002\u0002B\u018c\u0003",
    "\u0002\u0002\u0002D\u018e\u0003\u0002\u0002\u0002F\u0190\u0003\u0002",
    "\u0002\u0002H\u019d\u0003\u0002\u0002\u0002J\u019f\u0003\u0002\u0002",
    "\u0002L\u01a2\u0003\u0002\u0002\u0002N\u01ac\u0003\u0002\u0002\u0002",
    "P\u01af\u0003\u0002\u0002\u0002R\u01b5\u0003\u0002\u0002\u0002T\u01b8",
    "\u0003\u0002\u0002\u0002V\u01c2\u0003\u0002\u0002\u0002X\u01c6\u0003",
    "\u0002\u0002\u0002Z\u01cb\u0003\u0002\u0002\u0002\\\u01ce\u0003\u0002",
    "\u0002\u0002^\u01db\u0003\u0002\u0002\u0002`\u01f1\u0003\u0002\u0002",
    "\u0002b\u0212\u0003\u0002\u0002\u0002d\u021d\u0003\u0002\u0002\u0002",
    "f\u0221\u0003\u0002\u0002\u0002hj\u0005\u0004\u0003\u0002ih\u0003\u0002",
    "\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k|\u0007",
    "\u0002\u0002\u0003ln\u0005\u0004\u0003\u0002ml\u0003\u0002\u0002\u0002",
    "mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0005\u0006\u0004",
    "\u0002pq\u0007\u0002\u0002\u0003q|\u0003\u0002\u0002\u0002rt\u0005\u0004",
    "\u0003\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003",
    "\u0002\u0002\u0002uw\u0005\u0006\u0004\u0002vu\u0003\u0002\u0002\u0002",
    "vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0005\u001a\u000e",
    "\u0002yz\u0007\u0002\u0002\u0003z|\u0003\u0002\u0002\u0002{i\u0003\u0002",
    "\u0002\u0002{m\u0003\u0002\u0002\u0002{s\u0003\u0002\u0002\u0002|\u0003",
    "\u0003\u0002\u0002\u0002}~\u0007\u0003\u0002\u0002~\u0080\u0007=\u0002",
    "\u0002\u007f\u0081\u0007>\u0002\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0005\u0003\u0002\u0002",
    "\u0002\u0082\u0085\u0005\b\u0005\u0002\u0083\u0085\u0005\u000e\b\u0002",
    "\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0083\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0091\u0003\u0002\u0002\u0002",
    "\u0088\u008b\u0005\b\u0005\u0002\u0089\u008b\u0005\u000e\b\u0002\u008a",
    "\u0088\u0003\u0002\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b",
    "\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002\u008e",
    "\u008c\u0003\u0002\u0002\u0002\u008f\u0091\u0005\n\u0006\u0002\u0090",
    "\u0084\u0003\u0002\u0002\u0002\u0090\u008c\u0003\u0002\u0002\u0002\u0091",
    "\u0007\u0003\u0002\u0002\u0002\u0092\u0094\u0007(\u0002\u0002\u0093",
    "\u0095\u0005\u0016\f\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096",
    "\u009a\u0007\u001d\u0002\u0002\u0097\u0099\u0005\u000e\b\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u009d\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d",
    "\u00a8\u0007\u001e\u0002\u0002\u009e\u00a0\u0007(\u0002\u0002\u009f",
    "\u00a1\u0005\u0016\f\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2",
    "\u00a8\u0007\u001d\u0002\u0002\u00a3\u00a5\u0007(\u0002\u0002\u00a4",
    "\u00a6\u0005\u0016\f\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002\u00a7",
    "\u0092\u0003\u0002\u0002\u0002\u00a7\u009e\u0003\u0002\u0002\u0002\u00a7",
    "\u00a3\u0003\u0002\u0002\u0002\u00a8\t\u0003\u0002\u0002\u0002\u00a9",
    "\u00af\u0007.\u0002\u0002\u00aa\u00ac\u0007\u001b\u0002\u0002\u00ab",
    "\u00ad\u0005\f\u0007\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac",
    "\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae",
    "\u00b0\u0007\u001c\u0002\u0002\u00af\u00aa\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1",
    "\u00b3\u00070\u0002\u0002\u00b2\u00a9\u0003\u0002\u0002\u0002\u00b2",
    "\u00b1\u0003\u0002\u0002\u0002\u00b3\u000b\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\t\u0002\u0002\u0002\u00b5\r\u0003\u0002\u0002\u0002\u00b6\u00b8",
    "\u0005\u0014\u000b\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0003\u0002\u0002\u0002\u00b8\u00ba\u0003\u0002\u0002\u0002\u00b9\u00bb",
    "\u0005\u0010\t\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00be",
    "\u0005\u0016\f\u0002\u00bd\u00bf\u0005\u0018\r\u0002\u00be\u00bd\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c1\u0003",
    "\u0002\u0002\u0002\u00c0\u00c2\u0005\u0012\n\u0002\u00c1\u00c0\u0003",
    "\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003",
    "\u0002\u0002\u0002\u00c3\u00c5\u0007\b\u0002\u0002\u00c4\u00c3\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c9\u0003",
    "\u0002\u0002\u0002\u00c6\u00c9\u0005\u0010\t\u0002\u00c7\u00c9\u0005",
    "\u0014\u000b\u0002\u00c8\u00b7\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u000f\u0003",
    "\u0002\u0002\u0002\u00ca\u00cb\u0007\u0005\u0002\u0002\u00cb\u00cc\u0005",
    "\u0016\f\u0002\u00cc\u00cd\u0007\u0006\u0002\u0002\u00cd\u00d8\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0007\u0005\u0002\u0002\u00cf\u00d1\u0005",
    "\u0016\f\u0002\u00d0\u00d2\u0007\r\u0002\u0002\u00d1\u00d0\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d8\u0003\u0002",
    "\u0002\u0002\u00d3\u00d5\t\u0003\u0002\u0002\u00d4\u00d6\t\u0004\u0002",
    "\u0002\u00d5\u00d4\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002",
    "\u0002\u00d6\u00d8\u0003\u0002\u0002\u0002\u00d7\u00ca\u0003\u0002\u0002",
    "\u0002\u00d7\u00ce\u0003\u0002\u0002\u0002\u00d7\u00d3\u0003\u0002\u0002",
    "\u0002\u00d8\u0011\u0003\u0002\u0002\u0002\u00d9\u00da\u0007*\u0002",
    "\u0002\u00da\u00dd\u0005\u0016\f\u0002\u00db\u00dd\u0007*\u0002\u0002",
    "\u00dc\u00d9\u0003\u0002\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002",
    "\u00dd\u0013\u0003\u0002\u0002\u0002\u00de\u00df\u00070\u0002\u0002",
    "\u00df\u0015\u0003\u0002\u0002\u0002\u00e0\u00e1\t\u0002\u0002\u0002",
    "\u00e1\u0017\u0003\u0002\u0002\u0002\u00e2\u00e3\u00073\u0002\u0002",
    "\u00e3\u0019\u0003\u0002\u0002\u0002\u00e4\u00e6\u0005 \u0011\u0002",
    "\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002",
    "\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002",
    "\u00e8\u001b\u0003\u0002\u0002\u0002\u00e9\u00eb\u0007%\u0002\u0002",
    "\u00ea\u00ec\u0005`1\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00eb",
    "\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ee\u0003\u0002\u0002\u0002\u00ed",
    "\u00ef\u0007\u0018\u0002\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f6\u0003\u0002\u0002\u0002\u00f0",
    "\u00f1\u0007/\u0002\u0002\u00f1\u00f3\u0005:\u001e\u0002\u00f2\u00f4",
    "\u0007;\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0003\u0002\u0002\u0002\u00f4\u00f6\u0003\u0002\u0002\u0002\u00f5\u00e9",
    "\u0003\u0002\u0002\u0002\u00f5\u00f0\u0003\u0002\u0002\u0002\u00f6\u001d",
    "\u0003\u0002\u0002\u0002\u00f7\u00fb\u0007\u000b\u0002\u0002\u00f8\u00fa",
    "\t\u0005\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fd",
    "\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0003\u0002\u0002\u0002\u00fc\u00fe\u0003\u0002\u0002\u0002\u00fd\u00fb",
    "\u0003\u0002\u0002\u0002\u00fe\u00ff\u0005\u0016\f\u0002\u00ff\u0103",
    "\u0007\u000b\u0002\u0002\u0100\u0102\t\u0005\u0002\u0002\u0101\u0100",
    "\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002\u0002\u0103\u0101",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u001f",
    "\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0106\u0116",
    "\u0005T+\u0002\u0107\u0116\u0005\"\u0012\u0002\u0108\u0116\u0005$\u0013",
    "\u0002\u0109\u0116\u0005^0\u0002\u010a\u0116\u0005&\u0014\u0002\u010b",
    "\u0116\u0005*\u0016\u0002\u010c\u010e\u0005:\u001e\u0002\u010d\u010f",
    "\u0007;\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0003\u0002\u0002\u0002\u010f\u0116\u0003\u0002\u0002\u0002\u0110\u0116",
    "\u0005\u001c\u000f\u0002\u0111\u0116\u0005\u001e\u0010\u0002\u0112\u0116",
    "\u0005L\'\u0002\u0113\u0114\u00079\u0002\u0002\u0114\u0116\b\u0011\u0001",
    "\u0002\u0115\u0106\u0003\u0002\u0002\u0002\u0115\u0107\u0003\u0002\u0002",
    "\u0002\u0115\u0108\u0003\u0002\u0002\u0002\u0115\u0109\u0003\u0002\u0002",
    "\u0002\u0115\u010a\u0003\u0002\u0002\u0002\u0115\u010b\u0003\u0002\u0002",
    "\u0002\u0115\u010c\u0003\u0002\u0002\u0002\u0115\u0110\u0003\u0002\u0002",
    "\u0002\u0115\u0111\u0003\u0002\u0002\u0002\u0115\u0112\u0003\u0002\u0002",
    "\u0002\u0115\u0113\u0003\u0002\u0002\u0002\u0116!\u0003\u0002\u0002",
    "\u0002\u0117\u0118\u0007\'\u0002\u0002\u0118\u011b\u0005\\/\u0002\u0119",
    "\u011b\u0007\'\u0002\u0002\u011a\u0117\u0003\u0002\u0002\u0002\u011a",
    "\u0119\u0003\u0002\u0002\u0002\u011b#\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0007)\u0002\u0002\u011d\u0120\u0005\\/\u0002\u011e\u0120\u0007",
    ")\u0002\u0002\u011f\u011c\u0003\u0002\u0002\u0002\u011f\u011e\u0003",
    "\u0002\u0002\u0002\u0120%\u0003\u0002\u0002\u0002\u0121\u0124\u0005",
    "(\u0015\u0002\u0122\u0125\u0007\u0018\u0002\u0002\u0123\u0125\u0005",
    "\\/\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124\u0123\u0003\u0002",
    "\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\'\u0003\u0002",
    "\u0002\u0002\u0126\u0128\u00058\u001d\u0002\u0127\u0126\u0003\u0002",
    "\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002",
    "\u0002\u0002\u0129\u012a\u0007&\u0002\u0002\u012a\u0130\u0005> \u0002",
    "\u012b\u012d\u0007\u001b\u0002\u0002\u012c\u012e\u0005F$\u0002\u012d",
    "\u012c\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0003\u0002\u0002\u0002\u012f\u0131\u0007\u001c\u0002\u0002\u0130",
    "\u012b\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131",
    ")\u0003\u0002\u0002\u0002\u0132\u0135\u0005,\u0017\u0002\u0133\u0136",
    "\u0007\u0018\u0002\u0002\u0134\u0136\u0005\\/\u0002\u0135\u0133\u0003",
    "\u0002\u0002\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0135\u0136\u0003",
    "\u0002\u0002\u0002\u0136+\u0003\u0002\u0002\u0002\u0137\u0139\u0005",
    "8\u001d\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0138\u0139\u0003",
    "\u0002\u0002\u0002\u0139\u0142\u0003\u0002\u0002\u0002\u013a\u013b\u0005",
    "0\u0019\u0002\u013b\u013c\u0007\u0007\u0002\u0002\u013c\u013e\u0003",
    "\u0002\u0002\u0002\u013d\u013a\u0003\u0002\u0002\u0002\u013d\u013e\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0140\u0005",
    "2\u001a\u0002\u0140\u0141\u00071\u0002\u0002\u0141\u0143\u0003\u0002",
    "\u0002\u0002\u0142\u013d\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002",
    "\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u014f\u0005.",
    "\u0018\u0002\u0145\u014f\u00058\u001d\u0002\u0146\u0147\u00050\u0019",
    "\u0002\u0147\u0148\u0007\u0007\u0002\u0002\u0148\u014a\u0003\u0002\u0002",
    "\u0002\u0149\u0146\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002",
    "\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014c\u00052\u001a",
    "\u0002\u014c\u014d\u00071\u0002\u0002\u014d\u014f\u0003\u0002\u0002",
    "\u0002\u014e\u0138\u0003\u0002\u0002\u0002\u014e\u0145\u0003\u0002\u0002",
    "\u0002\u014e\u0149\u0003\u0002\u0002\u0002\u014f-\u0003\u0002\u0002",
    "\u0002\u0150\u0155\u00054\u001b\u0002\u0151\u0152\u00071\u0002\u0002",
    "\u0152\u0154\u00054\u001b\u0002\u0153\u0151\u0003\u0002\u0002\u0002",
    "\u0154\u0157\u0003\u0002\u0002\u0002\u0155\u0153\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0003\u0002\u0002\u0002\u0156/\u0003\u0002\u0002\u0002",
    "\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u0159\t\u0002\u0002\u0002",
    "\u01591\u0003\u0002\u0002\u0002\u015a\u015b\t\u0002\u0002\u0002\u015b",
    "3\u0003\u0002\u0002\u0002\u015c\u015e\u0005D#\u0002\u015d\u015f\u0005",
    "6\u001c\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e\u015f\u0003",
    "\u0002\u0002\u0002\u015f5\u0003\u0002\u0002\u0002\u0160\u0162\u0007",
    "\u001b\u0002\u0002\u0161\u0163\u0005F$\u0002\u0162\u0161\u0003\u0002",
    "\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002",
    "\u0002\u0002\u0164\u0165\u0007\u001c\u0002\u0002\u01657\u0003\u0002",
    "\u0002\u0002\u0166\u0168\u0005@!\u0002\u0167\u0166\u0003\u0002\u0002",
    "\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002",
    "\u0002\u0169\u016a\u0005B\"\u0002\u016a\u016b\u0007\u001a\u0002\u0002",
    "\u016b9\u0003\u0002\u0002\u0002\u016c\u016d\u00050\u0019\u0002\u016d",
    "\u016e\u0007\u0007\u0002\u0002\u016e\u0170\u0003\u0002\u0002\u0002\u016f",
    "\u016c\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170",
    "\u0171\u0003\u0002\u0002\u0002\u0171\u0172\u00052\u001a\u0002\u0172",
    "\u0173\u0007\u0004\u0002\u0002\u0173\u0174\u0005<\u001f\u0002\u0174",
    "\u017b\u0003\u0002\u0002\u0002\u0175\u0176\u00050\u0019\u0002\u0176",
    "\u0178\t\u0006\u0002\u0002\u0177\u0179\u00052\u001a\u0002\u0178\u0177",
    "\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017b",
    "\u0003\u0002\u0002\u0002\u017a\u016f\u0003\u0002\u0002\u0002\u017a\u0175",
    "\u0003\u0002\u0002\u0002\u017b;\u0003\u0002\u0002\u0002\u017c\u017d",
    "\u0007:\u0002\u0002\u017d=\u0003\u0002\u0002\u0002\u017e\u017f\t\u0002",
    "\u0002\u0002\u017f?\u0003\u0002\u0002\u0002\u0180\u0181\t\u0002\u0002",
    "\u0002\u0181A\u0003\u0002\u0002\u0002\u0182\u018d\u0005b2\u0002\u0183",
    "\u0188\u00072\u0002\u0002\u0184\u0185\u0007\u0019\u0002\u0002\u0185",
    "\u0187\u00072\u0002\u0002\u0186\u0184\u0003\u0002\u0002\u0002\u0187",
    "\u018a\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0188",
    "\u0189\u0003\u0002\u0002\u0002\u0189\u018d\u0003\u0002\u0002\u0002\u018a",
    "\u0188\u0003\u0002\u0002\u0002\u018b\u018d\u00075\u0002\u0002\u018c",
    "\u0182\u0003\u0002\u0002\u0002\u018c\u0183\u0003\u0002\u0002\u0002\u018c",
    "\u018b\u0003\u0002\u0002\u0002\u018dC\u0003\u0002\u0002\u0002\u018e",
    "\u018f\t\u0002\u0002\u0002\u018fE\u0003\u0002\u0002\u0002\u0190\u0195",
    "\u0005H%\u0002\u0191\u0192\u0007\u0019\u0002\u0002\u0192\u0194\u0005",
    "H%\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0194\u0197\u0003\u0002",
    "\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0196\u0003\u0002",
    "\u0002\u0002\u0196\u0199\u0003\u0002\u0002\u0002\u0197\u0195\u0003\u0002",
    "\u0002\u0002\u0198\u019a\u0007\u0019\u0002\u0002\u0199\u0198\u0003\u0002",
    "\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019aG\u0003\u0002",
    "\u0002\u0002\u019b\u019e\u0005J&\u0002\u019c\u019e\u0005`1\u0002\u019d",
    "\u019b\u0003\u0002\u0002\u0002\u019d\u019c\u0003\u0002\u0002\u0002\u019e",
    "I\u0003\u0002\u0002\u0002\u019f\u01a0\u0005@!\u0002\u01a0\u01a1\u0007",
    "2\u0002\u0002\u01a1K\u0003\u0002\u0002\u0002\u01a2\u01a6\u0005N(\u0002",
    "\u01a3\u01a5\u0005P)\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a5",
    "\u01a8\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a6",
    "\u01a7\u0003\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002\u01a8",
    "\u01a6\u0003\u0002\u0002\u0002\u01a9\u01ab\u0005R*\u0002\u01aa\u01a9",
    "\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01abM",
    "\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007+\u0002\u0002\u01ad\u01ae",
    "\u0005\\/\u0002\u01aeO\u0003\u0002\u0002\u0002\u01af\u01b1\u0007,\u0002",
    "\u0002\u01b0\u01b2\u00056\u001c\u0002\u01b1\u01b0\u0003\u0002\u0002",
    "\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2\u01b3\u0003\u0002\u0002",
    "\u0002\u01b3\u01b4\u0005\\/\u0002\u01b4Q\u0003\u0002\u0002\u0002\u01b5",
    "\u01b6\u0007-\u0002\u0002\u01b6\u01b7\u0005\\/\u0002\u01b7S\u0003\u0002",
    "\u0002\u0002\u01b8\u01bc\u0005V,\u0002\u01b9\u01bb\u0005X-\u0002\u01ba",
    "\u01b9\u0003\u0002\u0002\u0002\u01bb\u01be\u0003\u0002\u0002\u0002\u01bc",
    "\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002\u01bd",
    "\u01c0\u0003\u0002\u0002\u0002\u01be\u01bc\u0003\u0002\u0002\u0002\u01bf",
    "\u01c1\u0005Z.\u0002\u01c0\u01bf\u0003\u0002\u0002\u0002\u01c0\u01c1",
    "\u0003\u0002\u0002\u0002\u01c1U\u0003\u0002\u0002\u0002\u01c2\u01c3",
    "\u0007\"\u0002\u0002\u01c3\u01c4\u0005d3\u0002\u01c4\u01c5\u0005\\/",
    "\u0002\u01c5W\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007#\u0002\u0002",
    "\u01c7\u01c8\u0007\"\u0002\u0002\u01c8\u01c9\u0005d3\u0002\u01c9\u01ca",
    "\u0005\\/\u0002\u01caY\u0003\u0002\u0002\u0002\u01cb\u01cc\u0007#\u0002",
    "\u0002\u01cc\u01cd\u0005\\/\u0002\u01cd[\u0003\u0002\u0002\u0002\u01ce",
    "\u01d0\u0007\u001d\u0002\u0002\u01cf\u01d1\u0005\u001a\u000e\u0002\u01d0",
    "\u01cf\u0003\u0002\u0002\u0002\u01d0\u01d1\u0003\u0002\u0002\u0002\u01d1",
    "\u01d2\u0003\u0002\u0002\u0002\u01d2\u01d3\u0007\u001e\u0002\u0002\u01d3",
    "]\u0003\u0002\u0002\u0002\u01d4\u01d5\u0007$\u0002\u0002\u01d5\u01d6",
    "\u0005d3\u0002\u01d6\u01d7\u0005\\/\u0002\u01d7\u01dc\u0003\u0002\u0002",
    "\u0002\u01d8\u01d9\u0007$\u0002\u0002\u01d9\u01dc\u0005d3\u0002\u01da",
    "\u01dc\u0007$\u0002\u0002\u01db\u01d4\u0003\u0002\u0002\u0002\u01db",
    "\u01d8\u0003\u0002\u0002\u0002\u01db\u01da\u0003\u0002\u0002\u0002\u01dc",
    "_\u0003\u0002\u0002\u0002\u01dd\u01de\b1\u0001\u0002\u01de\u01df\u0007",
    "\u0012\u0002\u0002\u01df\u01f2\u0005`1\u0010\u01e0\u01e1\u0007\u0017",
    "\u0002\u0002\u01e1\u01f2\u0005`1\u000f\u01e2\u01e3\u00052\u001a\u0002",
    "\u01e3\u01e4\u00071\u0002\u0002\u01e4\u01e6\u0003\u0002\u0002\u0002",
    "\u01e5\u01e2\u0003\u0002\u0002\u0002\u01e5\u01e6\u0003\u0002\u0002\u0002",
    "\u01e6\u01e7\u0003\u0002\u0002\u0002\u01e7\u01f2\u0005.\u0018\u0002",
    "\u01e8\u01f2\u0005&\u0014\u0002\u01e9\u01f2\u0005b2\u0002\u01ea\u01eb",
    "\u0007\u001b\u0002\u0002\u01eb\u01ec\u0005`1\u0002\u01ec\u01ed\u0007",
    "\u001c\u0002\u0002\u01ed\u01f2\u0003\u0002\u0002\u0002\u01ee\u01ef\u0005",
    "8\u001d\u0002\u01ef\u01f0\u0005`1\u0003\u01f0\u01f2\u0003\u0002\u0002",
    "\u0002\u01f1\u01dd\u0003\u0002\u0002\u0002\u01f1\u01e0\u0003\u0002\u0002",
    "\u0002\u01f1\u01e5\u0003\u0002\u0002\u0002\u01f1\u01e8\u0003\u0002\u0002",
    "\u0002\u01f1\u01e9\u0003\u0002\u0002\u0002\u01f1\u01ea\u0003\u0002\u0002",
    "\u0002\u01f1\u01ee\u0003\u0002\u0002\u0002\u01f2\u020a\u0003\u0002\u0002",
    "\u0002\u01f3\u01f4\f\u000e\u0002\u0002\u01f4\u01f5\t\u0007\u0002\u0002",
    "\u01f5\u0209\u0005`1\u000f\u01f6\u01f7\f\r\u0002\u0002\u01f7\u01f8\t",
    "\b\u0002\u0002\u01f8\u0209\u0005`1\u000e\u01f9\u01fa\f\f\u0002\u0002",
    "\u01fa\u01fb\t\t\u0002\u0002\u01fb\u0209\u0005`1\r\u01fc\u01fd\f\u000b",
    "\u0002\u0002\u01fd\u01fe\t\n\u0002\u0002\u01fe\u0209\u0005`1\f\u01ff",
    "\u0200\f\n\u0002\u0002\u0200\u0201\u0007\n\u0002\u0002\u0201\u0209\u0005",
    "`1\u000b\u0202\u0203\f\t\u0002\u0002\u0203\u0204\u0007\t\u0002\u0002",
    "\u0204\u0209\u0005`1\n\u0205\u0206\f\b\u0002\u0002\u0206\u0207\u0007",
    "\u0011\u0002\u0002\u0207\u0209\u0005`1\t\u0208\u01f3\u0003\u0002\u0002",
    "\u0002\u0208\u01f6\u0003\u0002\u0002\u0002\u0208\u01f9\u0003\u0002\u0002",
    "\u0002\u0208\u01fc\u0003\u0002\u0002\u0002\u0208\u01ff\u0003\u0002\u0002",
    "\u0002\u0208\u0202\u0003\u0002\u0002\u0002\u0208\u0205\u0003\u0002\u0002",
    "\u0002\u0209\u020c\u0003\u0002\u0002\u0002\u020a\u0208\u0003\u0002\u0002",
    "\u0002\u020a\u020b\u0003\u0002\u0002\u0002\u020ba\u0003\u0002\u0002",
    "\u0002\u020c\u020a\u0003\u0002\u0002\u0002\u020d\u0213\t\u000b\u0002",
    "\u0002\u020e\u0213\t\f\u0002\u0002\u020f\u0213\u00072\u0002\u0002\u0210",
    "\u0213\u00075\u0002\u0002\u0211\u0213\u0007!\u0002\u0002\u0212\u020d",
    "\u0003\u0002\u0002\u0002\u0212\u020e\u0003\u0002\u0002\u0002\u0212\u020f",
    "\u0003\u0002\u0002\u0002\u0212\u0210\u0003\u0002\u0002\u0002\u0212\u0211",
    "\u0003\u0002\u0002\u0002\u0213c\u0003\u0002\u0002\u0002\u0214\u0215",
    "\u0007\u001b\u0002\u0002\u0215\u0216\u0005f4\u0002\u0216\u0217\u0007",
    "\u001c\u0002\u0002\u0217\u021e\u0003\u0002\u0002\u0002\u0218\u0219\u0007",
    "\u001b\u0002\u0002\u0219\u021e\u0005f4\u0002\u021a\u021b\u0007\u001b",
    "\u0002\u0002\u021b\u021e\u0007\u001c\u0002\u0002\u021c\u021e\u0007\u001b",
    "\u0002\u0002\u021d\u0214\u0003\u0002\u0002\u0002\u021d\u0218\u0003\u0002",
    "\u0002\u0002\u021d\u021a\u0003\u0002\u0002\u0002\u021d\u021c\u0003\u0002",
    "\u0002\u0002\u021ee\u0003\u0002\u0002\u0002\u021f\u0222\u0005b2\u0002",
    "\u0220\u0222\u0005`1\u0002\u0221\u021f\u0003\u0002\u0002\u0002\u0221",
    "\u0220\u0003\u0002\u0002\u0002\u0222g\u0003\u0002\u0002\u0002Nimsv{",
    "\u0080\u0084\u0086\u008a\u008c\u0090\u0094\u009a\u00a0\u00a5\u00a7\u00ac",
    "\u00af\u00b2\u00b7\u00ba\u00be\u00c1\u00c4\u00c8\u00d1\u00d5\u00d7\u00dc",
    "\u00e7\u00eb\u00ee\u00f3\u00f5\u00fb\u0103\u010e\u0115\u011a\u011f\u0124",
    "\u0127\u012d\u0130\u0135\u0138\u013d\u0142\u0149\u014e\u0155\u015e\u0162",
    "\u0167\u016f\u0178\u017a\u0188\u018c\u0195\u0199\u019d\u01a6\u01aa\u01b1",
    "\u01bc\u01c0\u01d0\u01db\u01e5\u01f1\u0208\u020a\u0212\u021d\u0221"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'title'", "':'", "'<<'", "'>>'", "'->'", null, 
                     "'||'", "'&&'", "'=='", "'!='", "'>'", "'<'", "'>='", 
                     "'<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'!'", 
                     "';'", "','", "'='", "'('", "')'", "'{'", "'}'", "'true'", 
                     "'false'", "'nil'", "'if'", "'else'", null, "'return'", 
                     "'new'", "'par'", "'group'", "'opt'", "'as'", "'try'", 
                     "'catch'", "'finally'", null, null, null, "'.'" ];

var symbolicNames = [ null, "TITLE", "COL", "SOPEN", "SCLOSE", "ARROW", 
                      "COLOR", "OR", "AND", "EQ", "NEQ", "GT", "LT", "GTEQ", 
                      "LTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "POW", 
                      "NOT", "SCOL", "COMMA", "ASSIGN", "OPAR", "CPAR", 
                      "OBRACE", "CBRACE", "TRUE", "FALSE", "NIL", "IF", 
                      "ELSE", "WHILE", "RETURN", "NEW", "PAR", "GROUP", 
                      "OPT", "AS", "TRY", "CATCH", "FINALLY", "STARTER_LXR", 
                      "ANNOTATION_RET", "ANNOTATION", "DOT", "ID", "INT", 
                      "FLOAT", "STRING", "CR", "SPACE", "COMMENT", "OTHER", 
                      "EVENT_PAYLOAD_LXR", "EVENT_END", "WS", "TITLE_CONTENT", 
                      "TITLE_END" ];

var ruleNames =  [ "prog", "title", "head", "group", "starterExp", "starter", 
                   "participant", "stereotype", "label", "participantType", 
                   "name", "width", "block", "ret", "divider", "stat", "par", 
                   "opt", "creation", "creationBody", "message", "messageBody", 
                   "func", "from", "to", "signature", "invocation", "assignment", 
                   "asyncMessage", "content", "construct", "type", "assignee", 
                   "methodName", "parameters", "parameter", "declaration", 
                   "tcf", "tryBlock", "catchBlock", "finallyBlock", "alt", 
                   "ifBlock", "elseIfBlock", "elseBlock", "braceBlock", 
                   "loop", "expr", "atom", "parExpr", "condition" ];

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
sequenceParser.TITLE = 1;
sequenceParser.COL = 2;
sequenceParser.SOPEN = 3;
sequenceParser.SCLOSE = 4;
sequenceParser.ARROW = 5;
sequenceParser.COLOR = 6;
sequenceParser.OR = 7;
sequenceParser.AND = 8;
sequenceParser.EQ = 9;
sequenceParser.NEQ = 10;
sequenceParser.GT = 11;
sequenceParser.LT = 12;
sequenceParser.GTEQ = 13;
sequenceParser.LTEQ = 14;
sequenceParser.PLUS = 15;
sequenceParser.MINUS = 16;
sequenceParser.MULT = 17;
sequenceParser.DIV = 18;
sequenceParser.MOD = 19;
sequenceParser.POW = 20;
sequenceParser.NOT = 21;
sequenceParser.SCOL = 22;
sequenceParser.COMMA = 23;
sequenceParser.ASSIGN = 24;
sequenceParser.OPAR = 25;
sequenceParser.CPAR = 26;
sequenceParser.OBRACE = 27;
sequenceParser.CBRACE = 28;
sequenceParser.TRUE = 29;
sequenceParser.FALSE = 30;
sequenceParser.NIL = 31;
sequenceParser.IF = 32;
sequenceParser.ELSE = 33;
sequenceParser.WHILE = 34;
sequenceParser.RETURN = 35;
sequenceParser.NEW = 36;
sequenceParser.PAR = 37;
sequenceParser.GROUP = 38;
sequenceParser.OPT = 39;
sequenceParser.AS = 40;
sequenceParser.TRY = 41;
sequenceParser.CATCH = 42;
sequenceParser.FINALLY = 43;
sequenceParser.STARTER_LXR = 44;
sequenceParser.ANNOTATION_RET = 45;
sequenceParser.ANNOTATION = 46;
sequenceParser.DOT = 47;
sequenceParser.ID = 48;
sequenceParser.INT = 49;
sequenceParser.FLOAT = 50;
sequenceParser.STRING = 51;
sequenceParser.CR = 52;
sequenceParser.SPACE = 53;
sequenceParser.COMMENT = 54;
sequenceParser.OTHER = 55;
sequenceParser.EVENT_PAYLOAD_LXR = 56;
sequenceParser.EVENT_END = 57;
sequenceParser.WS = 58;
sequenceParser.TITLE_CONTENT = 59;
sequenceParser.TITLE_END = 60;

sequenceParser.RULE_prog = 0;
sequenceParser.RULE_title = 1;
sequenceParser.RULE_head = 2;
sequenceParser.RULE_group = 3;
sequenceParser.RULE_starterExp = 4;
sequenceParser.RULE_starter = 5;
sequenceParser.RULE_participant = 6;
sequenceParser.RULE_stereotype = 7;
sequenceParser.RULE_label = 8;
sequenceParser.RULE_participantType = 9;
sequenceParser.RULE_name = 10;
sequenceParser.RULE_width = 11;
sequenceParser.RULE_block = 12;
sequenceParser.RULE_ret = 13;
sequenceParser.RULE_divider = 14;
sequenceParser.RULE_stat = 15;
sequenceParser.RULE_par = 16;
sequenceParser.RULE_opt = 17;
sequenceParser.RULE_creation = 18;
sequenceParser.RULE_creationBody = 19;
sequenceParser.RULE_message = 20;
sequenceParser.RULE_messageBody = 21;
sequenceParser.RULE_func = 22;
sequenceParser.RULE_from = 23;
sequenceParser.RULE_to = 24;
sequenceParser.RULE_signature = 25;
sequenceParser.RULE_invocation = 26;
sequenceParser.RULE_assignment = 27;
sequenceParser.RULE_asyncMessage = 28;
sequenceParser.RULE_content = 29;
sequenceParser.RULE_construct = 30;
sequenceParser.RULE_type = 31;
sequenceParser.RULE_assignee = 32;
sequenceParser.RULE_methodName = 33;
sequenceParser.RULE_parameters = 34;
sequenceParser.RULE_parameter = 35;
sequenceParser.RULE_declaration = 36;
sequenceParser.RULE_tcf = 37;
sequenceParser.RULE_tryBlock = 38;
sequenceParser.RULE_catchBlock = 39;
sequenceParser.RULE_finallyBlock = 40;
sequenceParser.RULE_alt = 41;
sequenceParser.RULE_ifBlock = 42;
sequenceParser.RULE_elseIfBlock = 43;
sequenceParser.RULE_elseBlock = 44;
sequenceParser.RULE_braceBlock = 45;
sequenceParser.RULE_loop = 46;
sequenceParser.RULE_expr = 47;
sequenceParser.RULE_atom = 48;
sequenceParser.RULE_parExpr = 49;
sequenceParser.RULE_condition = 50;


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

ProgContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
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
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.TITLE) {
                this.state = 102;
                this.title();
            }

            this.state = 105;
            this.match(sequenceParser.EOF);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.TITLE) {
                this.state = 106;
                this.title();
            }

            this.state = 109;
            this.head();
            this.state = 110;
            this.match(sequenceParser.EOF);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.TITLE) {
                this.state = 112;
                this.title();
            }

            this.state = 116;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 115;
                this.head();

            }
            this.state = 118;
            this.block();
            this.state = 119;
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


function TitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_title;
    return this;
}

TitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleContext.prototype.constructor = TitleContext;

TitleContext.prototype.TITLE = function() {
    return this.getToken(sequenceParser.TITLE, 0);
};

TitleContext.prototype.TITLE_CONTENT = function() {
    return this.getToken(sequenceParser.TITLE_CONTENT, 0);
};

TitleContext.prototype.TITLE_END = function() {
    return this.getToken(sequenceParser.TITLE_END, 0);
};

TitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTitle(this);
	}
};

TitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTitle(this);
	}
};




sequenceParser.TitleContext = TitleContext;

sequenceParser.prototype.title = function() {

    var localctx = new TitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sequenceParser.RULE_title);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(sequenceParser.TITLE);
        this.state = 124;
        this.match(sequenceParser.TITLE_CONTENT);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.TITLE_END) {
            this.state = 125;
            this.match(sequenceParser.TITLE_END);
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
    this.enterRule(localctx, 4, sequenceParser.RULE_head);
    try {
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 130; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 130;
            		this._errHandler.sync(this);
            		switch(this._input.LA(1)) {
            		case sequenceParser.GROUP:
            		    this.state = 128;
            		    this.group();
            		    break;
            		case sequenceParser.SOPEN:
            		case sequenceParser.LT:
            		case sequenceParser.ANNOTATION:
            		case sequenceParser.ID:
            		case sequenceParser.STRING:
            		    this.state = 129;
            		    this.participant();
            		    break;
            		default:
            		    throw new antlr4.error.NoViableAltException(this);
            		}
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 132; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 136;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case sequenceParser.GROUP:
                        this.state = 134;
                        this.group();
                        break;
                    case sequenceParser.SOPEN:
                    case sequenceParser.LT:
                    case sequenceParser.ANNOTATION:
                    case sequenceParser.ID:
                    case sequenceParser.STRING:
                        this.state = 135;
                        this.participant();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 140;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
            }

            this.state = 141;
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
    this.enterRule(localctx, 6, sequenceParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.state = 165;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(sequenceParser.GROUP);
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 145;
                this.name();
            }

            this.state = 148;
            this.match(sequenceParser.OBRACE);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.SOPEN || _la===sequenceParser.LT || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (sequenceParser.ANNOTATION - 46)) | (1 << (sequenceParser.ID - 46)) | (1 << (sequenceParser.STRING - 46)))) !== 0)) {
                this.state = 149;
                this.participant();
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 155;
            this.match(sequenceParser.CBRACE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 156;
            this.match(sequenceParser.GROUP);
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                this.state = 157;
                this.name();
            }

            this.state = 160;
            this.match(sequenceParser.OBRACE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 161;
            this.match(sequenceParser.GROUP);
            this.state = 163;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 162;
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

StarterExpContext.prototype.ANNOTATION = function() {
    return this.getToken(sequenceParser.ANNOTATION, 0);
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
    this.enterRule(localctx, 8, sequenceParser.RULE_starterExp);
    var _la = 0; // Token type
    try {
        this.state = 176;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.STARTER_LXR:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.match(sequenceParser.STARTER_LXR);
            this.state = 173;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.OPAR) {
                this.state = 168;
                this.match(sequenceParser.OPAR);
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===sequenceParser.ID || _la===sequenceParser.STRING) {
                    this.state = 169;
                    this.starter();
                }

                this.state = 172;
                this.match(sequenceParser.CPAR);
            }

            break;
        case sequenceParser.ANNOTATION:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(sequenceParser.ANNOTATION);
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

StarterContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
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
    this.enterRule(localctx, 10, sequenceParser.RULE_starter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
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

ParticipantContext.prototype.participantType = function() {
    return this.getTypedRuleContext(ParticipantTypeContext,0);
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

ParticipantContext.prototype.COLOR = function() {
    return this.getToken(sequenceParser.COLOR, 0);
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
    this.enterRule(localctx, 12, sequenceParser.RULE_participant);
    var _la = 0; // Token type
    try {
        this.state = 198;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.ANNOTATION) {
                this.state = 180;
                this.participantType();
            }

            this.state = 184;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SOPEN || _la===sequenceParser.LT) {
                this.state = 183;
                this.stereotype();
            }

            this.state = 186;
            this.name();
            this.state = 188;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
            if(la_===1) {
                this.state = 187;
                this.width();

            }
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.AS) {
                this.state = 190;
                this.label();
            }

            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.COLOR) {
                this.state = 193;
                this.match(sequenceParser.COLOR);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this.stereotype();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this.participantType();
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

StereotypeContext.prototype.SCLOSE = function() {
    return this.getToken(sequenceParser.SCLOSE, 0);
};

StereotypeContext.prototype.GT = function() {
    return this.getToken(sequenceParser.GT, 0);
};

StereotypeContext.prototype.LT = function() {
    return this.getToken(sequenceParser.LT, 0);
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
    this.enterRule(localctx, 14, sequenceParser.RULE_stereotype);
    var _la = 0; // Token type
    try {
        this.state = 213;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 200;
            this.match(sequenceParser.SOPEN);
            this.state = 201;
            this.name();
            this.state = 202;
            this.match(sequenceParser.SCLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(sequenceParser.SOPEN);
            this.state = 205;
            this.name();
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.GT) {
                this.state = 206;
                this.match(sequenceParser.GT);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 209;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.SOPEN || _la===sequenceParser.LT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SCLOSE || _la===sequenceParser.GT) {
                this.state = 210;
                _la = this._input.LA(1);
                if(!(_la===sequenceParser.SCLOSE || _la===sequenceParser.GT)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
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
    this.enterRule(localctx, 16, sequenceParser.RULE_label);
    try {
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 215;
            this.match(sequenceParser.AS);
            this.state = 216;
            this.name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 217;
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


function ParticipantTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_participantType;
    return this;
}

ParticipantTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantTypeContext.prototype.constructor = ParticipantTypeContext;

ParticipantTypeContext.prototype.ANNOTATION = function() {
    return this.getToken(sequenceParser.ANNOTATION, 0);
};

ParticipantTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParticipantType(this);
	}
};

ParticipantTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParticipantType(this);
	}
};




sequenceParser.ParticipantTypeContext = ParticipantTypeContext;

sequenceParser.prototype.participantType = function() {

    var localctx = new ParticipantTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, sequenceParser.RULE_participantType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(sequenceParser.ANNOTATION);
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
    this.enterRule(localctx, 20, sequenceParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
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
    this.enterRule(localctx, 22, sequenceParser.RULE_width);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
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
    this.enterRule(localctx, 24, sequenceParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 226;
            this.stat();
            this.state = 229; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.EQ) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.IF - 32)) | (1 << (sequenceParser.WHILE - 32)) | (1 << (sequenceParser.RETURN - 32)) | (1 << (sequenceParser.NEW - 32)) | (1 << (sequenceParser.PAR - 32)) | (1 << (sequenceParser.OPT - 32)) | (1 << (sequenceParser.TRY - 32)) | (1 << (sequenceParser.ANNOTATION_RET - 32)) | (1 << (sequenceParser.ID - 32)) | (1 << (sequenceParser.INT - 32)) | (1 << (sequenceParser.FLOAT - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.OTHER - 32)))) !== 0));
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

RetContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RetContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

RetContext.prototype.ANNOTATION_RET = function() {
    return this.getToken(sequenceParser.ANNOTATION_RET, 0);
};

RetContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

RetContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
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
    this.enterRule(localctx, 26, sequenceParser.RULE_ret);
    var _la = 0; // Token type
    try {
        this.state = 243;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.match(sequenceParser.RETURN);
            this.state = 233;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
            if(la_===1) {
                this.state = 232;
                this.expr(0);

            }
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.SCOL) {
                this.state = 235;
                this.match(sequenceParser.SCOL);
            }

            break;
        case sequenceParser.ANNOTATION_RET:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
            this.match(sequenceParser.ANNOTATION_RET);
            this.state = 239;
            this.asyncMessage();
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.EVENT_END) {
                this.state = 240;
                this.match(sequenceParser.EVENT_END);
            }

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


function DividerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_divider;
    return this;
}

DividerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DividerContext.prototype.constructor = DividerContext;

DividerContext.prototype.EQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.EQ);
    } else {
        return this.getToken(sequenceParser.EQ, i);
    }
};


DividerContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

DividerContext.prototype.ASSIGN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.ASSIGN);
    } else {
        return this.getToken(sequenceParser.ASSIGN, i);
    }
};


DividerContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterDivider(this);
	}
};

DividerContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitDivider(this);
	}
};




sequenceParser.DividerContext = DividerContext;

sequenceParser.prototype.divider = function() {

    var localctx = new DividerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, sequenceParser.RULE_divider);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this.match(sequenceParser.EQ);
        this.state = 249;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.EQ || _la===sequenceParser.ASSIGN) {
            this.state = 246;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.EQ || _la===sequenceParser.ASSIGN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 252;
        this.name();
        this.state = 253;
        this.match(sequenceParser.EQ);
        this.state = 257;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 254;
                _la = this._input.LA(1);
                if(!(_la===sequenceParser.EQ || _la===sequenceParser.ASSIGN)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 259;
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

StatContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

StatContext.prototype.asyncMessage = function() {
    return this.getTypedRuleContext(AsyncMessageContext,0);
};

StatContext.prototype.EVENT_END = function() {
    return this.getToken(sequenceParser.EVENT_END, 0);
};

StatContext.prototype.ret = function() {
    return this.getTypedRuleContext(RetContext,0);
};

StatContext.prototype.divider = function() {
    return this.getTypedRuleContext(DividerContext,0);
};

StatContext.prototype.tcf = function() {
    return this.getTypedRuleContext(TcfContext,0);
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
    this.enterRule(localctx, 30, sequenceParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 260;
            this.alt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 261;
            this.par();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 262;
            this.opt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 263;
            this.loop();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 264;
            this.creation();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 265;
            this.message();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 266;
            this.asyncMessage();
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===sequenceParser.EVENT_END) {
                this.state = 267;
                this.match(sequenceParser.EVENT_END);
            }

            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 270;
            this.ret();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 271;
            this.divider();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 272;
            this.tcf();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 273;
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
    this.enterRule(localctx, 32, sequenceParser.RULE_par);
    try {
        this.state = 280;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this.match(sequenceParser.PAR);
            this.state = 278;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 279;
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
    this.enterRule(localctx, 34, sequenceParser.RULE_opt);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 282;
            this.match(sequenceParser.OPT);
            this.state = 283;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 284;
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

CreationContext.prototype.creationBody = function() {
    return this.getTypedRuleContext(CreationBodyContext,0);
};

CreationContext.prototype.SCOL = function() {
    return this.getToken(sequenceParser.SCOL, 0);
};

CreationContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
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
    this.enterRule(localctx, 36, sequenceParser.RULE_creation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.creationBody();
        this.state = 290;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        if(la_===1) {
            this.state = 288;
            this.match(sequenceParser.SCOL);

        } else if(la_===2) {
            this.state = 289;
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


function CreationBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_creationBody;
    return this;
}

CreationBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreationBodyContext.prototype.constructor = CreationBodyContext;

CreationBodyContext.prototype.NEW = function() {
    return this.getToken(sequenceParser.NEW, 0);
};

CreationBodyContext.prototype.construct = function() {
    return this.getTypedRuleContext(ConstructContext,0);
};

CreationBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

CreationBodyContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

CreationBodyContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};

CreationBodyContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

CreationBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCreationBody(this);
	}
};

CreationBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCreationBody(this);
	}
};




sequenceParser.CreationBodyContext = CreationBodyContext;

sequenceParser.prototype.creationBody = function() {

    var localctx = new CreationBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, sequenceParser.RULE_creationBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (sequenceParser.TRUE - 29)) | (1 << (sequenceParser.FALSE - 29)) | (1 << (sequenceParser.NIL - 29)) | (1 << (sequenceParser.ID - 29)) | (1 << (sequenceParser.INT - 29)) | (1 << (sequenceParser.FLOAT - 29)) | (1 << (sequenceParser.STRING - 29)))) !== 0)) {
            this.state = 292;
            this.assignment();
        }

        this.state = 295;
        this.match(sequenceParser.NEW);
        this.state = 296;
        this.construct();
        this.state = 302;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        if(la_===1) {
            this.state = 297;
            this.match(sequenceParser.OPAR);
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MINUS) | (1 << sequenceParser.NOT) | (1 << sequenceParser.OPAR) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sequenceParser.NEW - 36)) | (1 << (sequenceParser.ID - 36)) | (1 << (sequenceParser.INT - 36)) | (1 << (sequenceParser.FLOAT - 36)) | (1 << (sequenceParser.STRING - 36)))) !== 0)) {
                this.state = 298;
                this.parameters();
            }

            this.state = 301;
            this.match(sequenceParser.CPAR);

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

MessageContext.prototype.messageBody = function() {
    return this.getTypedRuleContext(MessageBodyContext,0);
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
    this.enterRule(localctx, 40, sequenceParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.messageBody();
        this.state = 307;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case sequenceParser.SCOL:
        	this.state = 305;
        	this.match(sequenceParser.SCOL);
        	break;
        case sequenceParser.OBRACE:
        	this.state = 306;
        	this.braceBlock();
        	break;
        case sequenceParser.EOF:
        case sequenceParser.EQ:
        case sequenceParser.CBRACE:
        case sequenceParser.TRUE:
        case sequenceParser.FALSE:
        case sequenceParser.NIL:
        case sequenceParser.IF:
        case sequenceParser.WHILE:
        case sequenceParser.RETURN:
        case sequenceParser.NEW:
        case sequenceParser.PAR:
        case sequenceParser.OPT:
        case sequenceParser.TRY:
        case sequenceParser.ANNOTATION_RET:
        case sequenceParser.ID:
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
        case sequenceParser.STRING:
        case sequenceParser.OTHER:
        	break;
        default:
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


function MessageBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_messageBody;
    return this;
}

MessageBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageBodyContext.prototype.constructor = MessageBodyContext;

MessageBodyContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

MessageBodyContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

MessageBodyContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

MessageBodyContext.prototype.DOT = function() {
    return this.getToken(sequenceParser.DOT, 0);
};

MessageBodyContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

MessageBodyContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

MessageBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterMessageBody(this);
	}
};

MessageBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitMessageBody(this);
	}
};




sequenceParser.MessageBodyContext = MessageBodyContext;

sequenceParser.prototype.messageBody = function() {

    var localctx = new MessageBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, sequenceParser.RULE_messageBody);
    try {
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 310;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
            if(la_===1) {
                this.state = 309;
                this.assignment();

            }
            this.state = 320;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
            if(la_===1) {
                this.state = 315;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
                if(la_===1) {
                    this.state = 312;
                    this.from();
                    this.state = 313;
                    this.match(sequenceParser.ARROW);

                }
                this.state = 317;
                this.to();
                this.state = 318;
                this.match(sequenceParser.DOT);

            }
            this.state = 322;
            this.func();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.assignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 327;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
            if(la_===1) {
                this.state = 324;
                this.from();
                this.state = 325;
                this.match(sequenceParser.ARROW);

            }
            this.state = 329;
            this.to();
            this.state = 330;
            this.match(sequenceParser.DOT);
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
    this.enterRule(localctx, 44, sequenceParser.RULE_func);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.signature();
        this.state = 339;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 335;
                this.match(sequenceParser.DOT);
                this.state = 336;
                this.signature(); 
            }
            this.state = 341;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
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

FromContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
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
    this.enterRule(localctx, 46, sequenceParser.RULE_from);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
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
    this.enterRule(localctx, 48, sequenceParser.RULE_to);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
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
    this.enterRule(localctx, 50, sequenceParser.RULE_signature);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.methodName();
        this.state = 348;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
        if(la_===1) {
            this.state = 347;
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
    this.enterRule(localctx, 52, sequenceParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(sequenceParser.OPAR);
        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MINUS) | (1 << sequenceParser.NOT) | (1 << sequenceParser.OPAR) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (sequenceParser.NEW - 36)) | (1 << (sequenceParser.ID - 36)) | (1 << (sequenceParser.INT - 36)) | (1 << (sequenceParser.FLOAT - 36)) | (1 << (sequenceParser.STRING - 36)))) !== 0)) {
            this.state = 351;
            this.parameters();
        }

        this.state = 354;
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
    this.enterRule(localctx, 54, sequenceParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
        if(la_===1) {
            this.state = 356;
            this.type();

        }
        this.state = 359;
        this.assignee();
        this.state = 360;
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

AsyncMessageContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

AsyncMessageContext.prototype.COL = function() {
    return this.getToken(sequenceParser.COL, 0);
};

AsyncMessageContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

AsyncMessageContext.prototype.from = function() {
    return this.getTypedRuleContext(FromContext,0);
};

AsyncMessageContext.prototype.ARROW = function() {
    return this.getToken(sequenceParser.ARROW, 0);
};

AsyncMessageContext.prototype.MINUS = function() {
    return this.getToken(sequenceParser.MINUS, 0);
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
    this.enterRule(localctx, 56, sequenceParser.RULE_asyncMessage);
    var _la = 0; // Token type
    try {
        this.state = 376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
            if(la_===1) {
                this.state = 362;
                this.from();
                this.state = 363;
                this.match(sequenceParser.ARROW);

            }
            this.state = 367;
            this.to();
            this.state = 368;
            this.match(sequenceParser.COL);
            this.state = 369;
            this.content();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 371;
            this.from();
            this.state = 372;
            _la = this._input.LA(1);
            if(!(_la===sequenceParser.ARROW || _la===sequenceParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 374;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
            if(la_===1) {
                this.state = 373;
                this.to();

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
    this.enterRule(localctx, 58, sequenceParser.RULE_content);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(sequenceParser.EVENT_PAYLOAD_LXR);
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

ConstructContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
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
    this.enterRule(localctx, 60, sequenceParser.RULE_construct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
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

TypeContext.prototype.STRING = function() {
    return this.getToken(sequenceParser.STRING, 0);
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
    this.enterRule(localctx, 62, sequenceParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
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

AssigneeContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

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
    this.enterRule(localctx, 64, sequenceParser.RULE_assignee);
    var _la = 0; // Token type
    try {
        this.state = 394;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 384;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 385;
            this.match(sequenceParser.ID);
            this.state = 390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.COMMA) {
                this.state = 386;
                this.match(sequenceParser.COMMA);
                this.state = 387;
                this.match(sequenceParser.ID);
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 393;
            this.match(sequenceParser.STRING);
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
    this.enterRule(localctx, 66, sequenceParser.RULE_methodName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
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
    this.enterRule(localctx, 68, sequenceParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.parameter();
        this.state = 403;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 399;
                this.match(sequenceParser.COMMA);
                this.state = 400;
                this.parameter(); 
            }
            this.state = 405;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
        }

        this.state = 407;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.COMMA) {
            this.state = 406;
            this.match(sequenceParser.COMMA);
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

ParameterContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
    this.enterRule(localctx, 70, sequenceParser.RULE_parameter);
    try {
        this.state = 411;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 409;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 410;
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
    this.enterRule(localctx, 72, sequenceParser.RULE_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.type();
        this.state = 414;
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


function TcfContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_tcf;
    return this;
}

TcfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TcfContext.prototype.constructor = TcfContext;

TcfContext.prototype.tryBlock = function() {
    return this.getTypedRuleContext(TryBlockContext,0);
};

TcfContext.prototype.catchBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CatchBlockContext);
    } else {
        return this.getTypedRuleContext(CatchBlockContext,i);
    }
};

TcfContext.prototype.finallyBlock = function() {
    return this.getTypedRuleContext(FinallyBlockContext,0);
};

TcfContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTcf(this);
	}
};

TcfContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTcf(this);
	}
};




sequenceParser.TcfContext = TcfContext;

sequenceParser.prototype.tcf = function() {

    var localctx = new TcfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, sequenceParser.RULE_tcf);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.tryBlock();
        this.state = 420;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.CATCH) {
            this.state = 417;
            this.catchBlock();
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 424;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.FINALLY) {
            this.state = 423;
            this.finallyBlock();
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


function TryBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_tryBlock;
    return this;
}

TryBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TryBlockContext.prototype.constructor = TryBlockContext;

TryBlockContext.prototype.TRY = function() {
    return this.getToken(sequenceParser.TRY, 0);
};

TryBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

TryBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterTryBlock(this);
	}
};

TryBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitTryBlock(this);
	}
};




sequenceParser.TryBlockContext = TryBlockContext;

sequenceParser.prototype.tryBlock = function() {

    var localctx = new TryBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, sequenceParser.RULE_tryBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.match(sequenceParser.TRY);
        this.state = 427;
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


function CatchBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_catchBlock;
    return this;
}

CatchBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CatchBlockContext.prototype.constructor = CatchBlockContext;

CatchBlockContext.prototype.CATCH = function() {
    return this.getToken(sequenceParser.CATCH, 0);
};

CatchBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

CatchBlockContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

CatchBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterCatchBlock(this);
	}
};

CatchBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitCatchBlock(this);
	}
};




sequenceParser.CatchBlockContext = CatchBlockContext;

sequenceParser.prototype.catchBlock = function() {

    var localctx = new CatchBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, sequenceParser.RULE_catchBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 429;
        this.match(sequenceParser.CATCH);
        this.state = 431;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.OPAR) {
            this.state = 430;
            this.invocation();
        }

        this.state = 433;
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


function FinallyBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_finallyBlock;
    return this;
}

FinallyBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FinallyBlockContext.prototype.constructor = FinallyBlockContext;

FinallyBlockContext.prototype.FINALLY = function() {
    return this.getToken(sequenceParser.FINALLY, 0);
};

FinallyBlockContext.prototype.braceBlock = function() {
    return this.getTypedRuleContext(BraceBlockContext,0);
};

FinallyBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterFinallyBlock(this);
	}
};

FinallyBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitFinallyBlock(this);
	}
};




sequenceParser.FinallyBlockContext = FinallyBlockContext;

sequenceParser.prototype.finallyBlock = function() {

    var localctx = new FinallyBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, sequenceParser.RULE_finallyBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.match(sequenceParser.FINALLY);
        this.state = 436;
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
    this.enterRule(localctx, 82, sequenceParser.RULE_alt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.ifBlock();
        this.state = 442;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,65,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 439;
                this.elseIfBlock(); 
            }
            this.state = 444;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,65,this._ctx);
        }

        this.state = 446;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sequenceParser.ELSE) {
            this.state = 445;
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
    this.enterRule(localctx, 84, sequenceParser.RULE_ifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.match(sequenceParser.IF);
        this.state = 449;
        this.parExpr();
        this.state = 450;
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
    this.enterRule(localctx, 86, sequenceParser.RULE_elseIfBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.match(sequenceParser.ELSE);
        this.state = 453;
        this.match(sequenceParser.IF);
        this.state = 454;
        this.parExpr();
        this.state = 455;
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
    this.enterRule(localctx, 88, sequenceParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        this.match(sequenceParser.ELSE);
        this.state = 458;
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
    this.enterRule(localctx, 90, sequenceParser.RULE_braceBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        this.match(sequenceParser.OBRACE);
        this.state = 462;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.EQ) | (1 << sequenceParser.TRUE) | (1 << sequenceParser.FALSE) | (1 << sequenceParser.NIL))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.IF - 32)) | (1 << (sequenceParser.WHILE - 32)) | (1 << (sequenceParser.RETURN - 32)) | (1 << (sequenceParser.NEW - 32)) | (1 << (sequenceParser.PAR - 32)) | (1 << (sequenceParser.OPT - 32)) | (1 << (sequenceParser.TRY - 32)) | (1 << (sequenceParser.ANNOTATION_RET - 32)) | (1 << (sequenceParser.ID - 32)) | (1 << (sequenceParser.INT - 32)) | (1 << (sequenceParser.FLOAT - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.OTHER - 32)))) !== 0)) {
            this.state = 461;
            this.block();
        }

        this.state = 464;
        this.match(sequenceParser.CBRACE);
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
    this.enterRule(localctx, 92, sequenceParser.RULE_loop);
    try {
        this.state = 473;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 466;
            this.match(sequenceParser.WHILE);
            this.state = 467;
            this.parExpr();
            this.state = 468;
            this.braceBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 470;
            this.match(sequenceParser.WHILE);
            this.state = 471;
            this.parExpr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 472;
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

function AssignmentExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExprContext.prototype = Object.create(ExprContext.prototype);
AssignmentExprContext.prototype.constructor = AssignmentExprContext;

sequenceParser.AssignmentExprContext = AssignmentExprContext;

AssignmentExprContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

AssignmentExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
AssignmentExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterAssignmentExpr(this);
	}
};

AssignmentExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitAssignmentExpr(this);
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

FuncExprContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

FuncExprContext.prototype.DOT = function() {
    return this.getToken(sequenceParser.DOT, 0);
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


function ParenthesizedExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedExprContext.prototype = Object.create(ExprContext.prototype);
ParenthesizedExprContext.prototype.constructor = ParenthesizedExprContext;

sequenceParser.ParenthesizedExprContext = ParenthesizedExprContext;

ParenthesizedExprContext.prototype.OPAR = function() {
    return this.getToken(sequenceParser.OPAR, 0);
};

ParenthesizedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParenthesizedExprContext.prototype.CPAR = function() {
    return this.getToken(sequenceParser.CPAR, 0);
};
ParenthesizedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.enterParenthesizedExpr(this);
	}
};

ParenthesizedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceParserListener ) {
        listener.exitParenthesizedExpr(this);
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
    var _startState = 94;
    this.enterRecursionRule(localctx, 94, sequenceParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 476;
            this.match(sequenceParser.MINUS);
            this.state = 477;
            this.expr(14);
            break;

        case 2:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 478;
            this.match(sequenceParser.NOT);
            this.state = 479;
            this.expr(13);
            break;

        case 3:
            localctx = new FuncExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 483;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
            if(la_===1) {
                this.state = 480;
                this.to();
                this.state = 481;
                this.match(sequenceParser.DOT);

            }
            this.state = 485;
            this.func();
            break;

        case 4:
            localctx = new CreationExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 486;
            this.creation();
            break;

        case 5:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 487;
            this.atom();
            break;

        case 6:
            localctx = new ParenthesizedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 488;
            this.match(sequenceParser.OPAR);
            this.state = 489;
            this.expr(0);
            this.state = 490;
            this.match(sequenceParser.CPAR);
            break;

        case 7:
            localctx = new AssignmentExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 492;
            this.assignment();
            this.state = 493;
            this.expr(1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 520;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,72,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 518;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 497;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 498;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.MULT) | (1 << sequenceParser.DIV) | (1 << sequenceParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 499;
                    this.expr(13);
                    break;

                case 2:
                    localctx = new AdditiveExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 500;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 501;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.PLUS || _la===sequenceParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 502;
                    this.expr(12);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 503;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 504;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sequenceParser.GT) | (1 << sequenceParser.LT) | (1 << sequenceParser.GTEQ) | (1 << sequenceParser.LTEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 505;
                    this.expr(11);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 506;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 507;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sequenceParser.EQ || _la===sequenceParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 508;
                    this.expr(10);
                    break;

                case 5:
                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 509;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 510;
                    this.match(sequenceParser.AND);
                    this.state = 511;
                    this.expr(9);
                    break;

                case 6:
                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 512;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 513;
                    this.match(sequenceParser.OR);
                    this.state = 514;
                    this.expr(8);
                    break;

                case 7:
                    localctx = new PlusExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sequenceParser.RULE_expr);
                    this.state = 515;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 516;
                    this.match(sequenceParser.PLUS);
                    this.state = 517;
                    this.expr(7);
                    break;

                } 
            }
            this.state = 522;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,72,this._ctx);
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
    this.enterRule(localctx, 96, sequenceParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 528;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sequenceParser.INT:
        case sequenceParser.FLOAT:
            localctx = new NumberAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 523;
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
            this.state = 524;
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
            this.state = 525;
            this.match(sequenceParser.ID);
            break;
        case sequenceParser.STRING:
            localctx = new StringAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 526;
            this.match(sequenceParser.STRING);
            break;
        case sequenceParser.NIL:
            localctx = new NilAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 527;
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
    this.enterRule(localctx, 98, sequenceParser.RULE_parExpr);
    try {
        this.state = 539;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 530;
            this.match(sequenceParser.OPAR);
            this.state = 531;
            this.condition();
            this.state = 532;
            this.match(sequenceParser.CPAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 534;
            this.match(sequenceParser.OPAR);
            this.state = 535;
            this.condition();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 536;
            this.match(sequenceParser.OPAR);
            this.state = 537;
            this.match(sequenceParser.CPAR);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 538;
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
    this.enterRule(localctx, 100, sequenceParser.RULE_condition);
    try {
        this.state = 543;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,75,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 541;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 542;
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
	case 47:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sequenceParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 11);
		case 2:
			return this.precpred(this._ctx, 10);
		case 3:
			return this.precpred(this._ctx, 9);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sequenceParser = sequenceParser;
