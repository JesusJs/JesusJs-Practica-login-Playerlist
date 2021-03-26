import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './list-player/players/players.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: 'players', pathMatch: 'full', component: PlayersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
