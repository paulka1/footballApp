import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  getApi(): Observable<any> {
    return this.http.get("https://www.balldontlie.io/api/v1/players");
  }
}
