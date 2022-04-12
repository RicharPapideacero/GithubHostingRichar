import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private servicioPokemon: PokemonService) { }

    /* @Output() onPokemonAgregado = new EventEmitter<Pokemon>(); */

  nuevo:Pokemon ={
    nombre:"",
    pc:0
  }

  agregar( ){
    /* this.onPokemonAgregado.emit(this.nuevo) */
    this.servicioPokemon.agregarPokemon(this.nuevo);
      this.nuevo={
      nombre: "",
      pc:0
      }
  }
}
