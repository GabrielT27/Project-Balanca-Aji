const palletCHEP = (quantidadeCHEP) => quantidadeCHEP * 25;
const palletPBR = (quantidadePBR) => quantidadePBR * 25;
const palletIMPORTADO = (quantidadeIMPORTADO) => quantidadeIMPORTADO * 29;
const palletMADEIRA = (quantidadeMADEIRA) => quantidadeMADEIRA * 25;

const select = document.getElementById('tipoPallet');
const quantidadeInput = document.getElementById('quantidade');
const resultado = document.getElementById('resultado');
const botaoCalcular = document.getElementById('calcular');

let total = 0;


botaoCalcular.addEventListener('click', () => {
    const quantidade = parseInt(quantidadeInput.value);
    const tipoPallet = select.value;

    if (isNaN(quantidade)) {
        resultado.innerHTML = (`Digite um número válido!`);
        return;
    }

   




switch(tipoPallet) {
    case 'palletCHEP': 
    total = palletCHEP(quantidade);
    break;

    case 'palletPBR': 
    total = palletPBR(quantidade);
    break;

    case 'palletIMPORTADO':
    total = palletIMPORTADO(quantidade);
    break;

    case 'palletMADEIRA':
    total = palletMADEIRA(quantidade);
    break;

    default: 
    alert ('tipo inválido');

}


    resultado.innerHTML = `Peso de pallets: ${total} kg`;



    })


    const botaoCalcularTotal = document.getElementById('calcularTotal');
    const pesoPesagemInput = document.getElementById('pesoPesagem')
    const resultadoF = document.getElementById('resultadoF');


    botaoCalcularTotal.addEventListener('click', () => {

        const pesoPesagem = parseInt(pesoPesagemInput.value);
        const pesoFinal = pesoPesagem + total;

        if (isNaN(pesoPesagem)) {
            resultadoF.innerHTML = (`Adicione um número válido!`);
            return;
        }

        resultadoF.innerHTML = `Peso total da pesagem: ${pesoFinal}Kg`;

});
