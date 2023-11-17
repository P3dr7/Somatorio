function somatorioDivisiveisPor3ou5(numero) {
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
let resultado = somatorioDivisiveisPor3ou5(10);
console.log("Resultado Somatorio:", resultado);
