import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }

  getApi(): Observable<any> {

    // const httpHeaders = new HttpHeaders ({
    //   "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    //   "X-RapidAPI-Key": "fa4a76eb2dmshfa6edf23ce76adfp1b43d7jsn52a6606ea7c6"
    // });

    return this.http.get("https://api-football-v1.p.rapidapi.com/v2/leagues"); //{headers : httpHeaders}
  }
}
