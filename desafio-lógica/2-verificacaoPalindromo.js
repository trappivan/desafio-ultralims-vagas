function verificacaoPalindromo(str) {
	// Remove espaços em branco e converte a string para minúsculas
	str = str.replace(/\s/g, "").toLowerCase();

	// Inverte a string
	const strInvertida = str.split("").reverse().join("");

	// Verifica se a string original é igual à sua versão invertida
	return str === strInvertida;
}

let a = verificacaoPalindromo("arara");

console.log(a);
