import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { MaestrosRoutingModule } from './maestros.routing';

// PrimeNG
import {DataTableModule,SharedModule,CalendarModule,ButtonModule,
        InputTextModule,DropdownModule,SpinnerModule} from 'primeng/primeng';

//Components
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { UnidadesMedidaComponent } from './unidades-medida/unidades-medida.component';

@NgModule({
  imports: [
      FormsModule,
      CommonModule,
      MaestrosRoutingModule,
      DataTableModule,
      SharedModule,
      CalendarModule,
      ButtonModule,
      InputTextModule,
      DropdownModule,
      SpinnerModule
  ],
  declarations: [TipoProductoComponent, UnidadesMedidaComponent]
})
export class MaestrosModule { }