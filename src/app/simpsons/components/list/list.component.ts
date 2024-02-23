import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'simpson-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name:'Lisa',
      age:10
    }
  ]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?:string):void {
    if (!id) return;

    console.log(id);

    this.onDelete.emit(id);
  }

 }
