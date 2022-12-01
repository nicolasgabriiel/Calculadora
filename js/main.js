
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

    var resultado = document.getElementById('resultado').innerHTML;
    console.log(resultado.length);

    if(resultado.length == 15){
        alert('Essa calculadora não aceita mais números do que isso, tente calculos mais simples. Por favor não tente prosseguir inserindo mais números')
    }else if(resultado.length > 15){
        clean()
    }
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado != "")
    {
        
        document.getElementById('resultado').innerHTML = eval(resultado);
      
    }
    else
    {
        document.getElementById('resultado').innerHTML = ""
    }
    console.log(resultado.length)

}
var resultado = document.getElementById('resultado').innerHTML;
























































