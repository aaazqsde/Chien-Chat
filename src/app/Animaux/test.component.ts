import {Component, OnInit} from '@angular/core';
import {Animal} from './animal';
import {ANIMAUX} from './mock-animaux';


@Component ({
  selector: 'test-app',
  template: `

  <ul *ngFor=" let an of animaux">

      <li>{{an.id}}</li>
      <li>{{an.type}}</li>
      <li>{{an.nom}}</li>
      <li>{{an.race}}</li>
      <li>{{an.sexe}}</li>
      <li>{{an.note}}</li>
      <li>{{an.date_de_naissance}}</li>

  </ul>

  `
})

export class TestComponent implements OnInit{


    animaux: Animal[] = null;

    ngOnInit(){
      this.animaux = ANIMAUX;
    }
}
