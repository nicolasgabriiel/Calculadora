// Função que insere os numeros no html, o parametro num está dentro da função onclick no html
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

    var resultado = document.getElementById('resultado').innerHTML;
    console.log(resultado.length);

//Esse if serve para a conta não passar de determinado número de caracteres
    if(resultado.length == 15){
        alert('Essa calculadora não aceita mais números do que isso, tente calculos mais simples. Por favor não tente prosseguir inserindo mais números')
    }else if(resultado.length > 15){
        clean()
    }
}
//Essa função serve para limpar o html
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
//Essa função serve para apagar o ultimo digito exibido
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
//Essa função verifica se existe numeros sendo exibido, transforma a string, faz o calculo e exibe o resultado
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado != ""){
        
        document.getElementById('resultado').innerHTML = eval(resultado);
      
    }else{
      
        document.getElementById('resultado').innerHTML = ""
  
    }
    console.log(resultado.length)
}

//Armazenando os botoes em lista


const teclas = document.querySelectorAll('.tecla')

console.log(teclas)





























































