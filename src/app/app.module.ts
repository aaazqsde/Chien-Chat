import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TempoComponent} from './Animaux/tempo.component';
// import { ListAnimauxComponent } from './Animaux/list-animaux.component';
// import { ListAnimalComponentComponent } from './list-animal-component/list-animal-component.component';
import { ListAnimalComponent } from './Animaux/list-animal/list-animal.component';
import {ListChienComponent} from './Animaux/list-animal/list-chien.component';
import {ListChatComponent} from './Animaux/list-animal/list-chat.component';

import {DetailAnimalComponent} from './Animaux/detail-animal.component';
import {PageNotFoundComponent} from './page-not-found.component';

import { AuthGuard } from './auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TempoComponent,
    // ListAnimauxComponent
    ListAnimalComponent,
    ListChienComponent,
    ListChatComponent,
    DetailAnimalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
