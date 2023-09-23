function previsaoRodagem() {
	const litros = parseFloat(prompt("Informe a quantidade de litros de gasolina no tanque:"));
	const kmL = parseFloat(prompt("Informe a quilometragem média por litro:"));
  
	if (isNaN(litros) || isNaN(kmL) || litros <= 0 || kmL <= 0) {
	  alert("Quantidade de litros e quilometragem média devem ser valores numéricos maiores que zero.");
	  return;
	}
  
	const estimativaKm = litros * kmL;
	alert(`Com ${litros} litros no tanque e uma quilometragem média de ${kmL} km/l, você pode rodar aproximadamente ${estimativaKm.toFixed(2)} km.`);
  }
  
  previsaoRodagem();
  