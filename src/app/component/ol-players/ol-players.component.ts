import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/service/get-api.service';

@Component({
  selector: 'app-ol-players',
  templateUrl: './ol-players.component.html',
  styleUrls: ['./ol-players.component.scss']
})
export class OlPlayersComponent implements OnInit {
  players;

  constructor(private serviceApi: GetApiService) { }

  ngOnInit() {
    this.players = this.serviceApi.getApi()
    return this.players;
  }

}
