/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b: number): number{
    return (a + b);
}

const sumerFlecha = (a:number, b:number): number =>{
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

// const resultado = multiplicar(50, 50);

// console.log(resultado);

interface PersonajeLOR{
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

function curar (personaje: PersonajeLOR, curarX: number): void{
    personaje.hp += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: `Strider`,
    hp: 50,
    mostrarHp(){
        console.log(`Puntos de vida:`, this.hp);
    }
}

curar(nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();