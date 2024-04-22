function encontrarNumeroNaoRepetido(array) {
	let freq = {};

	for (let num of array) {
		freq[num] = (freq[num] || 0) + 1;
	}
	let arrayfreq = [];
	for (let key in freq) {
		if (freq[key] !== 3) {
			arrayfreq.push(key);
		}
	}
	return arrayfreq;
}

let array = [5, 3, 4, 3, 5, 5, 533, 32, 123123, 1323, 123, 123, 123, 123, 3, 0];
let numeroNaoRepetido = encontrarNumeroNaoRepetido(array);
console.log("O número não repetido é:", numeroNaoRepetido);
