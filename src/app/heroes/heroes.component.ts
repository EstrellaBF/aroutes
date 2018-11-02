import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HEROES } from '../mock-heroes.ts';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	
	public heroes = HEROES;
	public selectedHero: Hero;
	
  hero: Hero = {
   id: 1,
   name: 'Pollo'
  }

	hero = {
		id:2,
		name: 'esponjoso'
	}

	onSelect(hero: Hero):void{
		console.log(this.selectedHero)
		this.selectedHero = hero;
	}
  constructor() {}

	
  ngOnInit() {
  	console.log(this.selectedHero)
  }

}
