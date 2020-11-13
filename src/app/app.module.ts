import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import {ClienteService} from './clientes/cliente.service';
import {TecnicoService} from './tecnicos/tecnico.service';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FormClientesComponent } from './clientes/form-clientes.component';
import { FormTecnicosComponent } from './tecnicos/form-tecnicos.component';

const routes: Routes =[
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas', component:DirectivaComponent},
  {path:'tecnicos', component:TecnicosComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'clientes/form', component:FormClientesComponent},
  {path:'tecnicos/form',component:FormTecnicosComponent},
  {path:'clientes/form/:id', component:FormClientesComponent},
  {path:'tecnicos/form/:id',component:FormTecnicosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    TecnicosComponent,
    FormClientesComponent,
    FormTecnicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService,TecnicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
