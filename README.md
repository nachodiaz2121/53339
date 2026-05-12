# Analizador DSL con ANTLR4 + JavaScript

Implementación de un analizador léxico y sintáctico utilizando **ANTLR4** y **Node.js** para el lenguaje DSL asignado (Tema 25914_13).

---

## Requisitos

- Node.js
- Java 17 o superior

---

## Estructura del proyecto

```text
ssl-antlr-calculator/
│
├── ejemplos/
│   ├── ejemplo_valido_1.txt
│   ├── ejemplo_valido_2.txt
│   ├── ejemplo_invalido_1.txt
│   └── ejemplo_invalido_2.txt
│
├── generated/
├── Calculator.g4
├── index.js
├── input.txt
├── package.json
├── package-lock.json
├── antlr-4.13.2-complete.jar
└── README.md
```

---

## Gramática soportada

```ebnf
<DSL>          ::= <Accion>+
<Accion>       ::= "accion" <NombreAccion> "{" <Comando>+ "}"
<NombreAccion> ::= "'" <Identificador> "'"
<Comando>      ::= "moverArchivo" "'" <Ruta> "'" "'" <Ruta> "'"
                 | "usarEscaneoProfundo"
                 | "retornar" "resultado"
                 | "notificar" "'" <Mensaje> "'"
```

---

## Generar archivos ANTLR

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated Calculator.g4
```

---

## Ejecutar el analizador

### Archivo por defecto

```bash
node index.js
```

### Ejecutar ejemplos

```bash
node index.js ejemplos/ejemplo_valido_1.txt
```

```bash
node index.js ejemplos/ejemplo_valido_2.txt
```

```bash
node index.js ejemplos/ejemplo_invalido_1.txt
```

```bash
node index.js ejemplos/ejemplo_invalido_2.txt
```

---

## Funcionalidades

El analizador permite:

- Análisis léxico
- Análisis sintáctico
- Tabla de tokens
- Generación de árbol sintáctico
- Interpretación del DSL
- Detección de errores sintácticos
---

## Ejemplo de salida

```text
ANALISIS SINTACTICO
---------------------
Entrada válida
```