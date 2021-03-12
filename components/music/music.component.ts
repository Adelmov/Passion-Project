
import { Component } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent  {
  newSongs: any []=[];
  loading: boolean;
  constructor( private spotify: SpotifyService) { 
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
       this.newSongs = data;
       this.loading = false;
      });
 }

}