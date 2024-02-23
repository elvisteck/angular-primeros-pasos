import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h1>Counter: {{counter}}</h1>
    <br>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {

  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

  constructor() { }
}
