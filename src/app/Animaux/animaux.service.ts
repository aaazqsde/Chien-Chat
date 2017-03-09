import { Injectable } from '@angular/core';
import { Animal } from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';

@Injectable()

export class AnimauxService {

getAnimaux():Animal[]{
  return ANIMAUX;
}
getAnimal(id:number){
  let animaux = this.getAnimaux();

  for(let index=0;index<animaux.length;index++){
    if(id==animaux[index].id){
      return animaux[index];
    }
  }
}

}
