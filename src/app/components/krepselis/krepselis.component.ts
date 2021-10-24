import { Component, Input, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/Preke';

@Component({
  selector: 'app-krepselis',
  templateUrl: './krepselis.component.html',
  styleUrls: ['./krepselis.component.scss']
})
export class KrepselisComponent implements OnInit {
  @Input()
  public prekes?: Preke[];

    constructor() { }

  ngOnInit(): void {
  }

  public krepselioKiekis():number{
    let kiekis = 0;
    this.prekes?.forEach((preke)=>{
      kiekis += preke.count;
    })
    return kiekis;
  }

  public krepselioTurinys():Preke[]{
    const krepselioPrekes:Preke[]=[];
    this.prekes?.forEach((preke)=>{
      if (preke.count > 0){
        krepselioPrekes.push(preke);
      }; 
    })
    return krepselioPrekes;
  }

}
