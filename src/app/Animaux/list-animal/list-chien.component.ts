import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-chien',
  templateUrl: './list-chien.component.html'
})
export class ListChienComponent implements OnInit {

  animaux: Animal[]=null;
  chiens : Animal[]=null;


  constructor(private router:Router) { }

  ngOnInit():void {
    this.animaux=ANIMAUX;
    this.chiens=[];

      for (let ani of this.animaux){
        if (ani.type==="chien"){
          this.chiens.push(ani);
        }
      }

  }
  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['chiens', animal.id];
    this.router.navigate(link);
  }

}
