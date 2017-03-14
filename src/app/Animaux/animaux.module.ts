import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListAnimalComponent} from './list-animal/list-animal.component';
import {ListChienComponent} from './list-animal/list-chien.component';
import {ListChatComponent} from './list-animal/list-chat.component';
import {DetailAnimalComponent} from './detail-animal.component';
import {TempoComponent} from './tempo.component';
import { AnimauxService } from './animaux.service';

import {AnimauxRoutingModule} from './animaux-routing.module';


@NgModule({
  imports: [CommonModule, AnimauxRoutingModule],
  declarations: [
    ListAnimalComponent,
    ListChienComponent,
    ListChatComponent,
    DetailAnimalComponent,
    TempoComponent
  ],
  providers: [AnimauxService]
})
export class AnimauxModule {}
