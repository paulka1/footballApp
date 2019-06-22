import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

const routes: Routes = [
  {
    path:"players-page",
    component: PlayersPageComponent
  },
  {
    path: "team-page",
    component: TeamPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
