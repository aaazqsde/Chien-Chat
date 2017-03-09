import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html'
})
export class ListChatComponent implements OnInit {

  animaux: Animal[]=null;
  chats : Animal[]=null;


  constructor(private router:Router) { }

  ngOnInit():void {
    this.animaux=ANIMAUX;
    this.chats=[];

      for (let ani of this.animaux){
        if (ani.type==="chat"){
          this.chats.push(ani);
        }
      }

  }
  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['chats', animal.id];
    this.router.navigate(link);
  }

}
