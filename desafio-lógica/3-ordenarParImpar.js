function ordenarParesImpares(lista) {
	// Separa os números pares e ímpares
	const pares = lista.filter((num) => num % 2 === 0);
	const impares = lista.filter((num) => num % 2 !== 0);

	// Ordena os números pares e ímpares separadamente
	pares.sort((a, b) => a - b);
	impares.sort((a, b) => a - b);

	// Concatena os números pares e ímpares ordenados
	return pares.concat(impares);
}

let lista = [
	5, 3, 4, 3, 5, 5, 533, 32, 123123, 1323, 123, 123, 123, 123, 3, 0, 2, 4, 6, 7,
	8,
];

let a = ordenarParesImpares(lista);

console.log(a);
