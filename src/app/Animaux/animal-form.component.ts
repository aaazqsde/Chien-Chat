import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AnimauxService} from './animaux.service';
import {Animal} from './animal';

@Component ({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html'
})
export class AnimalFormComponent implements OnInit {
    @Input() animal: Animal;
    notes: Array<number>;

    constructor(
      private animauxService:  AnimauxService,
      private router: Router
    ){}

    ngOnInit() {
      //initialisation de la propriété type
      this.notes = this.animauxService.getNotes();
    }

    hasNote(note: number): boolean {
      let index = this.animal.note.indexOf(note);
      if (~index) return true;
      else return false;
    }

      selectNote($event: any, note: number): void {
        let checked = $event.target.checked;
        if (checked) {
          this.animal.note.push(note);
        } else {
          let index = this.animal.note.indexOf(note);
          if (~index) {
            this.animal.note.splice(index,1);
          }
        }
      }

      onSubmit(): void {
        console.log('Submit form ! ');
        let link = ['./animaux', this.animal.id];
        this.router.navigate(link);
      }

}
