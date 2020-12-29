import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public url;
  public game: Game[];
  constructor(
    private http: HttpClient
  ) { }


  

  getListGames():Observable<any>
  {
    const  url = 'https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&page_size=20&page=';
         
   //return this.http.get('https://api.rawg.io/api/games?key=ebafc84cf93047908fd202808e37a4bd?dates=2010-01-01,2020-12-31&developers=4132');
   //return this.http.get('https://api.rawg.io/api/games?&page={$ page }dates=2010-01-01,2020-12-31&&page_size=20');
  
    //params = params.append('page', page);    
  // return this.http.get('https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&page='+page ,'&page_size=20 ');
   
   return this.http.get(`https://api.rawg.io/api/games?&dates=2010-01-01,2020-12-31&page_size=20`);
  }

  getGameByGenreAndSeries(term: string)
  {
    
    return this.http.get(`https://api.rawg.io/api/games?search=${ term }dates=2010-01-01,2020-12-31&&page_size=20`);
  }


}
