import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient
  ) { }

  getListGames()
  {
    const headers = new HttpHeaders({
     // 'API'     
    });
   //return this.http.get('https://api.rawg.io/api/games?key=ebafc84cf93047908fd202808e37a4bd?dates=2010-01-01,2020-12-31&developers=4132');
   return this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132');

  }



}
