import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Animal} from './animal';
//import {ANIMAUX} from './mock-animaux';
import { AnimauxService } from './animaux.service';


@Component ({
  selector: 'detail-animal',
  templateUrl: "./detail-animal.component.html"
})

export class DetailAnimalComponent implements OnInit {

    animaux: Animal[] = null;
    animal: Animal = null;


    constructor (private route: ActivatedRoute, private router: Router, private animauxService: AnimauxService) {}

    ngOnInit() {
      this.getAnimal();
      console.log(this.animal);

  }

  getAnimal():void {
    this.route.params.forEach((params: Params) => {

    let id =  params ['id'];
    this.animauxService.getAnimal('/'+id).then(response => {this.animal = response[0]});
      console.log(this.animal);
  });
}

    goBack() {

      window.history.back();
    }
}
