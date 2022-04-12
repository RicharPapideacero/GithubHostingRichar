import { Component } from "@angular/core";

@Component({
selector:"app-contador",
templateUrl:"./contador.component.html"
})
export class ContadorComponent{
titulo: string ="Contador app";
contador: number =0;
base: number =10;
agregar(incremento: number){
    this.contador+=incremento;
}
disminuir(decremento: number){
    this.contador-=decremento;
}
}