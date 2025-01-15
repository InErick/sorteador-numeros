function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);//Essa variavel vai receber o valor do input 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){ // i é a variavel de controle, começa com 0, e termina quando a quantidade for maior que i
        numero = obterNumeroAleatorio(de, ate);// Essa variavel vai receber um numero aleatorio

        while(sorteados.includes(numero)){// o inclides confere se o numero já tem no sorteados
            numero = obterNumeroAleatorio(de, ate)
        }
        sorteados.push(numero);// E vai salvar aqui, voltando para o topo para receber outro valor
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStastusBotao()
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function alterarStastusBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){// Ao reiniciar os campos serão limpos
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>`;
    alterarStastusBotao();
}