import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  
  @Input() items:any[]=[];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  verArtista(item:any){
    let artistaId;
    let url;

    switch(item.type){
      case 'artist':
        artistaId=item.id;
        url='/artist'
        break

      case 'track':
        artistaId=item.id;
        url='/track';
        break
      default:
        url='/artist'
        artistaId=item.artists[0].id;
      break

    }
    this.router.navigate([url,artistaId]);
  }

}
