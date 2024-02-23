import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { SimpsonsService } from '../services/simpsons.service';

@Component({
  selector: 'app-simpson-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

 constructor(private simpsonsService:SimpsonsService){};

 get characters():Character[] {
  return [...this.simpsonsService.characters]
 }

 public onDeleteCharacter(id:string):void {
  this.simpsonsService.onDeleteCharacter(id);
 }

 public onNewCharacterMain (character:Character):void {
  this.simpsonsService.addCharacter(character);
 }

}
