import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks:any[]=[];
  loading:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.loading=true;
    console.log(termino);
    this.spotify.getTracks(termino).subscribe((data:any)=>{
      console.log(data);
      this.loading=false;
      this.tracks=data;
    })
  }

}
