import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeAComponent } from './about-me/about-me-a/about-me-a.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import{ OurStoryComponent} from './our-story/our-story.component';
import{ OaxacaArticleComponent} from './home/oaxaca-article/oaxaca-article.component';
import { MusicComponent } from './components/music/music.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutMeComponent },
  {path: 'story', component: OurStoryComponent},
  {path: 'aboutadelmo',component: AboutMeAComponent},
  {path: 'oaxaca-article',component: OaxacaArticleComponent},
  {path: 'music', component: MusicComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
