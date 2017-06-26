import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { AdministracionRoutingModule } from './administracion.routing';

// PrimeNG
import {DataTableModule,SharedModule,CalendarModule,TreeTableModule,
        TreeModule,ButtonModule,InputTextModule,DropdownModule,SpinnerModule,
        PanelModule,OverlayPanelModule,FileUploadModule,
        ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Directives
import { LockInputDirective } from '../../helpers';

//Components
import { ProcesoComponent } from './proceso/proceso.component';
import { TablaProcesosComponent } from './tabla-procesos/tabla-procesos.component';
import { ProductoComponent } from './producto/producto.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { TablaCentrosCostosComponent } from './tabla-centros-costos/tabla-centros-costos.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { CargaConceptosGastosComponent } from './carga-masiva/carga-conceptos-gastos/carga-conceptos-gastos.component';
import { CargaHorasCcostosComponent } from './carga-masiva/carga-horas-ccostos/carga-horas-ccostos.component';
import { CargaMateriasPrimasComponent } from './carga-masiva/carga-materias-primas/carga-materias-primas.component';

@NgModule({
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AdministracionRoutingModule,
      DataTableModule,
      SharedModule,
      CalendarModule,
      TreeTableModule,
      TreeModule,
      ButtonModule,
      InputTextModule,
      DropdownModule,
      SpinnerModule,
      TabsModule,
      PanelModule,
      OverlayPanelModule,
      FileUploadModule,
      ConfirmDialogModule      
  ],
  declarations: [
  ProcesoComponent,
  TablaProcesosComponent,
  ProductoComponent,
  CentroCostoComponent,
  TablaCentrosCostosComponent,
  TablaProductosComponent,
  LockInputDirective,
  CargaMasivaComponent,
  CargaConceptosGastosComponent,
  CargaHorasCcostosComponent,
  CargaMateriasPrimasComponent],
  providers:[ConfirmationService]
})
export class AdministracionModule { }