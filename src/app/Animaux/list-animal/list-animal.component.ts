import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';
import { AnimauxService } from 'app/Animaux/animaux.service';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {

  animaux: Animal[]=null;


  constructor(private router:Router , private animauxService : AnimauxService ) { }

  ngOnInit():void {
    //this.animaux=ANIMAUX;
    this.getAnimaux();
  }
  getAnimaux():void{
    this.animaux=this.animauxService.getAnimaux();
  }
  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['animaux', animal.id];
    this.router.navigate(link);
  }

}
