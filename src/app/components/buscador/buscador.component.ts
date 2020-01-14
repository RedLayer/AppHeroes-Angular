import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  private heroes: Heroe[];
  private termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.termino = params.get('termino');
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }


  verHeroe(heroe: Heroe) {
    this.router.navigate(['/heroe', heroe.id]);
  }
}
