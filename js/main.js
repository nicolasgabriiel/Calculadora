//Recebendo variavel da tela 
const exibicao = document.getElementById('numeros-exibidos')

//Recebendo Input dos botões
const teclas  = document.getElementsByClassName('tecla')


let valor;

for ( let i = 0; i < teclas.length; i++){
    teclas[i].onclick = function  (){
        console.log(teclas[i].value)
        valor = (teclas[i].value)
    }

}

let numeros = []

numeros = ['3']

numeros.push(+)

numeros.push('2')

console.log(parseInt(numeros[2]))

















