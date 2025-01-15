function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);//Essa variavel vai receber o valor do input 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){ // i é a variavel de controle, começa com 0, e termina quando a quantidade for maior que i
        numero = obterNumeroAleatorio(de, ate);// Essa variavel vai receber um numero aleatorio
        sorteados.push(numero);// E vai salvar aqui, voltando para o topo para receber outro valor
    }

    alert(sorteados)
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}