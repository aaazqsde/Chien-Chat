import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListAnimalComponent} from './list-animal/list-animal.component';
import {ListChienComponent} from './list-animal/list-chien.component';
import {ListChatComponent} from './list-animal/list-chat.component';
import {DetailAnimalComponent} from './detail-animal.component';
import {TempoComponent} from './tempo.component';
import { AnimauxService } from './animaux.service';

import {AnimauxRoutingModule} from './animaux-routing.module';

import {FormsModule} from '@angular/forms';
import {EditAnimalComponent} from './edit-animal.component';
import {AnimalFormComponent} from './animal-form.component';


@NgModule({
  imports: [CommonModule, AnimauxRoutingModule, FormsModule],
  declarations: [
    ListAnimalComponent,
    ListChienComponent,
    ListChatComponent,
    DetailAnimalComponent,
    TempoComponent,
    EditAnimalComponent,
    AnimalFormComponent
  ],
  providers: [AnimauxService]
})
export class AnimauxModule {}
