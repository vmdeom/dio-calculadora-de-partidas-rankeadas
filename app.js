let vitorias = 0;
let derrotas = 0;
let nivel = ''

function calculaSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

saldo = calculaSaldo(vitorias, derrotas);

if(saldo < 10){
    nivel = 'Ferro'
}
else if(saldo > 10 && saldo <= 20){
    nivel = 'Bronze'
}
else if(saldo > 20 && saldo <= 50){
    nivel = 'Prata'
}
else if(saldo > 50 && saldo <= 80){
    nivel = 'Ouro'
}
else if(saldo > 80 && saldo <= 90){
    nivel = 'Diamante'
}
else if(saldo > 90 && saldo <= 100){
    nivel = 'Lendário'
}
else if(saldo >= 101){
    nivel = 'Imortal'
}

console.log("O Herói tem de saldo de " + saldo + ", e está no nível de " + nivel)