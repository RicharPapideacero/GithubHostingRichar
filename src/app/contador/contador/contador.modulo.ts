import { ContadorComponent } from "./contador.component";
import { NgModule } from "@angular/core";
import { CalculadoraComponent } from "../calculadora/calculadora.component";
@NgModule({
    declarations:[
        ContadorComponent,
        CalculadoraComponent
    ],
    exports:[
        ContadorComponent,
        CalculadoraComponent
    ]
})
export class ContadorModule{}