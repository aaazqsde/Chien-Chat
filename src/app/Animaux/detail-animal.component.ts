import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Animal} from './animal';
import {ANIMAUX} from './mock-animaux';


@Component ({
  selector: 'detail-animal',
  templateUrl: "./detail-animal.component.html"
})

export class DetailAnimalComponent implements OnInit {

    animaux: Animal[] = null;
    animal: Animal = null;


    constructor (private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
      this.animaux = ANIMAUX;

      let id = +this.route.snapshot.params['id'];
      for (let i = 0; i < this.animaux.length; i++) {
        if (this.animaux[i].id == id){
          this.animal = this.animaux[i];
        }
      }
    }

    goBack() {

      window.history.back();
    }
}
