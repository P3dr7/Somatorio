function somatorioDivisiveis(numero) {
	let somatorio = 0;

	for (let i = 1; i < numero; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			console.log("Somatorio: ", somatorio, " + ", i);
			somatorio += i;
		}
	}

	return somatorio;
}

// Exemplo de uso
let resultado = somatorioDivisiveis(10);
console.log("Resultado Somatorio:", resultado);
