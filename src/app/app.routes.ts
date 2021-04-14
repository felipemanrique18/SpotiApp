import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { TrackComponent } from './components/track/track.component';
import { TracksComponent } from './components/tracks/tracks.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'tracks', component:TracksComponent },
  { path: 'track/:id', component:TrackComponent },
  { path: '', pathMatch:'full', redirectTo:'home'},
  { path: '**', pathMatch:'full', redirectTo:'home'},

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }