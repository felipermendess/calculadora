function integrar(numero){
     document.querySelector('.tela').innerHTML += numero 
}

function limpar(){
    document.querySelector(".tela").innerHTML = ''
}

function clean(){
    let tela = document.querySelector('.tela').innerHTML;

    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length - 1)
}
function igual(){
    let tela = document.querySelector('.tela').innerHTML;
    if(tela){
        document.querySelector('.tela').innerHTML = eval(tela);
    }else{
        document.querySelector('.tela').innerHTML = 'Error'
    }
}