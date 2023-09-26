import Model from "../Modell/Model.js";
import Urlap from "../View/UrlapView.js";
class Controller{

    constructor(){
        let MODEL= new Model;
        new Urlap($(".ujadat"));

        $(window).on("hozzaAd", (event) => {
            MODEL.hozzaAd(event.detail);
            console.log(MODEL.getList);
        })
    }
}
export default Controller;