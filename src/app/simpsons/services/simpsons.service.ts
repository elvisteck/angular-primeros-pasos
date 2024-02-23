import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {

  public characters:Character[] = [
    {
      id:uuid(),
      name:'Homero',
      age:40
    },
    {
      id:uuid(),
      name:'Bart',
      age:10
    },
    {
      id:uuid(),
      name:'Marge',
      age:37
    }
  ];


  public addCharacter(character:Character):void{
    const newCharacter: Character = {
      id:uuid(),
      ...character
    }
    this.characters.push(newCharacter);
    console.log('Main Page',newCharacter);
  }

  public onDeleteCharacter(id:string):void {
    this.characters = this.characters.filter(character => character.id !== id)
    console.log('Nuevo Arreglo:', this.characters);

  }

}
