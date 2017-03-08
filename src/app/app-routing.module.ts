import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'

import {TempoComponent} from './Animaux/tempo.component';
import {ListAnimalComponent} from './Animaux/list-animal/list-animal.component';
import {ListChienComponent} from './Animaux/list-animal/list-chien.component';
import {ListChatComponent} from './Animaux/list-animal/list-chat.component';

const appRoutes: Routes = [
  { path: 'animaux', component: ListAnimalComponent},
  { path: 'chiens', component: ListChienComponent},
  { path: 'chats', component: ListChatComponent},
  { path: 'profil', component: TempoComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
