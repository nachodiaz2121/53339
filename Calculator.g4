grammar Calculator;

dsl
    : accion+ EOF
    ;

accion
    : 'accion' NOMBRE '{' comando+ '}'
    ;

comando
    : 'moverArchivo' STRING STRING
    | 'usarEscaneoProfundo'
    | 'retornar' 'resultado'
    | 'notificar' STRING
    ;

NOMBRE
    : '\'' [a-zA-Z][a-zA-Z0-9_]* '\''
    ;

STRING
    : '\'' (~['\r\n])* '\''
    ;

WS
    : [ \t\r\n]+ -> skip
    ;