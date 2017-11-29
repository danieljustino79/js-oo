class DateHelper{
    //formato yyyy-mm-dd
    static dataTestaFormatoDigito(texto){
        //(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])) mais coerente
        return ( ! /\d{4}-\d{2}-\d{2}/.test(texto)) ? false : texto;        
    }
    static textoParaData(texto){
        if( ! this.dataTestaFormatoDigito(texto))
            return false;       
        else
            return new Date(texto.split('-'));
    }
}