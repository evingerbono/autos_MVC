class Model{
    #List
    adat={}
    constructor(lista){
        this.#List=lista;
    }
    hozzaAd(adat){
        this.#List.push(adat);
    }
    getList(){
        return this.#List;
    }
}
export default Model;