import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {

  animaux: Animal[]=null;


  constructor(private router:Router) { }

  ngOnInit():void {
    this.animaux=ANIMAUX;
  }
  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['animaux.html', animal.id];
    this.router.navigate(link);
  }

}
