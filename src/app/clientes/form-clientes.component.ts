import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import {ClienteService} from './cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html'
})
export class FormClientesComponent implements OnInit {
 cliente:Cliente = new Cliente()
 titulo:string ="Crear cliente";
  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

cargarCliente():void{
this.activateRoute.params.subscribe(params =>{
  let id = params['id']
  if(id){
    this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente = cliente)
  }
})
}

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente => 
     { this.router.navigate(['/clientes'])
    swal('Nuevo cliente',`Cliente ${cliente.nombre} creado con éxito!`,'success')    
    }
    );
  }
  update():void{
    this.clienteService.update(this.cliente).subscribe(cliente =>{
      this.router.navigate(['/clientes'])
      swal('Cliente actualizado',`Cliente ${cliente.nombre} actualizado con éxito`,'success')
    })
  }
}
