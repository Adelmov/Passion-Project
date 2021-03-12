import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log ('spotify services ready')
   }
   getQuery ( query: string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDgJTYiqCgwThKlH1kj4U0wma4tZNvHah-CvbMz7axR-cLgJJ4VTzjQHL_evFQfTFYaI0s2cN_Z8et6KPo"'
   });
   return this.http.get(url,{headers});
   }

   getNewReleases() {

    // const headers = new HttpHeaders({
    //    'Authorization' : 'Bearer BQBZMoX-PvyLzkGx23pEDIF9JfRuz-X-OKcoZ0RFRNhzKZ1TUZK9lLvAptmxwPvXYpimgWy1USLLCBkSH1I'
    // });
    return this.getQuery ('browse/new-releases')
    .pipe(map((data: any)=> {
      return data.albums.items;
    }));
    // return this.http.get('https://api.spotify.com/v1/', { headers})
    //  .pipe(map((data: any)=> {
    //    return data.albums.items;
    //  }));
     
  }

  getArtists( artistsr: string){
    return this.getQuery(`search?q=${artistsr}&type=artist&limit=30`)
    .pipe(map( (data: any )=> {
      return data['artists'].items}));
  }
      // const headers = new HttpHeaders({
      //   'Authorization' : 'Bearer BQBZMoX-PvyLzkGx23pEDIF9JfRuz-X-OKcoZ0RFRNhzKZ1TUZK9lLvAptmxwPvXYpimgWy1USLLCBkSH1I'
      // })
 
    //   return this.http.get(`https://api.spotify.com/v1/search?q=${artistsr}&type=artist&limit=20`, { headers})
    //   .pipe(map( (data: any )=> {
    //     return data['artists'].items}));
    // }
    getArtist( id: string) {
      return this.getQuery(`artists/${id}`);
    }
    getTopTracks( id: string) {
      return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map( (data: any )=> {
        return data['tracks']}));
    }
}
  
