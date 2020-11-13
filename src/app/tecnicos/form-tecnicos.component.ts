import { Component, OnInit } from '@angular/core';
import {Tecnico} from './tecnico';
import {TecnicoService} from './tecnico.service';
import {Router,ActivatedRoute}from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-tecnicos',
  templateUrl: './form-tecnicos.component.html'
})
export class FormTecnicosComponent implements OnInit {
  tecnico:Tecnico = new Tecnico()
  titulo: string = "Crear Técnico"

  constructor(private tecnicoService:TecnicoService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTecnico()
  }

cargarTecnico():void{
this.activateRoute.params.subscribe(params=>{
  let id = params['id']
  if(id){
    this.tecnicoService.getTecnico(id).subscribe((tecnico)=>this.tecnico = tecnico)
  }
})
}

  public create(): void{
    this.tecnicoService.create(this.tecnico).subscribe(
      tecnico =>{ this.router.navigate(['/tecnicos'])
        swal('Nuevo técnico',`Técnico ${tecnico.nombre} creado con éxito!`,'success') 
      }
    )
  }
  update():void{
    this.tecnicoService.update(this.tecnico).subscribe(tecnico=>{
      this.router.navigate(['/tecnicos'])
      swal('Técnico Actualizado',`Técnico ${tecnico.nombre} actualizado con éxito`,'success')
    })
  }
}
