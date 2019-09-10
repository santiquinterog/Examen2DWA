


var header = document.createElement("header");
header.setAttribute("class", "header");
var title = document.createTextNode("Sign language");
header.appendChild(title);
document.body.appendChild(header);


var main = document.createElement("main");

var divP = document.createElement("div");
divP.setAttribute("class", "divP");
main.appendChild(divP);

var divS = document.createElement("div");
divS.setAttribute("class", "divS");
main.appendChild(divS);

var letra1 = document.createElement("div");
var texto1 = document.createTextNode("V");
letra1.appendChild(texto1);
letra1.setAttribute("class", "divLetra");
var letra2 = document.createElement("div");
var texto2 = document.createTextNode("T");
letra2.appendChild(texto2);
letra2.setAttribute("class", "divLetra");
var letra3 = document.createElement("div");
var texto3 = document.createTextNode("R");
letra3.appendChild(texto3);
letra3.setAttribute("class", "divLetra");
var letra4 = document.createElement("div");
var texto4 = document.createTextNode("E");
letra4.appendChild(texto4);
letra4.setAttribute("class", "divLetra");
var letra5 = document.createElement("div");
var texto5 = document.createTextNode("W");
letra5.appendChild(texto5);
letra5.setAttribute("class", "divLetra");
var letra6 = document.createElement("div");
var texto6 = document.createTextNode("O");
letra6.appendChild(texto6);
letra6.setAttribute("class", "divLetra");
var letra7 = document.createElement("div");
var texto7 = document.createTextNode("L");
letra7.appendChild(texto7);
letra7.setAttribute("class", "divLetra");
var letra8 = document.createElement("div");
var texto8 = document.createTextNode("I");
letra8.appendChild(texto8);
letra8.setAttribute("class", "divLetra");

divS.appendChild(letra1);
divS.appendChild(letra2);
divS.appendChild(letra3);
divS.appendChild(letra4);
divS.appendChild(letra5);
divS.appendChild(letra6);
divS.appendChild(letra7);
divS.appendChild(letra8);



document.body.appendChild(main);
