import { Component } from '@angular/core';
import { Menu } from './modules/Menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu:Menu;


  public constructor(){
    this.menu= new Menu('menu')
  } 
}
