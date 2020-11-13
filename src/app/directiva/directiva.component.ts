import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent  {

  ListaCurso:string[] = ['TypeScript','JavaScript','Java SE','C#','PHP'];
  habilitar:boolean = true;
  constructor() { }
  imprimir(){
    //console.log('boton 1');
    this.habilitar = !this.habilitar
  }
  
}
