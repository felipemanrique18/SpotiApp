import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  messageError:string;

  constructor(private spotify:SpotifyService) { 
    this.loading=true;
    this.error=false;
    this.spotify.getToken().then(()=>{
        this.spotify.getNewReleases().subscribe((data:any)=>{
          this.nuevasCanciones=data;
          
        },(errorServicio=>{
          this.error=true;
          this.messageError=errorServicio.error.error.message;
        }));
        this.loading=false;
    });
    
  }

  ngOnInit(): void {
  }

}
