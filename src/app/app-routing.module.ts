import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'

import {TempoComponent} from './Animaux/tempo.component';
import {ListAnimalComponent} from './Animaux/list-animal/list-animal.component';
import {ListChienComponent} from './Animaux/list-animal/list-chien.component';
import {ListChatComponent} from './Animaux/list-animal/list-chat.component';
import {DetailAnimalComponent} from './Animaux/detail-animal.component';
import {PageNotFoundComponent} from './page-not-found.component';


const appRoutes: Routes = [
  { path: 'animaux', component: ListAnimalComponent},
  { path: 'animaux/:id', component: DetailAnimalComponent},
  { path: 'chiens', component: ListChienComponent},
  { path: 'chiens/:id', component: DetailAnimalComponent},
  { path: 'chats', component: ListChatComponent},
  { path: 'chats/:id', component: DetailAnimalComponent},
  { path: 'profil', component: TempoComponent},
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
