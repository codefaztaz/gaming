import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { Game } from '../../models/game';
//Services
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public gameslist: any[] = [];
  public game: Game;
  public genres;
  public platforms;
  public pcIcon;
  public PC;
  public Xbox;

  public rating;
  public page: number = 1;
  public totalPages;
  public next;
  public prev;
  public number_pages;
  public count;
  public nextpage;

  constructor(
    private gamesService:GamesService,
    private router: Router,
  ) {
    this.game = new Game('', '', [],  '', [], 1 );
    console.log(this.game);
    this.gamesService.getListGames(this.page).subscribe( (data: any) =>{
      console.log(data.results);
      console.log(data);
      this.gameslist = data.results;
      this.count = data.results.length;
      console.log(this.count);
      this.nextpage = data.next;
      console.log(this.nextpage);
      

            
    
      
    

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

  showIcons()
  {
    if(this.platforms[0].platform.name == 'PC')
    {
      let pcIcon = "fa fa-square";
    }
  }

  
}
