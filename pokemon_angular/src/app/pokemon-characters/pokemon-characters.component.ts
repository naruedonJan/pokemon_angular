import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-characters',
  templateUrl: './pokemon-characters.component.html',
  styleUrls: ['./pokemon-characters.component.css']
})
export class PokemonCharactersComponent implements OnInit {

  constructor( private http:HttpClient , private router:Router ) { }

  ngOnInit(): void {
  }

  getPokemoncharactersAPI(){
    this.http.get("https://pokeapi.co/api/v2/pokemon/bulbasaur"). subscribe( data => {
      console.log(data)
    })
  }
}
