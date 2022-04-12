import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.modulo';
import { PokemonModule } from './pokemon/pokemon.module';
import { HtmlHandlerComponent } from './html-handler/html-handler.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlHandlerComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    PokemonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
