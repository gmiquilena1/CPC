import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ProcesoComponent } from './proceso/proceso.component';
import { TablaProcesosComponent } from './tabla-procesos/tabla-procesos.component';
import { ProductoComponent } from './producto/producto.component';
import { CentroCostoComponent } from './centro-costo/centro-costo.component';
import { TablaCentrosCostosComponent } from './tabla-centros-costos/tabla-centros-costos.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administracion'
    },
    children: [
      {
        path: 'proceso',
        component: ProcesoComponent,
        data: {
          title: 'Proceso'
        }
      },
      {
        path: 'tabla-procesos',
        component: TablaProcesosComponent,
        data: {
          title: 'Tabla Procesos'
        }
      },
      {
        path: 'producto',
        component: ProductoComponent,
        data: {
          title: 'Producto'
        }
      },
      {
        path: 'detalle-producto/:id',
        component: ProductoComponent,
        data: {
          title: 'Detalle de Producto'
        }
      },
      {
        path: 'tabla-productos',
        component: TablaProductosComponent,
        data: {
          title: 'Tabla Productos'
        }
      },
      {
        path: 'ccosto',
        component: CentroCostoComponent,
        data: {
          title: 'Centro de Costo'
        }
      },
      {
        path: 'tabla-ccostos',
        component: TablaCentrosCostosComponent,
        data: {
          title: 'Tabla Centros de Costos'
        }
      },
      {
        path: 'carga-masiva',
        component: CargaMasivaComponent,
        data: {
          title: 'Carga Masiva'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule {}