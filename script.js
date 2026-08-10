const botoes = document.queryselectorall ("button");

botoes.foreach(function(botao)){
let curtiu = false;
botao.addEventlistener ("click, botaoClicado");
function botaoClicado(){
console.log ("fui clicado");
let texto = botao.queryselector ("span");
if (curtiu === false){
    texto.textcontent ++;
    curtiu = true;
} else {
    texto.textcontent --;
    curtiu = false;
}
}



})2