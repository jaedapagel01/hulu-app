import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { TopCardComponent } from 'src/app/cards/topcard.component';
import { GenreCardsComponent } from 'src/app/cards/genrecards.component';
import { FooterComponent } from 'src/app/navigation/footer.component';
import { FooterTwoComponent } from 'src/app/navigation/footertwo.component';
import { AppComponent } from './app.component';
import { BcUWatchedComponent } from './cards/bcuwatched.component';
import { NomineesComponent } from './cards/nominees.component';
import { AppRoutingModule } from './app-routing.module';
import { MyStuffLayoutComponent } from './navigation/mystuff-layout.component';
import { HomeLayoutComponent } from './cards/home-layout.component';
import { TvLayoutComponent } from './navigation/tv-layout.component';
import { MoviesLayoutComponent } from './navigation/movies-layout.component';
import { NewsLayoutComponent } from './navigation/news-layout.component';
import { HubsLayoutComponent } from './navigation/hubs-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info.component';

@NgModule ({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopCardComponent,
    FooterComponent,
    FooterTwoComponent,
    GenreCardsComponent,
    BcUWatchedComponent,
    NomineesComponent,
    MyStuffLayoutComponent,
    HomeLayoutComponent,
    TvLayoutComponent,
    MoviesLayoutComponent,
    NewsLayoutComponent,
    HubsLayoutComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
