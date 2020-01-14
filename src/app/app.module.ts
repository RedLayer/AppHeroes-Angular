import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTING} from './app.routes';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroesService} from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
