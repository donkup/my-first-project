export class Menu {
    public name:string;
    private _addto: number =0;

    public constructor(name:string){
        this.name = name;
    }

    public addTo():void{
        this._addto++;
    }
    public delFrom():void{
        this._addto--;
    }

}
