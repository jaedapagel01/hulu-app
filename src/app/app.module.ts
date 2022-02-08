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

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopCardComponent,
    FooterComponent,
    FooterTwoComponent,
    GenreCardsComponent,
    BcUWatchedComponent,
    NomineesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
