import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Animal} from './animal';
import {AnimauxService} from './animaux.service';

@Component ({
  selector: "edit-animal",
  template: `
    <h2 class="header center">Editer {{animal?.nom}}</h2>
    <animal-form [animal]="animal"></animal-form>

  `
})
export class EditAnimalComponent implements OnInit {

  animal: Animal = null;

  constructor (
    private route: ActivatedRoute,
    private animauxService: AnimauxService
  ){}

  ngOnInit():void {
    let id = +this.route.snapshot.params['id'];
    this.animal = this.animauxService.getAnimal(id);
  }

}
