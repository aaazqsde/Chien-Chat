import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'

import {TempoComponent} from './tempo.component';
import {ListAnimalComponent} from './list-animal/list-animal.component';
import {ListChienComponent} from './list-animal/list-chien.component';
import {ListChatComponent} from './list-animal/list-chat.component';
import {DetailAnimalComponent} from './detail-animal.component';
import { EditAnimalComponent } from './edit-animal.component';



const animauxRoutes: Routes = [
  { path: 'animaux', component: ListAnimalComponent},
  { path: 'animaux/:id', component: DetailAnimalComponent},
  { path: 'chiens', component: ListChienComponent},
  { path: 'chiens/:id', component: DetailAnimalComponent},
  { path: 'chats', component: ListChatComponent},
  { path: 'chats/:id', component: DetailAnimalComponent},
  { path: 'animal/edit/:id', component:EditAnimalComponent}

];

@NgModule ({
  imports: [RouterModule.forChild(animauxRoutes)],
  exports: [RouterModule]
})

export class AnimauxRoutingModule {}
