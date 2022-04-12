import { Component, Input } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from '../pokemon.service';

@Component({
    selector:"app-Lista",
    templateUrl:"Lista.component.html"
})
export class ListaComponent{
    constructor(private servicioPokemon: PokemonService){}
    get listaPokemon(){
        return this.servicioPokemon.obtenerLista;
        }
    /* @Input() listaPokemon: Pokemon[]=[];    */ 
}