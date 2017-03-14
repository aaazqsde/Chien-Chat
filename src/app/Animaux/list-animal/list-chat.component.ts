import { Component, OnInit } from '@angular/core';
import { Animal }from 'app/Animaux/animal';
//import { ANIMAUX } from 'app/Animaux/mock-animaux';
import { Router } from '@angular/router';
import { AnimauxService } from 'app/Animaux/animaux.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html'
})
export class ListChatComponent implements OnInit {


  chats : Animal[]=null;


  constructor(private router:Router, private animauxService : AnimauxService) { }

  ngOnInit():void {
    this.getChats();

  }

  getChats(){
    this.animauxService.getChats().then(chats => this.chats = chats);
  }

  selectAnimal(animal:Animal):void{
    console.log('Vous avez selectionné '+ animal.nom);
    let link = ['chats', animal._id];
    this.router.navigate(link);
  }

}
