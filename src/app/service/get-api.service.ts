import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  dataFoot;

  constructor(private http: HttpClient) { }

  getApi(): Observable<any> {
    this.dataFoot= this.http.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/{league_id}").subscribe();
    return this.dataFoot
    console.log(this.dataFoot)
  }
}
