//Sempre que você for usar um caracter especial você predecer 
//a palavra com barra invertida:
var txt = "Não se o que \"falar\" amigos";
console.log(txt);
// Para colocar uma barra invertida no texto impresso, usa=se 
// duas barras invertidas.
var txt = "Não se o que \\ falar amigos";
console.log(txt);
// Quantidade de caracteres eu tenho na frase
var txt = "Para aprender JavaScript pesquise no Google";
 console.log(txt.length);
// Procurar a primeira palavra que esta sendo designada
//em numeradas de 0 a ...
 var txt = "Para aprender JavaScript pesquise no Google";
 console.log(txt.indexOf('aprender'));

 // Nesse caso temos duas palavras "aprender", para pegar a 
//ultima palavra usa-se: lastIndexOf
 var txt = "Para aprender JavaScript pesquise no Google aprender";
 console.log(txt.lastIndexOf('aprender'));