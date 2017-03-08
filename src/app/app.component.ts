import { Component,OnInit } from '@angular/core';
import { Animal } from './Animaux/animal';
import { ANIMAUX } from './Animaux/mock-animaux';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Comme chiens et chats !!!';
  animaux:Animal[]=null;

  ngOnInit(){
    this.animaux=ANIMAUX;
  }
  selectAnimal(animal:Animal) {
    console.log('vous avez selectionné '+ animal.nom);
  }

}
