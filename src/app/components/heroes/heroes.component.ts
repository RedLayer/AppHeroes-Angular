import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _heroesServices: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();

    console.log(this.heroes);
  }

}
