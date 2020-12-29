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
  public games: Game;
  //public game: Game;
  public genres;
  public platforms;
  public pcIcon: string = '../assets/pc.png';
  public PC;
  public Xbox: string = '../assets/xbox.png';
  public plat: string;
  public name: string;
  public title = 'Games component';
  //public carouselExampleControls: String;
  //public index: number;

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
  ) 
  {
    this.games = new Game('', '', [],  '', [], 1 );
    console.log(this.games);
    
      
         
    


  
    
      
    

  

 

  }



  ngOnInit(): void {
    this.gamesService.getListGames().subscribe( (data: any) =>{
      //console.log(data.results);
      console.log(data);
      this.games = data.results;
      //this.count = data.results.length;
      console.log(this.count);
      //this.nextpage = game.next;
      console.log(this.nextpage);
      console.log(data.results);
      console.log(data.results[0].platforms[0]);
      data.results.forEach((game) => {
        //Looping Platform for each game
        game.platforms.forEach((platform)=> { 
                //your code here
                console.log(platform);
            });
    });

  });
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
