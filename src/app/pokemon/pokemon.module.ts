import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './Lista/Lista.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    MainComponent,
    PokemonComponent,
    ListaComponent,
    AgregarComponent
  ],
  exports:[
    MainComponent,
    PokemonComponent,
    ListaComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
