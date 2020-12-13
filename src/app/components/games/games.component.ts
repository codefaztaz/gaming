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
  public rating;

  constructor(
    private gamesService:GamesService,
  ) {
    this.gamesService.getListGames().subscribe( (data: any) =>{
      console.log(data.results);
      this.gameslist = data.results;
      this.rating = data.forEach(eachData =>{
        console.log('rating', eachData.results.rating);
      });
      console.log(this.rating);

      

      console.log(data.results.rating);
    });
   }

  ngOnInit(): void {
  }

  listRating()
  {
    // get all rating values from request

    // if else blocks by rating values

    // change star color by if else blocks

  }

  
}
