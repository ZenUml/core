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

group
 : GROUP name?
 | GROUP name? OBRACE
 | GROUP name? OBRACE participant* CBRACE
 ;

starterExp
 : AT STARTER_LXR OPAR starter? CPAR
 ;

starter
 : ID
 ;

participant
 : stereotype? name width?
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
 ;

opt
 : OPT braceBlock
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
 ;

elseBlock
 : ELSE braceBlock
 ;

braceBlock
 : OBRACE block? CBRACE
 | OBRACE
 ;

loop
 : WHILE parExpr braceBlock
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

