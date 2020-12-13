import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private gamesservice:GamesService
  ) { }

  ngOnInit(): void {
  }
    
  search(term:string)
  {
    this.gamesservice.getGameByGenreAndSeries( term )
        .subscribe(data =>{
            console.log(data);
        });
  }

}
