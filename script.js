//=============== Aula do dia 05-09-2025======
// definir  o valor

const precoGasolina = 6.10;
const precoEtanol = 5.99;
const precoDiesel = 6.09;


//============================================

//funções

function atualizaValor(){
	let tipo = document.getElementById("combustivel").value;
	console.log(tipo);
	let precoPorLitro;

	switch(tipo){
		case"gasolina":
		precoPorLitro = precoGasolina;
		break;

		case"etanol":
		precoPorLitro = precoEtanol;
		break;

		case"diesel":
		precoPorLitro = precoDiesel;
		break;
	}

	//Mostra no console o preço já formatado 

	console.log("precoPorLitro", precoPorLitro.toLocaleString("pt-br",{
		style:"currency",
		currency:"BRL"
	}));
	let litros = document.getElementById("litros").value;

	//chamar uma função

	calcularAbastecimento(precoPorLitro,litros);

}

function calcularAbastecimento(precoCombustivel,litros){
	let valorTotal = precoCombustivel * litros;

	//aqui Formatação em modelo Brl($)

	let valorFormatado = valorTotal.toLocaleString("pt-br",{
		style:"currency",
		currency:"BRL"
	});

	document.getElementById("resultado").textContent = valorFormatado;
}

//=============================================

//chamar
let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change",atualizaValor);
//atualizaValor();


let litros = document.getElementById("litros");
litros.addEventListener("input",atualizaValor);
