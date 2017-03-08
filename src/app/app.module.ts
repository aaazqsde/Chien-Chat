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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    TempoComponent,


    // ListAnimauxComponent


    ListAnimalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
