import { Injectable } from '@angular/core';
import { Animal } from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';

@Injectable()

export class AnimauxService {

getAnimaux():Animal[]{
  return ANIMAUX;
}

getChiens(): Animal[]{
  let chiens: Animal[]=[];
  for (let ani of ANIMAUX){
    if (ani.type === "chien"){
      chiens.push(ani);
    }
  }
  return chiens;
}

getChats(): Animal[]{
  let chats: Animal[]=[];
  for (let ani of ANIMAUX){
    if (ani.type === "chat"){
      chats.push(ani);
    }
  }
  return chats;
}

getChat(id: number){
  let chats = this.getChats();
  for(let index=0;index<chats.length;index++){
    if(id==chats[index].id){
      return chats[index];
    }
  }
}

getChien(id: number){
  let chiens = this.getChiens();
  for(let index=0;index<chiens.length;index++){
    if(id==chiens[index].id){
      return chiens[index];
    }
  }
}


getAnimal(id:number){
  let animaux = this.getAnimaux();

  for(let index=0;index<animaux.length;index++){
    if(id==animaux[index].id){
      return animaux[index];
    }
  }
}

getNotes(): Array<number>{
  let typeArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return typeArray;
}

}
