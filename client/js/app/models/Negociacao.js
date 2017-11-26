class Negociacao{
    constructor(d, q, v){
        this.data = d;
        this.quantidade = q;
        this.valor = v;
    }

    obtemVolume(){
        return this.quantidade * this.valor;
    }
}