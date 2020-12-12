import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { GamesComponent} from './components/games/games.component';
import { SearchComponent} from './components/search/search.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GamesComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
