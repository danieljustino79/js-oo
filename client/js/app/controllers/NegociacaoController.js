class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);

        this._data = $('#data');        
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();  

        let dataFormatada = DateHelper.textoParaData(this._data.value);
        //let dataFormatada = DateHelper.textoParaData('2020-11-1a');
        if(!dataFormatada)
            throw new Error('formato errado');        

        let obj = new Negociacao(
            dataFormatada,
            this._quantidade.value,
            this._valor.value);

            console.log(obj._data)
    }
}