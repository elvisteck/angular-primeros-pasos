import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Elvisteck';
  public age:number = 40;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} -- ${this.age}`;
  }

  public changeHero():void {
    //throw 'Metodo no implementado';
    this.name = 'Elviscocho'
  }

  public changeAge():void {
    this.age = 30;
  }

  public resetForm():void {
    this.age = 40;
    this.name = 'Elvisteck';
  }

}
