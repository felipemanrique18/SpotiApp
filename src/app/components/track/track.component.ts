import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  track:any={};
  loading:boolean;
  topTracks:any=[];
  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) { 
    this.router.params.subscribe(params=>{
      this.loading=true;
      this.getTrack(params['id']);
      // console.log(params);
    })
  }

  ngOnInit(): void {
  }
  
  getTrack(id:string){
    this.loading=true;
    this.spotify.getTrack(id).subscribe(artista=>{
      console.log(artista);
      this.track=artista;
      this.loading=false;
    })
  }
}
