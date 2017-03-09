import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';
import { AnimauxService } from 'app/Animaux/animaux.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html'
})
export class ListChatComponent implements OnInit {

  animaux: Animal[]=null;
  chats : Animal[]=null;


  constructor(private router:Router, private animauxService : AnimauxService) { }

  ngOnInit():void {
    this.getChats();

  }

  getChats(){
    this.chats = this.animauxService.getChats();
  }

  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['chats', animal.id];
    this.router.navigate(link);
  }

}
