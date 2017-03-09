import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';
import { AnimauxService } from 'app/Animaux/animaux.service';


@Component({
  selector: 'app-list-chien',
  templateUrl: './list-chien.component.html'
})
export class ListChienComponent implements OnInit {

  animaux: Animal[]=null;
  chiens : Animal[]=null;


  constructor(private router:Router, private animauxService : AnimauxService) { }

  ngOnInit():void {
    this.getChiens();

  }

  getChiens(){
    this.chiens=this.animauxService.getChiens();
  }


  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['chiens', animal.id];
    this.router.navigate(link);
  }

}
