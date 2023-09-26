
class Urlap{
    #adat={
        tipus:"",
        rendsz:""
    };
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        szuloElem.append(`<form>
        <label for="tipus">Tipus:</label><br>
        <input type="text" id="tipus" name="tipus" placeholder="C63"><br>
        <label for="rendsz">Rendszám</label><br>
        <input type="text" id="rendsz" name="rendsz" placeholder="ABC-123"><br><br>
        <input type="submit" class="kuld" value="Felvisz">
      </form>`);
      this.tipus=$("#tipus");
      this.rendsz=$("#rendsz");
      this.submit=$(".kuld");
      this.submit.on("click",(event)=>{
            event.preventDefault();
            this.#adatGyujt();
            this.#esemenyTrigger("hozzaAd")

      })
    }
    #adatGyujt(){
        this.#adat.tipus=this.tipus.val();
        this.#adat.rendsz=this.rendsz.val();
        //console.log(this.#adat);
    }
    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat });
        window.dispatchEvent(esemeny);
    }
}
export default Urlap;