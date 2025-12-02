const palletCHEP = (quantidadeCHEP) => quantidadeCHEP * 25;
const palletPBR = (quantidadePBR) => quantidadePBR * 28;
const palletIMPORTADO = (quantidadeIMPORTADO) => quantidadeIMPORTADO * 24;

const select = document.getElementById('tipoPallet');
const quantidadeInput = document.getElementById('quantidade');
const resultado = document.getElementById('resultado');
const botaoCalcular = document.getElementById('calcular');


botaoCalcular.addEventListener('click', () => {
    const quantidade = parseInt(quantidadeInput.value);
    const tipoPallet = select.value;


let total = 0;


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

    default: 
    alert ('tipo inválido');

}


    resultado.innerHTML = `Total: ${total} kg`;
});
