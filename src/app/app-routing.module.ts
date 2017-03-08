import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'
import {TestComponent} from './Animaux/test.component';
import {TempoComponent} from './Animaux/tempo.component';

const appRoutes: Routes = [
  { path: 'animaux', component: TestComponent},
  { path: 'chiens', component: TempoComponent},
  { path: 'chats', component: TempoComponent},
  { path: 'profil', component: TempoComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
