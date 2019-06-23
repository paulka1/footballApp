import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { OlPlayersComponent } from './component/ol-players/ol-players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersPageComponent,
    TeamPageComponent,
    OlPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
