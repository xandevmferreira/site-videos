import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").ariaValueMax;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))