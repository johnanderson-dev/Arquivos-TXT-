console.log(Date());

//Armazenar datas de formas diferentes

//forma numero 1

var d = new Date();

console.log(d);

//forma numero 2

//esse numero é ponto de partida da data com os milisegundos
// ele indica o dia 01/01/1970
var d = new Date(86400000);

console.log(d);

//forma numero 3

var d = new Date('Thu Mar 16 2007 10:00:39 GMT-0300 (Hora oficial do Brasil');

console.log(d);