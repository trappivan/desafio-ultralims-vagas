function fibonacciComLoop(numero) {
	let fibonacciArray = [];

	// Adiciona os dois primeiros números da sequência
	fibonacciArray.push(1);
	fibonacciArray.push(1);

	// Constrói o restante da sequência
	for (let i = 2; i < numero; i++) {
		fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
	}

	return fibonacciArray;
}

let a = fibonacciComLoop(10);

console.log(a);
