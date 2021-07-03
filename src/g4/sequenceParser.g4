parser grammar sequenceParser;

options {
  tokenVocab = sequenceLexer;
}

prog
 : title? EOF                            // An empty string is a valid prog
// | LT EOF                       // Parser auto recover from this
 | title? head EOF                       // [Perf] Removing this line does not help
 | title? head? block EOF
 ;

title
 : TITLE TITLE_CONTENT TITLE_END?
 ;

head
 : (group | participant)+
 | (group | participant)* starterExp
 ;

// The following order is important.
// It ensures group { A } will not be parsed as group + anonymouseBlock.
// It seems that we should always put the longest rule at the top.
group
 : GROUP name? OBRACE participant* CBRACE
 | GROUP name? OBRACE
 | GROUP name?
 ;

// [Perf] Changing starter to name does not help.
starterExp
 : STARTER_LXR (OPAR starter? CPAR)?
 | ANNOTATION
 ;

starter
 : ID | STRING
 ;

participant
 : participantType? stereotype? name width? label?
 | stereotype
 | participantType
 ;

stereotype
 : SOPEN name SCLOSE
 | SOPEN name GT?
 | (LT | SOPEN) (GT | SCLOSE)?         // Some people may write <<>> first then put in the interface name
 ;

label
 : AS name
 | AS
 ;

participantType
 : ANNOTATION
 ;

name
 : ID | STRING
 ;

width
 : INT
 ;

// [Perf tuning] changed from stat* to stat+ according to
// https://tomassetti.me/improving-the-performance-of-an-antlr-parser/
// This change however does not improve the perf.
block
 : stat+
 ;

ret
 : RETURN expr? SCOL?
 | ANNOTATION_RET asyncMessage EVENT_END?
 ;

// Design considerations:
// 1. whether we should trigger it with == or more? Triggering it with '==' is easier for the users.
// 1. whether we should allow `== any thing including '123', ',', etc.
//    to allow this we need to go into a different mode and we have to consdier when '==' appears elsewhere.
// 1. whether this should be treated as a statement or be sent to a separate channel
divider
 : EQ (EQ|ASSIGN)* name EQ (EQ|ASSIGN)*
 ;

// [Perf] Removing par and opt would improve if/else by about 10%; consider merging loop, par and opt.
stat
 : alt
 | par
 | opt
 | loop
 | creation
 | message
 // Without 'EVENT_END' the change line char cannot match anything and results error
 // This change line is lexed as EVENT_END because it was in Event_Mode
 | asyncMessage EVENT_END?
 | ret
 | divider
 | OTHER {console.log("unknown char: " + $OTHER.text);}
 ;

par
 : PAR braceBlock
 | PAR
 ;

opt
 : OPT braceBlock
 | OPT
 ;

creation
 : creationBody (SCOL | braceBlock)?
 ;

// [Perf tuning] By removing alternative rules
// the performence improves by 1/3 (2.1s -> 1.4s).
// This means 'a = new' will be treated as error.
// [Incomplete code] The following incomplete input
// can be 'correctly'(with correct errors) parsed:
// new
// a = new
// new A(
creationBody
 : assignment? NEW construct(OPAR parameters? CPAR)?
 ;

message
 : messageBody (SCOL | braceBlock)?
 ;

messageBody
 : assignment? ((from ARROW)? to DOT)? func
 | assignment
 | (from ARROW)? to DOT   // A->B. or B.
 ;

// func is also used in exp as parameter with expr: (to DOT)? func;
func
 : signature (DOT signature)*
 ;

from
 : ID | STRING
 ;

to
 : ID | STRING
 ;

signature
 : methodName invocation?
 ;

// We have removed the alternative rule with single OPAR as we are improving the editor to always close the brackets.
invocation
 : OPAR parameters? CPAR
 ;

assignment
 : (type? assignee ASSIGN)
 ;

asyncMessage
 : (from ARROW)? to COL content
 | from (MINUS | ARROW) to?
 ;

content
 : EVENT_PAYLOAD_LXR
 ;

construct
 : ID | STRING
 ;

type
 : ID | STRING
 ;

assignee
 : atom | (ID (COMMA ID)*) | STRING
 ;

methodName
 : ID | STRING
 ;

parameters
 : parameter (COMMA parameter)* COMMA?
 ;

parameter
 : declaration | expr
 ;

declaration
 : type ID
 ;

alt
 : ifBlock elseIfBlock* elseBlock?
 ;

ifBlock
 : IF parExpr braceBlock
 ;

elseIfBlock
 : ELSE IF parExpr braceBlock
 ;

elseBlock
 : ELSE braceBlock
 ;

// [Perf] After removed 'OBRACE' rule, 'A.m {' is parsed as three messages.
// We have improved our editors to always add the closing bracket (except for JetBrains IDE plugin).
// Note this different from what the ANTLR plugin gives.
braceBlock
 : OBRACE block? CBRACE
 ;

loop
 : WHILE parExpr braceBlock
 | WHILE parExpr
 | WHILE
 ;

// [Perf tuning] Merging expr op expr does not help.
// Removing `func` and `creation` could improve by 5 ~ 10%, but we cannot do that.
expr
 : MINUS expr                           #unaryMinusExpr
 | NOT expr                             #notExpr
 | expr op=(MULT | DIV | MOD) expr      #multiplicationExpr
 | expr op=(PLUS | MINUS) expr          #additiveExpr
 | expr op=(LTEQ | GTEQ | LT | GT) expr #relationalExpr
 | expr op=(EQ | NEQ) expr              #equalityExpr
 | expr AND expr                        #andExpr
 | expr OR expr                         #orExpr
 | expr PLUS expr                       #plusExpr
 | (to DOT)? func                       #funcExpr
 | creation                             #creationExpr
 | atom                                 #atomExpr
 ;

// [Perf tuning] Merging below tokens does not help.
atom
 : (INT | FLOAT)  #numberAtom
 | (TRUE | FALSE) #booleanAtom
 | ID             #idAtom
 | STRING         #stringAtom
 | NIL            #nilAtom
 ;

// [Perf tuning] Removing alternative rules does not help.
parExpr
 : OPAR condition CPAR
 | OPAR condition
 | OPAR CPAR
 | OPAR
 ;

condition
 : atom
 | expr
 ;

