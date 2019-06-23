import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetApiService } from 'src/app/service/get-api.service';

@Component({
  selector: 'app-ol-players',
  templateUrl: './ol-players.component.html',
  styleUrls: ['./ol-players.component.scss']
})
export class OlPlayersComponent implements OnInit {
  players:Object;

  constructor(private serviceApi: GetApiService) { }

  ngOnInit() {
    this.serviceApi.getApi().subscribe(data => {
      this.players = data;
      console.log(this.players)
    });
  }

}
