import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html-handler',
  templateUrl: './html-handler.component.html',
  styleUrls: ['./html-handler.component.css']
})
export class HtmlHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Nombre:String='';
  Apellido:String='';
  Edad:Number=0;
  Ciudad:String='';


  @ViewChild('txtCiudad') txtCiudad!:ElementRef<HTMLInputElement>

  guardar(event:KeyboardEvent, nombre:String){
    if(event.key == 'Enter'){
      this.Nombre=nombre;
      console.log(nombre);
    }
  }
  Almacenar(){
    console.log('Hola')
  }

  CalcularEdad(){
    var inputelem =<HTMLInputElement>document.getElementById("txtEdad");
    console.log(document.getElementById('txtEdad'));
    console.log(inputelem.value);
    inputelem.value='';
  }

  DarCiudad(){
    console.log(this.txtCiudad.nativeElement.value);
    this.txtCiudad.nativeElement.value=''
  }

}
