import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyStuffLayoutComponent } from './navigation/mystuff-layout.component';
import { HomeLayoutComponent } from './cards/home-layout.component';
import { TvLayoutComponent } from './navigation/tv-layout.component';
import { NewsLayoutComponent } from './navigation/news-layout.component';
import { MoviesLayoutComponent } from './navigation/movies-layout.component';
import { HubsLayoutComponent } from './navigation/hubs-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'MyStuff', component: MyStuffLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'TV', component: TvLayoutComponent},
  {path: 'Movies', component: MoviesLayoutComponent},
  {path: 'News', component: NewsLayoutComponent},
  {path: 'Hubs', component: HubsLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
