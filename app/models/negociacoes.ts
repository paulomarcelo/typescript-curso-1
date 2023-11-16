import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);        
    }

    lista(): Array<Negociacao> {
        return [...this.negociacoes]; // spread operator coloca cada elemento da lista negociacoes em uma nova lista
    }
}