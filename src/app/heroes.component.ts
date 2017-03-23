import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import{OnInit} from '@angular/core';
@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  


export class HeroesComponent implements OnInit {
  title = 'Heroes Component';	
  selectedHero : Hero;
  heroes : Hero[];
  onselect( hero: Hero): void {
  	this.selectedHero = hero;
  };
constructor(private heroService : HeroService) {};
 getHeroes () : void {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes );
 }
 ngOnInit() : void {
      this.getHeroes();
    }
  }


