export default class BurgerBuilder {
    private _beefCut: string;
    private _burgerHasPickles: boolean;

    private readonly BrisketCut = "Brisket"; 
    private readonly LoinCut = "Loin";
    
    constructor(){
        this._beefCut = this.LoinCut;
        this._burgerHasPickles = false;
    }

    Build(){
        console.log("Beef type: ", this._beefCut);
        console.log("Do I have pickles ",this. _burgerHasPickles ? "yes" : "no");
    }

    WithBrisket(){
        this._beefCut = this.BrisketCut;
        return this;
    }

    WithLoin(){
        this._beefCut = this.LoinCut;
        return this;
    }

    WithPickles(){
        this._burgerHasPickles = true;
        return this;
    }

    WithoutPickles(){
        this._burgerHasPickles = false;
        return this;
    }

}