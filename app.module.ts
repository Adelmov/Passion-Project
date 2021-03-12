import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { AboutMeAComponent } from './about-me/about-me-a/about-me-a.component';
import { OaxacaArticleComponent } from './home/oaxaca-article/oaxaca-article.component';
import { MusicComponent } from './components/music/music.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpotifyService} from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { SafepipePipe } from './pipes/safepipe/safepipe.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    OurStoryComponent,
    AboutMeAComponent,
    OaxacaArticleComponent,
    MusicComponent,
    ArtistComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    LoadingComponent,
    CardsComponent,
    SafepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
