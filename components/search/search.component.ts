import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Artistss: any[] =[];
  loading!: boolean; 
  constructor(private spotify: SpotifyService) { }
  search(artistsr: string){
    this.loading = true;
    this.spotify.getArtists(artistsr)
    .subscribe( (data: any ) => {
      this.Artistss = data;
      this.loading= false;
    });
  }
  }

