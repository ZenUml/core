parser grammar sequenceParser;

options {
  tokenVocab = sequenceLexer;
}

prog
 : EOF                            // An empty string is a valid prog
// | LT EOF                       // Parser auto recover from this
 | head EOF
 | head? block EOF
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

starterExp
 : AT STARTER_LXR OPAR starter? CPAR
 ;

starter
 : ID
 ;

participant
 : stereotype? name width? label?
 | stereotype
 | name width?
 ;

stereotype
 : SOPEN
 | SOPEN name
 | SOPEN name GT
 | SOPEN GT         // Some people may write <<>> first then put in the interface name
 | SOPEN SCLOSE
 | SOPEN name SCLOSE
 ;

label
 : AS name
 | AS
 ;

name
 : (ID | STRING)
 ;

width
 : INT
 ;

block
 : stat+ ret?
 ;

ret
 : RETURN value SCOL?
 ;

value
 : (atom | ID)
 ;

stat
 : alt
 | par
 | opt
 | loop
 | creation
 | asyncMessage
 | message
 | anonymousBlock
 | ret
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

anonymousBlock
 : braceBlock
 ;

creation
 : assignment? NEW construct(OPAR parameters? CPAR)? (SCOL | braceBlock)?
 ;

message
 : assignment? func (SCOL | braceBlock)?
 ;

/**
 * Order is impportant below. This allows the follow three status being valid:
 * a. A - participant
 * b. A. - func matched by `to DOT`
 * c. A.m - func matched `to DOT signagure`
 * Also we support chained method, such as m1().m2()
 */
func
 : (((from ARROW)? to DOT signature) | (to DOT) | (signature)) (DOT signature)*
 ;

from
 : ID
 ;

signature
 : methodName invocation?
 ;

invocation
 : OPAR
 | OPAR parameters? CPAR
 ;

assignment
 : (type? assignee ASSIGN)
 ;

asyncMessage
 : (source ARROW)? target COL content
 ;

content
 : EVENT_PAYLOAD_LXR EVENT_END?
 ;

source
 : ID
 ;

target
 : ID | STRING
 ;

construct
 : ID
 ;

type
 : ID
 ;

assignee
 : (ID (COMMA ID)*) | STRING
 ;

to
 : ID | STRING
 ;

methodName
 : ID | STRING
 ;

parameters
 : parameter (COMMA parameter)*
 ;

parameter
 : declaration | ID | atom | expr | creation
 ;

declaration
 : type ID
 ;

alt
 : ifBlock elseIfBlock* elseBlock?
 ;

ifBlock
 : IF parExpr braceBlock
 | IF parExpr
 | IF
 ;

elseIfBlock
 : ELSE IF parExpr braceBlock
 | ELSE IF parExpr
 | ELSE IF
 ;

elseBlock
 : ELSE braceBlock
 | ELSE
 ;

braceBlock
 : OBRACE block? CBRACE
 | OBRACE
 ;

loop
 : WHILE parExpr braceBlock
 | WHILE parExpr
 | WHILE
 ;

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
 | func                                 #funcExpr
 | creation                             #creationExpr
 | atom                                 #atomExpr
 ;

atom
 : (INT | FLOAT)  #numberAtom
 | (TRUE | FALSE) #booleanAtom
 | ID             #idAtom
 | STRING         #stringAtom
 | NIL            #nilAtom
 ;

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

