



               // Variaveis do Tipo Array e Objeto

var nome = 'John';
var sobrenome = 'Anderson';
var idade = 25;

//array = Conjunto de informações para uma unica variavel
//obs: mais utilizada para nomes de lugares, frutas e etc 
var frutas = ['laranja', 'abacaxi', 'manga'];
console.log (frutas[0, 1, ou 2])

// Length = tras a quantidades de itens que eu tenho no meu Array
console.log(frutas.length);

//objeto = Conjunto de informações para uma unica variavel
// Usado para dar informações sobre pessoas
var pessoa = {nome:'John', sobrenome:'Anderson', idade:25};
console.log(pessoa['nome', 'sobrenome' ou 'idade']);

// Outra maneira de acessar um Objeto é:
var pessoa = {nome:'John', sobrenome:'Anderson', idade:25};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

// chamanso um metado do objeto pessoa 
var pessoa = {andar: function(){
	    alert('caminhando');
	  }
	};
console.log(pessoa.andar());