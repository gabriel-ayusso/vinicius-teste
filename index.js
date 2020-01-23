/**
 * Desenvolver a função fibonacci, que recebe n e calcula o enésimo
 * valor, seguindo a sequencia de fibonacci.
 * 
 * Dica: abaixo, na função, precisa ter 2 variáveis de controle:
 *   resultado - que vai somando o resultado
 *   anterior - que mantém o último número para vc poder somar.
 * @param {number} n 
 */
function fibonacci(n) {
    let x = 0;
    for (let i = 0; i < n; i++) {
        x = x + 2;
    }
    return x;
}

let argumento = process.argv[2];
let resultado = fibonacci(argumento);
console.log(resultado);