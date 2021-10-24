export class Preke {
       public count:number =0;
    
    public constructor(public name:string,public price:number){
        
    }
    
    public addTo():number{
        return this.count++;
    }
    public delFrom():number{
        return this.count--;
    }
    public krepselyje(): boolean{
        if(this.count >0){
            return true;
    }else{
        return false;
    }
}

   
}
