lexer grammar sequenceLexer;
channels {
  COMMENT_CHANNEL
}
COL
 : ':' -> pushMode(EVENT)
 ;

SOPEN
 : '<<'
 ;

SCLOSE
 : '>>'
 ;

ARROW
 : '->'
 ;

AT : '@';
OR : '||';
AND : '&&';
EQ : '==';
NEQ : '!=';
GT : '>';
LT : '<';
GTEQ : '>=';
LTEQ : '<=';
PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';
MOD : '%';
POW : '^';
NOT : '!';

SCOL : ';';
COMMA : ',';
ASSIGN : '=';
OPAR : '(';
CPAR : ')';
OBRACE : '{';
CBRACE : '}';

TRUE : 'true';
FALSE : 'false';
NIL : 'nil';
IF : 'if';
ELSE : 'else';
WHILE : 'while' | 'for' | 'foreach' | 'forEach' | 'loop';
RETURN : 'return';
NEW: 'new';
STARTER_LXR: 'Starter';
THEME_LXR: 'Theme';
PAR : 'par';
GROUP : 'group';
OPT : 'opt';
AS : 'as';

DOT
 : '.'
 ;

ID
 : [a-zA-Z_] [a-zA-Z_0-9]*
 ;

INT
 : [0-9]+
 ;

FLOAT
 : [0-9]+ '.' [0-9]*
 | '.' [0-9]+
 ;

// As long as the text starts with double quotes, we treat it as a string before a closing double quote or change line
// This is to allow the user to keep typing - A as "a long string before closing it with quote
STRING
 : '"' (~["\r\n] | '""')* ('"'|[\r\n])?
 ;

CR
 : [\r\n] -> channel(HIDDEN)
 ;

SPACE
 : [ \t] -> channel(HIDDEN)
 ;

COMMENT
 : '//' .*? '\n' -> channel(COMMENT_CHANNEL)
 ;
OTHER
 : .
 ;

mode EVENT;

EVENT_PAYLOAD_LXR
 : ~[\r\n]+
 ;

EVENT_END
 : [\r\n] -> popMode
 ;

WS
: [ ] -> channel(HIDDEN)
;
