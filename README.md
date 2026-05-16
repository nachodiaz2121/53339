# TP ANTLR DSL

Proyecto realizado en Node.js utilizando ANTLR4 para el análisis léxico y sintáctico de un DSL.

# Instalación

```bash
npm install
```

# Ejecución

```bash
node index.js
```

# Contenido

- Gramática ANTLR: `Calculator.g4`
- Ejemplos válidos e inválidos en la carpeta `ejemplos`
- Implementación del lexer/parser e interpretación del DSL

# Ejemplos

## Ejemplo válido 1

```bash
node index.js ejemplos/ejemplo_valido_1.txt
```

## Ejemplo válido 2

```bash
node index.js ejemplos/ejemplo_valido_2.txt
```

## Ejemplo inválido 1

```bash
node index.js ejemplos/ejemplo_invalido_1.txt
```

## Ejemplo inválido 2

```bash
node index.js ejemplos/ejemplo_invalido_2.txt
```

Los ejemplos válidos deben ser aceptados por el analizador sintáctico y los inválidos deben mostrar errores de sintaxis.