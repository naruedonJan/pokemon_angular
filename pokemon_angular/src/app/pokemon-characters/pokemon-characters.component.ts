import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-characters',
  templateUrl: './pokemon-characters.component.html',
  styleUrls: ['./pokemon-characters.component.css']
})
export class PokemonCharactersComponent implements OnInit {
  data_char : any;
  pokemon_name : any = [];
  next_api : any;
  pokemon_count : any;
  // constructor() { }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://pokeapi.co/api/v2/pokemon"). subscribe( data => {
      console.log(data)

      this.data_char = data;
      this.pokemon_count = this.data_char.count/20;
      for (let index = 0; index < 20; index++) {
        this.pokemon_name.push(this.data_char.results[index]['name'])
      }
      this.next_api = this.data_char.next;
    })
  }
}
