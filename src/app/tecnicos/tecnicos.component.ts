import { Component, OnInit } from '@angular/core';
import {Tecnico} from './tecnico';
import { TecnicoService } from './tecnico.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html'
})
export class TecnicosComponent implements OnInit {

  tecnicos:Tecnico[];
  constructor(private tecnicoService:TecnicoService) { }

  ngOnInit(): void {
     this.tecnicoService.getTecnicos().subscribe(
       tecnicos => this.tecnicos = tecnicos
     );
  }
delete(tecnico:Tecnico):void{
  swal({
    title: '¿Está seguro?',
    text: `¿Desea borrar al cliente ${tecnico.nombre} ${tecnico.apellido}?`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrarlo'
  }).then((result) => {
    if (result.value) {
 
      this.tecnicoService.delete(tecnico.id).subscribe( response => {
            this.tecnicos = this.tecnicos.filter(clie => clie !== tecnico);
            swal('Borrado!',`Técnico ${tecnico.nombre} eliminado con éxito`,'success');
       });
 
    }
  });
}
}
