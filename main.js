'use strict';
const formatarDigito = (digito) => `0${digito}`.slice(-2);


const atualizar = (tempo) => {
    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");

    const qtdsegundos = tempo % 60;
    const qtdminutos = Math.floor(tempo % (60 * 60) / 60 );
    const qtdhoras = Math.floor((tempo % (60 * 60 * 24) / (60 * 60)));
    const qtddias = Math.floor((tempo / (60 * 60 * 24)));

    segundos.textContent = formatarDigito(qtdsegundos);
    minutos.textContent = formatarDigito(qtdminutos);
    horas.textContent = formatarDigito(qtdhoras);
    dias.textContent = formatarDigito(qtddias);
}

const contagemRegresiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => { 
        if (tempo == 0){
            pararContagem();
        }
       atualizar (tempo);
        tempo--;
 }
     const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    const dataEvento = new Date ('2024-07-22 20:22:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegresiva(tempoRestante());
