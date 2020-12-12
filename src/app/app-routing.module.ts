import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { GamesComponent} from './components/games/games.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GamesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
