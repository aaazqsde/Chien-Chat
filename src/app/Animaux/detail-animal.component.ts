import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Animal} from './animal';
import {ANIMAUX} from './mock-animaux';
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
      
      let id = +this.route.snapshot.params['id'];
      this.animal = this.animauxService.getAnimal(id);
    }

    goBack() {

      window.history.back();
    }
}
