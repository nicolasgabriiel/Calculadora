// Função que insere os numeros no html, o parametro num está dentro da função onclick no html
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

    var resultado = document.getElementById('resultado').innerHTML;
    console.log(resultado.length);
    verificarTamanho()

//Esse if serve para a conta não passar de determinado número de caracteres
   
function verificarTamanho () {
    if(resultado.length == 15){
        alert('Essa calculadora não aceita mais números do que isso, tente calculos mais simples. Por favor não tente prosseguir inserindo mais números')
    }else if(resultado.length > 15){
        clean()
    }
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
// Variaveis e constantes para pegar os elementos buttons
 let tecla;
 const dividir = document.getElementById('dividir')
 const mais = document.getElementById('mais')
 const menos = document.getElementById('menos')
 const vezes = document.getElementById('vezes')
 const ponto = document.getElementById('ponto')
 const igual = document.getElementById('calcular')
 const del = document.getElementById('del')
 const reset = document.getElementById('reset')

  //Funcionamento por teclado
  document.body.onkeydown = function(e) {
    
    //A cada ação verifica o resultado exibido
    var resultado = document.getElementById('resultado').innerHTML;

    //Função para verificar tamanho das strings da tela
    function verificarTamanho () {
        if(resultado.length == 15){
            alert('Essa calculadora não aceita mais números do que isso, tente calculos mais simples. Por favor não tente prosseguir inserindo mais números')
        }else if(resultado.length > 15){
            clean()
        }
    }
  
    //For para poder trabalhar com os botoes de 0 a 9 de maneira mais facil
    for(let i= 0 ; i < 10 ; i++){
    

    //Verifica se botoes de 0 a 9 foram precionados e executa as suas ações
    if (e.key == i){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + i ;
        
        tecla = document.getElementById('tecla' +i)
        
        //adiciona as classes para ter a sensação de ter clicado na tela
        tecla.classList.add("active")

        verificarTamanho()
    }}

// Verificam se determinados botões foram pressionados
    if (e.key == "/"){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + '/';
    
        dividir.classList.add('active')

        verificarTamanho()
    }
    
    if (e.key == "*" || e.key == 'x'){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + '*';
    
        vezes.classList.add('active')
        
        verificarTamanho()
    }

    if (e.key == "-"){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + '-';
       
                
        menos.classList.add('active')

        verificarTamanho()
    }

    if (e.key == "+"){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + '+';

        mais.classList.add('active')
        
        verificarTamanho()
    }

    if (e.key == "." || e.key == ","){ 
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + '.';
       
        ponto.classList.add('active')
        verificarTamanho()
    }

    if (e.key == "Delete"){ 
        reset.classList.add('special')
        clean()
    }

    if (e.key == "Backspace"){ 
        del.classList.add('special')
        back()
    }

    if (e.key == "="){ 
        igual.classList.add('unico')
        calcular()
        verificarTamanho()
    }
    //Sempre que apertar alguma classe após 0.2 segundos a função de remover as classes é chamada
    setTimeout(removerClasse, 200);
  }

// Função para remover as classes 
  function removerClasse(){
    for(let i = 0; i < 10; i++){

    const teclas = document.getElementById('tecla' + i)
    
    teclas.classList.remove('active') 
}
    dividir.classList.remove('active') 
    vezes.classList.remove('active') 
    mais.classList.remove('active') 
    menos.classList.remove('active') 
    ponto.classList.remove('active') 
    del.classList.remove('special')
    reset.classList.remove('special')
    igual.classList.remove('unico')
}
