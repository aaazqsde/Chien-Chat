import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListAnimalComponentComponent } from './list-animal-component/list-animal-component.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAnimalComponentComponent,
    ListAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
