import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'

import {TempoComponent} from './Animaux/tempo.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { AuthGuard } from './auth-guard.service';



const appRoutes: Routes = [

  { path: 'profil', component: TempoComponent , canActivate :[AuthGuard]},
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
