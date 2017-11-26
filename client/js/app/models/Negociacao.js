class Negociacao{
    constructor(d, q, v){
        this._data = d;
        this._quantidade = q;
        this._valor = v;
    }

    getData(){
        return this._data
    }

    getQuantidade(){
        return this._quantidade
    }

    getValor(){
        return this._valor
    }

    obtemVolume(){
        return this._quantidade * this._valor;
    }
}