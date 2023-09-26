class Model{
    #List=[]
    constructor(){
        
    }
    hozzaAd(adat){
        this.#List.push(adat);
    };

    getList(){
        return this.#List;
    };
}
export default Model;