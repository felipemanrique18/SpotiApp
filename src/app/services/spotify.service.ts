import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private token="";
  constructor(private http:HttpClient) { 
    console.log('Spotify service listo');
   }

   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;
     const headers=new HttpHeaders({
      'Authorization':`'Bearer ${localStorage.getItem('token')}'`
    });
    return this.http.get(url,{headers})
   }
  
   getToken(){
    const promise = new Promise((resolve)=> {
      let expired_token=false;
      if(localStorage.getItem('token') && localStorage.getItem('expires_in')){
       const expira= Number(localStorage.getItem('expires_in'));
       const expiraDate=new Date();
       expiraDate.setTime(expira);
 
       if(expiraDate<new Date()){
         console.log(expiraDate);
         expired_token=true;
       }
      }else{
         expired_token=true;
      }
 
      if(expired_token){
       let token="";
       const body = 'grant_type=client_credentials&client_id=8d402360c581435ba81d16ba215565bd&client_secret=97cc666b7327407c8979fa2117fcfb9b';
       const header={'Content-Type': 'application/x-www-form-urlencoded'}
       this.http.post(`https://accounts.spotify.com/api/token`,body,{ headers: header }).subscribe((resp:any)=>{
          this.token=resp.access_token;
          localStorage.setItem('token',this.token);
          let hoy=new Date();
          hoy.setSeconds(3600);
          localStorage.setItem('expires_in', hoy.getTime().toString());
          resolve(true);
       });
      }else{
        resolve(true);
      }

    })
     return promise;
   }

   getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20').pipe(map(data=>data['albums'].items));
   }

   getArtistas(termino:string){
     return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data=>data['artists'].items));
   }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data=>data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>data['tracks']));
  }

  getTracks(termino:string){
    return this.getQuery(`search?q=${termino}&type=track`)
    .pipe(map(data=>data['tracks'].items));
  }

  getTrack(id:string){
    return this.getQuery(`tracks/${id}`);
    // .pipe(map(data=>data['tracks'].items));
  }
}
