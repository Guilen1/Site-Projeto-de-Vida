const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll ("aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {

    for (let j= 0; j <botoes.length; j++) { 
      botoes[j].classList.remove("ativo");
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempo0bjetivo1 = new Date("2026-06-10T00:00:00");
const tempo0bjetivo2 = new Date("2026-11-09T00:00:00");
const tempo0bjetivo3 = new Date("2026-12-31T00:00:00");
const tempo0bjetivo4 = new Date("2026-03-01T00:00:00");

const tempos = [tempo0bjetivo1, tempo0bjetivo2, tempo0bjetivo3, tempo0bjetivo4];


function calculaTempo (tempo0bjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempo0bjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos /60);
  let horas = Math.floor(minutos / 60); 
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}