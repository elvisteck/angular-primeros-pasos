import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string[] = ['Elvisteck','Elviscocho', 'Elvisturi'];
  public removedHero?:string;

  public removeLastHero():void {
    this.removedHero = this.heroesNames.pop();
  }

}
