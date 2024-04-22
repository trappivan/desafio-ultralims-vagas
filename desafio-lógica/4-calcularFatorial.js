function calcularFatorial(numero) {
	// Se o número for 0 ou 1, o fatorial é 1
	if (numero === 0 || numero === 1) {
		return 1;
	} else {
		// Inicializa o fatorial como 1
		let fatorial = 1;

		// Multiplica todos os números de 1 até o número dado para calcular o fatorial
		for (let i = 2; i <= numero; i++) {
			fatorial *= i;
		}

		return fatorial;
	}
}

let a = calcularFatorial(6);

console.log(a);
