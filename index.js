import antlr4 from 'antlr4';
import fs from 'fs';

import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';

// =================================
// LEER ARCHIVO
// =================================

const fileName = process.argv[2] || 'input.txt';

const input = fs.readFileSync(fileName, 'utf8');

// =================================
// ANALISIS LEXICO
// =================================

const chars = new antlr4.InputStream(input);

const lexer = new CalculatorLexer(chars);

console.log("TABLA DE TOKENS");
console.log("---------------------");

let token = lexer.nextToken();

while (token.type !== antlr4.Token.EOF) {

    console.log(
        `Lexema: ${token.text} -> Token: ${token.type}`
    );

    token = lexer.nextToken();
}

lexer.reset();

// =================================
// ANALISIS SINTACTICO
// =================================

const tokens =
new antlr4.CommonTokenStream(lexer);

const parser =
new CalculatorParser(tokens);

parser.buildParseTrees = true;

console.log("\nANALISIS SINTACTICO");
console.log("---------------------");

const tree = parser.dsl();

if (parser._syntaxErrors > 0) {

    console.log("Entrada inválida");

    process.exit(1);
}

console.log("Entrada válida");

console.log("Entrada válida");

// =================================
// ARBOL
// =================================

console.log("\nARBOL SINTACTICO");
console.log("---------------------");

console.log(
    tree.toStringTree(parser.ruleNames)
);

// =================================
// INTERPRETACION
// =================================

console.log("\nINTERPRETACION");
console.log("---------------------");

const lines = input.split('\n');

let currentAction = "";

for (let line of lines) {

    line = line.trim();

    if (line.startsWith("accion")) {

        const match =
        line.match(/'([^']+)'/);

        if (match) {

            currentAction = match[1];

            console.log(
                `\n▶ Acción: ${currentAction}`
            );
        }
    }

    else if (
        line.startsWith("notificar")
    ) {

        const match =
        line.match(/'([^']+)'/);

        if (match) {

            console.log(
                `NOTIFICACION: ${match[1]}`
            );
        }
    }

    else if (
        line.startsWith("moverArchivo")
    ) {

        const matches =
        [...line.matchAll(/'([^']+)'/g)];

        if (matches.length >= 2) {

            console.log(
                `Mover archivo:\n${matches[0][1]} -> ${matches[1][1]}`
            );
        }
    }

    else if (
        line.startsWith("usarEscaneoProfundo")
    ) {

        console.log(
            "Escaneo profundo activado"
        );
    }

    else if (
        line.startsWith("retornar resultado")
    ) {

        console.log(
            "Retornando resultado"
        );
    }
}