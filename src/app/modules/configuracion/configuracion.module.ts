import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { ConfiguracionRoutingModule } from './configuracion.routing';

//primeng
import { MessagesModule,DropdownModule } from 'primeng/primeng';

//component
import { EmpresaComponent } from './empresa/empresa.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ConfiguracionRoutingModule,    
    DropdownModule,
    MessagesModule
  ],
  declarations: [EmpresaComponent, UsuariosComponent]
})
export class ConfiguracionModule { }
