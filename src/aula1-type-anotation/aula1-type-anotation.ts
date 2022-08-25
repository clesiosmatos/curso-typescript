/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Clesio';
let idade: number = 10;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4];
let arrayDeNumeros2: number[] = [1, 2, 3, 4];
let arrayDeStrings: Array<string> = ['Clesio', 'Santana', 'Matos'];
let arrayDeStrings2: string[] = ['Clesio', 'Santana', 'Matos'];


// Objetos
let pessoa: {
    nome: string,
    idade: number,
    adulto?: boolean
} = {
    idade: 31,
    nome: 'Clesio',
    adulto: true,
}

// Funções

function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2(2, 2));
