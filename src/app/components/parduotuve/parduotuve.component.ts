import { Component, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/Preke';
import { PrekeComponent } from '../preke/preke.component';

@Component({
  selector: 'app-parduotuve',
  templateUrl: './parduotuve.component.html',
  styleUrls: ['./parduotuve.component.scss']
})
export class ParduotuveComponent implements OnInit {
  public prekes: Preke[] = [];

  constructor() {
    this.prekes.push(new Preke("sonkauliai", 15))
    this.prekes.push(new Preke("midijos", 25))
   }

  ngOnInit(): void {
  }

}
