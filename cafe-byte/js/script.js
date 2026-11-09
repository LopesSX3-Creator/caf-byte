console.log("o script do café byte foi carregado!");
const agora = new Date();
const hora = agora.getHours();
const diaDaSemana = agora.getDay();
console.log("agora são", + hora + "horas. Dia da semana: " + diaDaSemana);
function saudacao(h){
    if(h<12){
        console.log("Bom dia!");
    }else if(h<18){
        console.log("Boa tarde!");
    }else{
        console.log("Boa noite!");
    }
}
document.querySelector('#saudacao').textContent = saudacao(hora);
function estaAberto(dia, h){
    if(dia === 0){
        return false;
    }else if(dia === 6){
        return h >= 8 && h<=18;
    }else{
        return h>=7 && h<20;
    }
}
const avisoStatus = document.querySelector('#status');
if(estaAberto(diaDaSemana, hora)){
    avisoStatus.textContent  = 'estamos abertos agora';
    avisoStatus.classList.add('aberto-agora');
}else{
    avisoStatus.textContent = 'estamos fechados agora. Volte mais tarde!';
    avisoStatus.classList.add('fechado agora');
}
