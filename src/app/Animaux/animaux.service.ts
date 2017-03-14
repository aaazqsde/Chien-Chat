import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Animal } from './animal';
//import { ANIMAUX } from 'app/Animaux/mock-animaux';

@Injectable()

export class AnimauxService {

  //private headers = new Headers({'Content-Type':'application/json'});
  private animauxUrl = 'http://localhost:3000/animaux';
  private chienUrl = 'http://localhost:3000/chiens';
  private chatUrl = 'http://localhost:3000/chats';

  constructor(private http: Http) {}

getAnimaux():Promise<Animal[]>{
  return this.http.get(this.animauxUrl)
              .toPromise()
              .then(response => response.json() as Animal[])
}


getAnimal(id:string): Promise<Animal>{

  return this.http.get(this.animauxUrl + id)
              .toPromise()
              .then(response => response.json() as Animal)

}
getChiens():Promise <Animal[]>{
  return this.http.get(this.chienUrl)
              .toPromise()
              .then(response => response.json() as Animal[])

}
getChats():Promise <Animal[]>{
  return this.http.get(this.chatUrl)
              .toPromise()
              .then(response => response.json() as Animal[])

}
/*
getChiens():Promise <Animal[]>{
  let animaux = this.http.get(this.chienUrl)
              .toPromise()
              .then(response => response.json() as Animal[])
  let chiens: Animal[]=[];
  for (let ani of animaux){
    if (ani.type === "chien"){
      chiens.push(ani);
    }
  }
  return chiens
}
/*
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



*/

getNotes(): Array<number>{
  let typeArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return typeArray;
}

}
