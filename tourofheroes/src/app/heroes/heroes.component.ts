import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroList } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    
  heroes = heroList;
  selectedHero : Hero;
    
  constructor(  ) {
  
  }

  ngOnInit() {
  }
    
    selectHero(hero){
        this.selectedHero = hero;
    }

}
