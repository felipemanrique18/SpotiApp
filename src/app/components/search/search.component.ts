import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  artistas:any[]=[];
  loading:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.loading=true;
    console.log(termino);
    this.spotify.getArtistas(termino).subscribe((data:any)=>{
      console.log(data);
      this.loading=false;
      this.artistas=data;
    })
  }

}
