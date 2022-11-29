// Pegando os botões dos temas 
const botaoTemaUm = document.getElementById('temaum')
const botaoTemaDois = document.getElementById('temadois')
const botaoTemaTres = document.getElementById('tematres')

//Constante que armazena o link do css
const link = document.getElementById('link-style')

// Funções pra quando os botoes forem acionados 
botaoTemaUm.onclick = function mudarParaTemaUm (){
    link.href = "css/themeone.css";
}
botaoTemaDois.onclick = function mudarParaTemaDois (){
    link.href = "css/themetwo.css";
}
botaoTemaTres.onclick = function mudarParaTemaTres (){
    link.href = "css/themethree.css";
}   

console.log(link)
