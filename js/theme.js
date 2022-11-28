// Pegando os botões dos temas 
const botaoTemaUm = document.getElementById('temaum')
const botaoTemaDois = document.getElementById('temadois')
const botaoTemaTres = document.getElementById('tematres')
//Constante que armazena o link do css
const link = document.getElementById('link-style')

// Funções pra quando os botoes forem acionados 
botaoTemaUm.onclick = function mudarParaTemaUm (){
    botaoTemaUm.style.backgroundColor = "#D43D31"
    botaoTemaDois.style.backgroundColor = "#252D45"
    botaoTemaTres.style.backgroundColor = "#252D45"
    
    link.href = "css/themeone.css";
}
botaoTemaDois.onclick = function mudarParaTemaDois (){
    botaoTemaUm.style.backgroundColor = "#252D45"
    botaoTemaDois.style.backgroundColor = "#D43D31"
    botaoTemaTres.style.backgroundColor = "#252D45"

    link.href = "css/themetwo.css";
}
botaoTemaTres.onclick = function mudarParaTemaTres (){
    botaoTemaUm.style.backgroundColor = "#252D45"
    botaoTemaDois.style.backgroundColor = "#252D45"
    botaoTemaTres.style.backgroundColor = "#D43D31"

    link.href = "css/themetree.css";
}   

console.log(link)
