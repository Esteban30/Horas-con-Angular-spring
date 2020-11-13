import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[]; 
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
     this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
     );
  }
 delete(cliente: Cliente): void{
  swal({
    title: '¿Está seguro?',
    text: `¿Desea borrar al cliente ${cliente.nombre} ${cliente.apellido}?`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrarlo',
    cancelButtonText: 'No, Cancelar'
  }).then((result) => {
    if (result.value) {
 
      this.clienteService.delete(cliente.id).subscribe( response => {
            this.clientes = this.clientes.filter(clie => clie !== cliente);
            swal('Borrado!',`Cliente ${cliente.nombre} eliminado con éxito`,'success');
       });
 
    }
  });
 }
}
