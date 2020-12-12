import { Component, OnInit } from '@angular/core';
//Services
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public gameslist: any[] = [];
  public genres;

  constructor(
    private gamesService:GamesService,
  ) {
    this.gamesService.getListGames().subscribe( (data: any) =>{
      console.log(data.results);
      this.gameslist = data.results;
      

   

    });
   }

  ngOnInit(): void {
  }

  
}
